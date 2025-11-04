# Unused Code Report

This report identifies unused code in the ALD Landing Page codebase.

## Summary

- **3 Unused Components**: LuxuryButton, LuxuryCard, SectionDivider
- **1 Missing Export**: BrochuresSection (exported but file doesn't exist)
- **1 Unused Utility File**: smoothScroll.ts (entire file unused)
- **48+ Unused UI Components**: Only Input and Textarea are used from the UI library
- **1 Code Bug**: smoothScroll.ts uses `useEffect` without importing it

---

## 1. Unused Components

### 1.1 LuxuryButton (`src/components/LuxuryButton.tsx`)
- **Status**: Exported in `index.ts` but never imported/used
- **Location**: `src/components/LuxuryButton.tsx`
- **Size**: ~85 lines
- **Note**: HeroSection uses inline button components instead

### 1.2 LuxuryCard (`src/components/LuxuryCard.tsx`)
- **Status**: Exported in `index.ts` but never imported/used
- **Location**: `src/components/LuxuryCard.tsx`
- **Size**: ~115 lines

### 1.3 SectionDivider (`src/components/SectionDivider.tsx`)
- **Status**: Exported in `index.ts` but never imported/used
- **Location**: `src/components/SectionDivider.tsx`
- **Size**: ~69 lines

### 1.4 BrochuresSection
- **Status**: Exported in `index.ts` but file doesn't exist
- **Location**: `src/components/index.ts:14`
- **Issue**: Broken export reference

---

## 2. Unused Utility Files

### 2.1 smoothScroll.ts (`src/utils/smoothScroll.ts`)
- **Status**: Entire file unused - no imports found
- **Location**: `src/utils/smoothScroll.ts`
- **Size**: ~97 lines
- **Functions**: 
  - `initSmoothScroll()` - unused
  - `scrollToSection()` - unused
  - `getScrollDirection()` - unused
  - `useSmoothScroll()` - unused (also has bug: missing `useEffect` import)
  - `getLenisInstance()` - unused
  - `scrollTo()` - unused
- **Bug**: Line 48 uses `useEffect` but doesn't import it from React
- **Note**: The app uses native `window.scrollTo` in BackToTop component instead

---

## 3. Unused UI Components

The project has 50+ UI components in `src/components/ui/`, but only **2 are actually used**:

### Used Components ✅
- `input.tsx` - Used in ContactSection
- `textarea.tsx` - Used in ContactSection

### Unused Components ❌ (48 components)
- `accordion.tsx`
- `alert-dialog.tsx`
- `alert.tsx`
- `aspect-ratio.tsx`
- `avatar.tsx`
- `badge.tsx`
- `breadcrumb.tsx`
- `button.tsx`
- `calendar.tsx`
- `card.tsx`
- `carousel.tsx`
- `chart.tsx`
- `checkbox.tsx`
- `collapsible.tsx`
- `command.tsx`
- `context-menu.tsx`
- `dialog.tsx`
- `drawer.tsx`
- `dropdown-menu.tsx`
- `form.tsx`
- `hover-card.tsx`
- `input-otp.tsx`
- `label.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `pagination.tsx`
- `popover.tsx`
- `progress.tsx`
- `radio-group.tsx`
- `resizable.tsx`
- `scroll-area.tsx`
- `select.tsx`
- `separator.tsx`
- `sheet.tsx`
- `sidebar.tsx`
- `skeleton.tsx`
- `slider.tsx`
- `sonner.tsx`
- `switch.tsx`
- `table.tsx`
- `tabs.tsx`
- `toggle-group.tsx`
- `toggle.tsx`
- `tooltip.tsx`
- `use-mobile.ts` (utility hook)

**Note**: These components also import from `@radix-ui/*` packages, which may be unused dependencies if none of these components are used.

---

## 4. Recommendations

### High Priority
1. **Remove or fix BrochuresSection export** - Either create the component or remove the export
2. **Fix smoothScroll.ts bug** - Add missing `useEffect` import (if keeping file)
3. **Remove unused components** - LuxuryButton, LuxuryCard, SectionDivider if not planned for future use

### Medium Priority
4. **Remove unused UI components** - Consider removing the entire `ui/` directory if only Input/Textarea are needed
5. **Audit dependencies** - Check if `@radix-ui/*` packages are needed if UI components are removed
6. **Remove smoothScroll.ts** - Since it's not used and the app uses native scrolling

### Low Priority
7. **Consider using LuxuryButton** - HeroSection could use LuxuryButton instead of inline buttons for consistency

---

## 5. Code Size Impact

Estimated lines of unused code:
- LuxuryButton: ~85 lines
- LuxuryCard: ~115 lines
- SectionDivider: ~69 lines
- smoothScroll.ts: ~97 lines
- Unused UI components: ~2000+ lines (estimated)
- **Total**: ~2300+ lines of unused code

---

## 6. Verification

To verify this report, run:
```bash
# Find unused exports (requires tools like ts-prune or depcheck)
npx ts-prune

# Check for unused dependencies
npx depcheck
```

---

Generated: $(date)

