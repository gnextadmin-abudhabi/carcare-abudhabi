export interface ProcessStep {
  title: string;
  description: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortName: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  emergency: boolean;
  featured: boolean;
  processSteps: ProcessStep[];
  priceRange: PriceRange;
  keywords: string[];
  relatedServices: string[];
  // Arabic extras (optional)
  nameAr?: string;
  shortDescriptionAr?: string;
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'car-accessories',
    name: 'Car Accessories',
    shortName: 'Accessories',
    nameAr: 'إكسسوارات السيارات',
    shortDescription: 'Premium car accessories supplied and installed in Abu Dhabi.',
    shortDescriptionAr: 'إكسسوارات سيارات فاخرة توريد وتركيب في أبوظبي.',
    description:
      'Al Sham Palace stocks a wide range of quality car accessories for all makes and models. From seat covers and dashboard cameras to tinting films, steering wheel covers, floor mats, parking sensors, and more — we supply and install everything your car needs at our workshop or at your home.',
    image: '/images/services/car-accessories.webp',
    icon: 'lucide:package',
    emergency: false,
    featured: true,
    processSteps: [
      {
        title: 'Browse Our Range',
        description: 'Visit our showroom in MBZ City or call us to discuss your requirements.',
      },
      {
        title: 'Expert Advice',
        description: 'Our team recommends the best accessories for your specific car model.',
      },
      {
        title: 'Professional Installation',
        description: 'Certified technicians install everything to manufacturer standards.',
      },
      {
        title: 'Quality Check',
        description: 'Final inspection ensures every accessory is fitted perfectly.',
      },
    ],
    priceRange: { min: 50, max: 2000 },
    keywords: [
      'car accessories Abu Dhabi',
      'seat covers Abu Dhabi',
      'dashcam installation Abu Dhabi',
      'window tinting Abu Dhabi',
      'parking sensors Abu Dhabi',
    ],
    relatedServices: ['tyre-services', 'car-wash-detailing'],
  },
  {
    slug: 'tyre-services',
    name: 'Tyre Services',
    shortName: 'Tyres',
    nameAr: 'خدمات الإطارات',
    shortDescription: 'Tyre supply, fitting, balancing, and puncture repair across Abu Dhabi.',
    shortDescriptionAr: 'توريد وتركيب وموازنة الإطارات وإصلاح الثقب في أبوظبي.',
    description:
      'Al Sham Palace offers a complete range of tyre services for all vehicles. We stock tyres from leading brands and provide fitting, balancing, alignment, and puncture repair at our workshop or on-site through our mobile service team across Abu Dhabi.',
    image: '/images/services/tyre-services.webp',
    icon: 'lucide:circle-dot',
    emergency: true,
    featured: true,
    processSteps: [
      {
        title: 'Tyre Assessment',
        description: 'We inspect your tyres and recommend the right size and brand for your vehicle.',
      },
      {
        title: 'Tyre Selection',
        description: 'Choose from our wide range of quality tyres at competitive prices.',
      },
      {
        title: 'Professional Fitting',
        description: 'Our technicians fit and balance your new tyres to precise specifications.',
      },
      {
        title: 'Alignment Check',
        description: 'We check wheel alignment to maximise tyre life and driving safety.',
      },
    ],
    priceRange: { min: 80, max: 1200 },
    keywords: [
      'tyre shop Abu Dhabi',
      'tyre fitting Abu Dhabi',
      'tyre change Abu Dhabi',
      'puncture repair Abu Dhabi',
      'tyre balancing Abu Dhabi',
    ],
    relatedServices: ['battery-replacement', 'mechanical-repairs'],
  },
  {
    slug: 'car-ac-repair',
    name: 'Car AC Repair',
    shortName: 'Car AC',
    nameAr: 'إصلاح مكيف السيارة',
    shortDescription: 'Car AC diagnosis, repair, and gas refill throughout Abu Dhabi.',
    shortDescriptionAr: 'تشخيص وإصلاح وإعادة تعبئة غاز مكيف السيارة في أبوظبي.',
    description:
      'In Abu Dhabi\'s extreme heat, a working car AC is essential. Al Sham Palace provides comprehensive car AC services including diagnosis, refrigerant refill, compressor repair, evaporator cleaning, and full AC system overhauls — at our workshop or through mobile service.',
    image: '/images/services/car-ac-repair.webp',
    icon: 'lucide:wind',
    emergency: true,
    featured: true,
    processSteps: [
      {
        title: 'AC System Diagnosis',
        description: 'We run a full computerised diagnosis to identify the exact AC fault.',
      },
      {
        title: 'Transparent Quote',
        description: 'You receive a clear cost estimate before any work begins.',
      },
      {
        title: 'Expert Repair',
        description: 'Our AC specialists repair or replace faulty components using quality parts.',
      },
      {
        title: 'Gas Refill & Test',
        description: 'We refill refrigerant and test the AC to ensure cold air output.',
      },
    ],
    priceRange: { min: 150, max: 1500 },
    keywords: [
      'car AC repair Abu Dhabi',
      'car AC gas refill Abu Dhabi',
      'car air conditioning Abu Dhabi',
      'AC compressor repair Abu Dhabi',
    ],
    relatedServices: ['mechanical-repairs', 'auto-electrical-works'],
  },
  {
    slug: 'mechanical-repairs',
    name: 'Mechanical Repairs',
    shortName: 'Mechanical',
    nameAr: 'الإصلاحات الميكانيكية',
    shortDescription: 'Full mechanical repairs and maintenance for all car makes in Abu Dhabi.',
    shortDescriptionAr: 'إصلاحات ميكانيكية كاملة وصيانة لجميع ماركات السيارات في أبوظبي.',
    description:
      'Al Sham Palace provides full mechanical repair services for all car makes and models. From oil changes and brake repairs to engine diagnostics and major overhauls — our certified mechanics handle everything at our well-equipped workshop in Mohamed Bin Zayed City.',
    image: '/images/services/mechanical-repairs.webp',
    icon: 'lucide:wrench',
    emergency: false,
    featured: true,
    processSteps: [
      {
        title: 'Vehicle Inspection',
        description: 'We perform a thorough inspection to identify all mechanical issues.',
      },
      {
        title: 'Diagnosis Report',
        description: 'We explain all findings and provide a clear repair estimate.',
      },
      {
        title: 'Precision Repair',
        description: 'Certified mechanics carry out all repairs using quality OEM parts.',
      },
      {
        title: 'Road Test',
        description: 'Your vehicle is road-tested to confirm all repairs are complete.',
      },
    ],
    priceRange: { min: 150, max: 3000 },
    keywords: [
      'car mechanic Abu Dhabi',
      'car repair Abu Dhabi',
      'oil change Abu Dhabi',
      'brake repair Abu Dhabi',
      'engine repair Abu Dhabi',
    ],
    relatedServices: ['car-ac-repair', 'auto-electrical-works', 'battery-replacement'],
  },
  {
    slug: 'auto-electrical-works',
    name: 'Auto Electrical Works',
    shortName: 'Electrical',
    nameAr: 'الأعمال الكهربائية للسيارات',
    shortDescription: 'Expert car electrical diagnosis and repair across all Abu Dhabi areas.',
    shortDescriptionAr: 'تشخيص وإصلاح كهربائي احترافي للسيارات في جميع أنحاء أبوظبي.',
    description:
      'Modern cars rely heavily on complex electrical systems. Al Sham Palace\'s auto electricians diagnose and repair all types of vehicle electrical faults — from dashboard warning lights and sensor errors to starter motor issues, wiring faults, and full ECU diagnostics.',
    image: '/images/services/auto-electrical-works.webp',
    icon: 'lucide:zap',
    emergency: true,
    featured: false,
    processSteps: [
      {
        title: 'Electrical Diagnosis',
        description: 'We use advanced diagnostic tools to identify all electrical faults accurately.',
      },
      {
        title: 'Fault Report',
        description: 'We explain the issue in plain terms and provide a repair quote.',
      },
      {
        title: 'Expert Repair',
        description: 'Our auto electricians fix the fault using quality components.',
      },
      {
        title: 'System Test',
        description: 'We test all electrical systems to confirm the repair is complete.',
      },
    ],
    priceRange: { min: 100, max: 2000 },
    keywords: [
      'auto electrician Abu Dhabi',
      'car electrical repair Abu Dhabi',
      'car diagnostic Abu Dhabi',
      'ECU repair Abu Dhabi',
    ],
    relatedServices: ['mechanical-repairs', 'battery-replacement', 'car-ac-repair'],
  },
  {
    slug: 'car-wash-detailing',
    name: 'Car Wash & Detailing',
    shortName: 'Detailing',
    nameAr: 'غسيل وتلميع السيارات',
    shortDescription: 'Professional car wash and full detailing services in Abu Dhabi.',
    shortDescriptionAr: 'خدمات غسيل وتلميع احترافية للسيارات في أبوظبي.',
    description:
      'Al Sham Palace offers professional car wash and detailing packages for all vehicle types. From a quick exterior wash to a full interior and exterior detail with polish and ceramic coating — we make your car look and feel brand new.',
    image: '/images/services/car-wash-detailing.webp',
    icon: 'lucide:droplets',
    emergency: false,
    featured: false,
    processSteps: [
      {
        title: 'Vehicle Assessment',
        description: 'We assess your vehicle\'s condition and recommend the best detailing package.',
      },
      {
        title: 'Exterior Wash',
        description: 'Thorough exterior wash, decontamination, and clay bar treatment.',
      },
      {
        title: 'Interior Detailing',
        description: 'Deep cleaning of all interior surfaces, upholstery, and carpets.',
      },
      {
        title: 'Polish & Protect',
        description: 'Paint correction, polish, and protective coating application.',
      },
    ],
    priceRange: { min: 50, max: 800 },
    keywords: [
      'car wash Abu Dhabi',
      'car detailing Abu Dhabi',
      'car polish Abu Dhabi',
      'ceramic coating Abu Dhabi',
    ],
    relatedServices: ['car-accessories', 'mechanical-repairs'],
  },
  {
    slug: 'home-service',
    name: 'Home Service',
    shortName: 'Home Service',
    nameAr: 'الخدمة المنزلية',
    shortDescription: 'Mobile car service at your home or office anywhere in Abu Dhabi.',
    shortDescriptionAr: 'خدمة سيارات متنقلة في منزلك أو مكتبك في أي مكان بأبوظبي.',
    description:
      'Al Sham Palace brings the garage to you. Our mobile service team covers all of Abu Dhabi for battery replacement, tyre change, AC gas refill, minor mechanical repairs, and accessories installation at your home, apartment, or office. Available daily from 9 AM to 11:45 PM.',
    image: '/images/services/home-service.webp',
    icon: 'lucide:home',
    emergency: true,
    featured: true,
    processSteps: [
      {
        title: 'Call or WhatsApp',
        description: 'Contact us on 050 344 8933 and describe the service you need.',
      },
      {
        title: 'Share Your Location',
        description: 'Share your address or live location on WhatsApp.',
      },
      {
        title: 'We Come to You',
        description: 'Our fully-equipped mobile technician arrives at your location.',
      },
      {
        title: 'Job Done',
        description: 'Service completed at your location — no workshop visit needed.',
      },
    ],
    priceRange: { min: 100, max: 1500 },
    keywords: [
      'home car service Abu Dhabi',
      'mobile car service Abu Dhabi',
      'car repair at home Abu Dhabi',
      'mobile mechanic Abu Dhabi',
    ],
    relatedServices: ['battery-replacement', 'tyre-services', 'car-ac-repair'],
  },
  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    shortName: 'Battery',
    nameAr: 'استبدال البطارية',
    shortDescription: 'Fast car battery replacement at your location across Abu Dhabi.',
    shortDescriptionAr: 'استبدال سريع لبطارية السيارة في موقعك في أبوظبي.',
    description:
      'Dead car battery? Al Sham Palace delivers and fits quality car batteries from brands like Bosch, Varta, and Amaron at your location or our workshop. Our mobile battery team covers all Abu Dhabi areas and arrives within 30-60 minutes.',
    image: '/images/services/battery-replacement.webp',
    icon: 'lucide:battery-charging',
    emergency: true,
    featured: false,
    processSteps: [
      {
        title: 'Call Us',
        description: 'Call or WhatsApp 050 344 8933 — describe your battery issue.',
      },
      {
        title: 'Battery Test',
        description: 'We test your current battery to confirm it needs replacement.',
      },
      {
        title: 'Right Battery Selected',
        description: 'We supply the correct battery specification for your vehicle.',
      },
      {
        title: 'Fitted in 20 Minutes',
        description: 'Professional fitting and electrical system check at your location.',
      },
    ],
    priceRange: { min: 150, max: 600 },
    keywords: [
      'car battery replacement Abu Dhabi',
      'battery delivery Abu Dhabi',
      'dead car battery Abu Dhabi',
      'emergency battery Abu Dhabi',
    ],
    relatedServices: ['auto-electrical-works', 'home-service', 'tyre-services'],
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((service) => service.slug === slug);
}

export function getServiceName(slug: string): string {
  const service = getServiceBySlug(slug);
  if (service) return service.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.emergency);
}

export function getFeaturedServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.featured);
}

export function getRelatedServices(slug: string): ServiceType[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is ServiceType => s !== undefined);
}
