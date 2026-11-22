export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071C35',
          950: '#020B16',
          900: '#071C35',
          800: '#0D2D52',
          700: '#0C4C81',
        },
        royal: {
          DEFAULT: '#1265A8',
          light: '#1F7EC9',
          dark: '#0C4C81',
        },
        aqua: {
          DEFAULT: '#36C6D9',
          light: '#6BE0EE',
          dark: '#1FA4B6',
        },
        solar: {
          DEFAULT: '#F59E0B',
          400: '#F7B733',
          500: '#F59E0B',
          600: '#D97706',
        },
        sun: '#F7C948',
        ink: '#0F172A',
        muted: '#5A6B80',
        mist: '#F4F7FA',
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans Variable', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -20px rgba(7, 28, 53, 0.35)',
        lift: '0 22px 55px -30px rgba(7, 28, 53, 0.45)',
        royal: '0 14px 35px -16px rgba(18, 101, 168, 0.7)',
        elevated: '0 28px 70px -35px rgba(2, 11, 22, 0.75)',
        glow: '0 18px 45px -20px rgba(54, 198, 217, 0.55)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg,#071c35 0%,#0d2d52 50%,#1265a8 100%)',
        'grid-faint':
          'linear-gradient(to right, rgba(54,198,217,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(54,198,217,0.08) 1px, transparent 1px)',
        'grid-dots': 'radial-gradient(#36C6D9 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
        dots: '32px 32px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
