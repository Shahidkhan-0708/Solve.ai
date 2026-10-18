"""Render a validated storyboard using fixed visual primitives, never generated code."""
import json
import sys
import textwrap
from pathlib import Path

import av
from manim import (
    Scene, VGroup, Text, RoundedRectangle, Rectangle, Dot, Arrow, CurvedArrow, PI,
    FadeIn, FadeOut, Transform, TransformFromCopy, Create, Indicate,
    MoveAlongPath, tempconfig, RIGHT, LEFT, UP, DOWN,
)

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))
from backend.animation import AnimationPlan

INK = "#161616"
ACCENT = "#377B55"
PALETTE = ["#377B55", "#526FA8", "#AA7242", "#795DA0", "#3A858C", "#AB586A"]


def text(value, size=36, width=4.3):
    result = Text("\n".join(textwrap.wrap(value, width=23)), font="DejaVu Sans", font_size=size, color=INK, line_spacing=0.8)
    if result.width > width:
        result.scale_to_fit_width(width)
    return result


def visual(obj, color):
    box = RoundedRectangle(width=4.7, height=1.5, corner_radius=0.16,
                           stroke_color=color, stroke_width=2,
                           fill_color="#FFFFFF", fill_opacity=1)
    name = text(obj.label, size=38 if obj.kind == "card" else 29)
    if name.height > (1.1 if obj.kind == "card" else 0.5):
        name.scale_to_fit_height(1.1 if obj.kind == "card" else 0.5)
    if obj.kind == "card":
        return VGroup(box, name)
    name.move_to([0, 0.42, 0])
    if obj.kind == "dots":
        tokens = VGroup(*[Dot(radius=0.105, color=color).move_to([(i % 8 - 3.5) * 0.34, -0.16 - i // 8 * 0.32, 0]) for i in range(obj.quantity)])
        number = Text(str(obj.quantity), font="DejaVu Sans", font_size=26, color=color).move_to([1.8, -0.25, 0])
        return VGroup(box, name, tokens, number)
    baseline = Rectangle(width=3.5, height=0.25, stroke_width=0, fill_color="#E8E8E8", fill_opacity=1).move_to([0, -0.24, 0])
    bar = Rectangle(width=max(0.03, 3.5 * obj.quantity / 16), height=0.25, stroke_width=0, fill_color=color, fill_opacity=int(obj.quantity > 0)).align_to(baseline, LEFT).set_y(-0.24)
    number = Text(str(obj.quantity), font="DejaVu Sans", font_size=25, color=color).move_to([2, -0.24, 0])
    return VGroup(box, name, baseline, bar, number)


def positions(count):
    if count <= 3:
        return [[0, (count - 1) * 0.9 - i * 1.8, 0] for i in range(count)]
    rows = (count + 1) // 2
    return [[-2.6 if i % 2 == 0 else 2.6, (rows - 1) * 0.9 - i // 2 * 1.8, 0] for i in range(count)]


class ExplainedConcept(Scene):
    def __init__(self, plan, **kwargs):
        self.plan = plan
        super().__init__(**kwargs)

    def construct(self):
        current = {}
        colors = {}
        links = VGroup()
        heading = None
        for index, step in enumerate(self.plan.steps):
            self.next_section(f"step-{index}")
            next_heading = text(step.title, 40, 10.5).move_to([0, 3.1, 0])
            if next_heading.height > 0.8:
                next_heading.scale_to_fit_height(0.8)
            if heading is None:
                heading = next_heading
                self.play(FadeIn(heading), run_time=0.5)
            else:
                self.play(Transform(heading, next_heading), FadeOut(links), run_time=0.45)
            targets = {}
            for obj, point in zip(step.objects, positions(len(step.objects))):
                colors.setdefault(obj.id, PALETTE[len(colors) % len(PALETTE)])
                target = visual(obj, colors[obj.id]).move_to(point)
                if step.focus and obj.id not in step.focus:
                    target.set_opacity(0.72)
                targets[obj.id] = target
            removed = [current[key] for key in current if key not in targets]
            animations = [Transform(current[key], target) for key, target in targets.items() if key in current]
            for key, target in targets.items():
                if key in current:
                    continue
                if step.operation in {"split", "combine"} and current:
                    animations.append(TransformFromCopy(VGroup(*current.values()), target))
                else:
                    animations.append(FadeIn(target, shift=UP * 0.12))
            animations.extend(FadeOut(obj) for obj in removed)
            self.play(*animations, run_time=1.8)
            current = {key: current[key] if key in current else target for key, target in targets.items()}
            links = VGroup()
            for edge in step.connections:
                start, end = current[edge.from_id], current[edge.to_id]
                delta = end.get_center() - start.get_center()
                if abs(delta[0]) < 0.1 and abs(delta[1]) > 2.5:
                    # Return paths go around intervening cards so they cannot obscure the explanation.
                    side = -1 if start.get_center()[0] < 0 else 1
                    a, b = (start.get_left(), end.get_left()) if side < 0 else (start.get_right(), end.get_right())
                    arrow = CurvedArrow(a, b, angle=PI / 2 * side * (1 if delta[1] > 0 else -1),
                                        color=ACCENT, stroke_width=3, tip_length=0.13)
                elif abs(delta[0]) > abs(delta[1]):
                    a, b = (start.get_right(), end.get_left()) if delta[0] > 0 else (start.get_left(), end.get_right())
                    arrow = Arrow(a, b, buff=0.04, color=ACCENT, stroke_width=3, max_tip_length_to_length_ratio=0.25)
                else:
                    a, b = (start.get_top(), end.get_bottom()) if delta[1] > 0 else (start.get_bottom(), end.get_top())
                    arrow = Arrow(a, b, buff=0.04, color=ACCENT, stroke_width=3, max_tip_length_to_length_ratio=0.25)
                links.add(arrow)
            if len(links):
                self.play(*[Create(arrow) for arrow in links], run_time=0.85)
                if step.operation == "connect":
                    signal = Dot(radius=0.06, color=ACCENT)
                    self.add(signal)
                    self.play(MoveAlongPath(signal, links[0]), run_time=0.85)
                    self.remove(signal)
            if step.focus:
                self.play(*[Indicate(current[key], color=ACCENT, scale_factor=1.035) for key in step.focus], run_time=0.85)
            self.wait(2.0)


def render(plan_path, output):
    plan = AnimationPlan.model_validate_json(plan_path.read_text(encoding="utf-8"))
    output.mkdir(parents=True, exist_ok=True)
    with tempconfig({"renderer": "cairo", "media_dir": str(output / "render"), "pixel_width": 1200, "pixel_height": 800,
                     "frame_width": 12, "frame_height": 8, "frame_rate": 30,
                     "background_color": "#F7F8F5", "save_sections": True,
                     "verbosity": "WARNING", "progress_bar": "none"}):
        scene = ExplainedConcept(plan)
        scene.render()
        sections_dir = Path(scene.renderer.file_writer.sections_output_dir)
    sections = json.loads((sections_dir / "ExplainedConcept.json").read_text(encoding="utf-8"))
    assert len(sections) == len(plan.steps), "Incomplete storyboard render"
    manifest = []
    for index, (section, step) in enumerate(zip(sections, plan.steps)):
        movie = output / f"step-{index}.mp4"
        movie.write_bytes((sections_dir / section["video"]).read_bytes())
        with av.open(str(movie)) as container:
            last = None
            frames = 0
            for frame in container.decode(video=0):
                last = frame
                frames += 1
            assert last is not None and frames >= 15, "Empty animation clip"
            assert last.width == 1200 and last.height == 800, "Unexpected video dimensions"
            last.to_image().save(output / f"step-{index}.png")
        manifest.append({"video": movie.name, "still": f"step-{index}.png", "title": step.title,
                         "explanation": step.explanation, "references": [ref.model_dump() for ref in step.references]})
    temporary = output / "manifest.tmp"
    temporary.write_text(json.dumps(manifest), encoding="utf-8")
    temporary.replace(output / "manifest.json")


if __name__ == "__main__":
    render(Path(sys.argv[1]), Path(sys.argv[2]))
