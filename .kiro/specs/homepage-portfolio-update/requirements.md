# Requirements Document

## Introduction

This document specifies the requirements for updating the Reneo.id wedding organizer website's homepage and portfolio page. The update involves removing certain sections from the homepage, replacing placeholder portfolio images with actual customer photos, and implementing swipeable image galleries with lightbox functionality.

## Glossary

- **Homepage**: The main landing page of the website (`app/pages/index.vue`)
- **Portfolio_Page**: The dedicated portfolio page showing all customer galleries (`app/pages/portfolio.vue`)
- **Customer_Gallery**: A collection of wedding photos from a single customer folder
- **Carousel**: A swipeable image gallery component using Nuxt UI's UCarousel
- **Lightbox**: A modal overlay that displays an enlarged version of a clicked image
- **Customer_Folder**: A directory in the Photos folder containing images for one customer (e.g., `customer_1`, `Customer_10`, `cuustomer_18`)
- **Public_Assets**: Static files served from the `public/` directory accessible via root URL

## Requirements

### Requirement 1: Remove Homepage Sections

**User Story:** As a website visitor, I want to see a streamlined homepage without unnecessary sections, so that I can focus on the most important content.

#### Acceptance Criteria

1. THE Homepage SHALL NOT display the "Tim Kami" (Team) section
2. THE Homepage SHALL NOT display the "Layanan" (Services) section
3. THE Homepage SHALL NOT display the "Undangan" section if it exists
4. THE Homepage SHALL NOT display the "Kontak" section if it exists
5. WHEN the homepage loads, THE Homepage SHALL display only: Hero, About, Portfolio, Packages, and Maps/Reviews sections

### Requirement 2: Portfolio Page Image Replacement

**User Story:** As a website visitor, I want to see real customer wedding photos on the portfolio page, so that I can view authentic examples of the organizer's work.

#### Acceptance Criteria

1. THE Portfolio_Page SHALL NOT display any placeholder images from external URLs
2. THE Portfolio_Page SHALL display images from the 24 customer folders located in the Photos directory
3. WHEN the Portfolio_Page loads, THE System SHALL serve customer images from the public assets directory
4. THE Portfolio_Page SHALL display each Customer_Gallery as a separate card/entry
5. THE Portfolio_Page SHALL NOT display any customer names or identifying information for privacy

### Requirement 3: Customer Gallery Carousel

**User Story:** As a website visitor, I want to swipe through multiple images for each customer gallery, so that I can see all photos from a wedding event.

#### Acceptance Criteria

1. WHEN a Customer_Gallery contains multiple images, THE Carousel SHALL display them as swipeable slides
2. THE Carousel SHALL provide navigation arrows for moving between images
3. THE Carousel SHALL provide dot indicators showing the current slide position
4. WHEN a user swipes or clicks navigation, THE Carousel SHALL transition smoothly to the next/previous image
5. THE Carousel SHALL support touch gestures on mobile devices

### Requirement 4: Lightbox Image Enlargement

**User Story:** As a website visitor, I want to click on an image to see it enlarged, so that I can view the photo details clearly.

#### Acceptance Criteria

1. WHEN a user clicks on any portfolio image, THE Lightbox SHALL open displaying the enlarged image
2. THE Lightbox SHALL display a dark overlay behind the enlarged image
3. THE Lightbox SHALL provide a close button to dismiss the modal
4. WHEN a user clicks outside the image or presses Escape, THE Lightbox SHALL close
5. THE Lightbox SHALL maintain the image aspect ratio when enlarged

### Requirement 5: Homepage Portfolio Preview

**User Story:** As a website visitor, I want to see a preview of customer galleries on the homepage, so that I can get a quick impression of the organizer's work.

#### Acceptance Criteria

1. THE Homepage portfolio section SHALL display exactly 6 Customer_Gallery previews
2. WHEN displaying previews, THE Homepage SHALL use the newest/most recent customer folders
3. EACH preview card SHALL display a Carousel with swipeable images from that customer
4. EACH preview card SHALL support click-to-enlarge Lightbox functionality
5. THE Homepage portfolio section SHALL include a link to the full Portfolio_Page
6. THE Homepage portfolio section SHALL NOT display any customer names

### Requirement 6: Static Asset Management

**User Story:** As a developer, I want customer photos properly organized in the public folder, so that they can be served efficiently by the application.

#### Acceptance Criteria

1. THE System SHALL copy customer images from the Photos directory to the public assets directory
2. THE System SHALL organize images in a `portfolio/customer_N` folder structure within public
3. WHEN serving images, THE System SHALL use paths relative to the public directory root (e.g., `/portfolio/customer_1/image.jpg`)
4. THE System SHALL handle all 24 customer folders including naming variations (Customer_10, cuustomer_18)
5. THE System SHALL preserve the original image filenames during the copy process
