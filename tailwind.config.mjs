/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Hamburg "Dunkelgrau & Wasser" — Ersatz für Backstein-Rot
        primary:   '#3D3D3D',    // Dunkelgrau (ersetzt Rotklinker #8B3A3A)
        'primary-dark': '#2A2A2A', // Dunkelgrau dunkel
        secondary: '#C9A96E',     // Verblichenes Gold (bleached wood)
        accent:    '#2C5F7D',    // Wasser-Blau (nordisch)
        bg:        '#FAF8F5',     // Warmes Creme
        surface:   '#FFFFFF',
        border:    '#E5E0D8',     // Warmes Grau
        'text-primary':   '#1A1A1A',
        'text-secondary': '#6B6560',
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