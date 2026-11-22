# DESIGN.md
# Vapi Freelance Portfolio — Visual Design System

## 1. Design Identity

Project: Personal Freelance Portfolio  
Geographic Focus: Vapi, Gujarat, India  
Website Type: Single-page portfolio  
Framework: Next.js + Tailwind CSS  
Visual Direction: Hybrid 3D + Editorial  
Theme: Light only  
Design Personality: Warm Luxury

The website should feel like a premium independent creative digital studio while retaining a genuine personal identity.

It must not resemble a generic developer portfolio, SaaS dashboard or traditional IT company website.

### Core design philosophy

- Visual storytelling over technical explanations.
- Premium simplicity over unnecessary decoration.
- Spatial depth over flat layouts.
- Clear hierarchy over excessive content.
- Business outcomes over technical terminology.
- Intentional animation over decorative motion.

Target visual-to-text balance: approximately 80:20.

## 2. Color System

### Primary palette

| Token | Hex | Purpose |
|---|---|---|
| Warm Ivory | #F6F2E9 | Main background |
| Pure White | #FFFFFF | Cards and surfaces |
| Midnight Blue | #172C46 | Primary identity and text |
| Tangerine Orange | #F26A3D | CTAs and highlights |
| Soft Lavender | #E9E5F5 | Spatial visual accents |

### Distribution

- Warm Ivory: 65%
- Pure White: 20%
- Midnight Blue: 10%
- Tangerine Orange: 4%
- Soft Lavender: 1%

These percentages represent approximate visual coverage, not rigid limits on individual CSS properties.

### Supporting tokens

- Secondary text: #626A73
- Muted text: #858A91
- Borders: #E3DFD6
- Subtle background: #EEEAE1
- Inverse text: #FFFFFF

### Color rules

1. Warm Ivory is the default page background.
2. Pure White creates separation between content groups.
3. Midnight Blue is the primary typography color.
4. Tangerine Orange is reserved for important interactive elements.
5. Lavender is primarily used in 3D visuals and supporting backgrounds.
6. Use midnight-blue sections sparingly for contrast.
7. Never introduce a separate dark theme.
8. Maintain accessible contrast for text and controls.

Do not introduce neon green, bright cyan or unrelated accent colors.

## 3. Typography

Preferred display fonts:
- Manrope
- Space Grotesk

Preferred body fonts:
- DM Sans
- Inter

Typography characteristics:

- Large editorial headlines.
- Confident weight variations.
- Clear line breaks.
- Comfortable paragraph widths.
- Minimal uppercase labels.
- Generous spacing.

Suggested desktop scale:

| Element | Size |
|---|---|
| Hero headline | 72–104px |
| Section headline | 48–64px |
| Subheading | 24–32px |
| Body | 16–18px |
| Labels | 11–13px |

Use responsive clamp() typography instead of fixed sizes where appropriate.

## 4. Layout System

Use:
- Generous whitespace.
- Asymmetric grids.
- Editorial compositions.
- Large image-led sections.
- Overlapping visual elements where intentional.
- Consistent alignment.
- Controlled content width.

Avoid:
- Repetitive three-column card layouts.
- Excessive rounded cards.
- Too many borders.
- Arbitrary positioning.
- Unbalanced empty spaces.

Suggested:
- Maximum content width: approximately 1440px.
- Desktop side padding: 5–7vw.
- Tablet side padding: 4vw.
- Mobile side padding: 20px.

## 5. Components

### Navigation
- Minimal personal wordmark.
- Clean links.
- One prominent inquiry CTA.
- Sticky or intelligently floating behavior.
- Compact mobile navigation.

### Buttons
Primary:
- Tangerine background.
- Midnight Blue text.
- Rounded pill shape.

Secondary:
- Transparent or white background.
- Midnight Blue border and text.

Buttons must have visible hover, focus, pressed and disabled states.

### Project showcases
- Large previews.
- Minimal supporting text.
- Distinctive image compositions.
- Consistent image treatment.
- Clear project links.

### Service showcases
- Large visual identity for each service.
- Short business-oriented descriptions.
- Subtle interactions.
- No technical skill badges.

### Forms
- Clean labels.
- Comfortable field spacing.
- Clear validation.
- Friendly success and error messages.

## 6. Imagery and 3D

Preferred visual materials:
- Matte ivory.
- Soft lavender glass.
- Midnight-blue glass.
- Tangerine metallic objects.
- Chrome details.
- Architectural geometric objects.

Use realistic lighting and soft shadows.

3D should complement actual portfolio projects rather than replace them.

Never use unrelated stock imagery as fake client work.

## 7. Responsive Design

Desktop:
- Full spatial compositions.
- Layered visuals.
- Subtle cursor interactions.
- Complex editorial layouts.

Tablet:
- Simplified spatial layouts.
- Reduced visual overlap.
- Comfortable typography.

Mobile:
- Single-column layouts.
- Strong content hierarchy.
- Lightweight 3D or static fallback.
- Large touch targets.
- Sticky conversion bar.

Never allow horizontal overflow.

## 8. Accessibility

- Semantic HTML.
- Keyboard accessibility.
- Visible focus indicators.
- Accessible color contrast.
- Meaningful image alt text.
- Reduced-motion support.
- Proper form labels.
- Descriptive links.

## 9. Design Restrictions

Do not:
- Use generic AI-generated SaaS templates.
- Turn the page into a technical resume.
- Use excessive gradients.
- Animate every element.
- Use arbitrary colors.
- Sacrifice mobile usability for desktop visuals.
- Use dark backgrounds as the default.
- Invent awards, testimonials or project statistics.

## 10. Design Success Criteria

A visitor should immediately recognize:

- A premium personal brand.
- A modern digital experience.
- A professional and approachable developer.
- Real project capabilities.
- An easy way to start a conversation.