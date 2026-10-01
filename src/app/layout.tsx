import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_DATA } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F2A4A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${SITE_DATA.name} | ${SITE_DATA.tagline}`,
  description: SITE_DATA.metaDescription,
  authors: [{ name: SITE_DATA.name }],
  keywords: [
    "Consultoría en salud",
    "Auditoría médica",
    "Transformación digital salud",
    "HL7 FHIR",
    "Acreditación hospitalaria",
    "Seguridad del paciente",
    "Gestión clínica",
    "SnowPoint Healthcare",
    "Bolivia",
    "Latinoamérica"
  ],
  openGraph: {
    title: `${SITE_DATA.name} | ${SITE_DATA.tagline}`,
    description: SITE_DATA.metaDescription,
    url: "https://www.snowpointhealthcare.com",
    siteName: SITE_DATA.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_DATA.name} | ${SITE_DATA.tagline}`,
    description: SITE_DATA.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-800 min-h-screen flex flex-col selection:bg-sky-100 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
