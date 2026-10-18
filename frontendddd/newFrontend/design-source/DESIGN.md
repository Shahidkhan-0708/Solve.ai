---
name: Monochrome Cognition
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: 4rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.0625rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The design system is constructed around purposeful neutrality, quiet intelligence, and profound focus. Serving as an AI personalized learning mentor, the interface steps back to elevate the user's thoughts and learning materials. It avoids extraneous decorative artifacts, skeuomorphic noise, saturated gradients, and generic AI sparkles.

The aesthetic blends hyper-refined minimalism with the disciplined editorial layout of modern high-craft productivity tools (such as Linear and Notion). The emotional tone is calm, academic, trustworthy, and razor-sharp. Visual hierarchy is achieved entirely through typographic contrast, precise spatial rhythm, and delicate structural boundaries rather than color.

## Colors

The palette is strictly achromatic and intentionally restrained:

- **Primary Action & Text (`#111111`)**: Deep charcoal-black for authoritative readability, high-contrast actions, and structural anchors.
- **Secondary Text (`#616161`)**: Mid-tone neutral providing accessible contrast ratios for metadata, captions, timestamps, and secondary descriptions without competing for focal priority.
- **Borders & Dividers (`#E5E5E5`)**: Crisp hairline borders that segment space, define input boundaries, and frame modular content without visual weight.
- **Secondary Surface (`#F7F7F7`)**: Subtle off-white container fill used to segment interactive cards, code blocks, sidebars, and nested mentor responses from the primary canvas.
- **Canvas Base (`#FFFFFF`)**: Pure white negative space engineered to maximize readability and promote cognitive focus during prolonged study sessions.

## Typography

Inter handles all interface copy and content hierarchy, prioritizing optical clarity and geometric proportion. 

- **Weight Discipline**: Restrict font weights to Regular (400), Medium (500), and Semi-Bold (600). Never use Bold or Extra-Bold; visual importance is commanded through font sizing and contrast against secondary tones.
- **Reading Rhythm**: Long-form explanations and AI responses adopt `body-lg` with generous line-height (`1.75rem`) to maintain calm reading pacing and prevent eye fatigue.
- **Code & Syntax**: JetBrains Mono is assigned for mathematical formulas, logic proofs, and code snippets, harmonizing with Inter's metric vertical alignment.

## Layout & Spacing

The structural layout adheres strictly to an 8px base rhythm (with 4px half-steps for micro-alignments such as icon-to-label gaps and compact badges).

- **Grid Architecture**: 
  - Desktop (>1024px): 12-column layout with 24px gutters and dynamic margins capping the primary reading workspace at 768px for optimal cognitive absorption.
  - Tablet (640px - 1023px): 8-column layout with 16px gutters and 32px canvas margins.
  - Mobile (<640px): 4-column layout with 16px gutters and 16px outer margins.
- **Vertical Rhythm**: Related elements (such as an input label and its text field) sit 8px (`space-sm`) apart; distinct component sections within cards are spaced by 16px (`space-md`) or 24px (`space-lg`). Macro-sections within study modules separate by 48px (`space-2xl`).

## Elevation & Depth

This system intentionally rejects skeuomorphic shadows and multi-layered ambient blurs. Depth is produced strictly via surface tone tiers and crisp hairlines:

- **Surface Tiers**:
  - `Level 0 (Canvas)`: `#FFFFFF`
  - `Level 1 (Sub-containers, Sidebars, Well cards)`: `#F7F7F7` with optional 1px hairline border in `#E5E5E5`.
  - `Level 2 (Modals, Overlays, Active Popovers)`: `#FFFFFF` floating above an ultra-low opacity veil (`rgba(17, 17, 17, 0.12)`) and contained by a 1px border (`#E5E5E5`).
- **Subtle Focus Lift**: In high-density interfaces, active floating components or active contextual tooltips may utilize a single micro-shadow: `0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)`. All other depth must remain 2D and architectural.

## Shapes

The design uses a 12px (0.75rem) base corner curvature for primary interactive elements, striking an intentional balance between clinical precision and approachable warmth:

- **Buttons, Inputs, and Prompt Bars**: 12px border radius.
- **Cards and Outer Containers**: 16px (`rounded-lg`) border radius for balanced nested hierarchy.
- **Pills and Badges**: Fully rounded (`9999px`) for compact status metadata and taxonomy tags.
- **Checkboxes & Segment Toggles**: 6px for compact control elements.

## Components

### Buttons
- **Primary**: Background `#111111`, text `#FFFFFF`, border-radius 12px, font-weight 500, padding `10px 18px`. Hover: `#2A2A2A`. Active: `#000000`.
- **Secondary / Outline**: Background transparent, border 1px solid `#E5E5E5`, text `#111111`. Hover: background `#F7F7F7`, border `#D4D4D4`.
- **Ghost**: Background transparent, text `#616161`. Hover: background `#F7F7F7`, text `#111111`.

### Prompt Input & Field
- Deeply anchored learning query box: 1px border `#E5E5E5`, background `#FFFFFF`, border-radius 12px, padding 14px 16px.
- Focus state: Border color transitions directly to `#111111` with no outer glow or colored focus rings. Placeholder text: `#616161`.

### Cards & Mentor Modules
- Background `#FFFFFF` or `#F7F7F7`, framed by a single 1px solid `#E5E5E5` hairline.
- Padding: 20px desktop, 16px mobile.
- Section headers within modules use `headline-sm` with a bottom divider `#E5E5E5`.

### Chips & Tags
- Height: 26px.
- Pill shape (`rounded-full`), background `#F7F7F7`, border 1px solid `#E5E5E5`, text `#616161`, typography `label-sm`.
- Active / Filtered state: Background `#111111`, border `#111111`, text `#FFFFFF`.

### Checkboxes & Radio Controls
- Checkbox: 18px x 18px, border 1.5px solid `#D4D4D4`, border-radius 4px. Checked state: `#111111` fill with `#FFFFFF` checkmark icon.
- Radio: 18px x 18px circle, border 1.5px solid `#D4D4D4`. Checked: `#111111` outer border with a centered 8px solid `#111111` dot.

### Lists & Interaction Rows
- Hairline dividers `#E5E5E5` separating curriculum items.
- Row padding: 12px 0px. Hover states on interactive list items softly tint the background with `#F7F7F7` across a full 8px radius hit area.