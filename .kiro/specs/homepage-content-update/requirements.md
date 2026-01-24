# Requirements Document

## Introduction

This document specifies the requirements for updating the Reneo Planner wedding organizer homepage (`app/pages/index.vue`). The updates include revising the About Us section, updating services, removing statistics, adding service packages, and replacing testimonials with a Google Maps section. All content must be in Indonesian language.

## Glossary

- **Homepage**: The main landing page at `app/pages/index.vue`
- **About_Section**: The "Tentang Kami" section describing the company
- **Services_Section**: The section displaying core wedding services
- **Statistics_Section**: The section showing company statistics (to be removed)
- **Packages_Section**: New section displaying wedding service packages
- **Maps_Section**: New section with embedded Google Maps and reviews
- **Carousel**: The image slider component in the About section

## Requirements

### Requirement 1: Update About Us Section

**User Story:** As a website visitor, I want to read accurate company information, so that I can understand Reneo Planner's background and values.

#### Acceptance Criteria

1. WHEN a visitor views the About_Section, THE Homepage SHALL display that the company was founded in 2023 in Surabaya
2. WHEN a visitor views the About_Section, THE Homepage SHALL display the company vision of helping couples create meaningful weddings
3. WHEN a visitor views the About_Section, THE Homepage SHALL describe the company growth from a small passionate team to a professional team
4. WHEN a visitor views the About_Section, THE Homepage SHALL explain the name philosophy where "Re" represents tested fundamental values and "Neo" represents evolving innovation
5. WHEN a visitor views the About_Section, THE Homepage SHALL communicate that the company combines tradition and creativity for unique wedding moments
6. THE About_Section SHALL display all content in Indonesian language

### Requirement 2: Update Services Section

**User Story:** As a website visitor, I want to see the core services offered, so that I can understand what Reneo Planner provides.

#### Acceptance Criteria

1. WHEN a visitor views the Services_Section, THE Homepage SHALL display exactly 4 core services: KONSULTASI, BUDGETING, CONCEPT, and KOORDINASI
2. WHEN a visitor views the Services_Section, THE Homepage SHALL display the service description explaining that wedding planning is more than producing an event but creating beautiful and memorable moments
3. THE Services_Section SHALL include information about discussion space, vendor recommendations, budget planning, event detail coordination, and organized creative experiences
4. THE Services_Section SHALL display all content in Indonesian language

### Requirement 3: Remove Statistics Section

**User Story:** As a website maintainer, I want to remove outdated statistics, so that the homepage displays accurate information.

#### Acceptance Criteria

1. THE Homepage SHALL NOT display the statistics showing "500+ Pernikahan Diselenggarakan"
2. THE Homepage SHALL NOT display the statistics showing "500+ Pasangan Bahagia"
3. THE Homepage SHALL NOT display the statistics showing "10+ Tahun Pengalaman"
4. THE Homepage SHALL NOT display the statistics showing "25+ Anggota Tim"
5. WHEN the Statistics_Section is removed, THE Homepage layout SHALL remain visually coherent without gaps

### Requirement 4: Add Service Packages Section

**User Story:** As a website visitor, I want to see available wedding packages, so that I can choose a package that fits my needs.

#### Acceptance Criteria

1. THE Homepage SHALL display a new section titled "Paket Layanan Kami"
2. WHEN a visitor views the Packages_Section, THE Homepage SHALL display the Prajurit Package for 100-300 guests with all specified features
3. WHEN a visitor views the Packages_Section, THE Homepage SHALL display the Abdi Dalem Package for 400-800 guests with all specified features
4. WHEN a visitor views the Packages_Section, THE Homepage SHALL display the Sultan Package for 800-1200 guests with all specified features
5. THE Packages_Section SHALL NOT display any pricing information
6. WHEN displaying packages, THE Homepage SHALL show the free items included with each package
7. THE Packages_Section SHALL display all content in Indonesian language
8. THE Packages_Section SHALL be visually consistent with the existing website design

### Requirement 5: Replace Testimonials with Google Maps Section

**User Story:** As a website visitor, I want to see the business location and reviews, so that I can verify the business legitimacy and read customer feedback.

#### Acceptance Criteria

1. THE Homepage SHALL NOT display the current Testimoni section
2. THE Homepage SHALL display a new Maps_Section with an embedded Google Maps showing the business location
3. WHEN a visitor views the Maps_Section, THE Homepage SHALL display the map using the URL https://maps.app.goo.gl/YgQcDsoE1JfFFR9p7
4. THE Maps_Section SHALL display Google Maps reviews from the business
5. IF the Google Maps reviews cannot be embedded directly, THEN THE Homepage SHALL provide a link to view reviews on Google Maps
6. THE Maps_Section SHALL display all labels and headings in Indonesian language

### Requirement 6: Update Carousel Content

**User Story:** As a website maintainer, I want the carousel to reflect accurate company information, so that visitors see consistent messaging.

#### Acceptance Criteria

1. WHEN the About_Section carousel displays statistics, THE Homepage SHALL update or remove slides that reference outdated statistics like "10+ Tahun Keunggulan" or "500+ Pasangan Bahagia"
2. THE Carousel content SHALL be consistent with the updated company information (founded 2023)
