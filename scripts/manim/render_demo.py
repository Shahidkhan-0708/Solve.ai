"""Render the reviewed recursion demo once; the app serves the finished assets."""
import json
import shutil
from pathlib import Path

import av
from manim import (
    Scene, VGroup, Text, RoundedRectangle, Arrow, FadeIn, FadeOut,
    Transform, Create, Indicate, DOWN, RIGHT, tempconfig,
)

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "public" / "lessons" / "recursion-v1"
INK = "#23352D"
GREEN = "#377B55"
MUTED = "#617063"
PAPER = "#F7F8F5"
MINT = "#EAF1E7"


def label(value, size=34, color=INK):
    return Text(value, font="Arial", font_size=size, color=color)


def card(value, width=4.6, color=INK):
    box = RoundedRectangle(width=width, height=0.82, corner_radius=0.18,
                           stroke_color="#CCD9C8", stroke_width=2,
                           fill_color=MINT, fill_opacity=1)
    text = label(value, 42, color)
    if text.width > width - 0.35:
        text.scale_to_fit_width(width - 0.35)
    return VGroup(box, text)


class BaseCase(Scene):
    def construct(self):
        self.next_section("check")
        title = label("The stopping rule", 40).move_to([0, 2.8, 0])
        call = card("factorial(1)").move_to([0, 1.1, 0])
        options = VGroup(card("n = 0", 2.6), card("n = 1", 2.6)).arrange(RIGHT, buff=0.5).move_to([0, -0.6, 0])
        self.play(FadeIn(title), FadeIn(call, shift=DOWN * 0.15))
        self.play(FadeIn(options))
        self.play(Indicate(options[1], color=GREEN, scale_factor=1.06))
        self.wait(0.5)

        self.next_section("return")
        result = card("return 1", color=GREEN).move_to(call)
        note = label("No smaller call needed", 30, MUTED).move_to([0, -2.1, 0])
        self.play(Transform(call, result), FadeIn(note))
        self.wait(0.8)

        self.next_section("otherwise")
        self.play(FadeOut(options), FadeOut(note))
        self.play(Transform(title, label("A bigger input needs a smaller call", 36).move_to(title)),
                  Transform(call, card("factorial(4)").move_to([0, 1.1, 0])))
        parts = VGroup(label("4 ×", 45), card("factorial(3)", 3.6, GREEN)).arrange(RIGHT, buff=0.3).move_to([0, -0.7, 0])
        arrow = Arrow(call.get_bottom(), parts.get_top(), color=GREEN, buff=0.2)
        self.play(Create(arrow), FadeIn(parts, shift=DOWN * 0.2))
        self.wait(0.8)


class SmallerCalls(Scene):
    def construct(self):
        self.next_section("start")
        title = label("Start with one problem", 40).move_to([0, 3, 0])
        call = card("factorial(4)").move_to([0, 0, 0])
        self.play(FadeIn(title), FadeIn(call, shift=DOWN * 0.15))
        self.wait(0.6)

        self.next_section("shrink")
        self.play(Transform(title, label("Each call subtracts one", 40).move_to(title)),
                  call.animate.move_to([-1.4, 1.7, 0]))
        cards = [call]
        arrows = []
        for i, n in enumerate([3, 2, 1], start=1):
            next_call = card(f"factorial({n})", color=GREEN if n == 1 else INK).move_to([-1.4, 1.7 - i * 1.35, 0])
            arrow = Arrow(cards[-1].get_bottom(), next_call.get_top(), buff=0.08, color=MUTED, stroke_width=3)
            self.play(Create(arrow), FadeIn(next_call, shift=DOWN * 0.15), run_time=0.65)
            cards.append(next_call)
            arrows.append(arrow)
        stop = label("STOP", 28, GREEN).next_to(cards[-1], RIGHT, buff=0.4)
        self.play(FadeIn(stop))
        self.wait(0.6)

        self.next_section("count")
        self.play(Transform(title, label("Count the arrows, not the boxes", 36).move_to(title)))
        for i, arrow in enumerate(arrows, start=1):
            number = label(str(i), 30, GREEN).next_to(arrow, RIGHT, buff=0.25)
            self.play(arrow.animate.set_color(GREEN), FadeIn(number), run_time=0.5)
        total = label("3 recursive calls", 30, GREEN).move_to([3.2, 0.7, 0])
        self.play(FadeIn(total))
        self.wait(0.8)


class ReturningResults(Scene):
    def construct(self):
        cards = [card(f"factorial({n})").move_to([-2.1, 1.8 - i * 1.35, 0]) for i, n in enumerate([4, 3, 2, 1])]
        title = label("Begin at the base case", 40).move_to([0, 3, 0])
        self.add(title, *cards)
        for i, (n, result) in enumerate([(1, 1), (2, 2), (3, 6), (4, 24)]):
            self.next_section(f"return-{n}")
            active = cards[4 - n]
            value = label("return 1" if n == 1 else f"{n} × {result // n} = {result}", 38, GREEN).move_to([2.7, active.get_y(), 0])
            self.play(Transform(active, card(f"factorial({n})", color=GREEN).move_to(active)), FadeIn(value), run_time=0.9)
            if n > 1:
                arrow = Arrow(cards[5 - n].get_right() + RIGHT * 0.2, active.get_right() + RIGHT * 0.2,
                              buff=0.12, color=GREEN, stroke_width=3)
                self.play(Create(arrow), run_time=0.6)
            self.play(Transform(title, label("The answer travels back up" if n < 4 else "The whole problem is solved", 38).move_to(title)))
            self.wait(0.7)


def render():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    manifest = []
    for concept, scene_class in enumerate([BaseCase, SmallerCalls, ReturningResults]):
        with tempconfig({"media_dir": str(ROOT / "tmp" / "manim-media"),
                         "pixel_width": 1200, "pixel_height": 800, "frame_rate": 30,
                         "frame_width": 12, "frame_height": 8,
                         "background_color": PAPER, "save_sections": True,
                         "verbosity": "WARNING", "progress_bar": "none"}):
            scene = scene_class()
            scene.render()
            section_dir = Path(scene.renderer.file_writer.sections_output_dir)
        sections = json.loads((section_dir / f"{scene_class.__name__}.json").read_text())
        clips = []
        for step, section in enumerate(sections):
            stem = f"concept-{concept}-step-{step}"
            source = section_dir / section["video"]
            destination = OUTPUT / f"{stem}.mp4"
            shutil.copyfile(source, destination)
            with av.open(str(destination)) as container:
                last = None
                count = 0
                for frame in container.decode(video=0):
                    last = frame
                    count += 1
                assert count > 0 and last is not None, "Empty animation"
                assert last.width == 1200 and last.height == 800, "Unexpected render dimensions"
                last.to_image().save(OUTPUT / f"{stem}.png")
            clips.append({"video": f"/lessons/recursion-v1/{stem}.mp4",
                          "still": f"/lessons/recursion-v1/{stem}.png"})
        assert len(clips) == [3, 3, 4][concept], "Animation must match reviewed lesson steps"
        manifest.append(clips)
    (ROOT / "app" / "demo-animation.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Rendered {sum(map(len, manifest))} checked clips to {OUTPUT}")


if __name__ == "__main__":
    render()
