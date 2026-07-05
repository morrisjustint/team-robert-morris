import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        geist: ['var(--font-geist)', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0F1C2E',
          50: '#E8ECF1',
          100: '#C5CED9',
          200: '#8FA0B6',
          300: '#5A7293',
          400: '#2E4A6B',
          500: '#0F1C2E',
          600: '#0C1726',
          700: '#09111D',
          800: '#060C14',
          900: '#03060A',
        },
        green: {
          DEFAULT: '#2E5A3E',
          50: '#EBF2ED',
          100: '#C7DDD0',
          200: '#92BEA3',
          300: '#5E9F76',
          400: '#3A7350',
          500: '#2E5A3E',
          600: '#254A33',
          700: '#1C3928',
          800: '#12291C',
          900: '#091810',
        },
        gold: {
          DEFAULT: '#C5A46E',
          50: '#FAF5ED',
          100: '#F2E4CC',
          200: '#E5C99A',
          300: '#D7AE68',
          400: '#C5A46E',
          500: '#B08B4A',
          600: '#8C6F3B',
          700: '#68522C',
          800: '#44361D',
          900: '#201A0F',
        },
        cream: {
          DEFAULT: '#F8F7F4',
          50: '#FFFFFF',
          100: '#F8F7F4',
          200: '#EEECEA',
          300: '#E4E1DC',
          400: '#D9D5CF',
          500: '#C8C3BB',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
