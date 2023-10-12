/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gotham)'],
      },
      colors: {
        'dark-grey': '#333333',
        'light-grey': '#808080',
        yellow: '#FFB612',
        red: '#dc0a17',
        green: '#2FC022',
      },
    },
  },
  plugins: [],
}
