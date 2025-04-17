/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      spacing: {
        '68': '17rem',
      },
    },
  },
  plugins: [],
}
