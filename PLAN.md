yes# Portfolio Projects Section — Implementation Plan

## Information Gathered
- Current `Projects.jsx` has 3 hardcoded projects with inline handler functions.
- Current `ProjectCard.jsx` only shows title, description, Demo/Source buttons — no thumbnail, no tags, no gallery.
- Design system uses Tailwind CSS with colors: `#0e1946` (navy card bg), `#F7F7F7` (page bg), `#455697` (buttons).
- The app has a light gray page background with dark navy cards.
- No external modal library is used; we must use `useState` only.
- No CSS variables or dark mode support exists yet.

## Plan

### 1. Create `src/data/projectsData.js`
- Central array containing all project objects.
- Each object will have: `id`, `title`, `description`, `thumbnail`, `techStack` (array), `screenshots` (array of image URLs), `demoUrl`, `sourceUrl`.
- Makes future updates easy — just edit this file.

### 2. Create `src/components/Projects/ProjectGalleryModal.jsx`
- Reusable modal/lightbox component.
- Props: `isOpen`, `onClose`, `screenshots`, `projectTitle`.
- Uses `useState` to track animation state.
- Features:
  - Close button (top-right X).
  - Click outside modal content to close.
  - Grid layout (`auto-fit` + `minmax`) for screenshots.
  - Smooth open/close CSS transition (fade + scale).
  - Responsive design (adapts columns on mobile/tablet/desktop).
- Uses CSS variables for theming.

### 3. Update `src/components/Projects/ProjectCard.jsx`
- Enhanced card design:
  - Thumbnail image at top.
  - Title, short description.
  - Tech stack tags (small badges).
  - Three action buttons: **Demo**, **Source Code**, **View Photos**.
- Hover effects: `hover:scale-105`, shadow lift, image zoom.
- Clicking **View Photos** calls `onViewPhotos` prop to open modal.

### 4. Update `src/components/Projects/Projects.jsx`
- Import `projectsData` array and map over it.
- Use CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for responsiveness.
- Manage modal state (`selectedProject`) with `useState`.
- Render `<ProjectGalleryModal />` conditionally.
- Clean up hardcoded handlers by moving URLs into data array.

### 5. Update `src/index.css`
- Add CSS custom properties (variables) for light/dark mode.
- Add `.dark` class variables for dark mode support.
- Add keyframe animations for modal fade-in/scale-in.
- Add utility classes for scrollbar styling and backdrop blur.

## Dependent Files to Edit
- `src/data/projectsData.js` — **new file**
- `src/components/Projects/ProjectGalleryModal.jsx` — **new file**
- `src/components/Projects/ProjectCard.jsx` — **modify**
- `src/components/Projects/Projects.jsx` — **modify**
- `src/index.css` — **modify**

## Follow-up Steps
- Verify modal open/close works on click and outside click.
- Verify responsive grid adapts from 1 column (mobile) to 2–3 columns (desktop).
- Check hover effects and transitions.
- Test dark mode by toggling `.dark` on `<html>`.

---
Please confirm this plan or suggest changes before I proceed with the edits.

