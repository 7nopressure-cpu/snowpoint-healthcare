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
          navy: "#001D4A",      // Azul marino profundo del escudo institucional
          dark: "#001026",      // Base oscura nocturna
          midnight: "#001636",  // Azul medianoche corporativo
          royal: "#003E92",     // Azul zafiro real de HEALTHCARE
          blue: "#0047AB",      // Azul médico vibrante
          cyan: "#0284C7",      // Cian médico para iluminaciones
          cyanLight: "#38BDF8", // Acento cian claro
          teal: "#0D9488",      // Verde clínico de seguridad y confirmación
          slate: "#1E293B",
          muted: "#64748B",
          light: "#F8FAFC",
          surface: "#F1F5F9",
          border: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        clinical: "0 1px 3px rgba(0, 29, 74, 0.05), 0 6px 16px -4px rgba(0, 29, 74, 0.08)",
        "clinical-hover": "0 10px 25px -4px rgba(0, 62, 146, 0.15), 0 4px 10px rgba(0, 29, 74, 0.06)",
        "clinical-xl": "0 20px 35px -10px rgba(0, 29, 74, 0.25)",
      },
    },
  },
  plugins: [],
};
