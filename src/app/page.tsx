import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrochureBanner from "@/components/BrochureBanner";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Encabezado con navegación, logo y botón a WhatsApp */}
      <Header />

      {/* 2. Hero Section de alto impacto con llamada a la acción y tablero clínico */}
      <Hero />

      {/* 3. Métricas clave cuantitativas de confianza */}
      <Metrics />

      {/* 4. Cartera completa de servicios especializados */}
      <Services />

      {/* 5. Propuesta de valor institucional y sectores atendidos */}
      <WhyChooseUs />

      {/* 6. Sección de Brochure institucional con descarga PDF y visor interactivo */}
      <BrochureBanner />

      {/* 7. Preguntas frecuentes para directores médicos y administradores */}
      <FaqSection />

      {/* 8. Sección de contacto directo sin base de datos (formulario a correo + WhatsApp) */}
      <ContactSection />

      {/* 9. Footer completo con redes sociales oficiales extraídas de la web original */}
      <Footer />

      {/* 10. Botón flotante siempre visible de WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}
