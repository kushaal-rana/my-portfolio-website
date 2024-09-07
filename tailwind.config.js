/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        about: 'url("/src/assets/about.svg")',
        projects: 'url("/src/assets/projects.svg")',
        experience: 'url("/src/assets/skills.svg")',
        contact: 'url("/src/assets/contact.svg")',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
