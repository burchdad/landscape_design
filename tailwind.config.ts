import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0f1111',
        moss: '#74836a',
        stone: '#e7e4dd',
        sand: '#f4f1ea',
      },
      boxShadow: {
        luxe: '0 22px 60px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
