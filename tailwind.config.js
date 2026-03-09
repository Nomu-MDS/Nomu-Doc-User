/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Désactiver preflight pour ne pas écraser les styles Docusaurus
    preflight: false,
  },
  plugins: [],
};
