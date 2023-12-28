const home = {
  name: 'Maggie Wu',
  role: 'Computer Science Graduate',
  company: 'Oregon State University',
  description: [
    '[about me]',
  ],
  resume: 'https://pdf.ac/1ZTHMB',
  social: {
    linkedin: 'https://www.linkedin.com/in/maggielwu/',
    github: 'https://github.com/mlnwu',
  },
  greetingEmoji: '👋',
}

const about = [
{
  education: [
    'I recently graduated magna cum laude (c/o \'23) from Oregon State University with a Bachelor of Science in Computer Science. My first degree was from California Polytechnic State University - San Luis Obispo, where I graduated cum laude with a Bachelor of Science in Nutrition.',
  ],
  description: [
    'In my portfolio, you\'ll find a diverse collection of my work, where I take pleasure in crafting visually captivating pieces. Whether I\'m immersed in programming, digital design, or curating content for my Instagram reels, my passion for aesthetics shines through. As a perpetual learner, I\'m constantly pushing myself beyond comfort zones, embracing new challenges and exploring the boundaries of my skills.',
  ],
  skills: [
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'C++',
    'C',
    'SQL',
    'Kotlin',
    'Jetpack Compose',
    'MongoDB',
    'Mongoose',
    'React',
    'Node.js',
    'Express.js',
    'Next.js',
    'REST API',
    'Flask',
    'Git',
    'Linux',
  ],
},
]

const projects = [
  {
    thumbnail: 'images/codewise.png',
    name: 'Codewise',
    description: [
      'A software programming quiz website for employers to test incoming candidates.',
    ],
    stack: ['JavaScript', 'CSS', 'HTML', 'React', 'Express.js', 'Node.js', 'SQL', 'AWS Aurora'],
    sourceCode: 'https://github.com/mayacdsouza/codewise',
    pdfPreview: 'https://pdf.ac/2kzv6W',
    pdfPreview2: 'https://pdf.ac/IFMet',
    pdfPreview3: 'https://pdf.ac/2OOik5',
    // livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/biwu_fitness.png',
    name: 'Biwu Fitness',
    description: [
      'A gym management website to record member information, transactions, personal trainers, class schedules and enrollment.',
    ],
    stack: ['Python', 'HTML', 'CSS', 'SQL', 'Flask', 'Jinja2', 'Gunicorn'],
    sourceCode: 'https://github.com/mlnwu/osu-cs340-w23-biwu-fitness',
    pdfPreview: 'https://pdf.ac/2koS12',
  },
  {
    thumbnail: 'images/flight_search.png',
    name: 'Flight Search',
    description: [
      'An app that includes a search and favorite functionality. Users can view a list of destinations using that airport as a departure.',
    ],
    stack: ['SQL', 'Room', 'Kotlin', 'Jetpack Compose', 'Android Studio'],
    sourceCode: 'https://github.com/mlnwu/osu-cs492-su23-flight-search-app',
  },
  {
    thumbnail: 'images/otp.png',
    name: 'One-Time Pads',
    description: [
      'Programs that encrypt and decrypt information using a OTP-like system with socket-based interprocess communication.',
    ],
    stack: ['C', 'Shell', 'Linux', 'Unix', 'Sockets'],
    sourceCode: 'https://github.com/mlnwu/osu-cs344-sp23-otp',
  },
  {
    thumbnail: 'images/traceroute.png',
    name: 'Traceroute',
    description: [
      'A raw socket implementation of ICMP\'s ping to enhance ping accuracy and create traceroute functionality.',
    ],
    stack: ['Python', 'Internet Control Message Protocol', 'Linux', 'Unix', 'Sockets'],
    sourceCode: 'https://github.com/mlnwu/osu-cs372-sp23-traceroute',
  },
  {
    thumbnail: 'images/oen.png',
    name: 'Oen',
    description: [
      'A project brief and user journey map for Oen, an ambidextrous vertical mouse, as a solution for the ergonomic needs of desk workers.',
    ],
    stack: ['Figma',],
    pdfPreview: 'https://pdf.ac/2tIKiR',
    livePreview: 'https://www.figma.com/file/jnGursoij4vPwPqTsS6UAZ/Maggie-Wu---User-Journey-Map?node-id=0%3A1&t=ncbazdFP89UuDcpK-1',
  },
]

const contact = {
  email: 'maggielwu@gmail.com',
}

export { home, about, projects, contact }