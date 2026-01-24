# Implementation Plan: Homepage Portfolio Update

## Overview

This implementation plan covers updating the Reneo.id website's homepage and portfolio page. The work involves removing sections from the homepage, setting up customer photo assets, creating reusable portfolio components with carousel and lightbox functionality, and integrating everything into the pages.

## Tasks

- [ ] 1. Set up static assets and portfolio configuration
  - [x] 1.1 Create script to copy customer photos to public folder
    - Create a shell script or Node.js script to copy images from `Photos/customer_*` folders to `public/portfolio/`
    - Handle naming variations (Customer_10, cuustomer_18)
    - Preserve original filenames
    - _Requirements: 6.1, 6.2, 6.4, 6.5_
  
  - [x] 1.2 Create portfolio configuration file
    - Create `app/data/portfolioConfig.ts` with customer folder list and image mappings
    - Define TypeScript interfaces for CustomerGallery and PortfolioImageMap
    - Map each customer folder to its list of image filenames
    - _Requirements: 6.3, 6.4_

- [ ] 2. Create portfolio data composable
  - [x] 2.1 Implement usePortfolio composable
    - Create `app/composables/usePortfolio.ts`
    - Implement `galleries` computed property returning all CustomerGallery objects
    - Implement `getGalleryById` function
    - Implement `getPreviewGalleries` function returning N most recent galleries
    - _Requirements: 2.2, 5.1, 5.2_
  
  - [ ]* 2.2 Write property test for image paths
    - **Property 1: Image Paths Are Local Public Paths**
    - **Validates: Requirements 2.1, 2.3, 6.3**

- [ ] 3. Create PortfolioCard component
  - [x] 3.1 Implement PortfolioCard component
    - Create `app/components/PortfolioCard.vue`
    - Use UCarousel with arrows and dots props
    - Accept gallery prop with CustomerGallery data
    - Emit click event for lightbox trigger
    - Ensure no customer names are displayed
    - _Requirements: 2.4, 2.5, 3.1, 3.2, 3.3, 5.6_
  
  - [ ]* 3.2 Write property test for gallery card rendering
    - **Property 2: Each Gallery Renders as Separate Card**
    - **Validates: Requirements 2.4**
  
  - [ ]* 3.3 Write property test for no customer names
    - **Property 3: No Customer Names Displayed**
    - **Validates: Requirements 2.5, 5.6**
  
  - [ ]* 3.4 Write property test for carousel slides
    - **Property 4: Multi-Image Galleries Have Carousel Slides**
    - **Validates: Requirements 3.1**

- [ ] 4. Create PortfolioLightbox component
  - [x] 4.1 Implement PortfolioLightbox component
    - Create `app/components/PortfolioLightbox.vue`
    - Use UModal with overlay and close button
    - Accept open, image, and gallery props
    - Emit update:open for v-model binding
    - Support keyboard navigation (Escape to close)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 5. Checkpoint - Verify components work
  - Ensure all components render correctly in isolation
  - Ensure all tests pass, ask the user if questions arise

- [ ] 6. Update Homepage
  - [x] 6.1 Remove Team section from homepage
    - Remove the "Tim Kami" section from `app/pages/index.vue`
    - Remove associated team data array
    - _Requirements: 1.1_
  
  - [x] 6.2 Remove Services section from homepage
    - Remove the "Layanan" section from `app/pages/index.vue`
    - Remove associated services data array
    - _Requirements: 1.2_
  
  - [x] 6.3 Remove Undangan and Kontak sections if present
    - Check for and remove any "Undangan" section
    - Check for and remove any "Kontak" section
    - _Requirements: 1.3, 1.4_
  
  - [x] 6.4 Update homepage portfolio section
    - Replace existing portfolio section with new implementation
    - Use usePortfolio composable to get 6 preview galleries
    - Render PortfolioCard for each preview
    - Add PortfolioLightbox for image enlargement
    - Keep link to full portfolio page
    - _Requirements: 5.1, 5.3, 5.4, 5.5_
  
  - [ ]* 6.5 Write property test for preview sorting
    - **Property 5: Preview Galleries Sorted by Recency**
    - **Validates: Requirements 5.2**
  
  - [ ]* 6.6 Write property test for preview carousels
    - **Property 6: Preview Cards Contain Carousels**
    - **Validates: Requirements 5.3**

- [ ] 7. Update Portfolio Page
  - [x] 7.1 Replace portfolio page content
    - Update `app/pages/portfolio.vue` to use new components
    - Use usePortfolio composable to get all 24 galleries
    - Render PortfolioCard for each gallery
    - Add PortfolioLightbox for image enlargement
    - Remove all placeholder images and customer names
    - Remove category filter (no longer needed)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 8. Final checkpoint - Verify full implementation
  - Ensure all tests pass
  - Verify homepage displays correct sections (Hero, About, Portfolio, Packages, Maps/Reviews)
  - Verify portfolio page displays all 24 customer galleries
  - Verify no customer names appear anywhere
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The asset copy script (1.1) should be run once during setup, not on every build
