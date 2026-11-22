import logo from '../assets/logo/solar-days-logo-horizontal.png';

const siteUrl = (import.meta.env.VITE_SITE_URL || '').trim();
const address = 'Jyothi Building, Colony Gate, Azhikode, Kannur – 670009, Kerala, India.';
const mapsQuery = encodeURIComponent(address);

export const businessInfo = {
  name: 'Solar Days',
  description:
    'Solar Days helps homes and businesses in Kannur, Kerala explore cleaner energy through thoughtful solar energy solutions.',
  logo,
  address,
  addressLines: ['Jyothi Building, Colony Gate', 'Azhikode, Kannur – 670009', 'Kerala, India'],
  locality: 'Azhikode',
  city: 'Kannur',
  region: 'Kerala',
  postalCode: '670009',
  country: 'IN',
  contactPersons: [
    { name: 'Dileep Kumar', phone: '9287344005', displayPhone: '9287344005' },
    { name: 'Sreeja V.', phone: '9388704617', displayPhone: '9388704617' },
  ],
  email: 'solardays365@gmail.com',
  gst: '32AEFFS9820R1ZD',
  whatsappNumber: '919287344005',
  defaultWhatsappMessage: 'Hello Solar Days, I would like to know more about your solar energy solutions.',
  siteUrl,
  googleMapsEmbedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  googleMapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  googleMapsOpenUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
};

export const getSiteUrl = () => {
  if (siteUrl) return siteUrl.replace(/\/$/, '');
  if (typeof window !== 'undefined') return window.location.origin;
  return '';
};
