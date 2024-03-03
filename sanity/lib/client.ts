import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion : "v2024-02-19",
  dataset : "production",
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token:process.env.NEXT_SANITY_TOKEN,
  useCdn:true,
})
