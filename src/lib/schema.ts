import { site } from '../data/site';

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const serviceSchema = (name: string, description: string, areas: string[], path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  serviceType: name,
  url: new URL(path, site.url).href,
  provider: { '@id': `${site.url}/#empresa` },
  areaServed: areas.map((a) => ({ '@type': 'City', name: `${a}, RS` })),
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: { '@type': 'ContactPoint', telephone: `+${site.phone}`, contactType: 'customer service', availableLanguage: 'Portuguese' },
  },
});
