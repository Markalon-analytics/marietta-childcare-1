export const siteInfo = {
  name: 'Marietta Childcare',
  domain: 'MariettaChildCare.com',
  addressLine1: '2040 MacLand Crossing Circle',
  cityStateZip: 'Marietta, GA 30008',
  phoneLabel: '(770) 343-4847',
  phoneHref: 'tel:+17703434847',
  hoursLabel: 'Monday-Friday, 6:30 AM-6:30 PM',
  leadPath: '/contact',
  ageGroups: ['Infants', 'Toddlers', 'Twos', 'Threes', 'Fours'],
  pickupSchools: ['Dowell Elementary', 'Hollydale Elementary', 'Cheatham Hill Elementary'],
  offerings: ['Keypad entry', 'Martial arts', 'Dance classes', 'Parent communication app'],
};

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
    title: 'Infant Care in Marietta, GA | Marietta Childcare',
    description: 'Infant care in Marietta for families who want responsive routines, safe sleep practices, and steady parent communication.',
    heroTitle: 'Infant Care in Marietta',
    heroText: 'Your baby needs calm routines, familiar caregivers, and clear updates while you are away. We welcome infants and help parents understand daily feeding, sleep, and care rhythms before enrollment.',
    heroImage: images.infant,
    sections: [
      { title: 'Care for the first year', body: 'Infant care centers on feeding, rest, diapering, tummy time, and gentle sensory play. You can ask about your baby\'s current schedule during a tour so the classroom team understands what already works at home.' },
      { title: 'What parents can ask on a tour', body: 'Bring the details that shape your day: bottle timing, nap habits, allergies, comfort items, and how you prefer to receive updates.', bullets: ['Ask how daily notes are shared.', 'Ask where babies rest and play.', 'Ask how teachers handle changing routines.'] },
    ],
    related: [{ label: 'Enrollment questions', href: '/faq/enrollment-process' }, { label: 'Parent communication', href: '/faq/parent-communication' }],
  },
  {
    slug: 'toddler-program',
    title: 'Toddler Child Care in Marietta, GA | Marietta Childcare',
    description: 'Toddler child care in Marietta with routines for language, movement, independence, and early social skills.',
    heroTitle: 'Toddler Care for Busy Little Learners',
    heroText: 'Toddlers need room to move, words for big feelings, and patient adults who can turn ordinary moments into practice. Tour the center to see how the day supports active one- and two-year-olds.',
    heroImage: images.play,
    sections: [
      { title: 'Language, movement, and routines', body: 'A toddler day works best when children know what comes next. Circle time, music, outdoor play, meals, rest, and simple choices help children build confidence.' },
      { title: 'What to compare', body: 'When you visit, look for safe movement space, clear transitions, and teachers who speak with children at eye level.', bullets: ['Outdoor play and gross-motor time.', 'Help with early self-care.', 'Simple communication about meals, naps, and mood.'] },
    ],
    related: [{ label: 'Hours and schedule', href: '/faq/hours-and-schedule' }, { label: 'Toddler development', href: '/resources/child-development' }],
  },
  {
    slug: 'preschool',
    title: 'Preschool in Marietta, GA | Marietta Childcare',
    description: 'Preschool in Marietta for threes and fours with play, early literacy, math, art, movement, and social development.',
    heroTitle: 'Preschool That Builds Confidence Before Kindergarten',
    heroText: 'Preschool should feel joyful and purposeful. Children practice letters, numbers, stories, art, movement, friendship, and classroom routines without losing the play that makes early learning stick.',
    heroImage: images.classroom,
    sections: [
      { title: 'Learning through the whole day', body: 'Preschoolers learn in blocks, books, questions, songs, art, pretend play, and outdoor games. The point is not worksheets; it is confidence, language, curiosity, and readiness for the next classroom.' },
      { title: 'Skills families usually ask about', body: 'Ask how teachers support sharing, following directions, early writing, number sense, and problem-solving.', bullets: ['Early literacy and story time.', 'Hands-on math and science play.', 'Friendship, self-help, and classroom routines.'] },
    ],
    related: [{ label: 'Curriculum FAQ', href: '/faq/curriculum' }, { label: 'School readiness', href: '/resources/school-readiness' }],
  },
  {
    slug: 'pre-k',
    title: 'Pre-K and Fours Program in Marietta, GA | Marietta Childcare',
    description: 'Pre-K and fours care in Marietta focused on kindergarten readiness, independence, and social confidence.',
    heroTitle: 'A Strong Final Year Before Kindergarten',
    heroText: 'Four-year-olds are practicing the habits that make school easier: listening, asking for help, solving small problems, and joining group learning. A tour lets you see how readiness is built into the day.',
    heroImage: images.books,
    sections: [
      { title: 'Kindergarten readiness without pressure', body: 'Children practice letters, sounds, counting, writing tools, attention, independence, and group routines through teacher-led activities and play.' },
      { title: 'The real readiness test', body: 'A child who can try, wait, explain, clean up, join a group, and recover from frustration is better prepared for kindergarten. Ask how those habits are practiced every day.' },
    ],
    related: [{ label: 'Kindergarten transition FAQ', href: '/faq/transition-to-kindergarten' }, { label: 'School readiness guide', href: '/resources/school-readiness' }],
  },
  {
    slug: 'after-school',
    title: 'Before and After School Care in Marietta, GA | Marietta Childcare',
    description: 'Before and after school care near Marietta with pickup from Dowell, Hollydale, and Cheatham Hill elementary schools.',
    heroTitle: 'Before and After School Care',
    heroText: 'School-age care helps parents cover the hours around the school day. Pickup is available from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary.',
    heroImage: images.dropoff,
    sections: [
      { title: 'A smoother school-day handoff', body: 'Before care starts at 6:30 AM. After school care runs until 6:30 PM, so families have a steadier plan for workdays and commute time.' },
      { title: 'What children do after school', body: 'Children need time to decompress, snack, move, finish homework, and reconnect with friends. Ask how pickup, attendance, and parent updates work for your school.' },
    ],
    related: [{ label: 'Hours and schedule', href: '/faq/hours-and-schedule' }, { label: 'Contact the center', href: '/contact' }],
  },
  {
    slug: 'summer-camp',
    title: 'Summer Child Care in Marietta, GA | Marietta Childcare',
    description: 'Summer child care in Marietta with full-day routines, outdoor play, creative activities, and family-friendly scheduling.',
    heroTitle: 'Summer Care With Room to Move',
    heroText: 'Summer care gives children a full-day place to play, create, read, move, and spend time with friends while parents keep their work schedule steady.',
    heroImage: images.playground,
    sections: [
      { title: 'A better summer rhythm', body: 'The best summer days mix active play with quieter projects, meals, rest, and teacher-guided activities. Ask about weekly themes, age groups, and registration timing.' },
      { title: 'Plan early', body: 'Summer spots can move quickly. Families should ask about dates, weekly tuition, withdrawal rules, and whether care continues into the next school year.' },
    ],
    related: [{ label: 'Summer care questions', href: '/solutions/summer-childcare' }, { label: 'Schedule a tour', href: '/contact' }],
  },
  {
    slug: 'full-time-care',
    title: 'Full-Time Child Care in Marietta, GA | Marietta Childcare',
    description: 'Full-time child care in Marietta with Monday-Friday hours from 6:30 AM to 6:30 PM.',
    heroTitle: 'Full-Time Child Care for Working Families',
    heroText: 'Full-time care gives children a steady weekday routine and gives parents one clear plan for drop-off, pickup, meals, rest, learning, and updates.',
    heroImage: images.blocks,
    sections: [
      { title: 'Hours that cover the workday', body: 'The center is open Monday through Friday from 6:30 AM to 6:30 PM. That schedule helps parents cover early starts, standard workdays, and afternoon commute time.' },
      { title: 'What full-time care should answer', body: 'Ask about age groups, daily rhythm, teacher communication, meals, rest, outdoor play, tuition, and what happens when your child is ready to move classrooms.' },
    ],
    related: [{ label: 'Hours FAQ', href: '/faq/hours-and-schedule' }, { label: 'Enrollment process', href: '/faq/enrollment-process' }],
  },
  {
    slug: 'part-time-care',
    title: 'Part-Time Child Care Questions in Marietta | Marietta Childcare',
    description: 'Part-time child care questions for Marietta families comparing schedules, tuition, and enrollment options.',
    heroTitle: 'Part-Time Care Questions',
    heroText: 'Some families need fewer days or a changing schedule. Availability can vary by classroom, so the fastest path is to ask what is open for your child\'s age and start date.',
    heroImage: images.art,
    sections: [
      { title: 'Ask about real availability', body: 'Part-time care depends on classroom openings, staffing, and the days your family needs. Share your preferred schedule during the tour request so the center can answer accurately.' },
      { title: 'What to bring to the conversation', body: 'Know your ideal start date, your child\'s age, the days you need care, and whether your schedule might change later.' },
    ],
    related: [{ label: 'Cost FAQ', href: '/faq/how-much-childcare-cost' }, { label: 'Contact us', href: '/contact' }],
  },
  {
    slug: 'school-break-care',
    title: 'School Break Care in Marietta, GA | Marietta Childcare',
    description: 'School break care questions for Marietta families who need coverage when elementary school is out.',
    heroTitle: 'Care When School Is Out',
    heroText: 'School breaks can leave parents scrambling. Ask about available break care, school-age enrollment, and how the schedule changes around holidays and summer.',
    heroImage: images.playground,
    sections: [
      { title: 'Coverage depends on the calendar', body: 'Break care can vary by date, school schedule, and available school-age spots. Families should ask early, especially around long breaks.' },
      { title: 'Keep the day predictable', body: 'Children do better when school-free days still have a rhythm: arrival, activity, outdoor time, meals, rest or quiet time, and pickup.' },
    ],
    related: [{ label: 'Hours and schedule', href: '/faq/hours-and-schedule' }, { label: 'Summer care', href: '/programs/summer-camp' }],
  },
  {
    slug: 'special-needs',
    title: 'Child Care Support Conversations in Marietta | Marietta Childcare',
    description: 'Questions to ask when your child may need extra support, accommodations, or a more detailed enrollment conversation.',
    heroTitle: 'Talk Through Your Child\'s Needs',
    heroText: 'If your child needs extra support, the right next step is a direct conversation. Share what helps your child at home or school so the center can discuss fit, routines, and available support.',
    heroImage: images.garden,
    sections: [
      { title: 'Start with specifics', body: 'Families should describe communication needs, sensory preferences, medical notes, mobility concerns, behavior plans, allergies, or therapies already in place.' },
      { title: 'Ask what the classroom can support', body: 'A careful answer is better than a generic promise. Use the tour to ask about staffing, transitions, communication, and whether the center can meet your child\'s needs safely.' },
    ],
    related: [{ label: 'Enrollment process', href: '/faq/enrollment-process' }, { label: 'Contact the center', href: '/contact' }],
  },
];

export const faqPages: SimplePage[] = [
  {
    slug: 'hours-and-schedule',
    title: 'Child Care Hours in Marietta, GA | Marietta Childcare',
    description: 'Marietta child care hours, before and after school timing, and pickup school details.',
    heroTitle: 'What Are the Hours?',
    heroText: 'The center is open Monday through Friday from 6:30 AM to 6:30 PM.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Operating hours', body: 'Families can use care Monday through Friday, 6:30 AM to 6:30 PM. Ask about holiday closures and any classroom-specific schedule notes during enrollment.' },
      { title: 'School-age pickup', body: 'Before and after school care may include pickup from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary.', bullets: siteInfo.pickupSchools },
    ],
  },
  {
    slug: 'enrollment-process',
    title: 'Child Care Enrollment in Marietta | Marietta Childcare',
    description: 'How to ask about enrollment, tours, openings, documents, and start dates for child care in Marietta.',
    heroTitle: 'How Does Enrollment Work?',
    heroText: 'Start with a tour request. Share your child\'s age, preferred start date, schedule needs, and any questions that matter before you choose care.',
    heroImage: images.classroom,
    sections: [
      { title: 'Start with fit and availability', body: 'Enrollment depends on your child\'s age, classroom openings, schedule, and start date. A tour helps you compare the environment before paperwork begins.' },
      { title: 'Information to have ready', body: 'Bring basic family contact details, your child\'s birthday, schedule needs, health or allergy notes, and questions about tuition or routines.' },
    ],
  },
  {
    slug: 'how-much-childcare-cost',
    title: 'How Much Does Child Care Cost in Marietta? | Marietta Childcare',
    description: 'Questions Marietta families should ask about child care tuition, schedules, fees, meals, and enrollment.',
    heroTitle: 'How Much Does Child Care Cost?',
    heroText: 'Tuition depends on age, schedule, start date, and available classroom options. Ask for current pricing when you request a tour.',
    heroImage: images.blocks,
    sections: [
      { title: 'What changes the price', body: 'Infant care, preschool care, school-age care, full-time schedules, part-time needs, registration fees, and summer care can all price differently.' },
      { title: 'Questions to ask before comparing', body: 'Ask what tuition includes, how payments work, whether meals or activities are included, and what changes if your schedule changes.' },
    ],
  },
  {
    slug: 'curriculum',
    title: 'Child Care Curriculum in Marietta | Marietta Childcare',
    description: 'How early learning, play, language, STEAM activities, and kindergarten readiness fit into a Marietta child care day.',
    heroTitle: 'What Do Children Learn?',
    heroText: 'Children learn through play, conversation, stories, music, art, movement, hands-on science, early math, friendship, and routines.',
    heroImage: images.art,
    sections: [
      { title: 'Play with a purpose', body: 'Early learning works best when children touch, build, sing, ask, move, pretend, and solve small problems with a teacher nearby.' },
      { title: 'Skills that show up every day', body: 'Look for language growth, fine-motor practice, early literacy, counting, art, music, kindness, independence, and confidence in group settings.' },
    ],
  },
  {
    slug: 'nutrition-meals',
    title: 'Meals and Snacks in Marietta Child Care | Marietta Childcare',
    description: 'Questions to ask about meals, snacks, allergies, bottles, and food routines in child care.',
    heroTitle: 'What About Meals and Snacks?',
    heroText: 'Food routines matter. Ask what meals and snacks are provided, how allergies are handled, and what infants or picky eaters need from home.',
    heroImage: images.snack,
    sections: [
      { title: 'Ask before the first day', body: 'Families should ask about breakfast, lunch, snacks, allergy procedures, bottle storage, food from home, and classroom mealtime routines.' },
      { title: 'For infants and toddlers', body: 'Share feeding times, bottle preferences, new foods, allergies, and any notes from your pediatrician that affect daily care.' },
    ],
  },
  {
    slug: 'parent-communication',
    title: 'Parent Communication in Marietta Child Care | Marietta Childcare',
    description: 'How Marietta families can ask about daily updates, app communication, teacher notes, and conferences.',
    heroTitle: 'How Will You Hear About Your Child\'s Day?',
    heroText: 'Parent communication should be clear and steady. Ask how daily notes, photos, milestones, meals, naps, and teacher messages are shared.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Daily updates', body: 'The center offers a parent communication app. Ask what information families receive each day and how quickly teachers respond to routine questions.' },
      { title: 'Bigger conversations', body: 'For concerns, milestones, transitions, or classroom moves, ask how conferences and director conversations are scheduled.' },
    ],
  },
  {
    slug: 'safety-security',
    title: 'Child Care Safety in Marietta | Marietta Childcare',
    description: 'Questions to ask about keypad entry, supervision, classroom safety, playgrounds, and health routines.',
    heroTitle: 'How Is the Center Kept Secure?',
    heroText: 'Safety starts with controlled access, attentive supervision, clean routines, and clear pickup policies.',
    heroImage: images.playground,
    sections: [
      { title: 'Controlled entry', body: 'The center lists keypad entry as an offering. Ask how family access, visitor check-in, pickup authorization, and emergency contacts work.' },
      { title: 'Classroom safety', body: 'During your tour, look at sightlines, playground surfaces, handwashing routines, rest spaces, and how teachers keep children together during transitions.' },
    ],
  },
  {
    slug: 'teacher-qualifications',
    title: 'Child Care Teacher Questions in Marietta | Marietta Childcare',
    description: 'What to ask about child care teachers, training, ratios, communication, and classroom supervision.',
    heroTitle: 'What Should You Ask About Teachers?',
    heroText: 'The best teacher questions are concrete: who will care for your child, how the classroom is staffed, and how teachers handle hard moments.',
    heroImage: images.classroom,
    sections: [
      { title: 'Ask about the classroom team', body: 'Ask who leads the classroom, how substitutes are handled, how teachers communicate with families, and what training is required before teachers work with children.' },
      { title: 'Watch teacher-child interaction', body: 'On a tour, notice whether teachers get down to children\'s level, use calm language, redirect with patience, and keep the room moving without rushing children.' },
    ],
  },
  {
    slug: 'sick-child-policy',
    title: 'Sick Child Policy Questions | Marietta Childcare',
    description: 'Health and sick-child questions to ask before enrolling in Marietta child care.',
    heroTitle: 'What Happens When a Child Is Sick?',
    heroText: 'Ask about fever rules, symptoms that require pickup, return-to-care timing, medication policies, and how families are notified.',
    heroImage: images.books,
    sections: [
      { title: 'Clear rules protect everyone', body: 'Families should know when to keep a child home, when a child can return, and what documentation is needed after certain illnesses.' },
      { title: 'Medication and allergies', body: 'Ask how medication forms work, where allergy information is posted, and how teachers handle food or medical instructions during the day.' },
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
      { title: 'What families can do at home', body: 'Read daily, talk through routines, let children practice dressing and cleanup, count ordinary objects, and give them small chances to solve problems.' },
    ],
  },
];

export const solutionPages: SimplePage[] = [
  {
    slug: 'working-parents',
    title: 'Child Care for Working Parents in Marietta | Marietta Childcare',
    description: 'Child care for working Marietta parents who need early hours, after school pickup, and steady weekday routines.',
    heroTitle: 'Child Care That Covers the Workday',
    heroText: 'Working parents need care that starts early, ends after the commute, and keeps school-age pickup from becoming another daily scramble.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Hours built around real workdays', body: 'The center is open Monday through Friday from 6:30 AM to 6:30 PM, which helps parents cover morning drop-off, the workday, and afternoon pickup.' },
      { title: 'School pickup support', body: 'After school pickup may be available from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary.' },
    ],
  },
  {
    slug: 'new-parents',
    title: 'First-Time Parent Child Care Questions | Marietta Childcare',
    description: 'A practical child care starting point for first-time parents in Marietta comparing infant and toddler care.',
    heroTitle: 'Your First Child Care Search Does Not Have to Feel Vague',
    heroText: 'First-time parents usually need clear answers about routines, safety, updates, naps, feeding, and what the first week looks like.',
    heroImage: images.infant,
    sections: [
      { title: 'Start with your daily worries', body: 'Ask about feeding, sleeping, crying, diapering, separation, updates, and how teachers help babies or toddlers settle into care.' },
      { title: 'Use the tour to compare fit', body: 'The right center should be able to explain the day in plain language and answer your specific questions without rushing you.' },
    ],
  },
  {
    slug: 'budget-conscious',
    title: 'Comparing Child Care Cost in Marietta | Marietta Childcare',
    description: 'Questions budget-conscious Marietta families should ask when comparing child care tuition and schedule options.',
    heroTitle: 'Compare Child Care Cost Without Guessing',
    heroText: 'The cheapest weekly number is not always the clearest choice. Ask what tuition includes, what fees are separate, and how schedule changes affect price.',
    heroImage: images.blocks,
    sections: [
      { title: 'Ask for the full cost picture', body: 'Compare registration fees, weekly tuition, meals, activity fees, schedule changes, summer care, and payment timing before deciding.' },
      { title: 'Match price to the care you need', body: 'Infants, preschoolers, and school-age children can have different pricing. Your child\'s age and schedule are the first two facts to share.' },
    ],
  },
  {
    slug: 'transition-to-school',
    title: 'Kindergarten Transition Support in Marietta | Marietta Childcare',
    description: 'How Marietta families can help preschool and pre-K children prepare for kindergarten.',
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
    title: 'Summer Child Care for Marietta Families | Marietta Childcare',
    description: 'Summer child care questions for Marietta families who need care, activities, and a steady schedule during school breaks.',
    heroTitle: 'Summer Care That Keeps the Week Moving',
    heroText: 'Summer care helps children stay active and gives parents a predictable plan when school is out.',
    heroImage: images.playground,
    sections: [
      { title: 'Ask about dates and weekly options', body: 'Summer availability can depend on age, classroom, and registration timing. Ask early about dates, tuition, activities, and how to hold a spot.' },
      { title: 'Look for more than supervision', body: 'A strong summer day includes outdoor play, creative projects, movement, stories, meals, and enough structure that children know what comes next.' },
    ],
  },
  {
    slug: 'single-parents',
    title: 'Child Care Support for Single Parents in Marietta | Marietta Childcare',
    description: 'Child care questions for single parents in Marietta who need reliable hours, clear communication, and backup planning.',
    heroTitle: 'A Child Care Plan You Can Count On',
    heroText: 'Single parents often need clear hours, quick communication, and a pickup plan that does not depend on guesswork.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Start with logistics', body: 'Ask about authorized pickup, emergency contacts, payment timing, parent app updates, and what happens if work runs late.' },
      { title: 'Use the full support around the day', body: 'Hours from 6:30 AM to 6:30 PM and school-age pickup options can make the week easier to manage.' },
    ],
  },
  {
    slug: 'premium-enrichment',
    title: 'Child Care With Enrichment Activities in Marietta | Marietta Childcare',
    description: 'Marietta child care with enrichment questions around movement, dance, martial arts, art, and hands-on learning.',
    heroTitle: 'More Than a Place to Wait',
    heroText: 'Families often want children to move, create, listen, build, and try new things. Ask how enrichment fits into the week for your child\'s age.',
    heroImage: images.art,
    sections: [
      { title: 'Activities families ask about', body: 'The center lists martial arts, dance classes, and a parent communication app among its offerings.', bullets: siteInfo.offerings },
      { title: 'Keep enrichment age-appropriate', body: 'The right activity should support confidence and coordination without making the day feel overpacked.' },
    ],
  },
  {
    slug: 'special-needs-children',
    title: 'Extra Support Child Care Questions in Marietta | Marietta Childcare',
    description: 'Questions to ask when a child may need extra support, accommodations, or a careful enrollment conversation.',
    heroTitle: 'Talk Through Support Before You Enroll',
    heroText: 'If your child needs extra help, do not settle for vague promises. Share the details and ask what the classroom can safely support.',
    heroImage: images.garden,
    sections: [
      { title: 'Bring the details that matter', body: 'Share medical notes, allergies, communication needs, sensory preferences, therapy schedules, behavior plans, or mobility concerns.' },
      { title: 'Ask for a plain answer', body: 'A responsible center should explain what it can support, what it needs from families, and when a different setting may be better.' },
    ],
  },
  {
    slug: 'multilingual-families',
    title: 'Child Care Questions for Multilingual Families in Marietta | Marietta Childcare',
    description: 'Questions multilingual Marietta families can ask about communication, classroom fit, and supporting children at home and school.',
    heroTitle: 'Child Care Questions for Multilingual Families',
    heroText: 'Families who use more than one language at home need clear communication with teachers and respect for the child\'s full language life.',
    heroImage: images.books,
    sections: [
      { title: 'Ask how teachers communicate', body: 'Ask how daily updates, forms, conferences, and urgent messages are handled if a family member prefers another language.' },
      { title: 'Keep the home language strong', body: 'Children benefit when families keep reading, singing, and talking in the language they know best at home.' },
    ],
  },
];

export const serviceAreaPages: SimplePage[] = [
  {
    slug: 'downtown-marietta',
    title: 'Child Care Near Downtown Marietta | Marietta Childcare',
    description: 'Child care near Downtown Marietta with local hours, programs, and tour scheduling.',
    heroTitle: 'Child Care Near Downtown Marietta',
    heroText: 'Families near Downtown Marietta can tour care at 2040 MacLand Crossing Circle and ask about age groups, hours, and openings.',
    heroImage: images.classroom,
    sections: [
      { title: 'Location details', body: 'The center is located at 2040 MacLand Crossing Circle, Marietta, GA 30008, with weekday hours from 6:30 AM to 6:30 PM.' },
      { title: 'Programs to ask about', body: 'Ask about infants, toddlers, twos, threes, fours, school-age care, and current classroom availability.' },
    ],
  },
  {
    slug: 'north-marietta',
    title: 'North Marietta Child Care | Marietta Childcare',
    description: 'Child care information for North Marietta families comparing hours, age groups, and tour options.',
    heroTitle: 'Child Care for North Marietta Families',
    heroText: 'North Marietta families can compare weekday hours, classroom fit, and school-age pickup options before choosing care.',
    heroImage: images.play,
    sections: [
      { title: 'A practical location conversation', body: 'Ask how the MacLand Crossing Circle location fits your commute, school route, and pickup plan.' },
      { title: 'Before and after school', body: 'School-age families should ask about pickup from Dowell Elementary, Hollydale Elementary, and Cheatham Hill Elementary.' },
    ],
  },
  {
    slug: 'south-marietta',
    title: 'South Marietta Child Care | Marietta Childcare',
    description: 'Child care information for South Marietta families looking for weekday care and early learning.',
    heroTitle: 'Child Care for South Marietta Families',
    heroText: 'If you live or work south of Marietta, use the tour to compare drive time, classroom routines, and the care options available for your child\'s age.',
    heroImage: images.playground,
    sections: [
      { title: 'Fit the center to your week', body: 'Hours run Monday through Friday from 6:30 AM to 6:30 PM, which helps many families cover a standard workday and commute.' },
      { title: 'Ask age-specific questions', body: 'Infant needs, toddler movement, preschool readiness, and school-age pickup all require different questions during a tour.' },
    ],
  },
  {
    slug: 'east-marietta',
    title: 'East Marietta Child Care | Marietta Childcare',
    description: 'Child care information for East Marietta families comparing local programs, hours, and tour options.',
    heroTitle: 'Child Care for East Marietta Families',
    heroText: 'East Marietta families can ask about openings, age groups, parent updates, and whether the location works with their daily route.',
    heroImage: images.garden,
    sections: [
      { title: 'Tour with your route in mind', body: 'Bring your likely drop-off and pickup times so you can decide whether the hours and location fit your workday.' },
      { title: 'Ask about daily communication', body: 'The center lists a parent communication app as an offering. Ask what updates you receive and when.' },
    ],
  },
  {
    slug: 'west-marietta',
    title: 'West Marietta Child Care | Marietta Childcare',
    description: 'Child care information for West Marietta families comparing programs and scheduling a tour.',
    heroTitle: 'Child Care for West Marietta Families',
    heroText: 'West Marietta families can tour the center, ask about current availability, and compare care for infants through fours and school-age children.',
    heroImage: images.blocks,
    sections: [
      { title: 'Start with age and schedule', body: 'Your child\'s age, desired start date, and weekly schedule determine the most useful enrollment conversation.' },
      { title: 'Check the full day', body: 'Ask about meals, rest, outdoor play, enrichment activities, parent updates, and pickup authorization.' },
    ],
  },
  {
    slug: 'kennesaw',
    title: 'Child Care Near Kennesaw | Marietta Childcare',
    description: 'Child care near Kennesaw for families comparing Marietta-area programs, hours, and tour options.',
    heroTitle: 'Child Care Near Kennesaw',
    heroText: 'Kennesaw families who commute through Marietta can ask whether the MacLand Crossing Circle location fits their weekday route.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Compare commute and care together', body: 'A child care center only works if the classroom feels right and the daily drive is realistic.' },
      { title: 'Ask about school-age logistics', body: 'If your child is in elementary school, ask directly about pickup schools, timing, and space in the school-age program.' },
    ],
  },
  {
    slug: 'smyrna',
    title: 'Child Care Near Smyrna | Marietta Childcare',
    description: 'Child care near Smyrna for families considering Marietta-area care and early learning programs.',
    heroTitle: 'Child Care Near Smyrna',
    heroText: 'Smyrna families can compare the Marietta location for weekday care, preschool, and school-age options if the route fits their workday.',
    heroImage: images.classroom,
    sections: [
      { title: 'Make the route concrete', body: 'Before choosing care, test the morning and afternoon drive and ask how late pickup works within the 6:30 PM closing time.' },
      { title: 'Ask what is open now', body: 'Availability can change by age group. Share your start date and schedule when you request a tour.' },
    ],
  },
  {
    slug: 'cobb-county',
    title: 'Cobb County Child Care Near Marietta | Marietta Childcare',
    description: 'Cobb County child care information for families comparing a Marietta location, hours, and early learning programs.',
    heroTitle: 'Child Care for Cobb County Families',
    heroText: 'Cobb County families can tour the Marietta center and ask how the location, hours, and programs fit their week.',
    heroImage: images.play,
    sections: [
      { title: 'Local facts to know', body: 'The center is at 2040 MacLand Crossing Circle in Marietta and is open Monday through Friday from 6:30 AM to 6:30 PM.' },
      { title: 'Age groups', body: 'Ask about current openings for infants, toddlers, twos, threes, fours, and school-age care.' },
    ],
  },
  {
    slug: 'marietta-county',
    title: 'Marietta Area Child Care | Marietta Childcare',
    description: 'Marietta-area child care information for families searching for local early learning and day care options.',
    heroTitle: 'Marietta Area Child Care',
    heroText: 'Families searching for Marietta County child care usually mean Marietta or Cobb County care. Start with the exact address, hours, age group, and route that fit your week.',
    heroImage: images.garden,
    sections: [
      { title: 'Use the real location', body: 'The center is located at 2040 MacLand Crossing Circle, Marietta, GA 30008.' },
      { title: 'Ask the practical questions first', body: 'Availability, hours, tuition, pickup rules, and classroom fit matter more than a broad area label.' },
    ],
  },
];

export const resourcePages: SimplePage[] = [
  {
    slug: 'child-development',
    title: 'Child Development by Age | Marietta Childcare',
    description: 'A parent-friendly look at infant, toddler, preschool, and pre-K development milestones.',
    heroTitle: 'What Changes From Infants to Fours',
    heroText: 'Children do not all develop on the same schedule, but each age brings familiar patterns. Use those patterns to ask better child care questions.',
    heroImage: images.garden,
    sections: [
      { title: 'Infants', body: 'Infants need responsive feeding, safe rest, tummy time, sensory play, and familiar adults who notice small changes in mood and development.' },
      { title: 'Toddlers and twos', body: 'Toddlers need movement, simple words for feelings, repetition, safe choices, and patient help with independence.' },
      { title: 'Threes and fours', body: 'Preschoolers practice friendship, language, early literacy, counting, creativity, self-help, and the classroom habits they will need in kindergarten.' },
    ],
  },
  {
    slug: 'choosing-childcare',
    title: 'How to Choose Child Care in Marietta | Marietta Childcare',
    description: 'A practical checklist for comparing child care centers in Marietta, Georgia.',
    heroTitle: 'How to Choose Child Care Without Guessing',
    heroText: 'A good tour should answer the questions that shape your week: safety, schedule, communication, cost, classroom fit, and how your child responds in the room.',
    heroImage: images.classroom,
    sections: [
      { title: 'Start with logistics', body: 'Check address, hours, commute, pickup rules, age groups, tuition, and whether the schedule fits your workday.' },
      { title: 'Watch the classroom', body: 'Look for calm teachers, clear routines, clean spaces, safe transitions, outdoor play, and children who know what comes next.' },
      { title: 'Ask the hard questions', body: 'Ask about illness policies, communication, teacher training, turnover, meals, emergencies, and what happens when your child has a hard day.' },
    ],
  },
  {
    slug: 'nutrition-guide',
    title: 'Child Care Meals and Snacks Guide | Marietta Childcare',
    description: 'Questions parents can ask about meals, snacks, allergies, bottles, and food routines in child care.',
    heroTitle: 'Meals, Snacks, and Food Questions',
    heroText: 'Food is part of care. Before enrollment, ask how meals, snacks, bottles, allergies, picky eating, and food from home are handled.',
    heroImage: images.snack,
    sections: [
      { title: 'For babies', body: 'Share bottle timing, formula or milk instructions, new foods, allergies, and any feeding notes from your pediatrician.' },
      { title: 'For toddlers and preschoolers', body: 'Ask about snack timing, lunch routines, allergy separation, water access, and how teachers handle children who need more time to eat.' },
    ],
  },
  {
    slug: 'parenting-tips',
    title: 'Parenting Tips for Child Care Transitions | Marietta Childcare',
    description: 'Simple ways to help children settle into child care, preschool, and new routines.',
    heroTitle: 'Help Your Child Settle Into Care',
    heroText: 'Most children need repetition, calm goodbyes, and predictable routines before a new classroom feels familiar.',
    heroImage: images.dropoff,
    sections: [
      { title: 'Practice the routine', body: 'Talk through the morning, pack the bag together, name the teacher, and keep goodbye short and warm.' },
      { title: 'Expect an adjustment window', body: 'Some children cry at drop-off and still have a good day. Ask teachers what happens after you leave and what helps your child recover.' },
      { title: 'Use consistent language', body: 'A simple line like "I will come back after snack and play" can help more than a long negotiation at the door.' },
    ],
  },
  {
    slug: 'school-readiness',
    title: 'Kindergarten Readiness Guide | Marietta Childcare',
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
