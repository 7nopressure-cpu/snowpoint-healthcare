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
        brand: {
          navy: "#0F2A4A",
          dark: "#00152F",
          midnight: "#0B1E36",
          cyan: "#0284C7",
          cyanLight: "#38BDF8",
          teal: "#0D9488",
          tealLight: "#14B8A6",
          slate: "#1E293B",
          muted: "#64748B",
          light: "#F8FAFC",
          surface: "#F1F5F9",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        clinical: "0 1px 3px rgba(15, 42, 74, 0.04), 0 6px 16px -4px rgba(15, 42, 74, 0.05)",
        "clinical-hover": "0 8px 24px -4px rgba(15, 42, 74, 0.09), 0 2px 6px rgba(15, 42, 74, 0.04)",
        "clinical-xl": "0 20px 35px -10px rgba(15, 42, 74, 0.12)",
      },
    },
  },
  plugins: [],
};
