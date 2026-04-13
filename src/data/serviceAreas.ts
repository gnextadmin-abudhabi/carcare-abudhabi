export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  state: string;
  zipCodes: string[];
  population: number;
  lat: number;
  lng: number;
  description: string;
  responseTime: string;
  featured: boolean;
  nearby: string[];
  // Arabic extras (optional)
  nameAr?: string;
  descriptionAr?: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'mohamed-bin-zayed-city',
    name: 'Mohamed Bin Zayed City',
    nameAr: 'مدينة محمد بن زايد',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 120000,
    lat: 24.3338632,
    lng: 54.5345258,
    description:
      'Mohamed Bin Zayed City (MBZ City) is a large residential suburb in Abu Dhabi and the home location of Al Sham Palace Auto Car Service. We are your nearest full-service auto centre in MBZ City.',
    descriptionAr:
      'مدينة محمد بن زايد هي ضاحية سكنية كبيرة في أبوظبي والموقع الرئيسي لقصر الشام للعناية بالسيارات.',
    responseTime: '15 min',
    featured: true,
    nearby: ['mussafah', 'khalifa-city-a', 'shakhbout-city', 'zayed-city'],
  },
  {
    slug: 'mussafah',
    name: 'Mussafah',
    nameAr: 'مصفح',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 100000,
    lat: 24.3526,
    lng: 54.4955,
    description:
      'Mussafah is the main industrial and automotive hub of Abu Dhabi. Al Sham Palace serves all of Mussafah with car accessories, tyre, AC, mechanical, and electrical services.',
    descriptionAr:
      'مصفح هو المركز الصناعي والسيارات الرئيسي في أبوظبي.',
    responseTime: '20 min',
    featured: true,
    nearby: ['mohamed-bin-zayed-city', 'khalifa-city-a', 'khalifa-city-b', 'zayed-city'],
  },
  {
    slug: 'khalifa-city-a',
    name: 'Khalifa City A',
    nameAr: 'مدينة خليفة أ',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 80000,
    lat: 24.4205,
    lng: 54.5826,
    description:
      'Khalifa City A is a popular residential suburb north of MBZ City. Al Sham Palace provides full car service and home service to all Khalifa City A residents.',
    descriptionAr:
      'مدينة خليفة أ هي ضاحية سكنية شهيرة شمال مدينة محمد بن زايد.',
    responseTime: '30 min',
    featured: true,
    nearby: ['khalifa-city-b', 'mussafah', 'mohamed-bin-zayed-city', 'al-raha-beach'],
  },
  {
    slug: 'khalifa-city-b',
    name: 'Khalifa City B',
    nameAr: 'مدينة خليفة ب',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 70000,
    lat: 24.4081,
    lng: 54.5621,
    description:
      'Khalifa City B is a well-established residential community in Abu Dhabi. Al Sham Palace serves Khalifa City B with reliable car care including home service.',
    descriptionAr:
      'مدينة خليفة ب هي مجتمع سكني راسخ في أبوظبي.',
    responseTime: '30 min',
    featured: false,
    nearby: ['khalifa-city-a', 'mussafah', 'al-raha-beach', 'yas-island'],
  },
  {
    slug: 'shakhbout-city',
    name: 'Shakhbout City',
    nameAr: 'مدينة شخبوط',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 60000,
    lat: 24.2985,
    lng: 54.5214,
    description:
      'Shakhbout City is a growing residential suburb near MBZ City. Al Sham Palace provides fast and reliable car services to all Shakhbout City residents.',
    descriptionAr:
      'مدينة شخبوط هي ضاحية سكنية متنامية قريبة من مدينة محمد بن زايد.',
    responseTime: '25 min',
    featured: false,
    nearby: ['mohamed-bin-zayed-city', 'zayed-city', 'al-falah-city', 'al-shamkha'],
  },
  {
    slug: 'zayed-city',
    name: 'Zayed City',
    nameAr: 'مدينة زايد',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 50000,
    lat: 24.3201,
    lng: 54.4788,
    description:
      'Zayed City is a major residential community close to MBZ City. Al Sham Palace covers Zayed City for all car accessories, repair, and home service needs.',
    descriptionAr:
      'مدينة زايد هي مجتمع سكني رئيسي قريب من مدينة محمد بن زايد.',
    responseTime: '25 min',
    featured: false,
    nearby: ['mohamed-bin-zayed-city', 'shakhbout-city', 'mussafah', 'al-shamkha'],
  },
  {
    slug: 'al-mushrif',
    name: 'Al Mushrif',
    nameAr: 'المشرف',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 45000,
    lat: 24.4373,
    lng: 54.3884,
    description:
      'Al Mushrif is a well-established residential area in central Abu Dhabi. Al Sham Palace provides professional car care and home service to Al Mushrif residents.',
    descriptionAr:
      'المشرف منطقة سكنية راسخة في وسط أبوظبي.',
    responseTime: '45 min',
    featured: false,
    nearby: ['al-muroor', 'al-manasir', 'al-karama', 'al-nahyan'],
  },
  {
    slug: 'al-muroor',
    name: 'Al Muroor',
    nameAr: 'المرور',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 40000,
    lat: 24.4512,
    lng: 54.3751,
    description:
      'Al Muroor is a prominent residential and commercial area in Abu Dhabi city. Al Sham Palace serves Al Muroor with complete car services and fast home visit options.',
    descriptionAr:
      'المرور منطقة سكنية وتجارية بارزة في مدينة أبوظبي.',
    responseTime: '45 min',
    featured: false,
    nearby: ['al-mushrif', 'al-manasir', 'al-nahyan', 'abu-dhabi-city-centre'],
  },
  {
    slug: 'al-manasir',
    name: 'Al Manasir',
    nameAr: 'المناصير',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 35000,
    lat: 24.4456,
    lng: 54.3639,
    description:
      'Al Manasir is a central residential neighbourhood in Abu Dhabi. Al Sham Palace provides all types of car services and home service to Al Manasir.',
    descriptionAr:
      'المناصير حي سكني مركزي في أبوظبي.',
    responseTime: '45 min',
    featured: false,
    nearby: ['al-muroor', 'al-mushrif', 'al-nahyan', 'abu-dhabi-city-centre'],
  },
  {
    slug: 'al-raha-beach',
    name: 'Al Raha Beach',
    nameAr: 'شاطئ الراحة',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 50000,
    lat: 24.4000,
    lng: 54.6000,
    description:
      'Al Raha Beach is a premium waterfront development in Abu Dhabi. Al Sham Palace serves Al Raha Beach residents with home car service and full workshop facilities.',
    descriptionAr:
      'شاطئ الراحة تطوير واجهة بحرية فاخر في أبوظبي.',
    responseTime: '35 min',
    featured: true,
    nearby: ['khalifa-city-a', 'khalifa-city-b', 'yas-island', 'al-reef'],
  },
  {
    slug: 'al-reef',
    name: 'Al Reef',
    nameAr: 'الريف',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 65000,
    lat: 24.3700,
    lng: 54.6450,
    description:
      'Al Reef is a large suburban community outside Abu Dhabi. Al Sham Palace covers Al Reef for car repairs, tyre service, and mobile home service.',
    descriptionAr:
      'الريف مجتمع ضاحوي كبير خارج أبوظبي.',
    responseTime: '40 min',
    featured: false,
    nearby: ['al-raha-beach', 'khalifa-city-b', 'yas-island', 'mussafah'],
  },
  {
    slug: 'yas-island',
    name: 'Yas Island',
    nameAr: 'جزيرة ياس',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 25000,
    lat: 24.4893,
    lng: 54.6051,
    description:
      'Yas Island is Abu Dhabi\'s premier entertainment and residential destination. Al Sham Palace provides mobile car service to all Yas Island residents and visitors.',
    descriptionAr:
      'جزيرة ياس هي الوجهة الترفيهية والسكنية الأولى في أبوظبي.',
    responseTime: '45 min',
    featured: true,
    nearby: ['khalifa-city-b', 'al-raha-beach', 'al-reef', 'saadiyat-island'],
  },
  {
    slug: 'saadiyat-island',
    name: 'Saadiyat Island',
    nameAr: 'جزيرة السعديات',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 20000,
    lat: 24.5415,
    lng: 54.4376,
    description:
      'Saadiyat Island is an upscale cultural and residential island in Abu Dhabi. Al Sham Palace brings professional car care directly to Saadiyat Island.',
    descriptionAr:
      'جزيرة السعديات جزيرة ثقافية وسكنية راقية في أبوظبي.',
    responseTime: '45 min',
    featured: true,
    nearby: ['al-reem-island', 'yas-island', 'abu-dhabi-city-centre', 'al-muroor'],
  },
  {
    slug: 'al-reem-island',
    name: 'Al Reem Island',
    nameAr: 'جزيرة الريم',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 80000,
    lat: 24.5094,
    lng: 54.4030,
    description:
      'Al Reem Island is a modern residential and commercial island in Abu Dhabi. Al Sham Palace provides home car service and full repairs for Al Reem Island customers.',
    descriptionAr:
      'جزيرة الريم جزيرة سكنية وتجارية حديثة في أبوظبي.',
    responseTime: '45 min',
    featured: true,
    nearby: ['saadiyat-island', 'abu-dhabi-city-centre', 'al-muroor', 'al-mushrif'],
  },
  {
    slug: 'al-falah-city',
    name: 'Al Falah City',
    nameAr: 'مدينة الفلاح',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 70000,
    lat: 24.2750,
    lng: 54.5050,
    description:
      'Al Falah City is a large residential community near Shakhbout City in Abu Dhabi. Al Sham Palace covers Al Falah City for all car service requirements.',
    descriptionAr:
      'مدينة الفلاح مجتمع سكني كبير قرب مدينة شخبوط في أبوظبي.',
    responseTime: '30 min',
    featured: false,
    nearby: ['shakhbout-city', 'al-shamkha', 'zayed-city', 'mohamed-bin-zayed-city'],
  },
  {
    slug: 'al-shamkha',
    name: 'Al Shamkha',
    nameAr: 'الشامخة',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 55000,
    lat: 24.3020,
    lng: 54.4500,
    description:
      'Al Shamkha is a fast-growing residential area in Abu Dhabi. Al Sham Palace serves Al Shamkha residents with comprehensive car services and mobile home service.',
    descriptionAr:
      'الشامخة منطقة سكنية سريعة النمو في أبوظبي.',
    responseTime: '30 min',
    featured: false,
    nearby: ['zayed-city', 'shakhbout-city', 'al-falah-city', 'mussafah'],
  },
  {
    slug: 'al-karama',
    name: 'Al Karama',
    nameAr: 'الكرامة',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 30000,
    lat: 24.4280,
    lng: 54.3720,
    description:
      'Al Karama is a residential district in central Abu Dhabi. Al Sham Palace provides dependable car services and home visits to Al Karama customers.',
    descriptionAr:
      'الكرامة حي سكني في وسط أبوظبي.',
    responseTime: '45 min',
    featured: false,
    nearby: ['al-mushrif', 'al-muroor', 'al-nahyan', 'abu-dhabi-city-centre'],
  },
  {
    slug: 'abu-dhabi-city-centre',
    name: 'Abu Dhabi City Centre',
    nameAr: 'وسط مدينة أبوظبي',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 90000,
    lat: 24.4672,
    lng: 54.3666,
    description:
      'Abu Dhabi City Centre is the heart of the capital with a high density of residents and businesses. Al Sham Palace serves the city centre with fast, reliable car services.',
    descriptionAr:
      'وسط مدينة أبوظبي هو قلب العاصمة بكثافة عالية من السكان والشركات.',
    responseTime: '45 min',
    featured: true,
    nearby: ['al-muroor', 'al-mushrif', 'al-reem-island', 'saadiyat-island'],
  },
  {
    slug: 'al-nahyan',
    name: 'Al Nahyan',
    nameAr: 'النهيان',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 35000,
    lat: 24.4358,
    lng: 54.3847,
    description:
      'Al Nahyan is a residential neighbourhood in Abu Dhabi city. Al Sham Palace covers Al Nahyan for all car accessories, repairs, and mobile service.',
    descriptionAr:
      'النهيان حي سكني في مدينة أبوظبي.',
    responseTime: '45 min',
    featured: false,
    nearby: ['al-mushrif', 'al-muroor', 'al-karama', 'al-manasir'],
  },
  {
    slug: 'madinat-zayed',
    name: 'Madinat Zayed',
    nameAr: 'مدينة زايد',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: ['Abu Dhabi'],
    population: 40000,
    lat: 24.4544,
    lng: 54.3525,
    description:
      'Madinat Zayed is a vibrant district in Abu Dhabi city known for its shopping and residential areas. Al Sham Palace provides all car services to Madinat Zayed.',
    descriptionAr:
      'مدينة زايد حي نابض بالحياة في أبوظبي يشتهر بمناطق التسوق والسكنية.',
    responseTime: '45 min',
    featured: false,
    nearby: ['al-muroor', 'al-karama', 'al-mushrif', 'al-nahyan'],
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  const area = getAreaBySlug(slug);
  if (area) return area.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getFeaturedAreas(): ServiceArea[] {
  return serviceAreas.filter((area) => area.featured);
}

export function getCounties(): string[] {
  return [...new Set(serviceAreas.map((area) => area.county))];
}
