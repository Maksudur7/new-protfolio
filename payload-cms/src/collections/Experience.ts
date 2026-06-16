import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'company', 'period', 'order'],
  },
  access: {
    read: () => true, // Allows public (unauthenticated) read access
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      required: true,
      admin: {
        description: 'Emoji or simple icon string (e.g. 💼, 🔐, 🌍)',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
      required: true,
      admin: {
        description: 'E.g., "Mar 2026 - Present" or "6 Months"',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'E.g., "Bangladesh · Remote" or "Remote"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'skills',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Display order priority (lower numbers come first)',
      },
    },
  ],
}
