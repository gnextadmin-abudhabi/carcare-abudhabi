export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  shortName: string;
  legalName: string;
  owner: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  license: string;
  yearEstablished: number;
  serviceRadius: string;
  address: Address;
  coordinates: Coordinates;
  hours: BusinessHours[];
  logo: string;
  ogImage: string;
  // Arabic extras (optional)
  nameAr?: string;
  taglineAr?: string;
  descriptionAr?: string;
  whatsapp?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export const business: Business = {
  name: 'Al Sham Palace Auto Car Service',
  shortName: 'Al Sham Palace',
  legalName: 'Al Sham Palace Auto Car Service L.L.C.',
  owner: 'Al Sham Palace',
  tagline: 'Everything Your Car Needs — At Your Door Since 1999',
  description:
    'Al Sham Palace Auto Car Service is Abu Dhabi\'s most trusted full-service auto care centre, operating since 1999. We provide car accessories, tyre services, AC repair, mechanical and electrical works, and mobile home service across all Abu Dhabi areas.',
  phone: '050 344 8933',
  phoneHref: 'tel:+971503448933',
  email: 'info@carcareabudhabi.com',
  website: 'https://carcareabudhabi.com',
  license: 'Abu Dhabi Trade License',
  yearEstablished: 1999,
  serviceRadius: 'Abu Dhabi and surrounding areas',
  address: {
    street: 'ME10, Mohamed Bin Zayed City',
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zip: '',
    country: 'UAE',
  },
  coordinates: {
    lat: 24.3338632,
    lng: 54.5345258,
  },
  hours: [
    { days: 'Daily', hours: '9:00 AM – 11:45 PM' },
  ],
  logo: '/images/logo.webp',
  ogImage: '/images/og-default.webp',
  // Arabic extras
  nameAr: 'قصر الشام للعناية بالسيارات',
  taglineAr: 'كل ما تحتاجه سيارتك — نصلك في أبوظبي منذ 1999',
  descriptionAr:
    'قصر الشام للعناية بالسيارات هو مركز الخدمة الشاملة الأكثر ثقة في أبوظبي، نعمل منذ عام 1999.',
  whatsapp: '971503448933',
  social: {
    instagram: 'https://www.instagram.com/al_sham_palace1/',
    tiktok: 'https://www.tiktok.com/@alsham.palace1',
  },
};

export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.yearEstablished;
}
