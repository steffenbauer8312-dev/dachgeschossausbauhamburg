/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:   '#2D4A3E',
        secondary: '#C9A96E',
        accent:    '#E85D04',
        bg:        '#FDFBF7',
        surface:   '#FFFFFF',
        border:    '#E5E7EB',
        'text-primary':   '#1A1A1A',
        'text-secondary': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
      spacing: {
        'section': '6rem',
      },
      animation: {
        'slide-down': 'slideDown 0.2s ease-out',
      },
      keyframes: {
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};