import { businessInfo } from '../data/businessInfo';

export const buildWhatsAppUrl = (message = businessInfo.defaultWhatsappMessage) => {
  const phone = businessInfo.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
};

export const openWhatsApp = (message) => {
  if (typeof window === 'undefined') return;
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
};

export const buildEnquiryMessage = (enquiry) => {
  const lines = [
    'Hello Solar Days,',
    '',
    'I would like to enquire about your solar energy solutions.',
    '',
    `Name: ${enquiry.name.trim()}`,
    `Phone: ${enquiry.phone.trim()}`,
  ];

  if (enquiry.email?.trim()) lines.push(`Email: ${enquiry.email.trim()}`);
  lines.push(`Location: ${enquiry.location.trim()}`);
  lines.push(`Requirement: ${enquiry.requirement}`);
  lines.push('', `Message: ${enquiry.message.trim()}`);

  return lines.join('\n');
};
