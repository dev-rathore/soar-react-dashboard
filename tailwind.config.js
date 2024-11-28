/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-100": "var(--accent-100)",
        "accent-200": "var(--accent-200)",
        "accent-300": "var(--accent-300)",
        "app-blue": "var(--app-blue)",
        "app-black": "var(--app-black)",
        "app-dark": "var(--app-dark)",
        "app-gray": "var(--app-gray)",
        "app-gray-100": "var(--app-gray-100)",
        "app-gray-200": "var(--app-gray-200)",
        "app-gray-300": "var(--app-gray-300)",
        "white-15": "var(--white-15)",
        "white-0": "var(--white-0)",
        "app-red": "var(--app-red)",
        "app-green": "var(--app-green)",
      },
      spacing: {
        13: "3.25rem",
        13.5: "3.375rem",
      },
      boxShadow: {
        icon: "4px 4px 18px -2px #E7E4E8CC",
      },
    },
  },
  plugins: [],
};
