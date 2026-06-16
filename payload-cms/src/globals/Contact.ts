import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact-section',
  access: {
    read: () => true, // Allows public (unauthenticated) read access
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'conversationHeading',
      type: 'text',
      required: true,
      defaultValue: "Let's Start a Conversation",
    },
    {
      name: 'conversationText',
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
      name: 'phone',
      type: 'text',
      required: true,
      defaultValue: '+8801880829496',
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      defaultValue: '8801315906086',
    },
    {
      name: 'responseTime',
      type: 'text',
      required: true,
      defaultValue: 'Within 24 hours',
    },
  ],
}
