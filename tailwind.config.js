/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        about: 'url("/src/assets/about.svg")',
        portfolio: 'url("/src/assets/portfolio.svg")',
        experience: 'url("/src/assets/experience.svg")',
        contact: 'url("/src/assets/contact.svg")',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
