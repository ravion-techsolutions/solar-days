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
          DEFAULT: '#0B2497',
          950: '#06165F',
          900: '#0B2497',
          800: '#1234A9',
          700: '#3465D4',
        },
        royal: {
          DEFAULT: '#3465D4',
          light: '#6B93E8',
          dark: '#2451C4',
        },
        orange: {
          DEFAULT: '#F26A2C',
          light: '#F78B52',
          dark: '#EB470E',
        },
        solar: {
          DEFAULT: '#F26A2C',
          400: '#F78B52',
          500: '#F26A2C',
          600: '#EB470E',
        },
        sun: '#F78B52',
        ink: '#0B2497',
        muted: '#5A6296',
        mist: '#F4F7FF',
        line: '#E2E7F5',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans Variable', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -20px rgba(11, 36, 151, 0.35)',
        lift: '0 22px 55px -30px rgba(11, 36, 151, 0.45)',
        royal: '0 14px 35px -16px rgba(52, 101, 212, 0.7)',
        elevated: '0 28px 70px -35px rgba(6, 22, 95, 0.75)',
        glow: '0 18px 45px -20px rgba(242, 106, 44, 0.55)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg,#06165F 0%,#0B2497 50%,#3465D4 100%)',
        'grid-faint':
          'linear-gradient(to right, rgba(52,101,212,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,101,212,0.08) 1px, transparent 1px)',
        'grid-dots': 'radial-gradient(#F26A2C 1px, transparent 1px)',
        'solar-panel':
          'linear-gradient(to right, rgba(255,255,255,0.9) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.9) 2px, transparent 2px)',
      },
      backgroundSize: {
        grid: '48px 48px',
        dots: '32px 32px',
        panel: '96px 64px',
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
