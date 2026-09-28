const en = {
  meta: {
    title: 'Berlin Car Wash Patrol | German Luxury Car Care Qatar',
  },
  common: {
    qar: 'QAR',
    brandTagline: 'Mobile Car Care · Qatar',
    languageSwitch: 'العربية',
    languageSwitchLabel: 'Switch to Arabic',
  },
  nav: {
    home: 'Berlin Wash Patrol home',
    germanQuality: 'German Quality',
    patrol: 'Our Patrol',
    packages: 'Packages',
    app: 'Mobile App',
    bookNow: 'Book Patrol Now',
  },
  hero: {
    imageAlt: 'Black luxury sedan receiving a premium detailing wash',
    badge: '🇩🇪 Certified German Detailing Experts',
    titleLine1: "RESHAPING QATAR'S",
    titleLine2: 'CAR WASH INDUSTRY',
    description:
      'Say goodbye to cheap 20 QAR non-expert washes that scratch your paint. Experience premium German-certified luxury car care with 100% German products, engineered specifically for high-end and luxury vehicles.',
    explorePackages: 'Explore Packages',
    configureAndBook: 'Configure Wash & Book',
    stats: [
      { value: '100%', label: 'German Products' },
      { value: 'Certified', label: 'Detailing Experts' },
      { value: '0%', label: 'Scratch Risk' },
    ],
  },
  quality: {
    badge: '🇩🇪 Certified Standards',
    titleStart: 'The German Detailing',
    titleHighlight: 'Difference',
    description: 'Moving Qatar away from cheap 20 QAR non-expert washes to premium, certified luxury car care.',
    items: [
      {
        title: 'German Education Certificate',
        description: 'Our detailers are certified in Germany, trained specifically to handle high-end German & luxury paintwork.',
      },
      {
        title: '100% German Products',
        description: 'We exclusively use premium German brands like Koch-Chemie, Sonax, and Menzerna for unmatched results.',
      },
      {
        title: 'Scratch-Free Guarantee',
        description: 'Using the multi-bucket grit-guard system and ultra-plush microfibers. No swirls, no scratches.',
      },
      {
        title: 'Before/After Proof',
        description: 'Receive high-resolution before & after photos directly to your phone after every single session.',
      },
    ],
  },
  brands: {
    ariaLabel: 'Product brands',
    heading: 'Our trusted product & equipment references',
    footnote: 'Selected for professional German-standard cleaning, polishing and workshop care.',
    subtitles: {
      briller: 'Premium Car Care',
      bosch: 'Invented for life',
      sonax: 'German Car Care',
      karcher: 'Professional Cleaning Equipment',
    },
  },
  patrol: {
    badge: 'Mobile Car Care · Qatar',
    titleStart: 'Meet the',
    titleHighlight: 'Berlin Wash Patrol',
    description:
      'Our fully equipped mobile detailing unit brings certified German-quality car care directly to your location.',
    caption: 'Mobile car care — we come to you',
    location: 'Doha · Qatar',
    previous: 'Previous patrol photo',
    next: 'Next patrol photo',
    showPhoto: (n: number) => `Show patrol photo ${n}`,
    photoAlts: [
      'Berlin Wash Patrol mobile detailing van parked in Qatar',
      'Berlin Wash Patrol van in a Doha neighborhood',
      'Side view of the Berlin Wash Patrol service van',
      'Berlin Wash Patrol mobile car care unit in Doha',
      'Rear view of the Berlin Wash Patrol detailing van',
    ],
  },
  beforeAfter: {
    eyebrow: 'Uncompromising Results',
    titleStart: 'German Precision,',
    titleHighlight: 'Visible Difference',
    description:
      'Drag the slider to see how our certified experts restore the deep, mirror-like gloss of luxury paintwork compared to standard dusty Qatar road conditions.',
    beforeAlt: 'Before detailing - dusty black luxury sedan',
    afterAlt: 'After detailing - clean black luxury sedan',
    beforeLabel: 'Before: Qatar Dust & Swirls',
    afterLabel: 'After: Berlin Patrol Finish',
    legendSwirl: 'Swirl & Scratch Removal',
    legendCeramic: 'German Ceramic Protection',
  },
  countdown: {
    badge: 'Limited-Time Launch Prices',
    titleStart: 'Book before the',
    titleHighlight: 'special prices',
    titleEnd: 'end',
    description: 'Lock in the current promotional rates before the countdown ends and standard prices return.',
    ended: 'Offer period ended',
    ariaLabel: 'Promotional price countdown',
    units: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
  },
  packages: {
    eyebrow: 'Premium Detailing Tiers',
    titleStart: 'Select Your',
    titleHighlight: 'Berlin Patrol',
    titleEnd: 'Package',
    description:
      'Every package is executed with meticulous German precision. Select a package below to configure your booking and add-ons.',
    mostPopular: 'Most Popular',
    specialPrice: 'QAR · Special price',
    addOnsLocked: 'Add-ons locked for this tier. Upgrade to unlock premium add-ons.',
    selected: 'Selected Package',
    select: 'Select Package',
    items: {
      klassik: {
        tagline: 'Essential German-quality exterior care.',
        features: [
          'Pressure wash',
          'Hand wash with German dust-encapsulating, pH-neutral shine foam shampoo',
          'Hand dry',
          'Wheel cleaning with dust-shield protection',
          'Tire shine',
        ],
      },
      'berlin-premium': {
        tagline: 'Complete exterior and interior maintenance.',
        features: [
          'Everything in Klassik Autowäsche',
          'Interior vacuuming & dust-off',
          'Streak-free window cleaning',
          'Door jambs wiped down',
          'Unlocks premium add-ons',
        ],
      },
      'deutscher-standard': {
        tagline: 'Machine-polished gloss with lasting wax protection.',
        features: [
          'Everything in Berlin Premium',
          'Matte finish dashboard UV protection',
          'Premium one-cut machine wax shield (up to 3 months protection)',
          'Unlocks premium add-ons',
        ],
      },
      meisterklasse: {
        tagline: 'Extended ceramic protection and premium leather care.',
        features: [
          'Everything in Deutscher Standart',
          'Deep interior clean',
          'Premium one-cut machine polish',
          'Premium polymer ceramic shield (up to 8 months protection)',
          'Leather cleaning & deep conditioning',
          'Unlocks premium add-ons',
        ],
      },
    } as Record<string, { tagline: string; features: string[] }>,
  },
  booking: {
    badge: 'Instant Booking',
    titleStart: 'Configure Your',
    titleHighlight: 'German Wash',
    description:
      'Select your package, customize with premium add-ons, and instantly send your booking details to our WhatsApp patrol team.',
    step1: 'Step 1: Confirm Package',
    step2: 'Step 2: Premium Add-ons',
    step3: 'Step 3: Your Details',
    notAvailableFor: (name: string) => `Not available for ${name}`,
    addOns: {
      clinical: {
        name: 'Interior & AC Clinical Disinfection',
        description: 'German technology for 99% bacteria, virus, and odor elimination.',
      },
      leather: {
        name: 'Leather Deep Nourishment & Protection',
        description: 'Warm leather balm treatment for softness, protection, and crack prevention.',
      },
      glass: {
        name: 'Glass Rain & Dust Repellent',
        description: 'Nano coating for water beading and protection against dust scratches.',
      },
      interior: {
        name: 'Deep Clean Interior',
        description: 'Interior hand wash and carpet wash with German interior-care shampoo.',
      },
      engine: {
        name: 'Engine Steam Clean',
        description: 'Steam cleaning with a Canadian specialist engine cleaner.',
      },
    } as Record<string, { name: string; description: string }>,
    placeholders: {
      name: 'Your Full Name',
      phone: 'WhatsApp Phone Number (e.g. +974...)',
      car: 'Car Brand & Model (e.g. Porsche Cayenne)',
      location: 'Your Location in Qatar (e.g. The Pearl, West Bay)',
    },
    fillAll: 'Please fill in all details to complete your booking.',
    total: 'Estimated Total Price',
    connecting: 'Connecting to WhatsApp...',
    submit: 'Book via WhatsApp Patrol',
    redirectTitle: 'Redirecting to WhatsApp...',
    redirectText:
      'We are preparing your premium German detailing request. Please complete the message send in WhatsApp to secure your slot.',
  },
  tokens: {
    badge: '🔥 Best Value Offer',
    titleStart: 'Buy 4 Washes,',
    titleHighlight: 'Pay For Only 3',
    description:
      'Secure your luxury car care for the upcoming months. We issue 4 digital tokens that can be used whenever it suits you best. Fully transferable between your family cars, valid for 12 months.',
    benefits: [
      'Save 25% on your detailing budget',
      'Priority booking slots during peak times',
      'High-res before/after photos sent to your phone',
    ],
    cardLabel: 'Berlin Patrol Token Pack',
    cardValue: 'Save 25%',
    cardNote: 'Valid for all luxury car models in Qatar',
    cta: 'Configure & Buy Tokens',
    footnote: 'Tokens are managed digitally and linked to your phone number.',
  },
  app: {
    badge: 'Mobile App Under Construction',
    titleStart: 'The Future of Qatar Detailing is',
    titleHighlight: 'On-Demand',
    description:
      'We are building the ultimate luxury car care app. Track your patrol vehicle in real-time, manage your German quality tokens, view high-res before/after galleries, and schedule washes with a single tap.',
    features: [
      'Real-Time GPS Patrol Tracking',
      'Token Wallet (Buy 4, Pay 3)',
      'Before/After Photo Vault',
      'Priority Meisterklasse Booking',
    ],
    formTitle: 'Get Exclusive Invitation',
    formDescription: 'Subscribe to receive an invitation to our beta launch and get 1 free wash token upon app release.',
    emailLabel: 'Email Address',
    emailPlaceholder: 'yourname@domain.com',
    carLabel: 'Your Luxury Car Brand (Optional)',
    carPlaceholder: 'e.g. Porsche, Audi, Mercedes',
    registering: 'Registering...',
    submit: 'Request Beta Access',
    successTitle: 'You are on the list!',
    successText:
      'Thank you for subscribing. We will send your exclusive invitation and free wash token as soon as the Berlin Patrol app goes live in Qatar.',
    another: 'Subscribe another email',
  },
  footer: {
    about: 'Reshaping the luxury car wash industry in Qatar with certified German detailing standards and premium products.',
    services: 'Our Services',
    addOns: 'Add-ons',
    addOnList: [
      'Interior & AC Clinical Disinfection',
      'Leather Deep Nourishment',
      'Glass Rain & Dust Repellent',
      'Deep Clean Interior',
      'Engine Clean',
    ],
    contact: 'Contact & Patrol',
    city: 'Doha, Qatar',
    hours: 'Patrol Hours: 8:00 AM - 10:00 PM',
    whatsapp: 'WhatsApp',
    rights: 'Berlin Car Wash Patrol. All rights reserved.',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
  },
};

export type Dictionary = typeof en;

export default en;
