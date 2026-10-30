---
name: OXIFERBA
description: Oxígeno y Ferretería Barrancabermeja. Every page is a verified service tag on a steel workbench.
colors:
  brand-green: "#00b050"
  card-stock: "#0a7a3a"
  card-stock-deep: "#075f2c"
  card-stock-pale: "#e3f4e6"
  paper: "#ffffff"
  paper-tint: "#f1f7f1"
  ink: "#0f1a12"
  ink-soft: "#3c4a40"
  workbench: "#161c18"
  workbench-raised: "#222a25"
  stamp-violet: "#4a2c9e"
  extinguisher-red: "#c4261b"
  safety-yellow: "#f2c230"
  brass-eyelet: "#c9b26a"
  wire-steel: "#c3c9cd"
  lead-seal: "#9aa2a8"
typography:
  display:
    fontFamily: "'Big Shoulders Stencil Display', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(3rem, 6.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "'Big Shoulders Stencil Display', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0"
  title:
    fontFamily: "'Big Shoulders Stencil Display', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1.05
  code:
    fontFamily: "'Big Shoulders Stencil Display', 'Barlow Condensed', sans-serif"
    fontSize: "3.25rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.02em"
  lead:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  field-value:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.35
  label-action:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.05em"
  label-field:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  photo: "3px"
  label: "4px"
  stamp: "6px"
  card-foot: "14px"
  punch: "50%"
spacing:
  unit: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  gutter: "clamp(16px, 3.2vw, 48px)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.label}"
    padding: "12px 22px 12px 16px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label-action}"
    rounded: "{rounded.label}"
    padding: "12px 22px 12px 16px"
    height: "52px"
  button-green:
    backgroundColor: "{colors.card-stock}"
    textColor: "{colors.paper}"
    typography: "{typography.label-action}"
    rounded: "{rounded.label}"
    padding: "12px 22px 12px 16px"
    height: "52px"
  button-green-hover:
    backgroundColor: "{colors.card-stock-deep}"
  button-green-outline:
    backgroundColor: "transparent"
    textColor: "{colors.card-stock}"
    rounded: "{rounded.label}"
    padding: "12px 22px 12px 16px"
    height: "52px"
  button-small:
    padding: "8px 16px 8px 12px"
    height: "44px"
  nav-cell:
    textColor: "{colors.paper}"
    padding: "12px 18px"
  nav-cell-current:
    backgroundColor: "{colors.card-stock-deep}"
    textColor: "{colors.paper}"
  printed-field:
    textColor: "{colors.paper}"
    typography: "{typography.field-value}"
    rounded: "{rounded.label}"
    padding: "10px 16px 14px"
  white-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
  stamp:
    textColor: "{colors.stamp-violet}"
    rounded: "{rounded.stamp}"
    padding: "10px 18px 8px"
  punch-index-cell:
    textColor: "{colors.paper}"
    padding: "16px 18px 18px"
    height: "168px"
  punch-index-cell-service:
    backgroundColor: "{colors.card-stock-deep}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "6px 16px 14px"
  input-field-focus:
    backgroundColor: "{colors.paper-tint}"
---

# Design System: OXIFERBA

## Overview

**Creative North Star: "Tarjeta de servicio"**

Every page is one verified service tag, the green card wired to each recharged extinguisher and serviced cylinder: stamped, punched, signed. The tag is a single sheet of brand-green card stock with chamfered top corners lying on a dark steel workbench; the workbench is the page margin, never a content surface. On the card, information is printed the way an inspection tag prints it: ruled boxes with tiny uppercase field labels, stencil capitals for headings, violet rubber-stamp ink for claims and dates, and a brass eyelet with twisted wire and a lead seal at the top-left corner.

State is expressed by punching. A small ring (the punch cell, "hueco") sits in every navigational cell and every button; when the cell is the current page, the selected line, or the slide on view, the ring is punched through and the dark workbench shows in the hole. Press does the same: the cell drops slightly and the hole opens. Motion is otherwise restrained: one authored moment (the stamp landing on the home hero), press feedback everywhere else.

The world refuses the category default for welding and gas suppliers: dark welder photography with orange buttons above a row of category cards. Density is a working document, not a brochure: phones, address and the full catalog are printed on the card itself.

**Key Characteristics:**
- One green tag per page, on a near-black workbench margin; green owns whole regions.
- Printed fields (ruled boxes, uppercase micro-labels) carry contact data and the catalog.
- Punch cells are the only selected/current indicator; punched equals current.
- Violet stamp ink for claims, dates and the 30-year mark; never for body copy.
- Flat, one-ink linework for all metal hardware (eyelet, wire, seal, staple).
- Stencil display capitals over a plain Barlow body.

## Colors

A one-world palette: card green on a steel-black bench, white printed sheets, and three tightly reserved inks.

### Primary
- **Brand Green** (brand-green): the logo and storefront green. Used only where the brand mark itself speaks (the logo, the underline of the large email address on Contacto). It fails white-text contrast (2.87:1), so it is never a text background.
- **Tag Card Stock** (card-stock): the card itself and every green filled button. Brand green darkened to carry white text at 5.4:1. Also the green ink on white sheets (line codes, link underlines, sheet headings).
- **Deep Card Stock** (card-stock-deep): the pressed/current cell (nav cell, catalog spine row), service cells in the punch index, green-button hover. White on it is 7.8:1.
- **Pale Card Stock** (card-stock-pale): secondary text on the green card (leads, field labels, counts), 4.76:1 on card stock.

### Secondary
- **Stamp Violet** (stamp-violet): rubber-stamp ink. Stamps, text selection, the input caret, and the focus outline of form fields on the white sheet (9.8:1 on white).

### Tertiary
- **Extinguisher Red** (extinguisher-red): the extinguisher product line code, and, as an accessibility adaptation, required-field asterisks, invalid-field labels, error messages and the form error status (5.8:1 on white). Nothing else.
- **Safety Yellow** (safety-yellow): global keyboard focus ring and the skip link. Warnings only otherwise.

### Neutral
- **Workbench** (workbench): page background around the tag, the hole color inside punched cells, the perforation notches, the video and map wells.
- **Raised Workbench** (workbench-raised): empty image wells (slideshow, map before load).
- **Paper** (paper): white printed sheets, the logo label, photo mounts, the primary button; and all text on the green card.
- **Paper Tint** (paper-tint): hover and focus fill on white sheets.
- **Ink** (ink): text on paper (17.8:1).
- **Soft Ink** (ink-soft): secondary text and field labels on paper (9.35:1).
- **Brass Eyelet** (brass-eyelet), **Wire Steel** (wire-steel), **Lead Seal** (lead-seal): hardware fills only, drawn flat.

### Named Rules
**The Reserved Ink Rule.** Red marks the extinguisher line and form required/error states, yellow marks focus and warnings, violet marks stamps and field focus. No reserved ink is used decoratively.

**The Two Greens Rule.** Brand green is the logo's color; card stock is the working surface. White text never sits on brand green.

**The Hole Shows the Bench Rule.** A punched hole is always filled with workbench, because a hole in the card shows what is behind it.

## Typography

**Display Font:** Big Shoulders Stencil Display (with Barlow Condensed, sans-serif), self-hosted, weights 700 and 900.
**Body Font:** Barlow (with system-ui), self-hosted, 400 to 700.
**Label Font:** Barlow Condensed (with Arial Narrow), self-hosted, 500 to 700.

**Character:** Stencil capitals as painted on cylinders and crates, set against a plain, legible grotesque that reads well outdoors on a phone. Condensed uppercase labels are the tag's printed form language.

### Hierarchy
- **Display** (900, clamp(3rem, 6.6vw, 6rem), 0.9): page titles and the footer wordmark; uppercase.
- **Headline** (900, clamp(2.25rem, 4.4vw, 3.75rem), 0.95): section titles; uppercase.
- **Title** (800 declared, clamp(1.5rem, 2.2vw, 1.875rem), 1.05): stub headings, catalog line names, service names; uppercase.
- **Code** (900, 3.25rem; 1.375rem in the spine; 3rem on line sheets): two-letter product line codes (GI, EX, FI, OX, SO, SI, AB, RE, MO).
- **Lead** (400, clamp(1.125rem, 1.4vw, 1.3125rem), 1.55, max 62ch): the paragraph under a display title.
- **Body** (400, 1.0625rem, 1.6; 1rem under 640px): running text; story text 1.1875rem/1.65 at max 66ch.
- **Field value** (600, 1.1875rem, 1.35): the data printed in a field box (phones, address).
- **Action label** (700, 1.125rem, 0.05em, uppercase, condensed): buttons, nav cells, text links.
- **Field label** (600, 0.8125rem, 0.12em, uppercase, condensed): the micro-label above every printed field and form input, slide counters, item counts.

### Named Rules
**The Printed Form Rule.** Uppercase condensed micro-labels label data (a field, a count, a caption). They never float above a heading as decoration.

**The Stencil Is for Names Rule.** The stencil face is for titles, codes and stamps only; anything read as a sentence is Barlow.

## Layout

Everything is measured against an 8px punch unit; component gaps are multiples of it (16, 24, 32px). Horizontal padding inside the card is one fluid gutter, clamp(16px, 3.2vw, 48px). The card sits in a centered frame up to 1360px wide with 72px of workbench above it (room for the eyelet and wire) and 40px below.

Page bodies use a 12-column grid with 24px column gaps: the home hero splits 6 / 6 (text and field box left, mounted slideshow right); inner page headers split 7 / 5 (display title left, lead right); story and contact pages split 7 / 4-5. The catalog uses a 200px sticky code spine beside the stack of line sheets. Sections breathe at clamp(56px, 7vw, 104px) vertically.

Breakpoints: at 1100px the header stacks (logo right, nav cells stretch full width) and the footer fields go full width; at 900px all multi-column splits collapse to one column, the spine becomes a horizontal grid of cells, the tear-off stub stacks; at 640px the punch index becomes two columns, nav cells show short labels under their hole, field boxes go single-column, and a fixed bottom contact bar (Llamar, WhatsApp) appears over the workbench with the safe-area inset respected.

## Elevation & Depth

Depth is physical and shallow: objects lying on objects. The card casts one large soft shadow onto the workbench; paper items (logo label, sheets, photo mounts) cast a short paper shadow onto the card; mounted photos tilt 1.2 to 1.5 degrees. Card stock carries a faint fractal-noise fiber (16% multiply). No layered UI chrome, no glows.

### Shadow Vocabulary
- **Card on bench** (`box-shadow: 0 2px 4px rgba(0,0,0,.35), 0 30px 60px -20px rgba(0,0,0,.6)`): the tag only.
- **Paper on card** (`box-shadow: 0 1px 1px rgba(5,30,14,.18), 0 6px 14px -6px rgba(5,30,14,.35)`): white sheets, logo label, video frame, photo mounts.
- **Button at rest** (`box-shadow: 0 1px 1px rgba(0,0,0,.18), 0 4px 10px -4px rgba(0,0,0,.45)`); lifts on hover to `0 2px 2px rgba(0,0,0,.18), 0 10px 18px -6px rgba(0,0,0,.5)`; flattens on press to `0 1px 1px rgba(0,0,0,.2)`.
- **Punched hole** (`box-shadow: inset 0 2px 3px rgba(0,0,0,.7)`): the inner wall of a punched cell.

### Named Rules
**The Flat Hardware Rule.** Eyelet, wire, lead seal and staple are flat one-ink linework: solid fills with a single 1 to 1.5px ink stroke. No metallic gradients, sheen or bevels.

**The Soft Shadow Rule.** Shadows are soft and directional (objects on a bench). Hard offset shadows do not belong to this world.

## Shapes

The card's top corners are chamfered (clip-path, clamp(28px, 4vw, 56px)) like a die-cut tag; its bottom corners round at 14px. Everything printed on it is nearly square: field boxes, nav strips, buttons and sheets at 4px, photo mounts at 3px, stamps at 6px with a double 4px border. Rules are 1.5px lines (white at 55% on green, ink at 20 to 30% on paper). The perforation line is a 2px dashed rule with two 24px semicircular notches cut from the card edges in workbench color. Holes are perfect circles (16px; 18px in buttons; 12px in the spine and compact nav).

## Components

### Buttons
Tactile tag cells: the press is the signature.
- **Shape:** gently squared (4px), 52px minimum height (44px small), leading punch hole then condensed uppercase label.
- **Primary:** paper fill, ink label, resting paper shadow; used for the main call action on green.
- **Ghost:** transparent with a white 2px border at 80%; hover fills white at 10%.
- **Green:** card-stock fill on paper or in the mobile bar; hover deepens to card-stock-deep. **Green outline:** card-stock 2px border and label on paper; hover fills paper tint.
- **Press:** `transform: scale(.97)` over 160ms `cubic-bezier(0.23, 1, 0.32, 1)`, shadow flattens, and the punch hole opens (see Punch cell). Loading: the hole turns dashed and spins (700ms linear). Disabled: 50% opacity.
- **Hover:** only under `(hover: hover) and (pointer: fine)`. Reduced motion removes the scale; color and shadow changes remain.

### Navigation (perforated strip)
- Four punch cells in one 1.5px-ruled 4px box at the header's right; condensed uppercase labels, 12px 18px padding.
- Current page: cell filled card-stock-deep with its hole punched. Hover (fine pointer): white at 10%.
- Under 640px, cells stack hole above a short label. Footer nav repeats the pages as plain uppercase links.

### Punch Cell ("hueco") (signature)
- A 2px current-color ring. Its inner disc is workbench with an inset shadow, hidden at scale(.5) and opacity 0.
- Punched (current page, current spine line, current slide, `aria-current`) shows the disc at full scale: punched means current or selected.
- On press of any button, nav cell, index cell or slide dot, the hole opens over 120ms with the same ease-out curve.

### Printed Fields ("campos" / "campo")
- A 1.5px ruled 4px box divided into cells by 1.5px rules; each cell is a micro-label (field label style, card-stock-pale on green, soft ink on paper) above a field-value line.
- Carries phones, address, email, history facts and footer contact. Columns adapt (2 on the hero with a full-width address row, 3 in the footer, 1 on phones).

### White Sheet ("hoja")
- A white paper sheet lying on the card: paper fill, ink text, 4px, paper shadow. Rules inside switch to ink at 20 to 30%.
- Holds catalog lines, services, logo grids, principles and the contact form.

### Inputs / Fields
- Form fields are printed fields on a white sheet: label above in micro-label style, borderless input inside a ruled 4px box, value in Barlow 500 1.1875rem.
- **Focus:** the whole field fills paper tint with a 2px stamp-violet inset outline; caret is violet.
- **Error:** field fills a pale red tint, label and message turn extinguisher red, required asterisks are red; the status line reports in red.

### Stamp
- Violet ink in a 4px double border, 6px corners, stencil 900 uppercase with a condensed sub-line, rotated -2.5 to -6 degrees, roughened by the shared SVG ink filter (`#tinta`).
- Carries the site's verbatim claims and the "30 años · desde 1996" mark; sits on photo mounts and sheets.
- **Landing (the one authored moment):** on the home hero only, the stamp lands once: from scale(1.18) and opacity 0 to rest over 340ms with a 450ms delay, ease-out `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion replaces it with a 200ms fade.

### Perforation Line and Tear-off Stub ("talón")
- A dashed perforation with notches separates the hero from a white stub of three equal cells divided by 2px dashed rules; each cell has a title, one sentence and an underlined text link whose arrow nudges 4px on fine-pointer hover. Cells stack under 900px.

### Code Spine ("lomo") and Punch Index ("índice")
- **Spine:** a sticky ruled column on Productos listing each line as code, name and hole; the line in view is filled card-stock-deep and punched.
- **Index:** a 3-column ruled grid on the home page (2 under 640px); each cell shows the line code at code size, its hole top-right, name and item count. Service lines are filled card-stock-deep.

### Mounted Photo ("marco")
- Photos sit in a white mount (10px border, 3px corners) with a flat steel staple, tilted about 1.2 degrees, with a caption strip using micro-labels and punch-dot slide controls. The slideshow crossfades over 700ms (200ms under reduced motion) and pauses on hover, focus and hidden tab.

## Do's and Don'ts

### Do:
- **Do** build every new block on the 8px unit and the fluid gutter, inside the one green card.
- **Do** mark current or selected state by punching the hole (workbench fill), never by a new color or underline.
- **Do** keep white text on card stock (5.4:1) or deeper; keep brand green for the logo and brand accents.
- **Do** put contact data and catalog data in printed fields and white sheets with uppercase micro-labels.
- **Do** use press feedback (scale .97, 160ms, ease-out `cubic-bezier(0.23, 1, 0.32, 1)`; hole reveal 120ms) and gate hover styles behind `(hover: hover) and (pointer: fine)`, with reduced-motion variants for every movement.
- **Do** keep the stamp landing as the only entrance animation, on the home hero only.
- **Do** keep the direction contract and all `.impeccable/` working files out of browser-delivered files; they stay git-ignored and never appear in HTML, CSS, JS or comments that ship.

### Don't:
- **Don't** use red outside the extinguisher line and form required/error states, or yellow outside focus and warnings.
- **Don't** draw metal with gradients, sheen or bevels; hardware is flat one-ink linework.
- **Don't** set body copy or long text in the stencil display face.
- **Don't** add hard offset shadows; depth is soft objects on a bench.
- **Don't** add a second authored animation or scroll-triggered reveals.
- **Don't** fall back to the category default: dark welder photos, orange buttons, a row of category cards.
