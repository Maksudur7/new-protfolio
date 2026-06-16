import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

const seed = async () => {
  console.log('Starting database seeding...')
  const payload = await getPayload({ config })

  // 1. Seed Admin User (only if it doesn't exist)
  const users = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@portfolio.com',
      },
    },
  })

  if (users.totalDocs === 0) {
    console.log('Creating default admin user...')
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@portfolio.com',
        password: 'adminpassword123',
      },
    })
    console.log('Admin user created: admin@portfolio.com / adminpassword123')
  } else {
    console.log('Admin user already exists.')
  }

  // 2. Seed Tags (only if empty)
  const existingTags = await payload.find({
    collection: 'tags',
    limit: 1,
  })

  let tagMaksudurId: string = ''
  let tagFullStackId: string = ''

  if (existingTags.totalDocs === 0) {
    console.log('Seeding tags...')
    const tagMaksudur = await payload.create({
      collection: 'tags',
      data: {
        name: 'maksudur rahaman',
      },
    })
    tagMaksudurId = tagMaksudur.id

    const tagFullStack = await payload.create({
      collection: 'tags',
      data: {
        name: 'Full-Stack',
      },
    })
    tagFullStackId = tagFullStack.id
    console.log('Seeded tags.')
  } else {
    console.log('Tags already exist.')
    const tagsList = await payload.find({
      collection: 'tags',
      limit: 10,
    })
    const findMaksudur = tagsList.docs.find(t => t.name === 'maksudur rahaman')
    const findFullStack = tagsList.docs.find(t => t.name === 'Full-Stack')
    tagMaksudurId = findMaksudur ? findMaksudur.id : ''
    tagFullStackId = findFullStack ? findFullStack.id : ''
  }

  // 3. Seed Projects (only if projects collection is empty)
  const projects = await payload.find({
    collection: 'projects',
    limit: 1,
  })

  if (projects.totalDocs === 0) {
    console.log('Seeding portfolio projects...')
    
    const projectsData = [
      {
        title: 'NGV - Video Streaming Platform',
        description: 'A modern, fully dynamic video streaming platform with 11+ responsive pages, advanced filtering, and a comprehensive admin dashboard. Features high-performance media listing, user watch history, and rental/subscription flows.',
        category: 'Full-Stack App',
        imageLink: 'https://i.ibb.co.com/6JV74646/ngv.png',
        liveUrl: 'https://ngv-black.vercel.app',
        githubUrl: 'https://github.com/Maksudur7/assinment5',
        featured: true,
        featuredOrder: 1,
        technologies: [
          { name: 'Next.js 16' },
          { name: 'React 19' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'Better Auth' },
          { name: 'Radix UI' }
        ],
        stats: {
          stars: 45,
          users: 120,
          completion: 85
        },
        tags: tagMaksudurId && tagFullStackId ? [tagMaksudurId, tagFullStackId] : []
      },
      {
        title: 'Student Hub Platform',
        description: 'A comprehensive web platform for students featuring user authentication, content management, and feedback systems. Built with modern MERN stack technologies for seamless user experience and scalable architecture.',
        category: 'Full-Stack Web App',
        imageLink: 'https://i.ibb.co.com/nq8rnJmr/studenthub.png',
        liveUrl: 'https://studyhub-f26cc.web.app',
        githubUrl: 'https://github.com/Maksudur7/Study-Hub',
        featured: true,
        featuredOrder: 2,
        technologies: [
          { name: 'React.js' },
          { name: 'Node.js' },
          { name: 'Express.js' },
          { name: 'MongoDB' },
          { name: 'Tailwind CSS' }
        ],
        stats: {
          stars: 24,
          users: 150,
          completion: 100
        },
        tags: tagFullStackId ? [tagFullStackId] : []
      },
      {
        title: 'MediStore - Premium Online Pharmacy',
        description: 'A sophisticated healthcare e-commerce platform built with Next.js 15. Features a premium dark-themed UI, real-time cart management, and a multi-step checkout process. Optimized for lightning-fast medicine browsing and secure OTC purchases.',
        category: 'E-Commerce',
        imageLink: 'https://i.ibb.co.com/k2B4h3Y6/madistore.png',
        liveUrl: 'https://medistore-woad.vercel.app',
        githubUrl: 'https://github.com/Maksudur7/MediStore-Frontend',
        featured: false,
        technologies: [
          { name: 'Next.js 15' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'Framer Motion' },
          { name: 'Context API' }
        ],
        stats: {
          stars: 12,
          users: 50,
          completion: 100
        },
        tags: []
      },
      {
        title: 'ConnectMe VPN - Reseller Panel',
        description: 'A professional VPN management and reseller platform. It provides real-time user management, bandwidth monitoring, and a seamless dashboard for administrators and sub-resellers to manage connections efficiently.',
        category: 'Admin Panel',
        imageLink: 'https://i.ibb.co.com/tp4nhNbj/connect-me.png',
        liveUrl: 'https://reseller.cntbdvpn.win',
        githubUrl: 'https://github.com/Maksudur7',
        featured: false,
        technologies: [
          { name: 'Node.js' },
          { name: 'Express.js' },
          { name: 'React' },
          { name: 'MongoDB' },
          { name: 'REST API' }
        ],
        stats: {
          stars: 15,
          users: 450,
          completion: 100
        },
        tags: []
      },
      {
        title: 'WeatherWise Analytics',
        description: 'Advanced weather application with detailed forecasts, historical data visualization, and location-based insights with beautiful data representations.',
        category: 'Data Visualization',
        imageLink: '/api/placeholder/600/400',
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        technologies: [
          { name: 'Vue.js' },
          { name: 'D3.js' },
          { name: 'Express' },
          { name: 'OpenWeather API' }
        ],
        stats: {
          stars: 8,
          users: 120,
          completion: 92
        },
        tags: []
      }
    ]

    for (const project of projectsData) {
      await payload.create({
        collection: 'projects',
        data: project,
      })
      console.log(`Seeded project: ${project.title}`)
    }
    console.log('All projects seeded successfully!')
  } else {
    console.log('Projects already exist in the database, skipping project seeding.')
  }

  // 4. Seed Experiences (only if experiences collection is empty)
  const existingExperiences = await payload.find({
    collection: 'experiences',
    limit: 1,
  })

  if (existingExperiences.totalDocs === 0) {
    console.log('Seeding experiences timeline...')
    const experiencesData = [
      {
        icon: '💼',
        title: 'Frontend Developer',
        company: 'DALONEXT',
        period: 'Mar 2026 - Present',
        location: 'Bangladesh · Remote',
        description: 'Building responsive, production-ready interfaces using React.js, Next.js, and Tailwind CSS while collaborating with backend teams.',
        skills: [
          { name: 'Next.js' },
          { name: 'React.js' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'Responsive UI' }
        ],
        order: 1
      },
      {
        icon: '🔐',
        title: 'Backend Developer (Contractual)',
        company: 'Gurdia-Auth Project',
        period: 'Oct 2024 - Nov 2024',
        location: 'Remote',
        description: 'Designed a secure authentication platform with Better-Auth, Prisma ORM, PostgreSQL, and RBAC for enterprise access control.',
        skills: [
          { name: 'Better-Auth' },
          { name: 'Prisma' },
          { name: 'PostgreSQL' },
          { name: 'RBAC' },
          { name: 'JWT' }
        ],
        order: 2
      },
      {
        icon: '🌍',
        title: 'MERN Stack Developer (Intern)',
        company: 'Airepro Solution Pvt Ltd',
        period: 'Apr 2024 - Aug 2024',
        location: 'India · Remote',
        description: 'Developed reusable UI components with Tailwind CSS, optimized API integration logic, and improved UX with React Query.',
        skills: [
          { name: 'React.js' },
          { name: 'Node.js' },
          { name: 'Express.js' },
          { name: 'React Query' },
          { name: 'Tailwind CSS' }
        ],
        order: 3
      },
      {
        icon: '🏫',
        title: 'Industrial Attachment',
        company: 'EPD IT Solutions',
        period: '6 Months',
        location: 'Barishal',
        description: 'Supported full-stack development workflows by building responsive layouts, integrating backend APIs, and applying debugging best practices.',
        skills: [
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'JavaScript' },
          { name: 'API Integration' },
          { name: 'Debugging' }
        ],
        order: 4
      }
    ]

    for (const exp of experiencesData) {
      await payload.create({
        collection: 'experiences',
        data: exp,
      })
      console.log(`Seeded experience: ${exp.title} at ${exp.company}`)
    }
  } else {
    console.log('Experiences timeline already exists, skipping seeding.')
  }

  // 5. Seed Globals
  console.log('Seeding globals (Hero, About, Contact, Footer)...')

  await payload.updateGlobal({
    slug: 'hero-section',
    data: {
      helloText: 'Hello! I am',
      developerName: 'Maksudur Rahaman',
      roles: [
        { role: 'Full-Stack Developer' },
        { role: 'Next.js & React Expert' },
        { role: 'Secure Backend Architect' },
        { role: 'Mern-Stack Developer' },
        { role: 'Pern-Stack Developer' }
      ],
      heading: 'I build secure, scalable web applications with modern frontend and backend architecture.',
      description: 'I deliver production-ready apps using Next.js, Nest.js, Prisma, PostgreSQL, and Tailwind CSS, with a strong focus on RBAC, performance, and AI-enabled workflows.',
      skills: [
        { name: 'React.js', icon: 'https://skillicons.dev/icons?i=react' },
        { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
        { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript' },
        { name: 'JavaScript (ES6+)', icon: 'https://skillicons.dev/icons?i=javascript' },
        { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
        { name: 'D3.js', icon: 'https://skillicons.dev/icons?i=d3' },
        { name: 'Material UI', icon: 'https://skillicons.dev/icons?i=materialui' },
        { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
        { name: 'Express.js', icon: 'https://skillicons.dev/icons?i=express' },
        { name: 'Nest.js', icon: 'https://skillicons.dev/icons?i=nest' },
        { name: 'Prisma ORM', icon: 'https://skillicons.dev/icons?i=prisma' },
        { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql' },
        { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
        { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
        { name: 'Redis', icon: 'https://skillicons.dev/icons?i=redis' },
        { name: 'Better-Auth', icon: 'https://raw.githubusercontent.com/better-auth/better-auth/main/assets/logo.png' },
        { name: 'JWT', icon: 'https://jwt.io/img/pic_logo.svg' },
        { name: 'Auth0', icon: 'https://cdn.auth0.com/website/press/resources/auth0-logo-monochrome.svg' },
        { name: 'Firebase Auth', icon: 'https://skillicons.dev/icons?i=firebase' },
        { name: 'Bcrypt', icon: 'https://raw.githubusercontent.com/dchest/bcrypt-pbkdf/master/logo.png' },
        { name: 'SSLCommerz', icon: 'https://sslcommerz.com/wp-content/uploads/2019/11/logo.png' }
      ],
      cvUrl: '/maksudur-rahaman.pdf',
      imageLink: 'https://i.ibb.co.com/k2JR21GB/your-image-name-removebg-preview.png',
      linkedinUrl: 'https://www.linkedin.com/in/maksudur-rahaman',
      githubUrl: 'https://github.com/Maksudur7',
      email: 'maksudurrahamanmishu7@gmail.com'
    }
  })

  await payload.updateGlobal({
    slug: 'about-section',
    data: {
      badgeText: 'About Me',
      title: 'Maksudur Rahaman — Full-Stack Developer',
      description: 'Innovative Full-Stack Developer specializing in Next.js and scalable backend architecture. I build secure, role-based systems and high-performance web applications with a focus on maintainable code, strong data integrity, and real-world product delivery.',
      introParagraphs: [
        { paragraph: 'Based in Barishal, Bangladesh, I manage contractual projects from architecture through deployment. My process combines clean frontend design, efficient backend workflows, and secure authentication, so teams can move faster without compromising reliability.' },
        { paragraph: 'I have hands-on experience with Prisma, Better-Auth, JWT, PostgreSQL, and AI API integrations, and I enjoy building systems that scale while staying easy to maintain.' }
      ],
      identityLabel: 'Portfolio Identity',
      identityHeading: 'Design meets code.',
      identityLocation: 'Barishal, Bangladesh · +8801880829496',
      identityBulletPoints: [
        { point: 'Contract backend work with Better-Auth, Prisma & PostgreSQL' },
        { point: 'Experienced in Next.js App Router, Nest.js, RBAC, and AI integrations' }
      ],
      quoteText: 'I turn ideas into complete experiences — from wireframes to deployment. Every project is crafted to be intuitive, responsive, and memorable.',
      stats: [
        { number: '10+', label: 'Projects Completed' },
        { number: '1+', label: 'Years Experience' },
        { number: '1+', label: 'Contract Projects' },
        { number: '3+', label: 'AI & Real-Time Systems' }
      ],
      features: [
        {
          icon: 'Shield',
          title: 'Security-First Architecture',
          description: 'Building RBAC, JWT, and Better-Auth solutions for secure, production-ready systems.',
          color: 'text-red-500'
        },
        {
          icon: 'Code',
          title: 'Next.js & React Expertise',
          description: 'Developing polished interfaces with Next.js App Router, React, and Tailwind CSS.',
          color: 'text-slate-900'
        },
        {
          icon: 'Database',
          title: 'Prisma & PostgreSQL',
          description: 'Designing scalable schemas and optimized queries for reliable backend performance.',
          color: 'text-sky-500'
        },
        {
          icon: 'Zap',
          title: 'AI & Real-Time Integrations',
          description: 'Connecting OpenAI, Socket.io, and automation for smarter user experiences.',
          color: 'text-purple-500'
        }
      ],
      education: [
        { title: 'B.Sc. in CSE · Uttara University', period: '2026 – 2029 (Ongoing)' },
        { title: 'Diploma in Computer Technology · Barisal Polytechnic Institute', period: '2021 – 2025' },
        { title: 'Programming Hero · Full-Stack Web Development', period: '2023 – 2024' },
        { title: 'Sheikh Kamal IT Training · Professional Web Development', period: '2022 – 2023' }
      ]
    }
  })

  await payload.updateGlobal({
    slug: 'contact-section',
    data: {
      badgeText: "Let's Connect",
      title: 'Get In Touch',
      description: "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.",
      conversationHeading: "Let's Start a Conversation",
      conversationText: "I'm always excited to work on new projects and meet interesting people. Whether you have a specific project in mind or just want to say hello, don't hesitate to reach out.",
      email: 'maksudurrahamanmishu7@gmail.com',
      phone: '+8801880829496',
      whatsapp: '8801315906086',
      responseTime: 'Within 24 hours'
    }
  })

  await payload.updateGlobal({
    slug: 'footer-section',
    data: {
      badgeText: 'Final Touch',
      title: 'Ready to build a polished digital experience together?',
      description: 'I create modern web products with clean UX, fast performance, and a refined dark + white visual system. Let’s turn your idea into a memorable website.',
      email: 'maksudurrahamanmishu7@gmail.com',
      githubUrl: 'https://github.com/Maksudur7',
      githubLabel: 'github.com/Maksudur7',
      linkedinUrl: 'https://www.linkedin.com/in/maksudur-rahaman',
      linkedinLabel: 'linkedin.com/in/maksudur-rahaman',
      copyrightText: 'Maksudur Rahaman. Designed with a polished dark + white theme.'
    }
  })

  console.log('Globals seeded successfully!')
  console.log('Seeding process complete.')
  process.exit(0)
}

seed()
