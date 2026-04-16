# Design System: The Technical Monolith

This design system is a high-end, editorial framework tailored for a modern frontend developer. It moves away from the "generic template" by leaning into a "Technical Monolith" aesthetic—balancing the raw, structural nature of code with the refined polish of a luxury digital agency. By pairing high-contrast typography with a "No-Line" philosophy, we create an interface that feels both engineered and effortless.

## 1. Creative North Star: The Technical Monolith
The Creative North Star for this system is **"The Technical Monolith."** 

This direction treats the portfolio as a digital sculpture. We reject the standard "boxed-in" web grid in favor of expansive white space, intentional asymmetry, and aggressive typographic scales. The use of a monospace typeface for headers isn't just a nod to coding; it's a structural choice that provides a rhythmic, mechanical contrast to the fluid, high-legibility sans-serif body text.

**Key Principles:**
*   **Void as Volume:** White space is not "empty"—it is a deliberate design element used to group content.
*   **Mechanical Precision:** Monospace headers should feel "typeset" like a blueprint.
*   **Violent Accents:** The vibrant red (`primary`) is used sparingly but with high intensity to draw the eye to critical actions.

---

## 2. Colors & Surface Philosophy

The palette is rooted in absolute clarity. We utilize a high-contrast foundation with a singular, high-energy chromatic "spark."

### The "No-Line" Rule
Sectioning must never be achieved through 1px solid borders. Boundaries are defined strictly through **Surface Hierarchy**:
*   Use `surface` (#f9f9f9) for the primary canvas.
*   Use `surface_container_lowest` (#ffffff) for elevated cards to create a "ghostly" lift.
*   Use `surface_container` (#eeeeee) for secondary sections (like a footer or code block background).

### Glass & Texture
To prevent a "flat" or "cheap" feel, the floating navigation bar must utilize **Glassmorphism**.
*   **Token:** `surface_container_low` at 70% opacity.
*   **Effect:** `backdrop-blur: 20px`. This allows Gerard Ethan Francis Rivera’s work to bleed through the nav as the user scrolls, creating a sense of depth and integration.

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Accent** | `primary` | #bc0100 | Buttons, active states, highlights. |
| **Contrast** | `on_surface` | #1a1c1c | Primary text, titles. |
| **Canvas** | `surface` | #f9f9f9 | Main page background. |
| **Layer 1** | `surface_container_low` | #f3f3f4 | Floating elements/Nav. |
| **Layer 2** | `surface_container_high` | #e8e8e8 | Inset elements/Code snippets. |

---

## 3. Typography: The Editorial Engine

This system uses a "Dual-Tone" typographic approach. `Space Grotesk` (Monospace-leaning) handles the structural identity, while `Inter` (Sans-Serif) handles the narrative.

*   **Display & Headline (`Space Grotesk`):** Used for headers and navigation. It should feel rigid, technical, and authoritative. Use `letter-spacing: -0.02em` for large headers to tighten the "mechanical" look.
*   **Title & Body (`Inter`):** Used for project descriptions and bio. It provides a soft, human contrast to the monospace headers.
*   **Label (`Space Grotesk`):** All-caps metadata (e.g., "PROJECT 01", "YEAR: 2024") should be set in labels to reinforce the "technical blueprint" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are forbidden unless specified for "Ambient Lift."

*   **The Layering Principle:** Depth is achieved by stacking. A card with `surface_container_lowest` (#ffffff) sitting on a `surface` (#f9f9f9) background creates a subtle, natural elevation that feels premium.
*   **Ambient Shadows:** For floating action buttons or the top nav, use a "Cloud Shadow": 
    *   `box-shadow: 0 20px 40px rgba(26, 28, 28, 0.04);`
    *   This mimics natural light rather than a digital effect.
*   **The Ghost Border:** If a boundary is needed for accessibility (e.g., input fields), use `outline_variant` (#ebbbb4) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Navigation Bar
*   **Shape:** Rounded Rectangle (`rounded-xl` / 0.75rem).
*   **Position:** Fixed at `top: 5%`.
*   **Style:** `surface_container_low` with 80% opacity and `backdrop-blur`.
*   **Layout:** Monospace labels (`label-md`) with `primary` (#bc0100) dots for active states.

### Buttons (The "Red Lead")
*   **Primary:** Background: `primary` (#bc0100), Text: `on_primary` (#ffffff). Shape: `rounded-md`.
*   **Interaction:** On hover, shift to `primary_container` (#eb0000).
*   **Tertiary:** No background. `Space Grotesk` text in `primary` with a 2px bottom underline that expands on hover.

### Cards & Projects
*   **Constraint:** Zero borders.
*   **Separation:** Use `surface_container_lowest` for the card body. 
*   **Layout:** Asymmetric. Place the project title (`headline-md`) overlapping the image container slightly to break the "grid" feel.

### Input Fields
*   **Style:** Minimalist underline. No four-sided boxes.
*   **Active State:** Underline transforms from `outline_variant` to `primary` (#bc0100) with a 200ms ease-in-out transition.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme vertical spacing. If you think there is enough space between sections, add 40px more.
*   **Do** use `primary` red for micro-interactions (e.g., a cursor follow effect or a progress bar).
*   **Do** align monospace text to a strict vertical axis to create a "columnar" feel.

### Don't:
*   **Don't** use 1px black borders. It breaks the "Monolith" flow and makes the site look like a wireframe.
*   **Don't** use grey text for body copy. Use `on_surface` (#1a1c1c) for high-contrast readability.
*   **Don't** use rounded corners on everything. Keep `rounded-sm` or `none` for images to maintain a "crisp" and "professional" edge, reserving `rounded-xl` only for the floating nav.

---

## 7. Signature Element: The Red Thread
To unify the portfolio, use a "Red Thread" animation—a 1px height line using the `primary` token that grows as the user scrolls, occasionally "snagging" on monospace headers to highlight Gerard Ethan Francis Rivera's current focus. This reinforces the "Modern, Professional, and Crisp" requirement through intentional motion.