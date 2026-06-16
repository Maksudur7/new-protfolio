import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'folder',
      type: 'relationship',
      relationTo: 'folders',
    },
    {
      name: 'tag',
      type: 'relationship',
      relationTo: 'tags',
    },
  ],
  upload: true,
}
