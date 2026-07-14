import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      required: true,
      defaultValue: "Let's Connect",
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Get In Touch',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue: "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.",
    },
    {
      name: 'conversationTitle',
      type: 'text',
      required: true,
      defaultValue: "Let's Start a Conversation",
    },
    {
      name: 'conversationText',
      type: 'textarea',
      required: true,
      defaultValue: "I'm always excited to work on new projects and meet interesting people. Whether you have a specific project in mind or just want to say hello, don't hesitate to reach out.",
    },
    {
      name: 'contactInfo',
      type: 'array',
      label: 'Contact Info Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'iconName',
          type: 'text',
          required: true,
          admin: {
            description: 'Lucide icon name (e.g., Mail, Phone, MessageSquare, Clock)',
          }
        },
        {
          name: 'colorClass',
          type: 'text',
          required: true,
          defaultValue: 'text-primary',
        },
      ],
    },
    {
      name: 'formHeading',
      type: 'text',
      required: true,
      defaultValue: 'Send Me a Message',
    },
    {
      name: 'formSubheading',
      type: 'text',
      required: true,
      defaultValue: "Fill out the form below and I'll get back to you as soon as possible",
    },
  ],
}
