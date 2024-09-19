import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        text: 'var(--text)',
        textSecondary: 'var(--textSecondary)',
        textThird: 'var(--textThird)',
      },
      fontFamily: {
        title: ['title1', 'sans-serif'],
        title1: ['title2', 'sans-serif'],
        title2: ['title3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
