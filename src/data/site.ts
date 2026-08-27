export const siteInfo = {
  name: 'Marietta Childcare',
  domain: 'marietta-childcare.com',
  brandName: 'Big Blue Marble Academy',
  brandShortName: 'BBMA',
  addressLine1: '2040 MacLand Crossing Circle',
  cityStateZip: 'Marietta, GA 30008',
  phoneLabel: '(770) 343-4847',
  phoneHref: 'tel:+17703434847',
  hoursLabel: 'Monday-Friday, 6:30 AM-6:30 PM',
  leadPath: 'https://bbmacademy.com/#awb-open-oc__2662',
  locationSearchPath: 'https://bbmacademy.com/search-results/?city=Marietta%2C+GA%2C+USA&latitude=33.9532531&longitude=-84.5499358',
  ageGroups: ['Infants', 'Toddlers', 'Twos', 'Threes', 'Fours'],
  pickupSchools: ['Dowell Elementary', 'Hollydale Elementary', 'Cheatham Hill Elementary'],
  offerings: ['Keypad entry', 'Martial arts', 'Dance classes', 'Parent communication app'],
};

export const bbmaLocations = [
  {
    name: 'BBMA Windy Hill',
    title: 'Childcare & Preschool in Windy Hill, GA',
    city: 'Marietta',
    addressLine1: '270 Windy Hill Rd SE',
    cityStateZip: 'Marietta, GA 30060',
    phoneLabel: '(770) 501-7932',
    phoneHref: 'tel:+17705017932',
    distance: '4.08 miles',
    href: 'https://bbmacademy.com/location/windy-hill/',
  },
  {
    name: 'BBMA Marietta',
    title: 'Preschool & Childcare in Marietta, GA',
    city: 'Marietta',
    addressLine1: '2040 MacLand Crossing Circle',
    cityStateZip: 'Marietta, GA 30008',
    phoneLabel: '(770) 343-4847',
    phoneHref: 'tel:+17703434847',
    distance: '4.62 miles',
    href: 'https://bbmacademy.com/location/marietta/',
  },
  {
    name: 'BBMA Woodstock',
    title: 'Preschool & Childcare in Woodstock, GA',
    city: 'Woodstock',
    addressLine1: '12055 Highway 92',
    cityStateZip: 'Woodstock, GA 30188',
    phoneLabel: '(770) 692-2282',
    phoneHref: 'tel:+17706922282',
    distance: '10.14 miles',
    href: 'https://bbmacademy.com/location/woodstock/',
  },
  {
    name: 'BBMA Powder Springs',
    title: 'Preschool & Childcare in Powder Springs, GA',
    city: 'Powder Springs',
    addressLine1: '3375 Florence Rd.',
    cityStateZip: 'Powder Springs, GA 30127',
    phoneLabel: '(678) 506-2725',
    phoneHref: 'tel:+16785062725',
    distance: '10.3 miles',
    href: 'https://bbmacademy.com/location/powder-springs/',
  },
  {
    name: 'BBMA Acworth',
    title: 'Preschool & Childcare in Acworth, GA',
    city: 'Acworth',
    addressLine1: '10492 Dallas-Acworth Hwy.',
    cityStateZip: 'Acworth, GA 30101',
    phoneLabel: '(678) 607-9797',
    phoneHref: 'tel:+16786079797',
    distance: '12.17 miles',
    href: 'https://bbmacademy.com/location/acworth/',
  },
  {
    name: 'BBMA Dallas / Paulding',
    title: 'Childcare & Preschool in Dallas, GA - Paulding',
    city: 'Dallas',
    addressLine1: '269 East Paulding Drive',
    cityStateZip: 'Dallas, GA 30157',
    phoneLabel: '(770) 874-7506',
    phoneHref: 'tel:+17708747506',
    distance: '13.45 miles',
    href: 'https://bbmacademy.com/location/paulding/',
  },
  {
    name: 'BBMA Dunwoody',
    title: 'Preschool & Childcare in Dunwoody, GA',
    city: 'Dunwoody',
    addressLine1: '4472 Chamblee Dunwoody Road',
    cityStateZip: 'Dunwoody, GA 30338',
    phoneLabel: '(770) 525-6130',
    phoneHref: 'tel:+17705256130',
    distance: '13.49 miles',
    href: 'https://bbmacademy.com/location/dunwoody/',
  },
];

export const images = {
  classroom: '/images/Background_Images/preschoolers_building_wooden_block_tower_background.jpg',
  play: '/images/Background_Images/diverse_children_sharing_toy_background.jpg',
  infant: '/images/Background_Images/infant_tummy_time_teacher_hand_background.jpg',
  garden: '/images/Background_Images/child_watering_plant_garden_background.jpg',
  books: '/images/Background_Images/girl_reading_book_quiet_corner_background.jpg',
  playground: '/images/Background_Images/child_swinging_playground_low_angle_background.jpg',
  art: '/images/Background_Images/art_supplies_flat_lay_colors_background.jpg',
  blocks: '/images/Background_Images/hands_sorting_counting_bears_background.jpg',
  dropoff: '/images/Background_Images/parent_dropoff_hug_doorway_background.jpg',
  snack: '/images/Background_Images/group_snack_time_healthy_eating_background.jpg',
};

export type PageSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type SimplePage = {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  sections: PageSection[];
  ctaTitle?: string;
  ctaText?: string;
  related?: { label: string; href: string }[];
};

export const programPages: SimplePage[] = [
  {
    slug: 'infant-care',
    title: 'BBMA Infant Care Near Marietta, GA | Marietta Childcare',
    description: 'BBMA infant care near Marietta with steady bottle, nap, tummy time, and parent update routines.',
    heroTitle: 'Infant Care in Marietta',
    heroText: 'Your baby needs calm routines, familiar caregivers, and updates you can actually use. Compare nearby BBMA locations by commute first, then see how bottles, naps, tummy time, and comfort would work on a normal weekday.',
    heroImage: images.infant,
    sections: [
      { title: 'Care for the first year', body: 'Infant care starts with the small things that make your baby feel known: feeding, rest, diapering, tummy time, and gentle sensory play. Share the schedule that works at home so the classroom day starts from something familiar.' },
      { title: 'What to bring with you', body: 'Bring the details that shape your baby\'s day: bottle timing, nap habits, allergies, comfort items, and how you like to receive updates.', bullets: ['How daily notes are shared.', 'Where babies rest and play.', 'How teachers handle changing routines.'] },
    ],
    related: [{ label: 'Enrollment questions', href: '/faq/enrollment-process' }, { label: 'Parent communication', href: '/faq/parent-communication' }],
  },
  {
    slug: 'toddler-program',
    title: 'BBMA Toddler Child Care Near Marietta, GA | Marietta Childcare',
    description: 'BBMA toddler child care near Marietta with routines for language, movement, independence, and early social skills.',
    heroTitle: 'Toddler Care for Busy Little Learners',
    heroText: 'Toddlers need room to move, words for big feelings, and patient adults who can turn ordinary moments into practice. A BBMA visit shows you how the day works for active one- and two-year-olds.',
    heroImage: images.play,
    sections: [
      { title: 'Language, movement, and routines', body: 'A toddler day works best when children know what comes next. Circle time, music, outdoor play, meals, rest, and simple choices help children build confidence.' },
      { title: 'What to compare', body: 'When you visit, look for safe movement space, clear transitions, and teachers who speak with children at eye level.', bullets: ['Outdoor play and gross-motor time.', 'Help with early self-care.', 'Simple communication about meals, naps, and mood.'] },
    ],
    related: [{ label: 'Hours and schedule', href: '/faq/hours-and-schedule' }, { label: 'Toddler development', href: '/resources/child-development' }],
  },
  {
    slug: 'preschool',
    title: 'BBMA Preschool Near Marietta, GA | Marietta Childcare',
    description: 'BBMA preschool near Marietta for threes and fours with play, early literacy, math, art, movement, and social development.',
    heroTitle: 'Preschool That Builds Confidence Before Kindergarten',
    heroText: 'Preschool should feel joyful and purposeful. At BBMA, your location choice should also fit the day around school, work, and pickup. Children practice letters, numbers, stories, art, movement, friendship, and classroom routines without losing the play that makes early learning stick.',
    heroImage: images.classroom,
    sections: [
      { title: 'Learning through the whole day', body: 'Preschoolers learn in blocks, books, questions, songs, art, pretend play, and outdoor games. The point is not worksheets; it is confidence, language, curiosity, and readiness for the next classroom.' },
      { title: 'Skills you can look for', body: 'A strong preschool day makes sharing, following directions, early writing, number sense, and problem-solving visible in ordinary classroom moments.', bullets: ['Early literacy and story time.', 'Hands-on math and science play.', 'Friendship, self-help, and classroom routines.'] },
    ],
    related: [{ label: 'Curriculum FAQ', href: '/faq/curriculum' }, { label: 'School readiness', href: '/resources/school-readiness' }],
  },
  {
    slug: 'pre-k',
    title: 'BBMA Pre-K and Fours Near Marietta, GA | Marietta Childcare',
    description: 'BBMA pre-K and fours care near Marietta focused on kindergarten readiness, independence, and social confidence.',
    heroTitle: 'A Strong Final Year Before Kindergarten',
    heroText: 'Four-year-olds are practicing the habits that make school easier: listening, asking for help, solving small problems, and joining group learning. A BBMA visit lets you see how readiness is built into the day.',
    heroImage: images.books,
    sections: [
      { title: 'Kindergarten readiness without pressure', body: 'Children practice letters, sounds, counting, writing tools, attention, independence, and group routines through teacher-led activities and play.' },
      { title: 'The real readiness test', body: 'A child who can try, wait, explain, clean up, join a group, and recover from frustration is better prepared for kindergarten. The stronger signal is how those habits show up every day.' },
    ],
    related: [{ label: 'Kindergarten transition FAQ', href: '/faq/transition-to-kindergarten' }, { label: 'School readiness guide', href: '/resources/school-readiness' }],
  },
  {
    slug: 'after-school',
    title: 'BBMA Before and After School Care Near Marietta, GA | Marietta Childcare',
    description: 'BBMA before and after school care near Marietta with pickup details to confirm by location.',
    heroTitle: 'Before and After School Care',
    heroText: 'School-age care helps you cover the hours around the school day. The Marietta BBMA location lists pickup from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary; confirm pickup details for the location you choose.',
    heroImage: images.dropoff,
    sections: [
      { title: 'A smoother school-day handoff', body: 'Before care starts at 6:30 AM. After school care runs until 6:30 PM, giving your workday and commute a steadier frame.' },
      { title: 'What children do after school', body: 'Children need time to decompress, snack, move, finish homework, and reconnect with friends. Pickup, attendance, and parent updates should be easy to understand for your school.' },
    ],
    related: [{ label: 'Hours and schedule', href: '/faq/hours-and-schedule' }, { label: 'Find a BBMA location', href: siteInfo.leadPath }],
  },
  {
    slug: 'summer-camp',
    title: 'BBMA Summer Child Care Near Marietta, GA | Marietta Childcare',
    description: 'BBMA summer child care near Marietta with full-day routines, outdoor play, creative activities, and family-friendly scheduling.',
    heroTitle: 'Summer Care With Room to Move',
    heroText: 'Summer care gives children a full-day place to play, create, read, move, and spend time with friends while parents keep their work schedule steady. Start with the BBMA location that makes the summer drive realistic.',
    heroImage: images.playground,
    sections: [
      { title: 'A better summer rhythm', body: 'The best summer days mix active play with quieter projects, meals, rest, and teacher-guided activities. You can see whether the weekly rhythm feels right for your child before committing.' },
      { title: 'Plan early', body: 'Summer spots can move quickly. Bring your dates, your child\'s age, and your ideal schedule so registration details are easier to confirm.' },
    ],
    related: [{ label: 'Summer care questions', href: '/solutions/summer-childcare' }, { label: 'Schedule a BBMA tour', href: siteInfo.leadPath }],
  },
  {
    slug: 'full-time-care',
    title: 'BBMA Full-Time Child Care Near Marietta, GA | Marietta Childcare',
    description: 'Full-time BBMA child care near Marietta with weekday schedules to compare by location.',
    heroTitle: 'Full-Time Child Care for Working Families',
    heroText: 'Full-time care gives children a steady weekday routine and gives parents one clear plan for drop-off, pickup, meals, rest, learning, and updates. Choose the BBMA location that can fit that plan day after day.',
    heroImage: images.blocks,
    sections: [
      { title: 'Hours that cover the workday', body: 'This Marietta location is open Monday through Friday from 6:30 AM to 6:30 PM. That schedule helps you cover early starts, the workday, and afternoon commute time.' },
      { title: 'What full-time care should cover', body: 'A full-time plan should make the week predictable: age group, daily rhythm, teacher communication, meals, rest, outdoor play, tuition, and classroom transitions.' },
    ],
    related: [{ label: 'Hours FAQ', href: '/faq/hours-and-schedule' }, { label: 'Enrollment process', href: '/faq/enrollment-process' }],
  },
  {
    slug: 'part-time-care',
    title: 'BBMA Part-Time Child Care Near Marietta | Marietta Childcare',
    description: 'Part-time BBMA child care guidance for Marietta-area parents comparing schedules, tuition, and enrollment options.',
    heroTitle: 'Part-Time Care That Fits the Week',
    heroText: 'Some parents need fewer days or a changing schedule. Classroom space can vary by BBMA location, so start with your child\'s age, preferred days, and target start date.',
    heroImage: images.art,
    sections: [
      { title: 'Start with the days you need', body: 'Part-time care depends on classroom space, staffing, and your preferred days. Share your schedule in the tour request so the reply can be specific.' },
      { title: 'What to bring to the conversation', body: 'Know your ideal start date, your child\'s age, the days you need care, and whether your schedule might change later.' },
    ],
    related: [{ label: 'Cost FAQ', href: '/faq/how-much-childcare-cost' }, { label: 'Choose a BBMA location', href: siteInfo.leadPath }],
  },
  {
    slug: 'school-break-care',
    title: 'BBMA School Break Care Near Marietta, GA | Marietta Childcare',
    description: 'School break care guidance for Marietta-area parents comparing BBMA options when elementary school is out.',
    heroTitle: 'Care When School Is Out',
    heroText: 'School breaks can leave parents scrambling. Bring the dates you need covered, your child\'s school schedule, and the BBMA locations that fit your commute.',
    heroImage: images.playground,
    sections: [
      { title: 'Coverage depends on the calendar', body: 'Break care can vary by date, school schedule, and available school-age spots. Share the dates early, especially around long breaks.' },
      { title: 'Keep the day predictable', body: 'Children do better when school-free days still have a rhythm: arrival, activity, outdoor time, meals, rest or quiet time, and pickup.' },
    ],
    related: [{ label: 'Hours and schedule', href: '/faq/hours-and-schedule' }, { label: 'Summer care', href: '/programs/summer-camp' }],
  },
  {
    slug: 'special-needs',
    title: 'BBMA Child Care Support Conversations Near Marietta | Marietta Childcare',
    description: 'Guidance for parents whose child may need extra support, accommodations, or a more detailed BBMA enrollment conversation.',
    heroTitle: 'Talk Through Your Child\'s Needs',
    heroText: 'If your child needs extra support, start with a direct BBMA conversation. Share what helps at home or school so everyone can talk plainly about routines, safety, location fit, and classroom fit.',
    heroImage: images.garden,
    sections: [
      { title: 'Start with specifics', body: 'Share communication needs, sensory preferences, medical notes, mobility concerns, behavior plans, allergies, or therapies already in place.' },
      { title: 'Know what the classroom can support', body: 'A careful answer is better than a generic promise. Talk through staffing, transitions, communication, and whether the classroom can meet your child\'s needs safely.' },
    ],
    related: [{ label: 'Enrollment process', href: '/faq/enrollment-process' }, { label: 'Start with a BBMA location', href: siteInfo.leadPath }],
  },
];

export const faqPages: SimplePage[] = [
  {
    slug: 'hours-and-schedule',
    title: 'BBMA Child Care Hours Near Marietta, GA | Marietta Childcare',
    description: 'BBMA child care hours near Marietta, before and after school timing, and pickup school details to confirm by location.',
    heroTitle: 'What Are the Hours?',
    heroText: 'Some BBMA locations near Marietta have different hours, so confirm the location you plan to tour. The MacLand Crossing Circle location runs Monday through Friday from 6:30 AM to 6:30 PM.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Operating hours', body: 'Use the official BBMA school details and tour conversation to confirm daily hours. Holiday closures and classroom schedule notes are confirmed during enrollment.' },
      { title: 'School-age pickup', body: 'The Marietta location lists pickup from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary. Confirm school pickup for the location you choose.', bullets: siteInfo.pickupSchools },
    ],
  },
  {
    slug: 'enrollment-process',
    title: 'BBMA Child Care Enrollment Near Marietta | Marietta Childcare',
    description: 'How BBMA child care enrollment starts near Marietta, from choosing a location to planning a start date.',
    heroTitle: 'How Does Enrollment Work?',
    heroText: 'Start with the BBMA location you want to compare, your child\'s age, preferred start date, and schedule needs. Those details make the enrollment conversation useful from the first reply.',
    heroImage: images.classroom,
    sections: [
      { title: 'Start with age and schedule', body: 'Enrollment depends on your child\'s age, open classroom space, schedule, start date, and location. A BBMA visit helps you picture the day before paperwork begins.' },
      { title: 'Information to have ready', body: 'Bring basic contact details, your child\'s birthday, schedule needs, health or allergy notes, and anything you want clarified about tuition or routines.' },
    ],
  },
  {
    slug: 'how-much-childcare-cost',
    title: 'How Much Does BBMA Child Care Cost Near Marietta? | Marietta Childcare',
    description: 'What Marietta-area parents should know before comparing BBMA child care tuition, fees, schedules, meals, and enrollment.',
    heroTitle: 'How Much Does Child Care Cost?',
    heroText: 'Tuition depends on age, schedule, start date, location, and available classroom options. Current pricing is confirmed when you request a BBMA tour.',
    heroImage: images.blocks,
    sections: [
      { title: 'What changes the price', body: 'Infant care, preschool care, school-age care, full-time schedules, part-time needs, registration fees, and summer care can all price differently.' },
      { title: 'What to confirm before comparing', body: 'Confirm what tuition includes, how payments work, whether meals or activities are included, and what changes if your schedule changes.' },
    ],
  },
  {
    slug: 'curriculum',
    title: 'BBMA Child Care Curriculum Near Marietta | Marietta Childcare',
    description: 'How early learning, play, language, STEAM activities, and kindergarten readiness fit into a BBMA child care day near Marietta.',
    heroTitle: 'What Do Children Learn?',
    heroText: 'Children learn through play, conversation, stories, music, art, movement, hands-on science, early math, friendship, and routines. When you compare BBMA locations, ask how that rhythm looks for your child\'s age.',
    heroImage: images.art,
    sections: [
      { title: 'Play with a purpose', body: 'Early learning works best when children touch, build, sing, ask, move, pretend, and solve small problems with a teacher nearby.' },
      { title: 'Skills that show up every day', body: 'Look for language growth, fine-motor practice, early literacy, counting, art, music, kindness, independence, and confidence in group settings.' },
    ],
  },
  {
    slug: 'nutrition-meals',
    title: 'Meals and Snacks in BBMA Child Care Near Marietta | Marietta Childcare',
    description: 'What to know about meals, snacks, allergies, bottles, and food routines when comparing BBMA child care locations.',
    heroTitle: 'What About Meals and Snacks?',
    heroText: 'Food routines matter. Know what meals and snacks are provided, how allergies are handled, and what infants or picky eaters need from home.',
    heroImage: images.snack,
    sections: [
      { title: 'Handle food details early', body: 'Breakfast, lunch, snacks, allergy procedures, bottle storage, food from home, and classroom mealtime routines should be settled before the first day.' },
      { title: 'For infants and toddlers', body: 'Share feeding times, bottle preferences, new foods, allergies, and any notes from your pediatrician that affect daily care.' },
    ],
  },
  {
    slug: 'parent-communication',
    title: 'Parent Communication in BBMA Child Care Near Marietta | Marietta Childcare',
    description: 'How daily updates, app communication, teacher notes, and conferences work for parents comparing BBMA locations.',
    heroTitle: 'How Will You Hear About Your Child\'s Day?',
    heroText: 'Parent communication should be clear and steady. When you tour BBMA, daily notes, photos, milestones, meals, naps, and teacher messages should be easy to understand for your child\'s age.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Daily updates', body: 'A parent communication app is available. You should know what arrives each day, from meals and naps to notes about mood, milestones, and classroom moments.' },
      { title: 'Bigger conversations', body: 'For concerns, milestones, transitions, or classroom moves, know how conferences and director conversations are scheduled.' },
    ],
  },
  {
    slug: 'safety-security',
    title: 'BBMA Child Care Safety Near Marietta | Marietta Childcare',
    description: 'What to know about keypad entry, supervision, classroom safety, playgrounds, and health routines.',
    heroTitle: 'How Is the Center Kept Secure?',
    heroText: 'Safety starts with controlled access, attentive supervision, clean routines, and clear pickup policies. Compare how those details work at the BBMA location you plan to use.',
    heroImage: images.playground,
    sections: [
      { title: 'Controlled entry', body: 'Keypad entry is available. Family access, visitor check-in, pickup authorization, and emergency contacts should all feel clear before your child starts.' },
      { title: 'Classroom safety', body: 'During your tour, look at sightlines, playground surfaces, handwashing routines, rest spaces, and how teachers keep children together during transitions.' },
    ],
  },
  {
    slug: 'teacher-qualifications',
    title: 'BBMA Child Care Teachers Near Marietta | Marietta Childcare',
    description: 'What to know about child care teachers, training, communication, and classroom supervision.',
    heroTitle: 'Know Who Will Care for Your Child',
    heroText: 'Teacher conversations should be concrete: who will care for your child, how the BBMA classroom is staffed, and how teachers handle hard moments.',
    heroImage: images.classroom,
    sections: [
      { title: 'Know the classroom team', body: 'You should know who leads the classroom, how substitutes are handled, how teachers communicate with parents, and what training happens before teachers work with children.' },
      { title: 'Watch teacher-child interaction', body: 'On a tour, notice whether teachers get down to children\'s level, use calm language, redirect with patience, and keep the room moving without rushing children.' },
    ],
  },
  {
    slug: 'sick-child-policy',
    title: 'Sick Child Policy Questions | Marietta Childcare',
    description: 'Health and sick-child policy details to know before enrolling in Marietta child care.',
    heroTitle: 'What Happens When a Child Is Sick?',
    heroText: 'Before the first sick day, know the fever rules, pickup symptoms, return-to-care timing, medication policies, and parent notification process.',
    heroImage: images.books,
    sections: [
      { title: 'Clear rules protect everyone', body: 'Know when to keep a child home, when a child can return, and what documentation is needed after certain illnesses.' },
      { title: 'Medication and allergies', body: 'Medication forms, allergy information, and food or medical instructions should be handled plainly before the first day.' },
    ],
  },
  {
    slug: 'transition-to-kindergarten',
    title: 'Kindergarten Readiness in Marietta | Marietta Childcare',
    description: 'How preschool and pre-K routines help children practice independence, social confidence, and early academic skills.',
    heroTitle: 'How Do Children Get Ready for Kindergarten?',
    heroText: 'Kindergarten readiness is more than letters and numbers. Children need independence, confidence, language, attention, and practice in group routines.',
    heroImage: images.books,
    sections: [
      { title: 'Skills that matter', body: 'Children practice listening, taking turns, asking for help, cleaning up, using writing tools, recognizing letters and numbers, and joining group learning.' },
      { title: 'What you can practice at home', body: 'Read daily, talk through routines, let your child practice dressing and cleanup, count ordinary objects, and give small chances to solve problems.' },
    ],
  },
];

export const solutionPages: SimplePage[] = [
  {
    slug: 'working-parents',
    title: 'BBMA Child Care for Working Parents Near Marietta | Marietta Childcare',
    description: 'BBMA child care guidance for working Marietta-area parents who need realistic commutes, school pickup questions, and steady weekday routines.',
    heroTitle: 'Child Care That Covers the Workday',
    heroText: 'Working parents need care that starts early, ends after the commute, and keeps school-age pickup from becoming another daily scramble. Start with the BBMA locations on your usual drive.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Hours built around real workdays', body: 'Hours can vary by BBMA location, so confirm the school that fits your morning drop-off, the workday, and afternoon pickup.' },
      { title: 'School pickup support', body: 'The Marietta location lists after school pickup from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary. Confirm pickup details for the location you choose.' },
    ],
  },
  {
    slug: 'new-parents',
    title: 'First-Time Parent BBMA Child Care Questions | Marietta Childcare',
    description: 'A practical child care starting point for first-time parents in Marietta comparing infant and toddler care.',
    heroTitle: 'Your First Child Care Search Does Not Have to Feel Vague',
    heroText: 'First-time parents need plain answers about location fit, routines, safety, updates, naps, feeding, and what the first week actually looks like.',
    heroImage: images.infant,
    sections: [
      { title: 'Start with your daily worries', body: 'Feeding, sleeping, crying, diapering, separation, and updates are not small details. They are the day.' },
      { title: 'Notice how the room feels', body: 'The right classroom should be able to explain the day in plain language and give you time to talk through your child without rushing.' },
    ],
  },
  {
    slug: 'budget-conscious',
    title: 'Comparing BBMA Child Care Cost Near Marietta | Marietta Childcare',
    description: 'Cost details budget-conscious Marietta parents should know when comparing child care tuition and schedule options.',
    heroTitle: 'Compare Child Care Cost Without Guessing',
    heroText: 'The cheapest weekly number is not always the clearest choice. Know what tuition includes, what fees are separate, and how schedule changes affect price at the BBMA location you choose.',
    heroImage: images.blocks,
    sections: [
      { title: 'Get the full cost picture', body: 'Compare registration fees, weekly tuition, meals, activity fees, schedule changes, summer care, and payment timing before deciding.' },
      { title: 'Match price to the care you need', body: 'Infants, preschoolers, and school-age children can have different pricing. Your child\'s age and schedule are the first two facts to share.' },
    ],
  },
  {
    slug: 'transition-to-school',
    title: 'BBMA Kindergarten Transition Support Near Marietta | Marietta Childcare',
    description: 'How Marietta parents can help preschool and pre-K children prepare for kindergarten.',
    heroTitle: 'A Calmer Move Toward Kindergarten',
    heroText: 'Children do better when kindergarten readiness is practiced slowly: group time, independence, early academics, and confidence with new routines.',
    heroImage: images.books,
    sections: [
      { title: 'Readiness shows up in small habits', body: 'A child who can listen, try again, ask for help, use the bathroom, clean up, and play with peers is building the foundation school expects.' },
      { title: 'Parents can reinforce it at home', body: 'Read together, practice morning routines, count ordinary objects, and let your child handle small responsibilities before school starts.' },
    ],
  },
  {
    slug: 'summer-childcare',
    title: 'BBMA Summer Child Care for Marietta Parents | Marietta Childcare',
    description: 'Summer child care details for Marietta parents who need care, activities, and a steady schedule during school breaks.',
    heroTitle: 'Summer Care That Keeps the Week Moving',
    heroText: 'Summer care helps children stay active and gives parents a predictable plan when school is out. Choose the BBMA location that keeps the summer drive realistic.',
    heroImage: images.playground,
    sections: [
      { title: 'Bring your dates early', body: 'Summer space can depend on age, classroom, and registration timing. Bring the weeks you need, your child\'s age, and your preferred schedule.' },
      { title: 'Look for more than supervision', body: 'A strong summer day includes outdoor play, creative projects, movement, stories, meals, and enough structure that children know what comes next.' },
    ],
  },
  {
    slug: 'single-parents',
    title: 'BBMA Child Care Support for Single Parents Near Marietta | Marietta Childcare',
    description: 'Child care guidance for single parents in Marietta who need reliable hours, clear communication, and backup planning.',
    heroTitle: 'A Child Care Plan You Can Count On',
    heroText: 'Single parents often need clear hours, quick communication, and a pickup plan that does not depend on guesswork. The right BBMA location should make the week simpler, not tighter.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Start with logistics', body: 'Authorized pickup, emergency contacts, payment timing, parent app updates, and late-work scenarios should be clear before the week gets busy.' },
      { title: 'Use the full support around the day', body: 'Hours from 6:30 AM to 6:30 PM and school-age pickup options can make the week easier to manage.' },
    ],
  },
  {
    slug: 'premium-enrichment',
    title: 'BBMA Child Care With Enrichment Activities Near Marietta | Marietta Childcare',
    description: 'Marietta child care with enrichment activities around movement, dance, martial arts, art, and hands-on learning.',
    heroTitle: 'More Than a Place to Wait',
    heroText: 'You may want your child to move, create, listen, build, and try new things. See how BBMA enrichment fits into the week for your child\'s age and location.',
    heroImage: images.art,
    sections: [
      { title: 'Activities built into the week', body: 'Martial arts, dance classes, keypad entry, and parent communication app access are listed offerings you can discuss for your child\'s age.', bullets: siteInfo.offerings },
      { title: 'Keep enrichment age-appropriate', body: 'The right activity should support confidence and coordination without making the day feel overpacked.' },
    ],
  },
  {
    slug: 'special-needs-children',
    title: 'Extra Support BBMA Child Care Near Marietta | Marietta Childcare',
    description: 'Guidance for parents whose child may need extra support, accommodations, or a careful enrollment conversation.',
    heroTitle: 'Talk Through Support Before You Enroll',
    heroText: 'If your child needs extra help, do not settle for vague promises. Share the details and talk through what the BBMA classroom can safely support.',
    heroImage: images.garden,
    sections: [
      { title: 'Bring the details that matter', body: 'Share medical notes, allergies, communication needs, sensory preferences, therapy schedules, behavior plans, or mobility concerns.' },
      { title: 'Get a plain answer', body: 'A responsible program should explain what it can support, what is needed from you, and when a different setting may be better.' },
    ],
  },
  {
    slug: 'multilingual-families',
    title: 'Child Care for Multilingual Families in Marietta | Marietta Childcare',
    description: 'Communication and classroom-fit guidance for multilingual Marietta parents.',
    heroTitle: 'Child Care for Multilingual Families',
    heroText: 'If your child uses more than one language at home, teacher communication and respect for that full language life matter.',
    heroImage: images.books,
    sections: [
      { title: 'Know how teachers communicate', body: 'Daily updates, forms, conferences, and urgent messages should be understandable if a family member prefers another language.' },
      { title: 'Keep the home language strong', body: 'Children benefit when you keep reading, singing, and talking in the language they know best at home.' },
    ],
  },
];

export const serviceAreaPages: SimplePage[] = [
  {
    slug: 'downtown-marietta',
    title: 'BBMA Child Care Near Downtown Marietta | Marietta Childcare',
    description: 'BBMA child care near Downtown Marietta with local commute details, programs, and tour scheduling.',
    heroTitle: 'BBMA Child Care Near Downtown Marietta',
    heroText: 'If Downtown Marietta is part of your daily drive, compare BBMA Windy Hill and BBMA Marietta first, then decide whether another nearby location fits your commute better.',
    heroImage: images.classroom,
    sections: [
      { title: 'Location details', body: 'The official BBMA Marietta search lists Windy Hill and MacLand Crossing Circle as the closest Marietta options, with Woodstock and Powder Springs nearby.' },
      { title: 'Programs by age', body: 'Infants, toddlers, twos, threes, fours, and school-age care each need a different daily rhythm. Bring your child\'s age and start date so BBMA can point you to the right location conversation.' },
    ],
  },
  {
    slug: 'north-marietta',
    title: 'BBMA North Marietta Child Care | Marietta Childcare',
    description: 'North Marietta parents can weigh BBMA commute fit, age groups, school pickup needs, and tour timing.',
    heroTitle: 'BBMA Child Care for North Marietta Parents',
    heroText: 'North Marietta parents need two things to line up: a BBMA classroom that feels right and a drive that works twice a day.',
    heroImage: images.play,
    sections: [
      { title: 'A practical location conversation', body: 'Map BBMA Marietta, Windy Hill, Woodstock, and Acworth against your commute, school-day drive, and pickup plan.' },
      { title: 'Before and after school', body: 'The MacLand Crossing Circle location lists school-age pickup from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary. Confirm pickup for the location you choose.' },
    ],
  },
  {
    slug: 'south-marietta',
    title: 'BBMA South Marietta Child Care | Marietta Childcare',
    description: 'South Marietta parents can compare weekday care, preschool options, and realistic pickup timing.',
    heroTitle: 'BBMA Child Care for South Marietta Parents',
    heroText: 'If you live or work south of Marietta, compare BBMA Windy Hill, Marietta, and Powder Springs with your actual drive time in mind.',
    heroImage: images.playground,
    sections: [
      { title: 'Fit care to your week', body: 'Hours can vary by BBMA location, so confirm the schedule for the school that best matches your commute.' },
      { title: 'Match the day to your child\'s age', body: 'Infant needs, toddler movement, preschool readiness, and school-age pickup all shape the daily plan differently.' },
    ],
  },
  {
    slug: 'east-marietta',
    title: 'BBMA East Marietta Child Care | Marietta Childcare',
    description: 'East Marietta parents can start with hours, parent updates, classroom rhythm, and the daily drive.',
    heroTitle: 'BBMA Child Care for East Marietta Parents',
    heroText: 'East Marietta parents can start with the commute, then compare BBMA locations by age groups, parent updates, and the daily classroom rhythm.',
    heroImage: images.garden,
    sections: [
      { title: 'Tour with your commute in mind', body: 'Bring your likely drop-off and pickup times so you can decide whether the hours and location fit your workday.' },
      { title: 'Daily communication', body: 'A parent communication app is listed as an offering. You should know when updates arrive and what they include.' },
    ],
  },
  {
    slug: 'west-marietta',
    title: 'BBMA West Marietta Child Care | Marietta Childcare',
    description: 'West Marietta parents can line up BBMA programs with drive time, age group, and pickup plans.',
    heroTitle: 'BBMA Child Care for West Marietta Parents',
    heroText: 'West Marietta parents can compare BBMA Marietta, Powder Springs, Dallas / Paulding, and Acworth by drive time, age group, and pickup plan.',
    heroImage: images.blocks,
    sections: [
      { title: 'Start with age and schedule', body: 'Your child\'s age, desired start date, and weekly schedule determine the most useful enrollment conversation.' },
      { title: 'Check the full day', body: 'Meals, rest, outdoor play, enrichment activities, parent updates, and pickup authorization all affect how the week feels.' },
    ],
  },
  {
    slug: 'kennesaw',
    title: 'BBMA Child Care Near Kennesaw | Marietta Childcare',
    description: 'BBMA child care near Kennesaw for parents comparing Marietta-area programs, hours, and tour options.',
    heroTitle: 'BBMA Child Care Near Kennesaw',
    heroText: 'If your Kennesaw commute already runs through Marietta, compare BBMA Marietta, Woodstock, and Acworth before choosing a tour location.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Compare commute and care together', body: 'A BBMA location only works if the classroom feels right and the daily drive is realistic.' },
      { title: 'School-age logistics', body: 'If your child is in elementary school, pickup school, timing, and school-age space become the key details.' },
    ],
  },
  {
    slug: 'smyrna',
    title: 'BBMA Child Care Near Smyrna | Marietta Childcare',
    description: 'BBMA child care near Smyrna for parents considering Marietta-area care and early learning programs.',
    heroTitle: 'BBMA Child Care Near Smyrna',
    heroText: 'Smyrna parents can weigh BBMA Windy Hill and BBMA Marietta against the daily drive, then look at weekday care, preschool, and school-age options.',
    heroImage: images.classroom,
    sections: [
      { title: 'Make the drive concrete', body: 'Before choosing care, test the morning and afternoon drive and confirm how late pickup works within the 6:30 PM closing time.' },
      { title: 'Start with age and timing', body: 'Open classroom space can change by age group. Share your child\'s age, start date, and schedule when you request a tour.' },
    ],
  },
  {
    slug: 'cobb-county',
    title: 'BBMA Cobb County Child Care Near Marietta | Marietta Childcare',
    description: 'Cobb County child care information for parents comparing BBMA locations, hours, and early learning programs.',
    heroTitle: 'BBMA Child Care for Cobb County Parents',
    heroText: 'Cobb County parents can start with the BBMA search results, then decide which address, commute, and program fit the week.',
    heroImage: images.play,
    sections: [
      { title: 'Local facts to know', body: 'The official BBMA Marietta search returns nearby locations in Marietta, Woodstock, Powder Springs, Acworth, Dallas / Paulding, and Dunwoody.' },
      { title: 'Age groups', body: 'Infants, toddlers, twos, threes, fours, and school-age children each need a different care conversation.' },
    ],
  },
  {
    slug: 'marietta-county',
    title: 'BBMA Marietta Area Child Care | Marietta Childcare',
    description: 'Marietta-area BBMA child care information for parents searching for local early learning and day care options.',
    heroTitle: 'BBMA Marietta Area Child Care',
    heroText: 'Parents searching for Marietta County child care usually mean Marietta or Cobb County care. Start with the BBMA address, hours, age group, and commute that fit your week.',
    heroImage: images.garden,
    sections: [
      { title: 'Use the real location', body: 'Compare the official BBMA school details instead of choosing from a broad area label.' },
      { title: 'Start with the practical details', body: 'Open classroom space, hours, tuition, pickup rules, and classroom fit matter more than a broad area label.' },
    ],
  },
];

export const resourcePages: SimplePage[] = [
  {
    slug: 'child-development',
    title: 'Child Development by Age | Marietta Childcare',
    description: 'A parent-friendly look at infant, toddler, preschool, and pre-K development milestones.',
    heroTitle: 'What Changes From Infants to Fours',
    heroText: 'Children do not all develop on the same schedule, but each age brings familiar patterns. Those patterns help you notice what kind of care your child needs next.',
    heroImage: images.garden,
    sections: [
      { title: 'Infants', body: 'Infants need responsive feeding, safe rest, tummy time, sensory play, and familiar adults who notice small changes in mood and development.' },
      { title: 'Toddlers and twos', body: 'Toddlers need movement, simple words for feelings, repetition, safe choices, and patient help with independence.' },
      { title: 'Threes and fours', body: 'Preschoolers practice friendship, language, early literacy, counting, creativity, self-help, and the classroom habits they will need in kindergarten.' },
    ],
  },
  {
    slug: 'choosing-childcare',
    title: 'How to Choose a BBMA Location Near Marietta | Marietta Childcare',
    description: 'A practical checklist for choosing a BBMA child care location near Marietta, Georgia.',
    heroTitle: 'How to Choose a BBMA Location Without Guessing',
    heroText: 'A good visit should make the week easier to picture: commute, safety, schedule, communication, cost, classroom rhythm, and how your child responds in the room.',
    heroImage: images.classroom,
    sections: [
      { title: 'Start with logistics', body: 'Check the BBMA address, hours, commute, pickup rules, age groups, tuition, and whether the schedule fits your workday.' },
      { title: 'Watch the classroom', body: 'Look for calm teachers, clear routines, clean spaces, safe transitions, outdoor play, and children who know what comes next.' },
      { title: 'Cover the hard parts', body: 'Illness policies, communication, teacher training, meals, emergencies, and hard drop-off days all deserve plain answers before you enroll.' },
    ],
  },
  {
    slug: 'nutrition-guide',
    title: 'BBMA Child Care Meals and Snacks Guide | Marietta Childcare',
    description: 'What parents should know about meals, snacks, allergies, bottles, and food routines in child care.',
    heroTitle: 'Meals, Snacks, and Food Questions',
    heroText: 'Food is part of care. Before enrollment, know how meals, snacks, bottles, allergies, picky eating, and food from home are handled.',
    heroImage: images.snack,
    sections: [
      { title: 'For babies', body: 'Share bottle timing, formula or milk instructions, new foods, allergies, and any feeding notes from your pediatrician.' },
      { title: 'For toddlers and preschoolers', body: 'Snack timing, lunch routines, allergy separation, water access, and slower eaters all shape the classroom meal rhythm.' },
    ],
  },
  {
    slug: 'parenting-tips',
    title: 'Parenting Tips for BBMA Child Care Transitions | Marietta Childcare',
    description: 'Simple ways to help children settle into child care, preschool, and new routines.',
    heroTitle: 'Help Your Child Settle Into Care',
    heroText: 'Most children need repetition, calm goodbyes, and predictable routines before a new classroom feels familiar.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Practice the routine', body: 'Talk through the morning, pack the bag together, name the teacher, and keep goodbye short and warm.' },
      { title: 'Expect an adjustment window', body: 'Some children cry at drop-off and still have a good day. What happens after you leave matters more than the goodbye itself.' },
      { title: 'Use consistent language', body: 'A simple line like "I will come back after snack and play" can help more than a long negotiation at the door.' },
    ],
  },
  {
    slug: 'school-readiness',
    title: 'BBMA Kindergarten Readiness Guide | Marietta Childcare',
    description: 'Kindergarten readiness skills for preschool and pre-K children in Marietta.',
    heroTitle: 'Kindergarten Readiness Starts Before the First Worksheet',
    heroText: 'Children need language, independence, confidence, attention, fine-motor practice, and early academic exposure before kindergarten feels manageable.',
    heroImage: images.books,
    sections: [
      { title: 'Social readiness', body: 'Children practice sharing, waiting, asking for help, solving small conflicts, and recovering when something does not go their way.' },
      { title: 'Academic readiness', body: 'Letters, sounds, counting, sorting, drawing, writing tools, and story time all matter, but they work best when they are part of play.' },
      { title: 'Home practice', body: 'Read together, let children dress themselves, count steps or snacks, practice cleanup, and give them small jobs they can finish.' },
    ],
  },
];

export function findPage(pages: SimplePage[], slug: string) {
  return pages.find((page) => page.slug === slug);
}
