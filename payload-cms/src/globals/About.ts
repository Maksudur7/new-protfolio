import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Maksudur Rahaman — Full-Stack Developer',
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      required: true,
      defaultValue: 'Innovative Full-Stack Developer specializing in Next.js and scalable backend architecture. I build secure, role-based systems and high-performance web applications with a focus on maintainable code, strong data integrity, and real-world product delivery.',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      required: true,
      defaultValue: 'Based in Barishal, Bangladesh, I manage contractual projects from architecture through deployment. My process combines clean frontend design, efficient backend workflows, and secure authentication, so teams can move faster without compromising reliability.',
    },
    {
      name: 'paragraph3',
      type: 'textarea',
      required: true,
      defaultValue: 'I have hands-on experience with Prisma, Better-Auth, JWT, PostgreSQL, and AI API integrations, and I enjoy building systems that scale while staying easy to maintain.',
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'taglines',
      type: 'array',
      label: 'Identity Taglines',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats Cards',
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
      label: 'Feature Highlights',
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
          name: 'iconName',
          type: 'text',
          required: true,
          admin: {
            description: 'Lucide icon name (e.g., Shield, Code, Database, Zap)',
          }
        },
        {
          name: 'colorClass',
          type: 'text',
          required: true,
          defaultValue: 'text-primary',
          admin: {
            description: 'Tailwind text color class (e.g., text-red-500)',
          }
        },
      ],
    },
  ],
}
