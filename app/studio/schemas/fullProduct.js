import { defineType } from 'sanity'

export const fullProduct = defineType({
  name: 'FullProduct',
  title: 'FullProduct',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'allFeatures',
      title: 'All features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'learnMoreUrl',
      title: 'Learn More Link',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'text',
    },
    {
      name: 'callToAction',
      title: 'Call to Action',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc) => (doc.name?.split(' ')[0].toLowerCase() + doc.name?.split(' ')[1].toLowerCase()), // Figure out solution to prevent doubles
        maxLength: 96 
      },
      validation: Rule => Rule.required()
    }
  ],
})
