import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about-section',
  access: {
    read: () => true, // Allows public (unauthenticated) read access
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      required: true,
      defaultValue: 'About Me',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Maksudur Rahaman — Full-Stack Developer',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'introParagraphs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'identityLabel',
      type: 'text',
      required: true,
      defaultValue: 'Portfolio Identity',
    },
    {
      name: 'identityHeading',
      type: 'text',
      required: true,
      defaultValue: 'Design meets code.',
    },
    {
      name: 'identityLocation',
      type: 'text',
      required: true,
      defaultValue: 'Barishal, Bangladesh · +8801880829496',
    },
    {
      name: 'identityBulletPoints',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'quoteText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: ['Shield', 'Code', 'Database', 'Zap'],
        },
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
          name: 'color',
          type: 'text',
          required: true,
          admin: {
            description: 'CSS text color class (e.g. text-red-500 or text-purple-500)',
          },
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'period',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
