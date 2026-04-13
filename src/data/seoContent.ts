import type { ServiceArea } from './serviceAreas';
import type { ServiceType } from './serviceTypes';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
  area?: string;
  source: string;
}

export function generateFaqs(area: ServiceArea, service?: ServiceType): FaqItem[] {
  const universal: FaqItem[] = [
    {
      question: 'Is Al Sham Palace Auto Car Service licensed and insured?',
      answer:
        'Yes. Al Sham Palace Auto Car Service operates under a valid Abu Dhabi trade licence and has been serving customers since 1999. Our technicians are certified and trained to handle all car makes and models.',
    },
    {
      question: 'What areas does Al Sham Palace serve in Abu Dhabi?',
      answer:
        'We serve all of Abu Dhabi including Mohamed Bin Zayed City, Mussafah, Khalifa City, Yas Island, Al Raha Beach, Saadiyat Island, Al Reem Island, and all central Abu Dhabi areas. We do not cover the Western Region or Al Ain.',
    },
    {
      question: 'Do you offer home or mobile car service in Abu Dhabi?',
      answer:
        'Yes. Al Sham Palace provides a mobile home service across all Abu Dhabi areas. We come to your home, apartment, or office for battery replacement, tyre change, AC gas refill, minor mechanical repairs, and accessories installation. Call 050 344 8933 to book.',
    },
    {
      question: 'What are your opening hours?',
      answer:
        'We are open daily from 9:00 AM to 11:45 PM, seven days a week including public holidays. Call 050 344 8933 at any time during opening hours.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept cash and bank transfer. For large jobs, please discuss payment options with our team. We always provide a clear quote before starting any work.',
    },
  ];

  const areaFaqs: FaqItem[] = [
    {
      question: `How quickly can you reach ${area.name}?`,
      answer: `Our typical response time to ${area.name} is approximately ${area.responseTime}. For emergency callouts, call 050 344 8933 and we will dispatch our nearest available technician as quickly as possible.`,
    },
    {
      question: `Do you charge extra for service in ${area.name}?`,
      answer: `${area.name} is within our standard Abu Dhabi service coverage. There may be a small call-out fee for mobile home service depending on the job and location, but we always confirm the total cost before dispatching.`,
    },
  ];

  const serviceFaqs: FaqItem[] = service
    ? [
        {
          question: `How much does ${service.name.toLowerCase()} cost in ${area.name}?`,
          answer: `${service.name} prices in ${area.name} start from AED ${service.priceRange.min} depending on the job scope. Contact us on 050 344 8933 for a specific quote for your vehicle.`,
        },
        {
          question: `Can you do ${service.name.toLowerCase()} at my home in ${area.name}?`,
          answer: `Yes. Our mobile team can provide ${service.name.toLowerCase()} at your home or office in ${area.name}. Call or WhatsApp 050 344 8933 to book a mobile visit.`,
        },
      ]
    : [];

  return [...universal, ...areaFaqs, ...serviceFaqs];
}

export const reviews: Review[] = [
  {
    author: 'Ahmed Al Mazrouei',
    rating: 5,
    text: 'Excellent service! They came to my home in Khalifa City and fixed my car AC within two hours. Very professional team and fair prices.',
    date: '2025-12-10',
    service: 'car-ac-repair',
    area: 'khalifa-city-a',
    source: 'Google',
  },
  {
    author: 'Fatima Al Hashemi',
    rating: 5,
    text: 'Best car accessories shop in Abu Dhabi. I got my tyres changed and new seat covers installed in one visit. Very quick and clean work.',
    date: '2025-11-22',
    service: 'car-accessories',
    area: 'mussafah',
    source: 'Google',
  },
  {
    author: 'Mohammed Al Dhaheri',
    rating: 5,
    text: 'I have been going to Al Sham Palace for over ten years. They are honest, fast, and their prices are fair. The home service is a great bonus.',
    date: '2026-01-05',
    service: 'mechanical-repairs',
    area: 'mohamed-bin-zayed-city',
    source: 'Google',
  },
  {
    author: 'Khalid Al Nuaimi',
    rating: 5,
    text: 'Fixed my car electrical fault same day. Other shops said it would take a week. Very impressed with their knowledge and speed.',
    date: '2026-02-14',
    service: 'auto-electrical-works',
    area: 'khalifa-city-b',
    source: 'Google',
  },
  {
    author: 'Sara Al Kaabi',
    rating: 5,
    text: 'Called them for roadside assistance in MBZ City and they arrived in 20 minutes. Changed the tyre quickly and professionally. Highly recommended.',
    date: '2026-03-01',
    service: 'tyre-services',
    area: 'mohamed-bin-zayed-city',
    source: 'Google',
  },
  {
    author: 'Hamdan Al Mansouri',
    rating: 5,
    text: 'Got my car battery replaced at home in Yas Island. They arrived within 45 minutes and the whole job was done in 20 minutes. Great service.',
    date: '2025-10-18',
    service: 'battery-replacement',
    area: 'yas-island',
    source: 'Google',
  },
  {
    author: 'Mariam Al Zaabi',
    rating: 5,
    text: 'Amazing detailing service! My car looks brand new after the full interior and exterior detail. Will definitely come back.',
    date: '2025-09-30',
    service: 'car-wash-detailing',
    area: 'al-raha-beach',
    source: 'Google',
  },
  {
    author: 'Omar Al Rashidi',
    rating: 5,
    text: 'These guys know their cars. Quick diagnosis, honest quote, and fixed on time. Best auto workshop in Abu Dhabi.',
    date: '2026-01-20',
    service: 'mechanical-repairs',
    area: 'shakhbout-city',
    source: 'Google',
  },
];

export function getReviewsForPage(
  areaSlug?: string,
  serviceSlug?: string,
  limit: number = 6
): Review[] {
  let filtered = [...reviews];

  if (serviceSlug && areaSlug) {
    const both = filtered.filter((r) => r.service === serviceSlug && r.area === areaSlug);
    if (both.length >= 2) return both.slice(0, limit);
  }

  if (serviceSlug) {
    const byService = filtered.filter((r) => r.service === serviceSlug);
    if (byService.length >= 2) return byService.slice(0, limit);
  }

  if (areaSlug) {
    const byArea = filtered.filter((r) => r.area === areaSlug);
    if (byArea.length >= 2) return byArea.slice(0, limit);
  }

  return filtered.sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getAggregateRating(): {
  ratingValue: string;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
} {
  if (reviews.length === 0) {
    return { ratingValue: '0', reviewCount: 0, bestRating: 5, worstRating: 1 };
  }
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = sum / reviews.length;
  return {
    ratingValue: avg.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}
