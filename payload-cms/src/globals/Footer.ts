import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer-section',
  access: {
    read: () => true, // Allows public (unauthenticated) read access
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      required: true,
      defaultValue: 'Final Touch',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Ready to build a polished digital experience together?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      defaultValue: 'maksudurrahamanmishu7@gmail.com',
    },
    {
      name: 'githubUrl',
      type: 'text',
      required: true,
      defaultValue: 'https://github.com/Maksudur7',
    },
    {
      name: 'githubLabel',
      type: 'text',
      required: true,
      defaultValue: 'github.com/Maksudur7',
    },
    {
      name: 'linkedinUrl',
      type: 'text',
      required: true,
      defaultValue: 'https://www.linkedin.com/in/maksudur-rahaman',
    },
    {
      name: 'linkedinLabel',
      type: 'text',
      required: true,
      defaultValue: 'linkedin.com/in/maksudur-rahaman',
    },
    {
      name: 'copyrightText',
      type: 'text',
      required: true,
      defaultValue: 'Maksudur Rahaman. Designed with a polished dark + white theme.',
    },
  ],
}
