# Plan: Science Divine homepage

## Goal
Build a complete responsive homepage for “Science Divine – The Science of Divine Living” that closely recreates the supplied reference: premium, peaceful, editorial, navy/ivory/antique-gold, with real editable text and independently built sections rather than a screenshot background.

## Important implementation note
This project is currently a TanStack Start React app, not a Next.js app. I will keep the existing app framework and implement the requested visual/SEO/responsive behavior with React, Tailwind CSS, semantic HTML, and optimized responsive images. I will not add a separate Next.js app or replace the routing framework.

## Current project state confirmed
- The homepage route currently shows the default placeholder.
- The root metadata currently uses generic “Lovable App” / “Lovable Generated Project” text.
- The global style file currently uses the default token palette, so the Science Divine brand tokens need to be added there.

## Build scope
1. Replace the placeholder homepage with the full section-by-section layout:
   - Header / navigation
   - Hero with mountains, portrait, signature area, copy, and CTA buttons
   - Philosophy quote band
   - Inner Journey icon row
   - About Science Divine split section
   - Programs cards
   - Featured video banner
   - Events & retreats cards
   - Impact stats band
   - Science of Living topic grid
   - Insights article cards
   - Final mountain CTA
   - Dark navy footer

2. Create reusable React pieces and data-driven repeated sections:
   - Header, Hero, PhilosophyQuote, InnerJourney, AboutScienceDivine, Programs, ProgramCard, FeaturedVideo, Events, EventCard, ImpactStats, LivingTopics, TopicCard, Insights, ArticleCard, JourneyCTA, Footer.
   - Arrays for navigation, journey items, programs, events, impact stats, topics, and articles.

3. Add the Science Divine visual system:
   - Cormorant Garamond for headings, quotes, and editorial text.
   - Inter for navigation, body text, metadata, and buttons.
   - Noto Serif Devanagari for the featured Hindi video title.
   - Semantic Tailwind tokens for navy, ivory, cream, antique gold, borders, muted text, and dark footer.
   - No hardcoded visual color classes inside components.

4. Create or source the visual assets:
   - Use the uploaded screenshot only as visual reference, not as a page image.
   - Generate realistic, low-saturation, golden-hour Himalayan/spiritual imagery where real separated assets are not available.
   - Produce the requested asset set for mountains, portrait-style spiritual teacher imagery, program cards, video banner, retreat, articles, final CTA, signature, and brand logo variants.
   - Keep all visible text as HTML, not baked into images.

5. Match the requested layout details:
   - 1180–1240px max content width.
   - 64px / 32px / 20px horizontal page padding across desktop/tablet/mobile.
   - Desktop hero around 580–650px below the navbar.
   - Subtle photographic overlays, fine borders, understated shadows, 6–10px card radii, pill buttons.
   - Alternating ivory, cream, photo, and navy bands matching the screenshot rhythm.

6. Add responsive behavior:
   - Desktop: close to the supplied screenshot structure.
   - Tablet: reduced type sizes and 2–3 column layouts where appropriate.
   - Mobile: compact header with menu button, stacked hero/about/program/events/articles, 2-column topics and metrics, clean footer stacking.

7. Add subtle interactions only:
   - Calm button/link transitions.
   - Card lift of 2–3px.
   - Optional restrained image scale on card hover.
   - No flashy effects, no heavy parallax, no excessive animation.

8. Add homepage metadata:
   - Unique homepage title and description.
   - Open Graph title/description/type.
   - Twitter card metadata.
   - Keep semantic structure with one H1 and accessible navigation/buttons/images.

## Quality checks before finishing
- Compare the rendered homepage against the reference screenshot for spacing, hierarchy, card proportions, background rhythm, hero composition, portrait scale, footer styling, and mobile behavior.
- Verify the app renders without console/runtime errors.
- Check desktop and mobile screenshots for text overflow, awkward cropping, or generic-template appearance.
