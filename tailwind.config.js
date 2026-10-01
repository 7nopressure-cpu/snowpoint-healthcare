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
          darkest: "#000B1A",   // Fondo base ultra oscuro para banner
          dark: "#001330",      // Base oscura nocturna profunda
          navy: "#001D4A",      // Azul marino principal del escudo institucional
          midnight: "#002868",  // Azul corporativo intermedio
          royal: "#003882",     // Azul zafiro del logo "HEALTHCARE"
          cobalt: "#0047AB",    // Azul cobalto de alta vibrancia
          blue: "#0A58CA",      // Azul acción primario
          sky: "#0284C7",       // Azul cielo técnico
          cyan: "#38BDF8",      // Resplandor cian glaciar
          ice: "#E0F2FE",       // Tinte de fondo hielo suave
          teal: "#0D9488",      // Tinte clínico de seguridad / verificación
          slate: "#0F172A",
          muted: "#475569",
          light: "#F8FAFC",
          surface: "#F1F5F9",
          border: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        clinical: "0 1px 3px rgba(0, 29, 74, 0.05), 0 8px 24px -4px rgba(0, 29, 74, 0.08)",
        "clinical-hover": "0 12px 30px -4px rgba(0, 56, 130, 0.16), 0 4px 12px rgba(0, 29, 74, 0.08)",
        "clinical-xl": "0 24px 48px -12px rgba(0, 19, 48, 0.35)",
        "glow-blue": "0 0 24px rgba(0, 71, 171, 0.35)",
        "glow-cyan": "0 0 20px rgba(56, 189, 248, 0.3)",
      },
    },
  },
  plugins: [],
};
