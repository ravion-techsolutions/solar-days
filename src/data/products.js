import homeImage from '../assets/images/home-1600.webp';
import commercialImage from '../assets/images/commercial-1600.webp';
import industrialImage from '../assets/images/industrial-1600.webp';
import moduleImage from '../assets/images/closeup-1200.webp';
import rooftopImage from '../assets/images/rooftop-1600.webp';
import systemsImage from '../assets/images/systems-1600.webp';

export const productCategories = ['All', 'Residential', 'Commercial', 'Components'];

export const products = [
  {
    id: 'residential-rooftop-solar',
    category: 'Residential',
    tag: 'For homes',
    title: 'Residential Rooftop Solar',
    description:
      'A rooftop solar conversation shaped around your home, available roof area and the way your household uses electricity.',
    suitable: 'Houses, apartments and villas',
    points: ['Site and roof discussion', 'System options explained in plain language', 'Clear next steps before you decide'],
    image: homeImage,
    alt: 'Solar panels covering the roof of a home in Srinagar, India',
  },
  {
    id: 'commercial-rooftop-solar',
    category: 'Commercial',
    tag: 'For businesses',
    title: 'Commercial Rooftop Solar',
    description:
      'Solar options for shops, offices and commercial buildings, with the conversation focused on your site and energy use.',
    suitable: 'Shops, offices and commercial buildings',
    points: ['Rooftop suitability discussion', 'Residential and commercial use cases', 'Enquiry support from first contact'],
    image: commercialImage,
    alt: 'Solar panels across a solar farm in India',
  },
  {
    id: 'industrial-solar-arrays',
    category: 'Commercial',
    tag: 'Large scale',
    title: 'Industrial Solar Arrays',
    description:
      'An overview of larger solar installations and how wide-area panel arrays can form part of a long-term energy plan.',
    suitable: 'Industrial sites and large properties',
    points: ['Large-format solar imagery for reference', 'Scalable system conversations', 'Site-specific guidance'],
    image: industrialImage,
    alt: 'Large solar farm in India with mountains in the background',
  },
  {
    id: 'solar-pv-modules',
    category: 'Components',
    tag: 'Core component',
    title: 'Solar PV Modules',
    description:
      'Photovoltaic modules are the visible building blocks of a solar power system. We help explain their role in simple terms.',
    suitable: 'All solar power system types',
    points: ['How modules capture sunlight', 'Panel layout and orientation basics', 'Questions to ask before choosing a system'],
    image: moduleImage,
    alt: 'Close view of solar panels in Dehradun, India',
  },
  {
    id: 'rooftop-solar-systems',
    category: 'Residential',
    tag: 'Rooftop',
    title: 'Rooftop Solar Systems',
    description:
      'Put unused roof space to work with a solar system discussed around your property, requirements and practical constraints.',
    suitable: 'Homes, shops and buildings',
    points: ['Rooftop space considerations', 'System arrangement overview', 'Residential and commercial enquiry support'],
    image: rooftopImage,
    alt: 'Solar panels on a rooftop in Dehradun, India',
  },
  {
    id: 'solar-power-systems',
    category: 'Commercial',
    tag: 'Systems',
    title: 'Solar Power Systems',
    description:
      'A starting point for understanding how a complete solar energy system can become part of everyday power use.',
    suitable: 'Homes, businesses and institutions',
    points: ['Sunlight to usable energy explained', 'System configuration questions', 'Practical guidance for enquiries'],
    image: systemsImage,
    alt: 'Rows of solar panels generating energy in Dehradun, India',
  },
];
