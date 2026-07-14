import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'greeting',
      type: 'text',
      required: true,
      defaultValue: 'Hello! I am',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'Maksudur Rahaman',
    },
    {
      name: 'roles',
      type: 'array',
      label: 'Rotating Roles',
      minRows: 1,
      fields: [
        {
          name: 'role',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'headline',
      type: 'textarea',
      required: true,
      defaultValue: 'I build secure, scalable web applications with modern frontend and backend architecture.',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'I deliver production-ready apps using Next.js, Nest.js, Prisma, PostgreSQL, and Tailwind CSS, with a strong focus on RBAC, performance, and AI-enabled workflows.',
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'cvLink',
      type: 'text',
      label: 'Download CV Link',
      required: true,
      defaultValue: '/maksudur-rahaman.pdf',
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills Icons',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'iconUrl',
          type: 'text',
          required: true,
          admin: {
            description: 'Can be a base64 string or an image URL (e.g., https://skillicons.dev/icons?i=react)',
          }
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['LinkedIn', 'GitHub', 'Email'],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
