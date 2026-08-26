const B = import.meta.env.BASE_URL

export const profile = {
  name: 'AbdElgwad Habib',
  fullName: 'AbdElgwad Mohamed Habib',
  role: 'Penetration Tester',
  location: 'Tanta, Egypt',
  email: 'abdelgwadhabib5122004@gmail.com',
  phone: '+20 102 155 1718',
  github: 'https://github.com/Abdelgwad-Habib',
  linkedin: 'https://linkedin.com/in/abdelgwad-habib',
  photo: `${B}profile.jpg`,
  cv: `${B}cv.pdf`,
}

export const roles = [
  'break & secure systems',
  'hunt web vulnerabilities',
  'solve CTF challenges',
  'automate with Bash',
  'compete at ICPC contests',
]

export const stats = [
  { value: 120, suffix: '+', label: 'Problems Solved' },
  { value: 20, suffix: '+', label: 'CTFs & Labs' },
  { value: 160, suffix: 'h', label: 'Pentest Training' },
  { value: 97, suffix: '%', label: 'NTI Score' },
]

export const about = {
  paragraphs: [
    'I am a Computer Science student at Tanta University obsessed with the offensive side of security — breaking web apps with the OWASP Top 10, enumerating DNS with my own tooling, and hardening Linux boxes until they stop talking.',
    'When I am not in a CTF, I am solving algorithm problems (120+ and counting, with a 30-day streak) or building tools in C++, Python and Bash. I competed at ECPC and the Africa & Arab Collegiate Programming Championship (ACPC).',
  ],
  facts: [
    { label: 'degree', value: 'B.Sc. Computer Science — Tanta University (2023 → 2027)' },
    { label: 'focus', value: 'Web Penetration Testing · OWASP Top 10' },
    { label: 'languages', value: 'Arabic (Native) · English (B2 — AUC assessed)' },
    { label: 'currently', value: 'TryHackMe · CyberShield labs · Codeforces' },
  ],
}

export const experience = [
  {
    period: 'Jul 2025 — Aug 2025',
    title: 'Network Infrastructure Intern',
    org: 'NTI — National Telecommunication Institute',
    location: 'Cairo, Egypt',
    points: [
      'Completed a 120-hour intensive training covering network fundamentals, routing and switching.',
      'Applied VLANs, static routing and subnetting in a hands-on project simulating real infrastructure.',
      'Graduated with a 97% final evaluation score.',
    ],
    tags: ['Networking', 'VLANs', 'Static Routing', 'Subnetting'],
  },
  {
    period: 'Jan 2024 — Present',
    title: 'Junior Penetration Tester & Security Enthusiast',
    org: 'Self-Learning · TryHackMe · CyberShield',
    location: 'Remote',
    points: [
      'Studying offensive security through TryHackMe and CyberShield — 10+ labs and CTFs solved.',
      'Built Phoenix, a Bash DNS enumeration tool used in lab assessments.',
      'Daily-driving Nmap, Wireshark and Burp Suite while advancing in scripting, Linux hardening and automation.',
    ],
    tags: ['Pentesting', 'OWASP Top 10', 'Linux', 'Burp Suite'],
  },
  {
    period: '2023 — Present',
    title: 'Competitive Programmer — ECPC / ACPC',
    org: 'ICPC Community · Codeforces · VJudge',
    location: 'Egypt',
    points: [
      'Solved 120+ algorithm problems with a 30-day streak on Codeforces and VJudge.',
      'Competed at the Egyptian Collegiate Programming Contest on the road to ACPC — the Africa & Arab Championship.',
      'Built OOP applications in C++ around key data structures.',
    ],
    tags: ['C++', 'Algorithms', 'ICPC', 'Data Structures'],
  },
]

export const projects = [
  {
    title: 'Phoenix — DNS Enumeration Tool',
    description:
      'A Bash tool that automates forward & reverse lookups and zone-transfer attempts against lab targets. My daily driver during DNS recon labs.',
    tags: ['Bash', 'DNS Recon', 'Linux CLI'],
    icon: 'radar',
    featured: true,
  },
  {
    title: 'Small Network Infrastructure',
    description:
      'Designed and implemented a small-scale network with VLANs, static routing and subnetting — then tested connectivity and optimized IP allocation.',
    tags: ['VLAN', 'Routing', 'Subnetting'],
    icon: 'network',
  },
  {
    title: 'Pharmacy Management System',
    description:
      'Console-based C++ system built on OOP: inventory, billing, reporting and persistent file storage with strong input validation.',
    tags: ['C++', 'OOP', 'File Handling'],
    icon: 'database',
  },
  {
    title: 'Mini OOP & Data Structures Apps',
    description:
      'A collection of educational C++ apps applying custom classes and core data structures — stacks, queues and beyond.',
    tags: ['C++', 'DSA', 'OOP'],
    icon: 'braces',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { icon: 'code', label: 'C++', color: '#00ff9d' },
      { icon: 'filecode', label: 'Python', color: '#22d3ee' },
      { icon: 'coffee', label: 'Java', color: '#a78bfa' },
      { icon: 'terminal', label: 'Bash', color: '#facc15' },
      { icon: 'globe', label: 'HTML', color: '#fb923c' },
    ],
  },
  {
    title: 'Tools & Tech',
    items: [
      { icon: 'shield', label: 'Kali Linux', color: '#00ff9d' },
      { icon: 'radar', label: 'Nmap', color: '#22d3ee' },
      { icon: 'activity', label: 'Wireshark', color: '#a78bfa' },
      { icon: 'bug', label: 'Burp Suite', color: '#ff3355' },
      { icon: 'git', label: 'Git & GitHub', color: '#f472b6' },
      { icon: 'cpu', label: 'VS Code', color: '#38bdf8' },
    ],
  },
  {
    title: 'Security',
    items: [
      { icon: 'shieldcheck', label: 'OWASP Top 10', color: '#00ff9d' },
      { icon: 'globe', label: 'Web Pentesting', color: '#22d3ee' },
      { icon: 'search', label: 'DNS Enumeration', color: '#facc15' },
      { icon: 'lock', label: 'Linux Hardening', color: '#a78bfa' },
      { icon: 'flag', label: 'CTF — 20+', color: '#ff3355' },
      { icon: 'brain', label: 'Problem Solving', color: '#38bdf8' },
    ],
  },
]

export const marqueeItems = [
  'Kali Linux',
  'Nmap',
  'Wireshark',
  'Burp Suite',
  'OWASP Top 10',
  'TryHackMe',
  'CyberShield',
  'Codeforces',
  'C++',
  'Python',
  'Bash',
  'Linux Hardening',
  'DNS Enumeration',
  'Subnetting',
  'Git & GitHub',
]

export const certificates = [
  {
    title: 'Web Penetration Testing',
    issuer: 'International Professionalism Academy (IPA)',
    meta: '160 hrs · Awarded with Distinction',
    date: 'Aug 2025',
    file: `${B}certs/web-pentesting-ipa.pdf`,
    featured: true,
  },
  {
    title: 'Network Infrastructure',
    issuer: 'NTI Summer Training',
    meta: '120 hrs · Score 97%',
    date: 'Jul — Aug 2025',
    file: `${B}certs/network-infrastructure-nti.pdf`,
  },
  {
    title: 'Pre-Security',
    issuer: 'TryHackMe',
    meta: '40 hrs',
    date: '',
    file: `${B}certs/pre-security-thm.webp`,
  },
  {
    title: 'Introduction to Cyber Security',
    issuer: 'TryHackMe',
    meta: '24 hrs',
    date: '',
    file: `${B}certs/intro-cybersecurity-thm.webp`,
  },
  {
    title: 'Python for Security',
    issuer: 'Self-Study',
    meta: '25 hrs',
    date: '',
    file: `${B}certs/python-for-security.pdf`,
  },
  {
    title: 'Security+',
    issuer: 'Self-Study',
    meta: '21 hrs',
    date: '',
  },
  {
    title: 'Linux+',
    issuer: 'Self-Study',
    meta: '20 hrs',
    date: '',
  },
  {
    title: 'Network+',
    issuer: 'Self-Study',
    meta: '40 hrs',
    date: '',
    file: `${B}certs/network-plus.webp`,
  },
  {
    title: 'Fundamentals of Linux',
    issuer: 'Udemy',
    meta: '15 hrs',
    date: '',
    file: `${B}certs/fundamentals-of-linux.webp`,
  },
]
