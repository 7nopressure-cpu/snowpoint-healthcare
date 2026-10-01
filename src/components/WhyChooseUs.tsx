import { SITE_DATA } from "@/data/content";
import {
  Stethoscope,
  CheckCircle2,
  Layers,
  Users,
  Building2,
  Shield,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-6 h-6 text-brand-royal" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-brand-teal" />,
    Layers: <Layers className="w-6 h-6 text-brand-royal" />,
    Users: <Users className="w-6 h-6 text-brand-teal" />,
  };

  const institutions = [
    { title: "Hospitales y Clínicas", desc: "Optimización de comités clínicos, facturación y pertinencia médica." },
    { title: "Compañías Aseguradoras", desc: "Auditoría concurrente, control de siniestralidad y convenios prestadores." },
    { title: "Empresas HealthTech", desc: "Conformidad regulatoria, HL7/FHIR y validación médica de productos." },
    { title: "Entidades Públicas y Seguridad Social", desc: "Políticas asistenciales, gestión de riesgos y programas de calidad." },
  ];

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-royal text-xs font-bold uppercase tracking-wider border border-brand-royal/15">
            Rigor y Autoridad Institucional
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight">
            ¿Por qué elegir a SnowPoint Healthcare?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bajo el principio deontológico de <strong className="text-brand-navy font-semibold italic">Primum Non Nocere</strong>, articulamos la práctica médica de excelencia con ingeniería de procesos y modernización tecnológica.
          </p>
        </div>

        {/* 4 Pillars Grid with Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {SITE_DATA.whyChooseUs.map((pillar, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:bg-white hover:border-brand-royal/30 hover:shadow-clinical transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-brand-royal/40 transition-all">
                  {iconMap[pillar.icon] || <CheckCircle2 className="w-6 h-6 text-brand-royal" />}
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Institutions We Serve Banner: Deep Royal Contrast Container */}
        <div className="rounded-3xl bg-gradient-to-br from-brand-darkest via-brand-navy to-brand-royal text-white p-8 sm:p-14 relative overflow-hidden shadow-clinical-xl">
          <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300">
                ECOSISTEMA DE SALUD INTEGRAL
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-3">
                Soluciones adaptadas a cada actor sanitario
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Diseñamos marcos de trabajo conformes al marco regulatorio específico y objetivos estratégicos de cada entidad prestadora o aseguradora.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {institutions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-200 space-y-2.5"
                >
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm">
                    <Building2 className="w-4 h-4 text-sky-300" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
