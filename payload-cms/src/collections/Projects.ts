import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'featuredOrder'],
  },
  access: {
    read: () => true, // Allows public (unauthenticated) access to fetch project data
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'imageLink',
      type: 'text',
      required: true,
      admin: {
        description: 'Direct link to project cover image (e.g. from ibb.co, imgur, or local public path)',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
    },
    {
      name: 'githubUrl',
      type: 'text',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'featuredOrder',
      type: 'number',
      admin: {
        condition: (data) => Boolean(data?.featured), // Show only if 'featured' checkbox is checked
        description: 'Order of priority for featured projects (lower numbers come first)',
      },
    },
    {
      name: 'technologies',
      type: 'array',
      required: true,
      admin: {
        description: 'List the tech stack used in this project (e.g. Next.js, Tailwind, Postgres)',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        description: 'Select tags for this project (e.g. maksudur rahaman)',
      },
    },
    {
      name: 'stats',
      type: 'group',
      fields: [
        {
          name: 'stars',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'users',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'completion',
          type: 'number',
          defaultValue: 100,
          admin: {
            description: 'Percentage of project completion (e.g., 100)',
          },
        },
      ],
    },
  ],
}
