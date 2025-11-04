<!-- e4439bdc-87ac-42e2-abdb-2bd2034b5c9a 1b9a291d-b776-465d-9728-5271df5743f2 -->
# ALD Landing Page - Clean Minimalist Elevation

## Core Philosophy

**Less is More** - Focus on breathing room, refined typography, smooth interactions, and subtle animations. Remove clutter, keep clean lines, maintain sophisticated simplicity.

## Phase 1: Foundation Enhancement

### 1.1 Smooth Scroll Implementation

- Install Lenis smooth scroll library for buttery-smooth physics-based scrolling
- Configure with subtle easing and natural momentum
- Integrate seamlessly with existing Framer Motion animations
- Add scroll direction detection for smart navigation behavior

### 1.2 PDF Brochure Download Section

- Create elegant `BrochuresSection.tsx` component after Plans section
- Design 3 minimalist brochure cards (one per apartment PDF)
- Implement clean download functionality with proper file serving
- Add subtle hover states and smooth animations
- Include tasteful preview thumbnails and brief descriptions

## Phase 2: Typography & Spacing Refinement

### 2.1 Enhanced Hierarchy

- Refine heading sizes (subtle increases for better impact)
- Increase hero title to text-8xl/9xl on large screens (currently 8xl max)
- Add more generous vertical spacing (py-40 instead of py-32)
- Refine letter-spacing on headings for luxury feel
- Ensure perfect rhythm and visual breathing room

### 2.2 Smooth Text Animations

- Add elegant fade-in word reveals on scroll (not character-by-character - too busy)
- Implement smooth opacity transitions on section titles
- Add subtle scale effects on headings (0.95 → 1.0)
- Keep animations minimal and tasteful
- Respect existing animation style but refine timing

## Phase 3: Refined Scroll Animations

### 3.1 Subtle Scroll Triggers

- Add smooth fade-up animations on scroll (staggered by 50-100ms)
- Implement gentle parallax on hero and key images (subtle depth)
- Add scroll-linked opacity changes (elements fade in naturally)
- Create smooth section transitions with color overlays
- Keep all effects understated and elegant

### 3.2 Interactive Enhancements

- Add magnetic cursor effect on CTA buttons (subtle pull toward cursor)
- Implement smooth hover scale on images (1.0 → 1.05 with smooth transition)
- Add gentle tilt effect on cards (2-3 degrees max, very subtle)
- Refine existing hover states to be more polished
- Add smooth focus states for accessibility

## Phase 4: Section-by-Section Polish

### 4.1 Hero Section

- Refine parallax effect (keep existing, make smoother)
- Add subtle fade-in animation on page load (staged timing)
- Enhance CTA button interactions (magnetic hover, smooth transitions)
- Keep clean, minimal design - no heavy geometric elements
- Preserve existing grain overlay

### 4.2 About Section

- Increase whitespace around content
- Add smooth image reveal on scroll (scale 1.1 → 1.0)
- Refine decorative elements (keep minimal)
- Improve text readability with better spacing
- Maintain existing two-column layout (it's clean)

### 4.3 Stats Section

- Keep existing counter animations (they're good)
- Refine timing and easing for smoother feel
- Add subtle background pattern (very light, almost invisible)
- Improve hover states on stat cards
- Maintain minimalist aesthetic

### 4.4 Interiors Gallery

- Enhance existing carousel with smoother transitions
- Add Ken Burns effect (subtle zoom on images while viewing)
- Improve navigation controls (cleaner design)
- Add keyboard navigation support
- Keep clean, focused presentation

### 4.5 Amenities Section

- Add staggered scroll animations (cards appear sequentially)
- Refine hover states (smoother image scale, better overlay transitions)
- Remove busy decorative elements, keep clean
- Improve card depth with subtle shadows
- Maintain elegant grid layout

### 4.6 Plans Section

- Clean up card design (remove heavy visual elements)
- Add smooth hover interactions
- Implement elegant expand/collapse for details
- Keep minimalist presentation
- Add subtle border animations on hover

### 4.7 Brochures Section (NEW)

- Create after Plans section
- Design 3 clean cards with PDF previews
- Add download buttons with smooth interactions
- Include apartment type, surface area, brief description
- Implement hover states and animations

### 4.8 Location Section

- Keep clean presentation
- Add smooth animations to highlight cards
- Improve map placeholder design
- Maintain minimalist aesthetic
- Add subtle hover effects

### 4.9 Testimonials Section

- Refine card design (cleaner, more elegant)
- Add smoother animations
- Improve quote presentation
- Keep minimalist approach
- Better spacing and typography

### 4.10 Contact Section

- Add floating label animations on form inputs
- Implement smooth validation feedback
- Refine form styling (cleaner, more minimal)
- Add subtle focus states
- Improve submit button interaction

## Phase 5: Navigation & UX Polish

### 5.1 Navigation Refinement

- Add scroll direction detection (hide nav on scroll down, show on scroll up)
- Implement active section highlighting
- Add smooth transition animations
- Refine mobile menu (cleaner, more elegant)
- Keep glassmorphism effect subtle

### 5.2 Loading Experience

- Refine existing loading screen (smoother animations)
- Add elegant fade-out transition
- Keep minimal and fast
- Improve perceived performance

### 5.3 Back to Top Button

- Refine existing button (cleaner design)
- Add smooth scroll to top with Lenis
- Better positioning and timing
- Subtle hover effects

## Phase 6: Performance & Accessibility

### 6.1 Optimization

- Add intersection observers for efficient animation triggers
- Implement GPU-accelerated animations (transform, opacity only)
- Add will-change properties strategically
- Lazy load images below fold
- Optimize animation performance

### 6.2 Accessibility

- Ensure prefers-reduced-motion support
- Add proper ARIA labels throughout
- Implement full keyboard navigation
- Test screen reader compatibility
- Add visible focus indicators

### 6.3 Final Polish

- Test on multiple devices and browsers
- Refine animation timings for perfect feel
- Adjust spacing for visual harmony
- Polish all hover and focus states
- Final QA and bug fixes

## Key Files to Create/Modify

**New Files:**

- `/src/components/BrochuresSection.tsx` - PDF download section
- `/src/utils/smoothScroll.ts` - Lenis configuration
- `/src/hooks/useMagneticHover.ts` - Magnetic cursor effect

**Modified Files:**

- `/src/App.tsx` - Add Lenis wrapper
- `/src/components/HeroSection.tsx` - Enhanced animations
- `/src/components/AboutSection.tsx` - Refined spacing
- `/src/components/InteriorsGallery.tsx` - Ken Burns effect
- `/src/components/AmenitiesSection.tsx` - Staggered animations
- `/src/components/PlansSection.tsx` - Cleaner design
- `/src/components/LocationSection.tsx` - Refined animations
- `/src/components/TestimonialsSection.tsx` - Improved cards
- `/src/components/ContactSection.tsx` - Floating labels
- `/src/components/Navigation.tsx` - Scroll behavior
- `/src/styles/globals.css` - Utility classes

## Design Principles

1. **Minimalist Elegance** - Clean lines, generous whitespace, refined details
2. **Breathing Room** - Space is a luxury signal
3. **Subtle Motion** - Animations enhance, never distract
4. **Smooth Performance** - 60fps throughout, no jank
5. **Tactile Quality** - Gentle depth through shadows and overlays
6. **Editorial Feel** - Magazine-quality typography and layout
7. **Restrained Luxury** - Sophisticated without excess

## Success Criteria

✓ Buttery-smooth 60fps scroll performance
✓ Clean, minimalist aesthetic maintained
✓ Subtle, professional animations throughout
✓ PDF brochure downloads functional
✓ Improved typography and spacing
✓ Enhanced hover/focus interactions
✓ Perfect accessibility support
✓ Awwwards-worthy polish and refinement

### To-dos

- [ ] Install and configure Lenis smooth scroll library, integrate with Framer Motion
- [ ] Create BrochuresSection component with PDF download functionality for 3 apartment brochures
- [ ] Enhance hero with layered parallax, character-reveal animations, and geometric borders
- [ ] Increase heading sizes, refine spacing (py-40), implement split-text animations
- [ ] Transform About section to asymmetric grid, add architectural grid overlays throughout
- [ ] Implement staggered reveals, horizontal scroll gallery, parallax variations across sections
- [ ] Convert interiors to fullscreen immersive experience with Ken Burns effect and drag navigation
- [ ] Add staggered grid animations and hover-triggered scale effects to amenities
- [ ] Redesign plans section with blueprint aesthetic and animated measurement lines
- [ ] Add animated map pins, distance visualizations, and neighborhood highlights
- [ ] Implement magnetic cursor, tilt effects, floating labels, and enhanced hover states
- [ ] Add scroll direction detection, active section highlighting, and smooth indicators
- [ ] Optimize animations with GPU acceleration, intersection observers, and reduced-motion support