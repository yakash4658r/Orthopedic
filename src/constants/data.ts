// ─── BRAND ────────────────────────────────────────────────────────
export const BRAND = {
  name: 'Ortho3Trio',
  tagline: 'Three Specialists. One Spine-to-Sole Promise.',
  phone: '+91 94448 53737',
  email: 'care@ortho3trio.com',
  whatsapp: '919444853737',
};

// ─── NAVIGATION ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// ─── HERO BANNERS (Swiper) ────────────────────────────────────────
export const HERO_BANNERS = [
  {
    id: 1,
    doctorName: 'THREE SPECIALISTS.',
    credentials: 'ONE SPINE-TO-SOLE PROMISE.',
    bullets: [
      'Ortho3Trio brings together three of Chennai\'s most trusted orthopaedic surgeons',
      '35+ Years Combined Surgical Experience',
      '7,000+ Successful Surgeries Performed',
      'One Roof. Every Joint. No Guesswork.'
    ],
    cta: { label: 'MEET THE TEAM', href: '#about-section' },
    bg: import.meta.env.BASE_URL + 'All-together.png',
  },
  {
    id: 2,
    doctorName: 'DR. PARTHASARATHY SRINIVASAN',
    credentials: 'SPINE SURGEON',
    bullets: [
      '1,500+ successful spine surgeries performed',
      'Minimally invasive & endoscopic techniques',
      'Disc problems, spinal deformity & fractures',
      'Helping patients avoid long, painful recoveries'
    ],
    cta: { label: 'ABOUT DR. PARTHASARATHY', href: '#about-section' },
    bg: import.meta.env.BASE_URL + 'spine_banner.png',
  },
  {
    id: 3,
    doctorName: 'DR. PRAKASH AYYADURAI',
    credentials: 'SPORTS INJURY & ARTHROSCOPY',
    bullets: [
      'Former state and university-level athlete',
      'Treats knee, shoulder, ankle, wrist and hip injuries',
      'Pioneer in synthetic ACL and PCL reconstruction',
      'Helping you get back in the game safely'
    ],
    cta: { label: 'ABOUT DR. PRAKASH', href: '#about-section' },
    bg: import.meta.env.BASE_URL + 'knee_banner.png',
  },
  {
    id: 4,
    doctorName: 'DR. ASHOK S. GAVASKAR',
    credentials: 'JOINT REPLACEMENT & TRAUMA',
    bullets: [
      'Internationally trained, award-winning surgeon',
      'Over 20+ years of complex surgical experience',
      'Specializes in joint replacement and deformity correction',
      'Recognised among India\'s top trauma specialists'
    ],
    cta: { label: 'ABOUT DR. ASHOK', href: '#about-section' },
    bg: import.meta.env.BASE_URL + 'joint_replacement_banner.png',
  },
];

// ─── DOCTORS ──────────────────────────────────────────────────────
export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Prakash Ayyadurai',
    designation: 'Sports Medicine, Arthroscopy & Ligament Reconstruction Specialist',
    credentials: 'MS (Orth), Fellowship in Arthroscopy & Sports Medicine (Germany & USA)',
    note: 'Clinical Lead, Arthroscopy & Sports Medicine at Rela Hospital',
    specialty: 'Personalised ACL & PCL reconstruction · Shoulder arthroscopy & instability repair',
    experience: '18+ Years',
    image: import.meta.env.BASE_URL + 'images/Prakash Ayyadurai.png',
    available: true,
    bio: 'Dr. Prakash Ayyadurai specialises in arthroscopy and ligament reconstruction of the knee, shoulder, ankle, wrist and hip. He currently serves as Clinical Lead, Arthroscopy & Sports Medicine at Dr. Rela Institute & Medical Centre, and is a Visiting Professor at Sri Ramachandra Centre for Sports Science. He was among the first surgeons in India to introduce synthetic ACL and PCL ligament reconstruction.',
    achievements: [
      'Architect and co-convener of the Indian Ligament Registry',
      'Over 4,000 ACL reconstructions and 2,000+ shoulder dislocation repairs',
      'Former competitive athlete (state-level field hockey, marathons)',
      'Pioneer in synthetic ligament surgery & InSpace balloon implants',
    ],
    subspecialty: 'Sports Injury & Arthroscopy',
  },
  {
    id: 2,
    name: 'Dr. Parthasarathy Srinivasan',
    designation: 'Spine Surgeon',
    credentials: 'D.Ortho, DNB (Ortho), FNB (Spine Surgery), MNAMS',
    note: '12+ Years · 1500+ Spine Surgeries · APOA DePuy Spine Fellowship (2009)',
    specialty: 'Minimally Invasive Spine Surgery · Endoscopic Spine Surgery · Spinal Deformity',
    experience: '12+ Years',
    image: import.meta.env.BASE_URL + 'images/Dr. Parthasarathy Srinivasan.png',
    available: true,
    bio: 'Dr. Parthasarathy Srinivasan is a spine surgeon based at Dr. Rela Institute & Medical Centre, Chromepet, with more than 12 years of focused experience and over 1,500 successful spine surgeries. He leans on minimally invasive and endoscopic techniques wherever appropriate—aiming for the same surgical outcome with less tissue disruption.',
    achievements: [
      'APOA DePuy Spine Travelling Fellowship Awardee (2009)',
      'Founder, Total Spine — Dispelling myths around back pain and spine surgery',
      'Over 1,500 successful spine surgeries',
      'Expertise in computer-navigated ("surgical GPS") spine procedures',
    ],
    subspecialty: 'Spine Care & Surgery',
  },
  {
    id: 3,
    name: 'Dr. Ashok S. Gavaskar',
    designation: 'Joint Replacement, Trauma & Complex Orthopaedic Surgeon',
    credentials: 'MS (Orth), FRCS (Glasg), FACS',
    note: 'Clinical Lead of the Institute of Orthopaedics and Trauma at Rela Hospital',
    specialty: 'Joint replacement (hip, knee, shoulder) · Trauma care & hip trauma reconstruction',
    experience: '20+ Years',
    image: import.meta.env.BASE_URL + 'images/Ashok S. Gavaskar.png',
    available: true,
    bio: 'Dr. Ashok S. Gavaskar is the Clinical Lead of the Institute of Orthopaedics and Trauma at Rela Hospital, Chennai, with over 20 years of practice experience. He trained across leading international institutions and is known for taking on the cases other surgeons refer out — revision joint replacements and complex pelvic trauma.',
    achievements: [
      'India\'s Top 10 Trauma Experts & Top 30 Joint Replacement Surgeons (Expertscape)',
      'Economic Times Healthcare Award for National Orthopedic Surgeon of the Year (2022)',
      'Distinguished Member of the AO Trauma Technical Commission\'s Asia-Pacific Expert Group',
      'Expert in minimally invasive & outpatient anterior-approach hip replacement',
    ],
    subspecialty: 'Joint Replacement & Trauma',
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────
export const SERVICES = [
  // Pillar 1: Sports Injury, Arthroscopy & Ligament Reconstruction
  {
    id: 1,
    category: 'Sports',
    icon: 'Activity',
    title: 'Sports Injury & Arthroscopy',
    description: 'If your knee gives way mid-run, your shoulder keeps slipping out of place, or a sports injury just won\'t fully heal, this is where you start. Led by Dr. Prakash Ayyadurai.',
    benefits: ['ACL/PCL & multi-ligament reconstruction', 'Shoulder arthroscopy & rotator cuff repair', 'Cartilage restoration & sports rehabilitation'],
  },
  {
    id: 2,
    category: 'Sports',
    icon: 'Activity',
    title: 'Synthetic Ligament Surgery',
    description: 'Advanced ligament surgery including Jewel ACL™ and InternalBrace to get active patients, from athletes to weekend players, back to full function quickly.',
    benefits: ['Pioneered by Dr. Prakash in India', 'Faster recovery timeline', 'Ideal for professional sportspeople'],
  },
  
  // Pillar 2: Spine Care & Spine Surgery
  {
    id: 3,
    category: 'Spine',
    icon: 'Dna',
    title: 'Spine Care & Spine Surgery',
    description: 'Precision matters. From disc degeneration and slipped discs to spinal fractures and deformities. Led by Dr. Parthasarathy Srinivasan.',
    benefits: ['Disc surgery & disc replacement', 'Minimally invasive & endoscopic spine surgery', 'Spinal fracture & deformity correction'],
  },
  {
    id: 4,
    category: 'Spine',
    icon: 'Dna',
    title: 'Minimally Invasive Spine Surgery',
    description: 'Minimally invasive and endoscopic approaches are used wherever clinically appropriate, to minimise tissue disruption and speed up recovery.',
    benefits: ['Smaller incisions and less muscle damage', 'Day-surgery or 24-hour stay', 'Computer-navigated spine surgery'],
  },

  // Pillar 3: Joint Replacement, Trauma & Complex Orthopaedics
  {
    id: 5,
    category: 'Ortho',
    icon: 'Bone',
    title: 'Joint Replacement & Trauma',
    description: 'For arthritis that\'s stopped responding to conservative treatment, or trauma from an accident. Led by Dr. Ashok S. Gavaskar.',
    benefits: ['Total & revision hip/knee/shoulder replacement', 'Outpatient anterior-approach hip replacement', 'Trauma & fracture reconstruction'],
  },
  {
    id: 6,
    category: 'Ortho',
    icon: 'Bone',
    title: 'Complex Orthopaedics',
    description: 'Complex reconstruction — backed by internationally trained expertise in the toughest cases, including deformities and limb lengthening.',
    benefits: ['Limb lengthening & deformity correction', 'Computer-assisted hip replacement', 'Expertise in taking on cases others refer out'],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Iyer',
    role: 'Patient · Knee Replacement',
    rating: 5,
    text: 'My mother had been suffering from severe knee pain for years. After her surgery at Ortho3Trio, she walks pain-free and climbs stairs again. The team explained every step clearly and made her feel safe throughout.',
    location: 'Chennai',
    initials: 'RI',
    badge: 'Google Review',
  },
  {
    id: 2,
    name: 'Karthik Subramaniam',
    role: 'Patient · Lumbar Disc Surgery',
    rating: 5,
    text: 'I was back to work in just 2 weeks after my minimally invasive spine surgery. Dr. Parthasarathy\'s expertise is truly world-class. I had consulted elsewhere and was told I needed open surgery — here it was keyhole.',
    location: 'Chennai',
    initials: 'KS',
    badge: 'Practo Review',
  },
  {
    id: 3,
    name: 'Arjun Prakash',
    role: 'State Cricketer · ACL Reconstruction',
    rating: 5,
    text: 'As a state-level cricketer, my ACL tear felt like the end of my career. Six months after surgery with Dr. Prakash, I was back on the field performing better than before. Ortho3Trio literally saved my career.',
    location: 'Chennai',
    initials: 'AP',
    badge: 'Google Review',
  },
  {
    id: 4,
    name: 'Lakshmi Narayanan',
    role: '83 yrs · Femur Fracture',
    rating: 5,
    text: 'The doctor corrected my femur fracture AND fixed my leg shortening in a single surgery. At 83, I was afraid of surgery. The team was so patient and gentle. Today I walk straight and without pain — truly a miracle.',
    location: 'Chennai',
    initials: 'LN',
    badge: 'Practo Review',
  },
  {
    id: 5,
    name: 'Meera Krishnan',
    role: 'Patient · Arthritis Treatment',
    rating: 5,
    text: 'Down to earth, explains everything in simple language, and incredibly reasonable fees for such a calibre surgeon. Dr. Ashok explored every non-surgical option before recommending anything. Highly recommended to everyone.',
    location: 'Chennai',
    initials: 'MK',
    badge: 'Google Review',
  },
  {
    id: 6,
    name: 'Suresh Babu',
    role: 'Parent · Pediatric Consult',
    rating: 5,
    text: 'My son had neck pain. The doctor examined him patiently, explained the situation clearly, and prescribed no unnecessary medicines or investigations. A completely ethical practice. This is rare and precious.',
    location: 'Chennai',
    initials: 'SB',
    badge: 'Practo Review',
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────
export const FAQS = [
  {
    id: 1,
    q: 'How do I book an appointment?',
    a: 'Call us at +91 94448 53737, use the online booking form on our website, or WhatsApp us directly. You can also visit either of our clinics directly — Anna Nagar or Chromepet. Online booking is available 24/7 with instant confirmation.',
  },
  {
    id: 2,
    q: 'Do you accept health insurance?',
    a: 'Yes. We accept Star Health, HDFC Ergo, ICICI Lombard, New India Assurance, United India, Oriental, and all major corporate health insurance plans. Our billing team handles pre-authorisation, TPA coordination, and claims processing on your behalf.',
  },
  {
    id: 3,
    q: 'What should I bring to my first consultation?',
    a: 'Please bring a valid photo ID (Aadhaar/PAN), any previous medical records related to your condition, recent imaging (X-rays or MRI scans — bring the originals, not just reports), and a list of your current medications. For insurance patients, carry your insurance card and policy document.',
  },
  {
    id: 4,
    q: 'Are your surgeries minimally invasive?',
    a: 'Yes. All our doctors specialise in minimally invasive techniques as the primary approach — smaller incisions, less muscle damage, significantly reduced blood loss, and dramatically faster recovery. We use the latest arthroscopic, keyhole, and computer-navigated methods across orthopaedic, spine, and sports surgery.',
  },
  {
    id: 5,
    q: 'What is the typical recovery time?',
    a: 'Recovery depends on the procedure: Arthroscopy (knee/shoulder): 2–4 weeks to daily activities. Joint Replacement (hip/knee): 6–12 weeks to full recovery, walking same day. Spine Surgery (minimally invasive): 4–8 weeks. A personalised, detailed recovery and physiotherapy plan is provided to every patient.',
  },
  {
    id: 6,
    q: 'Can I get a second opinion at Ortho3Trio?',
    a: 'Absolutely — second opinions are always welcome. We give honest, unbiased assessments of your condition. If surgery is not required, we will tell you clearly and suggest conservative alternatives. Our goal is your best health outcome, not surgical volume.',
  },
  {
    id: 7,
    q: 'Where are your clinics located?',
    a: 'We have two clinics in Chennai: (1) AG-63, River View Colony, Anna Nagar, Chennai – 600040 — our main clinic. (2) No.7, CLC Works Road, Chromepet, Chennai – 600044. Both clinics are open Monday to Saturday, 9:00 AM – 8:00 PM.',
  },
  {
    id: 8,
    q: 'Do you offer post-surgery physiotherapy and rehabilitation?',
    a: 'Yes. Our in-house physiotherapy team begins rehabilitation from day 1 post-surgery. We provide a structured, milestone-based recovery programme covering pain management, range-of-motion restoration, strength training, and full return to daily and sporting activity. Remote follow-up is also available.',
  },
];

// ─── STATS ────────────────────────────────────────────────────────
export const STATS = [
  { label: 'Surgeries Performed', value: 7000, suffix: '+' },
  { label: 'Super-Specialists', value: 3, suffix: '' },
  { label: 'Years Experience', value: 35, suffix: '+' },
  { label: 'Patient Satisfaction', value: 98, suffix: '%' },
];

// ─── GALLERY ──────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80', alt: 'Modern Clinic Reception', category: 'Clinic', span: 'tall' },
  { id: 2, src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80', alt: 'Surgical Suite', category: 'Operations', span: 'normal' },
  { id: 3, src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', alt: 'Consultation Room', category: 'Clinic', span: 'normal' },
  { id: 4, src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80', alt: 'Doctor Consultation', category: 'Team', span: 'wide' },
  { id: 5, src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80', alt: 'Operating Theatre', category: 'Operations', span: 'normal' },
  { id: 6, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', alt: 'Medical Team', category: 'Team', span: 'tall' },
  { id: 7, src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', alt: 'Specialist Doctor', category: 'Team', span: 'normal' },
  { id: 8, src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80', alt: 'Surgeon Portrait', category: 'Team', span: 'normal' },
  { id: 9, src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80', alt: 'Patient Recovery', category: 'Patient Moments', span: 'normal' },
  { id: 10, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80', alt: 'Physiotherapy', category: 'Patient Moments', span: 'wide' },
  { id: 11, src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', alt: 'Medical Award Ceremony', category: 'Awards', span: 'normal' },
  { id: 12, src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80', alt: 'Excellence Award', category: 'Awards', span: 'tall' },
];

// ─── LOCATIONS ────────────────────────────────────────────────────
export const LOCATIONS = [
  {
    id: 1,
    name: 'Dr. Rela Institute & Medical Centre',
    address: 'No. 7, CLC Works Road, Chromepet, Chennai - 600044',
    phone: '+91 94448 53737',
    email: 'care@ortho3trio.com',
    hours: 'Mon–Sat: 9:00 AM – 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.14!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChromepet+Chennai!5e0!3m2!1sen!2sin!4v1234567891',
    directions: 'https://goo.gl/maps/chromepet',
  }
];

// ─── ABOUT TIMELINE ───────────────────────────────────────────────
export const TIMELINE = [
  { year: '2009', title: 'Founded', desc: 'Ortho3Trio opens its first clinic in Anna Nagar, Chennai — founded by fellowship-trained orthopaedic surgeons with a vision to bring international-standard care to Tamil Nadu.' },
  { year: '2012', title: 'APOA Fellowship', desc: 'Dr. Parthasarathy completes the prestigious APOA DePuy Spine Fellowship, returning to Chennai with minimally invasive spine techniques from Japan, UK, Hong Kong, and Switzerland.' },
  { year: '2015', title: '1,000 Surgeries Milestone', desc: 'Celebrates 1,000 successful surgical procedures with a 97%+ patient satisfaction rate. Launches dedicated sports injury and arthroscopy programme.' },
  { year: '2018', title: 'Chromepet Clinic Opens', desc: 'Expands with a second clinic in Chromepet to serve South Chennai, bringing specialist orthopaedic care closer to patients across the city.' },
  { year: '2021', title: 'Computer-Navigated Surgery', desc: 'Introduces computer-navigated joint replacement and spine surgery — delivering sub-millimetre implant accuracy for superior long-term outcomes.' },
  { year: '2024', title: '5,000+ Surgeries', desc: 'Celebrates 5,000+ successful surgeries with a 98% patient satisfaction rate. Team expanded to four subspecialty surgeons serving patients from across South India.' },
];

// ─── ABOUT CONTENT ────────────────────────────────────────────────
export const ABOUT = {
  mission: 'Ortho3Trio was founded on the belief that orthopaedic care should never feel like a conveyor belt.',
  story: 'Ortho3Trio began with a simple observation: patients rarely have just "an orthopaedic problem." They have a knee that won\'t bend, a back that won\'t straighten, or a shoulder that won\'t stay put — and each of those deserves a surgeon who has spent years on exactly that structure, not a generalist spreading attention across the entire skeleton.',
  para2: 'Three senior surgeons at Dr. Rela Institute & Medical Centre — each already an established name in their own right — came together to build that focused, collaborative model of care. Dr. Prakash Ayyadurai leads sports injury, arthroscopy and ligament reconstruction. Dr. Parthasarathy Srinivasan leads spine surgery. Dr. Ashok S. Gavaskar leads joint replacement, trauma and complex reconstruction. Together, they cover the orthopaedic spectrum from spine to sole — which is where the name comes from.',
  whyChooseUs: [
    { icon: 'Award', title: 'True Sub-Specialisation', desc: 'Not three general orthopaedists sharing a waiting room. We each lead our own specialty.' },
    { icon: 'Users', title: 'Cross-Consultation', desc: 'When an injury overlaps specialties, our surgeons confer directly for the best outcome.' },
    { icon: 'Hospital', title: 'One Hospital Ecosystem', desc: 'Imaging, anaesthesia, physiotherapy and inpatient care all coordinated under Rela Hospital, Chromepet.' },
    { icon: 'Stethoscope', title: 'Evidence-First Medicine', desc: 'Each surgeon is active in research, teaching and professional bodies in their field.' },
    { icon: 'TrendingUp', title: 'Our Shared Philosophy', desc: 'Every patient deserves a plan built around their life, explained in plain language.' },
  ],
  values: [
    { icon: 'Stethoscope', title: 'Clinical Excellence', desc: 'Every decision is grounded in evidence-based medicine and measured against international outcome benchmarks.' },
    { icon: 'Users', title: 'Patient-First Ethics', desc: 'We recommend only what you truly need. Honest second opinions always welcome.' },
    { icon: 'Microscope', title: 'Innovation', desc: 'Computer-navigated surgery, minimally invasive techniques, and the latest implant science.' },
    { icon: 'Heart', title: 'Compassion', desc: 'From reception to recovery, every member of our team leads with warmth and genuine care.' },
  ],
};

// ─── BLOGS ────────────────────────────────────────────────────────
export const BLOG_CATEGORIES = ['All', 'Orthopaedic', 'Spine', 'Sports Medicine', 'Lifestyle', 'Patient Stories'];

export const BLOGS = [
  {
    id: 1,
    category: 'Spine',
    title: 'Is Your Back Pain a Warning Sign? 7 Symptoms You Should Never Ignore',
    excerpt: 'Dr. Parthasarathy Srinivasan explains which back pain symptoms require urgent specialist attention and which can be managed conservatively.',
    author: 'Dr. Parthasarathy Srinivasan',
    date: 'June 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    featured: true,
  },
  {
    id: 2,
    category: 'Sports Medicine',
    title: 'ACL Tears in Young Athletes: Why Early Treatment Matters',
    excerpt: 'A guide for parents, coaches, and athletes on recognising ACL tears, the importance of timely treatment, and what modern reconstruction looks like.',
    author: 'Dr. Prakash Ayyadurai',
    date: 'May 28, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80',
    featured: true,
  },
  {
    id: 3,
    category: 'Orthopaedic',
    title: 'Total Knee Replacement at 50: Everything You Need to Know',
    excerpt: 'Dispelling myths about joint replacement surgery — who the right candidates are, what recovery really looks like, and why waiting too long can make things worse.',
    author: 'Dr. Ashok S. Gavaskar',
    date: 'May 14, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    featured: false,
  },
  {
    id: 4,
    category: 'Lifestyle',
    title: '5 Daily Habits That Are Silently Destroying Your Joints',
    excerpt: 'Posture, footwear, sitting habits, and diet choices that accelerate joint wear — and simple evidence-based corrections you can start today.',
    author: 'Dr. Priya Venkatesh',
    date: 'April 30, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    featured: false,
  },
  {
    id: 5,
    category: 'Patient Stories',
    title: 'How a State Cricketer Returned to the Field After ACL Reconstruction',
    excerpt: 'Arjun Prakash shares his 6-month journey from ACL tear diagnosis to playing competitive cricket again — in his own words.',
    author: 'Ortho3Trio Team',
    date: 'April 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    featured: false,
  },
  {
    id: 6,
    category: 'Spine',
    title: 'Minimally Invasive vs Open Spine Surgery: Which Is Right for You?',
    excerpt: 'Understanding the key differences, who qualifies for keyhole procedures, and how to have an informed conversation with your spine surgeon.',
    author: 'Dr. Parthasarathy Srinivasan',
    date: 'March 22, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
    featured: false,
  },
];

// ─── PATIENT RESOURCES ──────────────────────────────────────────────
export const RESOURCE_CATEGORIES = [
  {
    iconType: 'FileText',
    label: 'Patient Guides',
    desc: 'Pre- and post-surgery guides, medication info, and recovery checklists.',
    color: '#C9A66B',
    bg: 'rgba(201,166,107,0.08)',
  },
  {
    iconType: 'Video',
    label: 'Video Library',
    desc: 'Surgical procedure animations, patient testimonials, and exercise tutorials.',
    color: '#00A99D',
    bg: 'rgba(0,169,157,0.08)',
  },
  {
    iconType: 'BookOpen',
    label: 'Health Articles',
    desc: 'Expert articles on joint health, spine care, and sports injury prevention.',
    color: '#0A2540',
    bg: 'rgba(10,37,64,0.08)',
  },
  {
    iconType: 'Stethoscope',
    label: 'Medical Research',
    desc: 'Peer-reviewed publications and clinical outcome reports from our team.',
    color: '#C9A66B',
    bg: 'rgba(201,166,107,0.08)',
  },
];

export const RESOURCES = [
  {
    id: 1,
    category: 'Patient Guide',
    title: 'Preparing for Knee Replacement Surgery',
    desc: 'A step-by-step guide covering pre-operative instructions, what to bring, fasting guidelines, and what to expect on surgery day.',
    type: 'PDF Guide',
    icon: 'FileText',
    tag: 'Orthopaedic',
  },
  {
    id: 2,
    category: 'Patient Guide',
    title: 'Post-Surgery Recovery: Spine Surgery',
    desc: 'Detailed recovery milestones, physiotherapy exercises, activity restrictions, and warning signs to watch for after spinal surgery.',
    type: 'PDF Guide',
    icon: 'FileText',
    tag: 'Spine',
  },
  {
    id: 3,
    category: 'Health Article',
    title: 'Understanding ACL Tears: Causes, Treatment & Recovery',
    desc: 'Dr. Prakash Ayyadurai explains ACL injury mechanisms, surgical options, and what to expect from modern arthroscopic reconstruction.',
    type: 'Article',
    icon: 'BookOpen',
    tag: 'Sports',
  },
  {
    id: 4,
    category: 'Health Article',
    title: 'Minimally Invasive Spine Surgery — Is It Right For You?',
    desc: 'Dr. Parthasarathy Srinivasan explains who is a candidate for MIS procedures and what advantages they offer over open surgery.',
    type: 'Article',
    icon: 'BookOpen',
    tag: 'Spine',
  },
  {
    id: 5,
    category: 'Exercise Guide',
    title: 'Post-Knee Replacement Home Exercise Programme',
    desc: 'A physiotherapist-approved 12-week progressive exercise programme for optimal recovery after total knee replacement.',
    type: 'Exercise PDF',
    icon: 'Dumbbell',
    tag: 'Orthopaedic',
  },
  {
    id: 6,
    category: 'Health Article',
    title: 'Joint Health After 50: Prevention & Lifestyle Advice',
    desc: 'Evidence-based guidance on diet, exercise, supplements, and lifestyle habits that protect your joints as you age.',
    type: 'Article',
    icon: 'BookOpen',
    tag: 'General',
  },
];

