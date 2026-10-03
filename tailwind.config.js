const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        fg: token('fg'),
        card: token('card'),
        muted: token('muted'),
        line: token('line'),
        brand: token('brand'),
        brandfg: token('brandfg'),
        brandtext: token('brandtext'),
        teal: token('teal'),
        gold: token('gold'),
        ink: token('ink'),
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
