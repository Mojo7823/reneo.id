/**
 * Portfolio Data Composable
 * 
 * Provides portfolio data and utility functions for accessing customer galleries.
 * 
 * Requirements: 2.2, 5.1, 5.2
 */

import { computed, type ComputedRef } from 'vue'
import {
  type CustomerGallery,
  CUSTOMER_FOLDERS,
  buildGallery,
} from '~/data/portfolioConfig'

export interface UsePortfolioReturn {
  /** All customer galleries */
  galleries: ComputedRef<CustomerGallery[]>
  /** Get a gallery by its ID */
  getGalleryById: (id: string) => CustomerGallery | undefined
  /** Get N most recent galleries for preview (sorted by recency - higher customer numbers first) */
  getPreviewGalleries: (count: number) => CustomerGallery[]
}

/**
 * Composable for accessing portfolio gallery data
 * 
 * @returns Portfolio data and utility functions
 * 
 * @example
 * ```vue
 * <script setup>
 * const { galleries, getPreviewGalleries } = usePortfolio()
 * const previews = getPreviewGalleries(6)
 * </script>
 * ```
 */
export function usePortfolio(): UsePortfolioReturn {
  /**
   * All customer galleries computed from configuration
   * Galleries are in order from customer_1 to customer_24
   */
  const galleries = computed<CustomerGallery[]>(() => {
    return CUSTOMER_FOLDERS
      .map(folderId => buildGallery(folderId))
      .filter((gallery): gallery is CustomerGallery => gallery !== null)
  })

  /**
   * Get a gallery by its ID (case-insensitive)
   * @param id - Gallery ID (e.g., "customer_1" or "Customer_1")
   * @returns The matching gallery or undefined
   */
  function getGalleryById(id: string): CustomerGallery | undefined {
    const normalizedId = id.toLowerCase()
    return galleries.value.find(g => g.id === normalizedId)
  }

  /**
   * Get N most recent galleries for homepage preview
   * Sorted by recency - assumes higher customer numbers are more recent
   * 
   * Requirements: 5.1 (exactly 6 previews), 5.2 (newest/most recent)
   * 
   * @param count - Number of galleries to return
   * @returns Array of most recent galleries
   */
  function getPreviewGalleries(count: number): CustomerGallery[] {
    // Sort by customer number descending (higher = more recent)
    // Extract number from id like "customer_1" -> 1
    const sorted = [...galleries.value].sort((a, b) => {
      const numA = extractCustomerNumber(a.id)
      const numB = extractCustomerNumber(b.id)
      return numB - numA // Descending order (newest first)
    })
    
    return sorted.slice(0, count)
  }

  return {
    galleries,
    getGalleryById,
    getPreviewGalleries,
  }
}

/**
 * Extract the customer number from a gallery ID
 * @param id - Gallery ID (e.g., "customer_1")
 * @returns The customer number or 0 if not found
 */
function extractCustomerNumber(id: string): number {
  const match = id.match(/customer_(\d+)/)
  return match && match[1] ? parseInt(match[1], 10) : 0
}

// Default export for auto-import
export default usePortfolio
