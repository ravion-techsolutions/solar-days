import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { businessInfo, getSiteUrl } from '../data/businessInfo';
import ogImage from '../assets/images/og-image.jpg';

const baseTitle = 'Solar Days | Solar Energy Solutions in Kannur, Kerala';

const routeMeta = {
  '/': {
    title: baseTitle,
    description:
      'Explore solar energy solutions with Solar Days in Azhikode, Kannur, Kerala. Contact us to learn more about residential and commercial solar energy solutions.',
  },
  '/about': {
    title: `About Us | ${baseTitle}`,
    description:
      'Learn about Solar Days, a solar-focused business in Kannur, Kerala, and how we help homes and businesses understand their solar options.',
  },
  '/services': {
    title: `Our Services | ${baseTitle}`,
    description:
      'Discover Solar Days solar services, including residential and commercial solar guidance, system conversations and practical next steps.',
  },
  '/products': {
    title: `Products | ${baseTitle}`,
    description:
      'Browse solar system types and components explained simply by Solar Days in Kannur, Kerala, for homes and businesses.',
  },
  '/contact': {
    title: `Contact Us | ${baseTitle}`,
    description:
      'Contact Solar Days in Azhikode, Kannur, Kerala. Call, message on WhatsApp or send an enquiry about your solar plans.',
  },
};

export default function SEO() {
  const { pathname } = useLocation();
  const meta = routeMeta[pathname] || routeMeta['/'];
  const siteUrl = getSiteUrl();
  const canonicalUrl = siteUrl ? `${siteUrl}${pathname === '/' ? '' : pathname}` : '';
  const imageUrl = `${siteUrl}${ogImage}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    description: businessInfo.description,
    url: canonicalUrl,
    email: businessInfo.email,
    telephone: businessInfo.contactPersons.map((person) => `+91${person.phone}`),
    image: imageUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jyothi Building, Colony Gate, Azhikode',
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.region,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.country,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Kannur, Kerala, India',
    },
    keywords: 'solar energy solutions Kannur, rooftop solar Azhikode, residential solar Kerala, commercial solar Kannur',
  };

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#142B45" />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
