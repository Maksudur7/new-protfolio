import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero-section',
  access: {
    read: () => true, // Allows public (unauthenticated) read access
  },
  fields: [
    {
      name: 'helloText',
      type: 'text',
      required: true,
      defaultValue: 'Hello! I am',
    },
    {
      name: 'developerName',
      type: 'text',
      required: true,
      defaultValue: 'Maksudur Rahaman',
    },
    {
      name: 'roles',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'role',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'heading',
      type: 'textarea',
      required: true,
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
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: {
            description: 'SVG URL or base64 data string for the skill icon',
          },
        },
      ],
    },
    {
      name: 'cvUrl',
      type: 'text',
      defaultValue: '/maksudur-rahaman.pdf',
    },
    {
      name: 'imageLink',
      type: 'text',
      required: true,
    },
    {
      name: 'linkedinUrl',
      type: 'text',
      defaultValue: 'https://www.linkedin.com/in/maksudur-rahaman',
    },
    {
      name: 'githubUrl',
      type: 'text',
      defaultValue: 'https://github.com/Maksudur7',
    },
    {
      name: 'email',
      type: 'text',
      defaultValue: 'maksudurrahamanmishu7@gmail.com',
    },
  ],
}
