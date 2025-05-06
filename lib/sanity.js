import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '5wticuvb',   // ← replace with your actual ID
  dataset: 'production',
  useCdn: true,                   // `true` = faster, cached
  apiVersion: '2023-05-03',       // use today’s date or your schema change date
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {

  return builder.image(source)
  
}