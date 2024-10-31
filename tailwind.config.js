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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'adaptive-sm': 'clamp(0.875rem, 2vw, 1.125rem)',
        'adaptive-md': 'clamp(1rem, 2.5vw, 1.5rem)',
        'adaptive-lg': 'clamp(1.125rem, 3vw, 1.875rem)',
        'adaptive-xl': 'clamp(1.25rem, 3.5vw, 2.25rem)',
        'adaptive-xxl': 'clamp(1.5rem, 4vw, 2.5rem)',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        alegreya: ['Alegreya Sans SC'],
        nato: ['Noto Sans']
      },



    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark"],  // Замени на нужную тему, например, светлую
  },
};
