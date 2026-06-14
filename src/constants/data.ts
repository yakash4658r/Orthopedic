// ─── BRAND ────────────────────────────────────────────────────────
export const BRAND = {
  name: 'OrthoCare Elite',
  tagline: 'Where Compassionate Care Meets Surgical Precision',
  phone: '+91 94448 53737',
  email: 'care@orthocareelite.com',
  whatsapp: '919444853737',
};

// ─── NAVIGATION ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Resources', path: '/resources' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
];

// ─── HERO BANNERS (Swiper) ────────────────────────────────────────
export const HERO_BANNERS = [
  {
    id: 1,
    doctorName: 'DR. ASHOK S. GAVASKAR',
    credentials: 'MS (ORTH), FRCS (GLASG), FACS',
    bullets: [
      'Rated among the top trauma and joint replacement surgeons in India by expertscape.com',
      'One of the Top 10 Trauma Experts in India',
      'One of the Top 30 Joint Replacement Surgeons in India',
      'Distinguished member – AOTrauma Technical Commission (Asia pacific trauma expert group)',
      'Hon’ member of the International advisory board for the Journal of American Academy of Orthopaedic Surgeons (JAAOS)'
    ],
    cta: { label: 'ABOUT DR. GAVASKAR', href: '#about-section' },
    bg: import.meta.env.BASE_URL + 'images/Ashok S. Gavaskar.png',
  },
  {
    id: 2,
    doctorName: 'DR. PARTHASARATHY SRINIVASAN',
    credentials: 'MS (ORTH), APOA DEPUY SPINE FELLOWSHIP',
    bullets: [
      'APOA DePuy Spine Fellowship Awardee (Japan)',
      'Trained at leading spine centres in UK, Japan, Hong Kong, and Switzerland',
      'Founder, Total Spine — Chennai\'s dedicated spine surgery centre',
      '1,500+ successful minimally invasive spine procedures performed',
      'Expert in computer-navigated and motion-preserving disc replacements'
    ],
    cta: { label: 'ABOUT DR. PARTHASARATHY', href: '#about-section' },
    bg: import.meta.env.BASE_URL + 'images/Dr. Parthasarathy Srinivasan.png',
  },
  {
    id: 3,
    doctorName: 'DR. PRAKASH AYYADURAI',
    credentials: 'MS (ORTH), FELLOWSHIP IN ARTHROSCOPY & SPORTS MEDICINE (GERMANY & USA)',
    bullets: [
      'German & American Fellowship Trained in Sports Medicine',
      'Senior Consultant in Arthroscopy & Sports Medicine at Rela Hospital',
      'Specialist in individualized ACL & complex multi-ligament knee reconstruction',
      'Expert in arthroscopic Latarjet & recurrent shoulder dislocation repair',
      '18+ Years of surgical experience in advanced keyhole joint care'
    ],
    cta: { label: 'ABOUT DR. PRAKASH', href: '#about-section' },
    bg: import.meta.env.BASE_URL + 'images/Prakash Ayyadurai.png',
  },
];

// ─── DOCTORS ──────────────────────────────────────────────────────
export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Ashok S. Gavaskar',
    designation: 'Senior Orthopaedic Surgeon',
    credentials: 'MS (Orth), FRCS (Glasgow), FACS',
    note: 'Fellowship Trained · Clinical Lead, Rela Hospital Chennai',
    specialty: 'Hip, Knee & Shoulder Replacement · Fracture Care · Arthroscopy',
    experience: '20+ Years',
    image: '/images/Ashok S. Gavaskar.png',
    available: true,
    bio: 'Dr. Ashok S. Gavaskar is a globally respected orthopaedic surgeon, fellowship-trained in joint replacement and fracture care. As Clinical Lead at Rela Hospital, Chennai, he combines international expertise with deep patient-centred practice.',
    achievements: [
      'FRCS (Glasgow) — Fellow of the Royal College of Surgeons',
      'FACS — Fellow of the American College of Surgeons',
      'Clinical Lead, Rela Hospital Chennai',
      'International speaker at orthopaedic conferences across Europe & Asia',
    ],
    subspecialty: 'Hip, Knee & Shoulder',
  },
  {
    id: 2,
    name: 'Dr. Parthasarathy Srinivasan',
    designation: 'Spine Surgeon & Founder — Total Spine',
    credentials: 'MS (Orth), APOA DePuy Spine Fellowship (2009)',
    note: '15+ Years · 1500+ Surgeries · Trained in Japan, UK, Hong Kong, Switzerland',
    specialty: 'Minimally Invasive Spine · Disc Replacement · Scoliosis · Computer Navigated Surgery',
    experience: '15+ Years',
    image: '/images/Dr. Parthasarathy Srinivasan.jpg',
    available: true,
    bio: 'Dr. Parthasarathy Srinivasan is the Founder of Total Spine, Chennai and holds the prestigious APOA DePuy Spine Fellowship (2009). Trained across Japan, UK, Hong Kong, and Switzerland, he is among India\'s foremost minimally invasive spine surgeons.',
    achievements: [
      'APOA DePuy Spine Fellowship — Japan (2009)',
      'Trained at leading spine centres in UK, Hong Kong & Switzerland',
      'Founder, Total Spine — Chennai\'s dedicated spine centre',
      '1,500+ minimally invasive spine procedures performed',
    ],
    subspecialty: 'Spine Surgery',
  },
  {
    id: 3,
    name: 'Dr. Prakash Ayyadurai',
    designation: 'Senior Consultant — Arthroscopy & Sports Medicine',
    credentials: 'MS (Orth), Fellowship in Arthroscopy & Sports Medicine (Germany & USA)',
    note: 'German & American Fellowship Trained · Senior Consultant, Rela Hospital',
    specialty: 'ACL & Multi-ligament Reconstruction · Shoulder Dislocation & Rotator Cuff Surgery · Foot & Ankle Arthroscopy',
    experience: '18+ Years',
    image: '/images/Prakash Ayyadurai.png',
    available: true,
    bio: 'Dr. Prakash Ayyadurai is an expert in Arthroscopy and Sports Medicine with over 18 years of experience. Having completed fellowships in Germany and the USA, he specializes in complex knee ligament reconstructions, recurrent shoulder dislocations, and advanced keyhole surgeries.',
    achievements: [
      'German & American Fellowship in Arthroscopy & Sports Medicine',
      'Specialist in individualized ACL & complex multi-ligament knee reconstruction',
      'Expert in arthroscopic Latarjet & recurrent shoulder dislocation repair',
      'Senior Consultant at Rela Hospital, Chromepet, Chennai',
    ],
    subspecialty: 'Sports & Ligaments',
  },
  {
    id: 4,
    name: 'Dr. Priya Venkatesh',
    designation: 'Joint Replacement Surgeon',
    credentials: 'MS (Orth), MCh Orthopaedics (UK)',
    note: 'UK-Trained · Revision Arthroplasty Expert',
    specialty: 'Hip & Knee Replacement · Revision Arthroplasty · Trauma Surgery',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    available: true,
    bio: 'Dr. Priya Venkatesh completed her MCh Orthopaedics in the UK and brings international joint replacement expertise to Chennai. She specialises in primary and revision arthroplasty, ensuring optimal implant selection and surgical planning for every patient.',
    achievements: [
      'MCh Orthopaedics (UK) — international post-graduate training',
      'Expert in complex revision hip and knee replacement',
      'Specialist in trauma and peri-prosthetic fracture management',
      'Dedicated practice in outcomes monitoring and implant research',
    ],
    subspecialty: 'Joint Replacement',
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────
export const SERVICES = [
  // Ortho — Dr. Ashok
  {
    id: 1,
    category: 'Ortho',
    icon: 'Bone',
    title: 'Hip, Knee & Shoulder Replacement',
    description: 'Total and partial joint replacements using the latest implant systems, performed by fellowship-trained surgeons. From primary arthroplasty to complex revisions — with minimal downtime and maximum function.',
    benefits: ['Robotic-assisted precision for optimal implant fit', 'Same-day mobilisation post-surgery', 'Personalised implant selection for your anatomy'],
  },
  {
    id: 2,
    category: 'Ortho',
    icon: 'Hospital',
    title: 'Fracture & Trauma Care',
    description: 'Comprehensive management of all fracture types — from simple breaks to complex multi-fragment trauma. Our team ensures anatomic restoration with the fastest possible functional recovery.',
    benefits: ['Emergency trauma surgery availability', 'Computer-navigated fracture fixation', 'Structured post-operative physiotherapy'],
  },
  {
    id: 3,
    category: 'Ortho',
    icon: 'Pill',
    title: 'Arthritis Management',
    description: 'A complete spectrum of arthritis care — from conservative management with injections and physiotherapy to definitive surgical solutions for advanced joint disease. Tailored to your lifestyle and activity goals.',
    benefits: ['Non-surgical options explored first', 'Steroid, PRP & Hyaluronic acid injections', 'Surgical intervention only when truly needed'],
  },
  {
    id: 4,
    category: 'Ortho',
    icon: 'Baby',
    title: 'Pediatric Orthopaedics',
    description: 'Specialised care for children\'s bone and joint conditions — from congenital deformities and growth plate injuries to club foot, developmental dysplasia, and pediatric fractures. Gentle, family-centred approach.',
    benefits: ['Growth-preserving surgical techniques', 'Family-centred consultation process', 'Long-term monitoring through skeletal maturity'],
  },
  // Spine — Dr. Parthasarathy
  {
    id: 5,
    category: 'Spine',
    icon: 'Dna',
    title: 'Minimally Invasive Spine Surgery',
    description: 'Advanced keyhole spine surgery for disc herniations, stenosis, and instability. Smaller incisions, less muscle damage, less blood loss, and dramatically faster recovery compared to conventional open surgery.',
    benefits: ['Day-surgery or 24-hour stay for most procedures', 'Back to work in 1–2 weeks for many patients', 'Computer-navigated screw placement for accuracy'],
  },
  {
    id: 6,
    category: 'Spine',
    icon: 'Zap',
    title: 'Cervical & Lumbar Disc Replacement',
    description: 'Motion-preserving artificial disc replacement for cervical and lumbar disc disease. Maintains natural spinal biomechanics and protects adjacent levels from accelerated degeneration after surgery.',
    benefits: ['Preserves natural neck and back movement', 'Prevents adjacent segment disease vs fusion', 'Proven outcomes from international fellowship training'],
  },
  {
    id: 7,
    category: 'Spine',
    icon: 'Target',
    title: 'Laminectomy & Spinal Decompression',
    description: 'Surgical removal of bone or tissue compressing the spinal cord or nerve roots, relieving symptoms of stenosis, myelopathy, and radiculopathy. Performed with precision under neuro-monitoring.',
    benefits: ['Effective relief from leg/arm pain and numbness', 'Minimally invasive variants reduce recovery time', 'Neuro-monitoring for neurological safety'],
  },
  {
    id: 8,
    category: 'Spine',
    icon: 'Brain',
    title: 'Scoliosis & Spinal Deformity Correction',
    description: 'Comprehensive evaluation and correction for adolescent idiopathic and adult degenerative scoliosis. Full-spine imaging, 3D surgical planning, and expert deformity correction techniques.',
    benefits: ['Low-dose full-spine imaging for precise assessment', 'Personalised 3D surgical correction planning', 'Multidisciplinary team approach'],
  },
  // Sports & Ligament — Dr. Rajesh
  {
    id: 9,
    category: 'Sports',
    icon: 'Activity',
    title: 'ACL Reconstruction',
    description: 'Anatomic ACL reconstruction using autograft or allograft tissue, designed for a full return to sport. Paired with a structured sport-specific rehabilitation protocol from week 1 to full activity clearance.',
    benefits: ['Anatomic graft placement for rotational stability', 'Sport-specific rehabilitation milestones', 'Low re-rupture rates with our protocol'],
  },
  {
    id: 10,
    category: 'Sports',
    icon: 'Shield',
    title: 'PCL & MCL Repair',
    description: 'Expert repair and reconstruction of posterior and medial cruciate ligaments — complex injuries that require an experienced arthroscopic surgeon for the best outcomes and stable knee function.',
    benefits: ['Multi-ligament injury expertise', 'Arthroscopic and open techniques as indicated', 'Complete biomechanical knee stability restoration'],
  },
  {
    id: 11,
    category: 'Sports',
    icon: 'Microscope',
    title: 'Knee & Shoulder Arthroscopy',
    description: 'Minimally invasive arthroscopic treatment for meniscal tears, cartilage damage, shoulder impingement, labral tears, and rotator cuff injuries. Most procedures performed as day surgery.',
    benefits: ['Keyhole surgery — discharge same day', 'Rapid return to daily activities', 'Diagnostic and therapeutic in one procedure'],
  },
  {
    id: 12,
    category: 'Sports',
    icon: 'Dumbbell',
    title: 'Sports Injury Rehabilitation',
    description: 'In-house physiotherapy and performance rehabilitation designed by sports medicine experts. Progressive loading, biomechanical re-education, and sport-specific conditioning for full return to activity.',
    benefits: ['In-house physiotherapy from day 1', 'Structured return-to-sport milestone criteria', 'PRP and regenerative therapy options available'],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Iyer',
    role: 'Patient · Knee Replacement',
    rating: 5,
    text: 'My mother had been suffering from severe knee pain for years. After her surgery at OrthoCare Elite, she walks pain-free and climbs stairs again. The team explained every step clearly and made her feel safe throughout.',
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
    text: 'As a state-level cricketer, my ACL tear felt like the end of my career. Six months after surgery with Dr. Rajesh, I was back on the field performing better than before. OrthoCare Elite literally saved my career.',
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
    q: 'Can I get a second opinion at OrthoCare Elite?',
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
  { label: 'Surgeries Performed', value: 5000, suffix: '+' },
  { label: 'Expert Surgeons', value: 4, suffix: '' },
  { label: 'Years Experience', value: 15, suffix: '+' },
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
    name: 'OrthoCare Elite — Anna Nagar (Main Clinic)',
    address: 'AG-63, River View Colony, Anna Nagar, Chennai - 600040',
    phone: '+91 94448 53737',
    email: 'care@orthocareelite.com',
    hours: 'Mon–Sat: 9:00 AM – 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAnna+Nagar+Chennai!5e0!3m2!1sen!2sin!4v1234567890',
    directions: 'https://goo.gl/maps/annanagar',
  },
  {
    id: 2,
    name: 'OrthoCare Elite — Chromepet',
    address: 'No.7, CLC Works Road, Chromepet, Chennai - 600044',
    phone: '+91 94448 53737',
    email: 'care@orthocareelite.com',
    hours: 'Mon–Sat: 9:00 AM – 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.14!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChromepet+Chennai!5e0!3m2!1sen!2sin!4v1234567891',
    directions: 'https://goo.gl/maps/chromepet',
  },
];

// ─── ABOUT TIMELINE ───────────────────────────────────────────────
export const TIMELINE = [
  { year: '2009', title: 'Founded', desc: 'OrthoCare Elite opens its first clinic in Anna Nagar, Chennai — founded by fellowship-trained orthopaedic surgeons with a vision to bring international-standard care to Tamil Nadu.' },
  { year: '2012', title: 'APOA Fellowship', desc: 'Dr. Parthasarathy completes the prestigious APOA DePuy Spine Fellowship, returning to Chennai with minimally invasive spine techniques from Japan, UK, Hong Kong, and Switzerland.' },
  { year: '2015', title: '1,000 Surgeries Milestone', desc: 'Celebrates 1,000 successful surgical procedures with a 97%+ patient satisfaction rate. Launches dedicated sports injury and arthroscopy programme.' },
  { year: '2018', title: 'Chromepet Clinic Opens', desc: 'Expands with a second clinic in Chromepet to serve South Chennai, bringing specialist orthopaedic care closer to patients across the city.' },
  { year: '2021', title: 'Computer-Navigated Surgery', desc: 'Introduces computer-navigated joint replacement and spine surgery — delivering sub-millimetre implant accuracy for superior long-term outcomes.' },
  { year: '2024', title: '5,000+ Surgeries', desc: 'Celebrates 5,000+ successful surgeries with a 98% patient satisfaction rate. Team expanded to four subspecialty surgeons serving patients from across South India.' },
];

// ─── ABOUT CONTENT ────────────────────────────────────────────────
export const ABOUT = {
  mission: 'At OrthoCare Elite, our mission is to restore movement, relieve pain, and rebuild lives through the most advanced orthopaedic care available in Chennai — delivered with the compassion, transparency, and clinical excellence that every patient deserves.',
  story: 'OrthoCare Elite was founded with a singular conviction: that patients in Chennai deserve access to the same standard of orthopaedic care available at the world\'s leading institutions. Our four specialists are fellowship-trained with experience from UK, Japan, Hong Kong, and Switzerland — and they have chosen to bring that expertise home, to serve the people of Tamil Nadu with world-class skill and deeply personal care.',
  para2: 'From ACL reconstruction to minimally invasive spine surgery, complex fracture care to total joint replacement — we deliver outstanding outcomes through cutting-edge technology, ethical practice, and a patient-first philosophy that never compromises on honesty or compassion.',
  whyChooseUs: [
    { icon: 'Award', title: 'Fellowship-Trained Specialists', desc: 'All four doctors hold international fellowships from UK, Japan, Hong Kong, and Switzerland.' },
    { icon: 'Microscope', title: 'Minimally Invasive First', desc: 'We always explore keyhole and non-surgical options before recommending any open procedure.' },
    { icon: 'Users', title: 'Ethical & Transparent Practice', desc: 'Honest assessments. No unnecessary investigations or procedures. Ever.' },
    { icon: 'TrendingUp', title: '98% Patient Satisfaction', desc: 'Consistently rated 4.9/5 across Google and Practo by 500+ verified patients.' },
    { icon: 'Globe', title: 'International Expertise, Local Care', desc: 'World-class surgical training combined with a deep understanding of the Chennai patient.' },
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
    author: 'OrthoCare Elite Team',
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

