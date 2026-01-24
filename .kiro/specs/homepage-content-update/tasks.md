# Implementation Plan: Homepage Content Update

## Overview

This implementation plan covers updating the Reneo Planner homepage (`app/pages/index.vue`) with new content, removing outdated sections, and adding new sections. The implementation uses Vue 3 Composition API with Nuxt UI v4 components.

## Tasks

- [x] 1. Update About Us Section Content
  - [x] 1.1 Update the About section text content
    - Replace founding year from 2014 to 2023
    - Update location to Surabaya
    - Add company vision about helping couples create meaningful weddings
    - Add story about growth from small passionate team to professional team
    - Add name philosophy explanation ("Re" = tested fundamental values, "Neo" = evolving innovation)
    - Add values about combining tradition and creativity
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_
  
  - [x] 1.2 Update carousel slides data
    - Remove slides with outdated statistics ("10+ Tahun Keunggulan", "500+ Pasangan Bahagia")
    - Update slides to reflect 2023 founding and accurate company information
    - _Requirements: 6.1, 6.2_

- [x] 2. Update Services Section
  - [x] 2.1 Replace services array with 4 core services
    - Update services data to: KONSULTASI, BUDGETING, CONCEPT, KOORDINASI
    - Add appropriate icons for each service
    - Add the new service description about wedding planning being more than producing an event
    - Include information about discussion space, vendor recommendations, budget planning, event coordination
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [x] 3. Remove Statistics Section
  - [x] 3.1 Remove statistics section from template
    - Delete the Statistics Section HTML/template code
    - Remove the `stats` data array from script
    - Ensure layout remains visually coherent
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [x] 4. Add Service Packages Section
  - [x] 4.1 Create packages data structure
    - Define `packages` array with Prajurit, Abdi Dalem, and Sultan packages
    - Include all features for each package as specified
    - Include free items for each package
    - Do NOT include any pricing information
    - _Requirements: 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [x] 4.2 Create Packages Section template
    - Add new section with id="packages" after Portfolio section
    - Add section title "Paket Layanan Kami"
    - Create responsive grid layout for 3 package cards
    - Display package name, guest range, features list, and free items
    - Use UCard components consistent with existing design
    - _Requirements: 4.1, 4.7, 4.8_

- [x] 5. Replace Testimonials with Google Maps Section
  - [x] 5.1 Remove Testimonials section
    - Delete the Testimonials Section HTML/template code
    - Remove the `testimonials` data array from script
    - _Requirements: 5.1_
  
  - [x] 5.2 Create Maps Section template
    - Add new section with id="location" after Packages section
    - Add section title "Lokasi & Ulasan Kami"
    - Embed Google Maps iframe using the provided location
    - Add link to Google Maps reviews (https://maps.app.goo.gl/YgQcDsoE1JfFFR9p7)
    - Add fallback handling if maps fails to load
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 6. Checkpoint - Visual Review
  - Ensure all tests pass, ask the user if questions arise.
  - Verify all sections display correctly
  - Verify Indonesian language is used throughout
  - Verify no pricing information appears in packages

- [ ]* 7. Add Tests
  - [ ]* 7.1 Write unit tests for content verification
    - Test About section contains 2023 and Surabaya
    - Test Services section has exactly 4 services
    - Test statistics content does not appear
    - Test packages section displays 3 packages
    - Test testimonials section is removed
    - _Requirements: 1.1, 2.1, 3.1-3.4, 4.2-4.4, 5.1_
  
  - [ ]* 7.2 Write property test for no pricing in packages
    - **Property 1: No Pricing in Packages**
    - **Validates: Requirements 4.5**
  
  - [ ]* 7.3 Write property test for free items visibility
    - **Property 2: Free Items Visibility**
    - **Validates: Requirements 4.6**

- [x] 8. Final Checkpoint
  - Ensure all tests pass, ask the user if questions arise.
  - Verify complete implementation matches requirements

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- All content must be in Indonesian language
- Google Maps reviews may require a link approach rather than direct embed due to API limitations
- The existing design system (Nuxt UI v4 components, color scheme, typography) should be maintained
