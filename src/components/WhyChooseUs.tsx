import { SITE_DATA } from "@/data/content";
import {
  Stethoscope,
  CheckCircle2,
  Layers,
  Users,
  Building2,
  Shield,
  HeartHandshake,
  ActivitySquare,
} from "lucide-react";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-6 h-6 text-brand-cyan" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-brand-teal" />,
    Layers: <Layers className="w-6 h-6 text-brand-cyan" />,
    Users: <Users className="w-6 h-6 text-brand-teal" />,
  };

  const institutions = [
    { title: "Hospitales y Clínicas", desc: "Optimización de comités clínicos, facturación y pertinencia médica." },
    { title: "Compañías Aseguradoras", desc: "Auditoría concurrente, control de siniestralidad y convenios prestadores." },
    { title: "Empresas HealthTech", desc: "Conformidad regulatoria, HL7/FHIR y validación médica de productos." },
    { title: "Entidades Públicas y Seguridad Social", desc: "Políticas asistenciales, gestión de riesgos y programas de calidad." },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            Propuesta de Valor Institucional
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            ¿Por qué elegir a SnowPoint Healthcare?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Fusionamos la práctica médica de excelencia con ingeniería de procesos y visión tecnológica para garantizar resultados tangibles y medibles.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {SITE_DATA.whyChooseUs.map((pillar, index) => (
            <div
              key={index}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-clinical transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-5">
                {iconMap[pillar.icon] || <CheckCircle2 className="w-6 h-6 text-brand-cyan" />}
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Institutions We Serve Banner */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy mb-3">
              Soluciones para cada sector del ecosistema de salud
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Adaptamos nuestro marco de trabajo y metodologías al entorno regulatorio y operativo específico de cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs space-y-2"
              >
                <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                  <Building2 className="w-4 h-4 text-brand-cyan" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
