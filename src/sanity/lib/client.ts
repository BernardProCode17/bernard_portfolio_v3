import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Revert to simpler client configuration to fix compatibility issues
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
