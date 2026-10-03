// Copy and asset references come from tis.edu.in so the brand is retained.
const MEDIA = 'https://tis.edu.in/_next/static/media/'
const m = (file) => MEDIA + file
const local = (file) => `${import.meta.env.BASE_URL}images/${file}` // files in public/images
const VIDEO = 'https://assets.tulas.edu.in/tis/'

export const school = {
  name: 'Tulas International School',
  phone: '+91-9837983791',
  phoneHref: 'tel:+91-9837983791',
  email: 'info@tis.edu.in',
  address: 'Tulas International School Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  landlines: ['0135-2699444', '0135-2699666'],
  applyUrl: 'https://admission.tis.edu.in',
  tourUrl: 'https://tis.edu.in/virtual-tour/',
  fedenaUrl: 'https://tis.fedena.com/',
  campusImage: 'https://tis.edu.in/images/tis-campus-og.jpg',
  logo: m('schoolLogo.95f6e121.png'),
  footerLogo: m('footer-logo.230b79ff.png'),
}

export const navItems = [
  { label: 'About TIS', href: '#about' },
  { label: 'Beyond Academics', href: '#sports' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Personalities', href: '#visitors' },
  { label: 'Parents', href: '#voices' },
  { label: 'Admission', href: '#enquire' },
]

export const hero = {
  title: 'Welcome to Tulas International School (TIS)',
  lead: 'TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.',
  founded: 'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.',
}


export const voices = {
  first: {
    quote: 'We feel supported in what we do and nudged further to do more',
    text: 'At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.',
    image: m('ladyInPink.c358aa8f.png'),
  },
  second: {
    quote: 'Tulas helped me thrive and become the best version of myself',
    text: 'When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.',
    image: m('manInBlue.46316cbf.png'),
  },
}

// Photos shipped in public/images; other sports fall back to the school's hosted images
const localSports = {
  Archery: 'archery-image.webp', Cycling: 'cycling-image.webp', Hockey: 'hockey-image.webp', Swimming: 'swimming-image.webp',
  Taekwondo: 'taekwando-image.webp', Football: 'football-image.webp', 'Horse Riding': 'horseRiding-image.webp',
  'Shooting Range': 'shooting-image.webp', Basketball: 'basket-ball-image.webp', Cricket: 'cricket-image.webp',
}
const cutouts = new Set(['Shooting Range', 'Basketball', 'Cricket']) // transparent cut-outs: shown "contain"

export const sports = [
  ['Archery', 'archery.7a805345.png'], ['Cycling', 'cycling.80dbb9b1.png'], ['Hockey', 'hockey.219fe552.png'],
  ['Swimming', 'swimming.d4285534.png'], ['Taekwondo', 'taekwando.86e26406.png'], ['Football', 'football.ca61e5d0.png'],
  ['Shooting Range', 'shooting.b0b11d74.png'], ['Horse Riding', 'horseRiding.8f259127.png'],
  ['Billiards', 'billiards-single.a1e831c6.png'], ['Squash', 'squash.ffa0360a.png'], ['Volleyball', 'volleyball.045be884.png'],
  ['Basketball', 'basketball.fa70909d.png'], ['Cricket', 'Cricket.b06b18ca.png'], ['Lawn Tennis', 'lawnTennis.7b3b894a.png'],
  ['Badminton', 'badminton.a314ff00.png'], ['Table Tennis', 'tableTennis.61f6bd56.png'],
].map(([name, file]) => ({
  name,
  src: localSports[name] ? local(localSports[name]) : m(file),
  cutout: cutouts.has(name),
}))

// Hero interests ("Let's do ___ with Tulas"): cut-out photos from public/images
export const interests = [
  ['Dance', 'dance-image.webp', 'Arts', '#c8a45c'],
  ['Pottery', 'pot-image.webp', 'Arts', '#b80025'],
  ['Karate', 'karate-image.webp', 'Sports', '#7bcac4'],
  ['Cricket', 'cricket-image.webp', 'Sports', '#c8a45c'],
  ['Basketball', 'basket-ball-image.webp', 'Sports', '#7bcac4'],
  ['Drawing', 'drawing-image.webp', 'Arts', '#b80025'],
  ['Shooting', 'shooting-image.webp', 'Sports', '#c8a45c'],
  ['Science', 'science-lab-image.webp', 'Science & Innovation', '#7bcac4'],
].map(([name, file, tag, tint]) => ({ name, src: local(file), tag, tint }))

export const about = {
  heading: 'Boarding and Day School Excellence',
  body: 'We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally. Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.',
}

export const stats = [
  { to: 22, suffix: '', label: 'Acre pollution-free campus' },
  { to: 16, suffix: '+', label: 'Sports' },
  { to: 24, suffix: '×7', label: 'Medical assistance' },
  { to: 6, suffix: ':1', label: 'Student-teacher ratio' },
]
export const statPhoto = m('image3.b8273b93.png')

// rank, place and source come from the school's own ranking claims
export const rankings = [
  { rank: 1, place: 'Dehradun', source: 'Education Today', category: 'Co-Educational Boarding School' },
  { rank: 2, place: 'Uttarakhand', source: 'Education Today', category: 'Co-Educational Boarding School' },
  { rank: 1, place: 'North India', source: 'Outlook', category: 'Co-Educational Boarding School' },
  { rank: 4, place: 'India', source: 'Education Today', category: 'Co-Educational Boarding School' },
]

const person = (name, file, note) => ({ name, src: local(file), note })
export const influencers = [
  person('Sakshi Malik', 'SakshiMalik.webp', 'First Indian wrestler to win medal in Rio 2016 Olympics. Padma Shri Awardee 2017'),
  person('Vishesh Bhriguvanshi', 'VisheshBhriguvanshi.webp', 'Indian Basketball Team Captain & major FIBA Asia Championship player'),
  person('Prakashi Tomar', 'PrakashiTomar.webp', 'Shooter Dadi, 30 National Championship winner'),
  person('Abhishek Verma', 'AbhishekVerma.webp', '6th highest world ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013'),
  person('Aditi Gopichand Swami', 'AditiGopichandSwami.webp', '7th highest world ranking, Arjuna Awardee, World Champion in Archery 2024'),
  person('Jeevan Jyot Singh Teja', 'JeevanJyotSinghTeja.webp', 'Dronacharya Awardee in Archery 2022'),
  person('Ojus Devtale', 'OjasPravinDeotale.webp', '9th highest world ranking, Arjuna Awardee 2023 and current world champion in Archery'),
  person('Saurabh Joshi', 'SaurabhJoshi.webp', 'Influencer with 30 Million Subscribers on YouTube'),
]
export const leaders = [
  person('Shri Dhan Singh Rawat Ji', 'DhanSinghRawat.webp', 'Minister of Higher Education, Uttarakhand'),
  person('Shri Trivendra Singh Rawat Ji', 'TrivendraSinghRawat.webp', 'Member of Parliament & Former Chief Minister, Uttarakhand'),
  person('Dr Ramesh Pokhriyal Nishank Ji', 'RameshPokhriyalNishank.webp', 'Former Union Cabinet Minister for Education, Government of India'),
  person('Shri Bhagat Singh Koshyari Ji', 'BhagatSinghKoshyari.webp', 'Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand'),
  person('Shri Dharmendra Pradhan Ji', 'DharmendraPradhan.webp', 'Union Minister of Education for India'),
  person('Shri Janmejaya Khanduri Ji', 'JanmejayaKhanduri.webp', 'IG Dehradun - Government of India'),
  person('Shri Ashok Kumar Ji', 'AshokKumar.webp', 'Former DGP, Uttarakhand'),
  person('Shri Amit Kumar Sinha Ji', 'AmitKumarSinha.webp', 'ADG, Principal Secretary Sports, Uttarakhand'),
]

// Alt text is deliberately generic: each award is shown as an image of the certificate itself
export const awards = [
  { src: m('TopBoarding.e5405c1a.jpg'), alt: 'Award presented to Tulas International School (1 of 3)' },
  { src: m('BestResidential.5173db8d.jpg'), alt: 'Award presented to Tulas International School (2 of 3)' },
  { src: m('UTTARAKHAND.652376d5.jpg'), alt: 'Award presented to Tulas International School (3 of 3)' },
]

export const parents = {
  text: 'Tulas International School has truly exceeded our expectations. The focus on holistic development and the encouragement provided by the teachers have played a significant role in our child’s growth. We are grateful for the personalized attention and the care the school offers.',
  videos: [VIDEO + '1VIDEO-compressed.mp4', VIDEO + '2VIDEO-compressed.mp4', VIDEO + '3VIDEO-compressed.mp4'],
}

const review = (name, role, file, text) => ({ name, role, src: m(file), text })
export const reviews = [
  review('Tashi Tsering', 'F/O Jigmet Skaldon', 'tashi.3807cb3c.png', 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.'),
  review('Namita Agarwal', 'M/O Krishna Agarwal', 'namita.86a0f799.png', 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.'),
  review('Sandeep Kumar', 'F/O Aryan', 'sandeep.1b22b59e.png', 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.'),
  review('Pinky Sharma', 'M/O Swastik Sharma', 'pinky.8d7145b0.png', 'I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.'),
  review('Suresh Kumar', 'F/O Aditya Kumar', 'suresh.80d60e49.png', 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.'),
  review('Mrs Urja Bhayani', 'M/O Shikha & Samarth Bhayani', 'urja.03e3c3f3.png', 'Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.'),
  review('Amit Agrawal', 'F/O Samruddhi Agrawal', 'amit.c7b6247e.png', 'Being a parent it’s a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.'),
  review('Ashu Arora', 'M/O Manisha Changrani', 'ashu.9d447126.png', 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.'),
  review('Gulabdas Gupta', 'F/O Annika Gulabdas Gupta', 'gulabdas.63ce81d8.png', 'We admitted our daughter, Annika, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.'),
  review('Selendra K. Ajmera', 'F/O Aman Ajmera', 'salendra.42b32ea1.png', 'Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.'),
]

export const collaborations = [
  'Universidad.935e33e1.png', 'yhnbepcntet.3b80eac6.jpg', 'Universitat.f7fac869.jpg', 'Cpi6.106c6037.jpg',
  'inseec.780a3115.png', 'Trinty.31016999.png', 'University.6c89dc70.png', 'International_Award_for_Young_People_logo.a0d1c4fa.jpg',
  'lions.bf493cc1.png', 'inseecU.1e5c929a.png', 'Universitas.d9db402c.png', 'universityLogo.6e446aad.jpg',
].map(m)

export const classes = ['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII']
export const states = ['Andhra Pradesh', 'Delhi', 'Haryana', 'Himachal Pradesh', 'Punjab', 'Rajasthan', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Other']

export const footerLinks = [
  ['FAQ', 'https://tis.edu.in/faq/'],
  ['Calendar', 'https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf'],
  ['Brochure', 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf'],
  ['Privacy Policy', 'https://tis.edu.in/privacy-policy/'],
  ['Terms & Conditions', 'https://tis.edu.in/terms-conditions/'],
  ['Disclaimer', 'https://tis.edu.in/disclaimer/'],
  ['Disciplinary Policy', 'https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf'],
  ['Mobile Phone Policy', 'https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf'],
  ['Child Welfare & Safety Policy', 'https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf'],
].map(([label, href]) => ({ label, href }))

export const socials = [
  ['Facebook', 'https://www.facebook.com/tulasinternationalschool/'],
  ['Twitter', 'https://twitter.com/tulas_intschool?lang=en'],
  ['LinkedIn', 'https://www.linkedin.com/school/tulas-international-school/'],
  ['Instagram', 'https://www.instagram.com/tulasinternationalschool/'],
  ['YouTube', 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw'],
].map(([label, href]) => ({ label, href }))
