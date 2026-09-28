/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        card: '#0c0c0c',
        accent: '#ff401f',
        accentBlue: '#6C8CFF',
        line: 'rgba(255, 255, 255, 0.11)',
        'line-soft': 'rgba(255, 255, 255, 0.05)',
        muted: '#8a8a8a',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
      },
      borderRadius: {
        box: '16px',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};
