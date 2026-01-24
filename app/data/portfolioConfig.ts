/**
 * Portfolio Configuration
 * 
 * This file contains the configuration for customer portfolio galleries.
 * It maps each customer folder to its list of image filenames.
 * 
 * Requirements: 6.3, 6.4
 */

/**
 * Represents a customer gallery with images
 */
export interface CustomerGallery {
  /** Unique identifier (normalized, e.g., "customer_1") */
  id: string
  /** Original folder name preserving case */
  folderName: string
  /** Array of image paths relative to public (e.g., "/portfolio/customer_1/image.jpg") */
  images: string[]
  /** Total number of images in gallery */
  imageCount: number
}

/**
 * Maps folder names to arrays of image filenames
 */
export interface PortfolioImageMap {
  [folderId: string]: string[]
}

/**
 * List of all customer folders in order (customer_1 through customer_24)
 * Note: All folders are normalized to lowercase in public/portfolio
 */
export const CUSTOMER_FOLDERS = [
  'customer_1',
  'customer_2',
  'customer_3',
  'customer_4',
  'customer_5',
  'customer_6',
  'customer_7',
  'customer_8',
  'customer_9',
  'customer_10',
  'customer_11',
  'customer_12',
  'customer_13',
  'customer_14',
  'customer_15',
  'customer_16',
  'customer_17',
  'customer_18',
  'customer_19',
  'customer_20',
  'customer_21',
  'customer_22',
  'customer_23',
  'customer_24',
] as const

export type CustomerFolderId = typeof CUSTOMER_FOLDERS[number]

/**
 * Maps each customer folder to its list of image filenames.
 * Images are served from /portfolio/{folder_name}/{filename}
 */
export const PORTFOLIO_IMAGES: PortfolioImageMap = {
  customer_1: [
    '2026-01-04_07-04-19_UTC_1.jpg',
    '2026-01-04_07-04-19_UTC_2.jpg',
    '2026-01-04_07-04-19_UTC_3.jpg',
    '2026-01-04_07-04-19_UTC_4.jpg',
    '2026-01-04_07-04-19_UTC_5.jpg',
    '2026-01-04_07-04-19_UTC_6.jpg',
  ],
  customer_2: [
    '2025-12-31_10-32-02_UTC_1.jpg',
    '2025-12-31_10-32-02_UTC_2.jpg',
    '2025-12-31_10-32-02_UTC_3.jpg',
    '2025-12-31_10-32-02_UTC_4.jpg',
    '2025-12-31_10-32-02_UTC_5.jpg',
    '2025-12-31_10-32-02_UTC_6.jpg',
  ],
  customer_3: [
    '2025-12-25_10-47-03_UTC_1.jpg',
    '2025-12-25_10-47-03_UTC_2.jpg',
    '2025-12-25_10-47-03_UTC_3.jpg',
    '2025-12-25_10-47-03_UTC_4.jpg',
    '2025-12-25_10-47-03_UTC_5.jpg',
    '2025-12-25_10-47-03_UTC_6.jpg',
    '2025-12-25_10-47-03_UTC_7.jpg',
    '2025-12-25_10-47-03_UTC_8.jpg',
    '2025-12-25_10-47-03_UTC_9.jpg',
    '2025-12-25_10-47-03_UTC_10.jpg',
    '2025-12-25_10-47-03_UTC_11.jpg',
  ],
  customer_4: [
    '2025-12-06_02-18-11_UTC_1.jpg',
    '2025-12-06_02-18-11_UTC_2.jpg',
    '2025-12-06_02-18-11_UTC_3.jpg',
    '2025-12-06_02-18-11_UTC_4.jpg',
    '2025-12-06_02-18-11_UTC_5.jpg',
    '2025-12-06_02-18-11_UTC_6.jpg',
  ],
  customer_5: [
    '2025-12-04_03-54-58_UTC_1.jpg',
    '2025-12-04_03-54-58_UTC_2.jpg',
    '2025-12-04_03-54-58_UTC_3.jpg',
    '2025-12-04_03-54-58_UTC_4.jpg',
    '2025-12-04_03-54-58_UTC_5.jpg',
  ],
  customer_6: [
    '2025-11-07_06-50-03_UTC_1.jpg',
    '2025-11-07_06-50-03_UTC_2.jpg',
    '2025-11-07_06-50-03_UTC_3.jpg',
    '2025-11-07_06-50-03_UTC_4.jpg',
    '2025-11-07_06-50-03_UTC_5.jpg',
    '2025-11-07_06-50-03_UTC_6.jpg',
  ],
  customer_7: [
    '2025-10-13_06-15-51_UTC_1.jpg',
    '2025-10-13_06-15-51_UTC_2.jpg',
    '2025-10-13_06-15-51_UTC_3.jpg',
    '2025-10-13_06-15-51_UTC_4.jpg',
    '2025-10-13_06-15-51_UTC_5.jpg',
    '2025-10-13_06-15-51_UTC_6.jpg',
  ],
  customer_8: [
    '2025-09-18_04-36-43_UTC_1.jpg',
    '2025-09-18_04-36-43_UTC_2.jpg',
    '2025-09-18_04-36-43_UTC_3.jpg',
    '2025-09-18_04-36-43_UTC_4.jpg',
    '2025-09-18_04-36-43_UTC_5.jpg',
    '2025-09-18_04-36-43_UTC_6.jpg',
    '2025-09-18_04-36-43_UTC_7.jpg',
  ],
  customer_9: [
    '2025-09-09_04-25-04_UTC_1.jpg',
    '2025-09-09_04-25-04_UTC_2.jpg',
    '2025-09-09_04-25-04_UTC_3.jpg',
    '2025-09-09_04-25-04_UTC_4.jpg',
    '2025-09-09_04-25-04_UTC_5.jpg',
  ],
  customer_10: [
    '2025-07-13_12-50-51_UTC_1.jpg',
    '2025-07-13_12-50-51_UTC_2.jpg',
    '2025-07-13_12-50-51_UTC_3.jpg',
    '2025-07-13_12-50-51_UTC_4.jpg',
    '2025-07-13_12-50-51_UTC_5.jpg',
    '2025-07-13_12-50-51_UTC_6.jpg',
  ],
  customer_11: [
    '2025-07-17_06-41-44_UTC_1.jpg',
    '2025-07-17_06-41-44_UTC_2.jpg',
    '2025-07-17_06-41-44_UTC_3.jpg',
    '2025-07-17_06-41-44_UTC_4.jpg',
    '2025-07-17_06-41-44_UTC_5.jpg',
    '2025-07-17_06-41-44_UTC_6.jpg',
  ],
  customer_12: [
    '2025-07-05_02-32-56_UTC_1.jpg',
    '2025-07-05_02-32-56_UTC_2.jpg',
    '2025-07-05_02-32-56_UTC_3.jpg',
  ],
  customer_13: [
    '2025-07-05_02-30-45_UTC_1.jpg',
    '2025-07-05_02-30-45_UTC_2.jpg',
    '2025-07-05_02-30-45_UTC_3.jpg',
  ],
  customer_14: [
    '2025-07-05_02-27-29_UTC_1.jpg',
    '2025-07-05_02-27-29_UTC_2.jpg',
    '2025-07-05_02-27-29_UTC_3.jpg',
  ],
  customer_15: [
    '2025-06-22_08-05-41_UTC_1.jpg',
    '2025-06-22_08-05-41_UTC_2.jpg',
    '2025-06-22_08-05-41_UTC_3.jpg',
  ],
  customer_16: [
    '2025-06-22_08-04-06_UTC_1.jpg',
    '2025-06-22_08-04-06_UTC_2.jpg',
    '2025-06-22_08-04-06_UTC_3.jpg',
  ],
  customer_17: [
    '2025-06-22_08-03-34_UTC_1.jpg',
    '2025-06-22_08-03-34_UTC_2.jpg',
    '2025-06-22_08-03-34_UTC_3.jpg',
  ],
  customer_18: [
    '2025-06-15_09-32-23_UTC_1.jpg',
    '2025-06-15_09-32-23_UTC_2.jpg',
    '2025-06-15_09-32-23_UTC_3.jpg',
  ],
  customer_19: [
    '2025-06-15_09-20-46_UTC_1.jpg',
    '2025-06-15_09-20-46_UTC_2.jpg',
    '2025-06-15_09-20-46_UTC_3.jpg',
  ],
  customer_20: [
    '2025-07-21_07-09-19_UTC_1.jpg',
    '2025-07-21_07-09-19_UTC_2.jpg',
    '2025-07-21_07-09-19_UTC_3.jpg',
    '2025-07-21_07-09-19_UTC_4.jpg',
    '2025-07-21_07-09-19_UTC_5.jpg',
    '2025-07-21_07-09-19_UTC_6.jpg',
    '2025-07-21_07-09-19_UTC_7.jpg',
    '2025-07-21_07-09-19_UTC_8.jpg',
  ],
  customer_21: [
    '2025-05-07_00-05-08_UTC_1.jpg',
    '2025-05-07_00-05-08_UTC_2.jpg',
    '2025-05-07_00-05-08_UTC_3.jpg',
    '2025-05-07_00-31-42_UTC_1.jpg',
    '2025-05-07_00-31-42_UTC_2.jpg',
    '2025-05-07_00-31-42_UTC_3.jpg',
    '2025-05-07_00-33-36_UTC_1.jpg',
    '2025-05-07_00-33-36_UTC_2.jpg',
    '2025-05-07_00-33-36_UTC_3.jpg',
  ],
  customer_22: [
    '2025-05-06_01-59-53_UTC_3.jpg',
    '2025-05-06_02-06-29_UTC_1.jpg',
    '2025-05-06_02-06-29_UTC_2.jpg',
    '2025-05-06_02-06-29_UTC_3.jpg',
    '2025-05-06_02-08-33_UTC_1.jpg',
    '2025-05-06_02-08-33_UTC_2.jpg',
    '2025-05-06_02-08-33_UTC_3.jpg',
  ],
  customer_23: [
    '2025-05-06_01-59-53_UTC_1.jpg',
    '2025-05-06_01-59-53_UTC_2.jpg',
  ],
  customer_24: [
    '2025-05-06_01-40-58_UTC_2.jpg',
    '2025-05-06_01-40-58_UTC_3.jpg',
    '2025-05-06_01-43-39_UTC_1.jpg',
    '2025-05-06_01-43-39_UTC_2.jpg',
    '2025-05-06_01-43-39_UTC_3.jpg',
    '2025-05-06_01-44-58_UTC_1.jpg',
    '2025-05-06_01-44-58_UTC_2.jpg',
    '2025-05-06_01-44-58_UTC_3.jpg',
  ],
}

/**
 * Helper function to build full image paths for a customer folder
 * @param folderId - The customer folder ID (e.g., "customer_1")
 * @returns Array of full image paths (e.g., ["/portfolio/customer_1/image.jpg"])
 */
export function getImagePaths(folderId: string): string[] {
  const images = PORTFOLIO_IMAGES[folderId]
  if (!images) return []
  return images.map(filename => `/portfolio/${folderId}/${filename}`)
}

/**
 * Build a CustomerGallery object from a folder ID
 * @param folderId - The customer folder ID (e.g., "customer_1")
 * @returns CustomerGallery object or null if folder not found
 */
export function buildGallery(folderId: string): CustomerGallery | null {
  const images = PORTFOLIO_IMAGES[folderId]
  if (!images) return null
  
  const imagePaths = getImagePaths(folderId)
  return {
    id: folderId.toLowerCase(),
    folderName: folderId,
    images: imagePaths,
    imageCount: imagePaths.length,
  }
}

/**
 * Get all customer galleries
 * @returns Array of all CustomerGallery objects
 */
export function getAllGalleries(): CustomerGallery[] {
  return CUSTOMER_FOLDERS
    .map(folderId => buildGallery(folderId))
    .filter((gallery): gallery is CustomerGallery => gallery !== null)
}
