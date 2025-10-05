import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Create a more optimized client with proper CDN usage to improve performance
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for better performance
  perspective: 'published',
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/studioAdmin',
  },
})
