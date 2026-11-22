import { Building2, Home, Layers, Sun } from 'lucide-react';
import residentialSmall from '../assets/images/residential-800.webp';
import residentialLarge from '../assets/images/residential-1600.webp';
import commercialSmall from '../assets/images/commercial-800.webp';
import commercialLarge from '../assets/images/commercial-1600.webp';
import rooftopSmall from '../assets/images/rooftop-800.webp';
import rooftopLarge from '../assets/images/rooftop-1600.webp';
import systemsSmall from '../assets/images/systems-800.webp';
import systemsLarge from '../assets/images/systems-1600.webp';

export const solutions = [
  {
    id: 'residential',
    title: 'Residential Solar Solutions',
    description:
      'Make better use of sunlight at home. We help households explore solar options for houses, apartments and residential properties with a focus on practical energy needs.',
    icon: Home,
    requirement: 'Residential Solar',
    image: residentialSmall,
    imageLarge: residentialLarge,
    alt: 'Solar panels installed on a residential roof in Srinagar, India',
  },
  {
    id: 'commercial',
    title: 'Commercial Solar Solutions',
    description:
      'Solar energy can help shops, offices and commercial buildings make more thoughtful use of their electricity. Talk to us about options suited to your site.',
    icon: Building2,
    requirement: 'Commercial Solar',
    image: commercialSmall,
    imageLarge: commercialLarge,
    alt: 'Rows of solar panels at a solar farm in India',
  },
  {
    id: 'rooftop',
    title: 'Rooftop Solar Systems',
    description:
      'Put unused rooftop space to work. We guide you through the possibilities of generating solar energy from the roof of your home, shop or building.',
    icon: Layers,
    requirement: 'Rooftop Solar',
    image: rooftopSmall,
    imageLarge: rooftopLarge,
    alt: 'Solar panels on a rooftop in Dehradun, India',
  },
  {
    id: 'systems',
    title: 'Solar Energy Systems',
    description:
      'A simple way to begin the move towards cleaner energy. Explore how a solar energy system can become part of the way you power everyday life.',
    icon: Sun,
    requirement: 'General Enquiry',
    image: systemsSmall,
    imageLarge: systemsLarge,
    alt: 'Solar panels generating energy in Dehradun, India',
  },
];
