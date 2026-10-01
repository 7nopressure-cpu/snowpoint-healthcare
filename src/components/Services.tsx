import Link from "next/link";
import { SITE_DATA } from "@/data/content";
import {
  FileCheck,
  Cpu,
  BarChart3,
  ShieldCheck,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function Services() {
  const iconMap: Record<string, React.ReactNode> = {
    FileCheck: <FileCheck className="w-6 h-6 text-brand-royal" />,
    Cpu: <Cpu className="w-6 h-6 text-brand-royal" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-brand-royal" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-teal" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-brand-royal" />,
  };

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 tech-grid-pattern-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-royal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-royal text-xs font-bold uppercase tracking-wider border border-brand-royal/15">
            <Sparkles className="w-3.5 h-3.5 text-brand-royal" />
            Cartera de Especialidades Clínicas
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight">
            Servicios Especializados de Consultoría Sanitaria
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Soluciones médico-técnicas diseñadas a la medida de la complejidad hospitalaria moderna. Rigor normativo, optimización de costos y mejora continua asistencial.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.services.map((service, index) => {
            const whatsappServiceHref = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
              `Hola SnowPoint Healthcare, deseo solicitar asesoría sobre el servicio: ${service.title}`
            )}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-clinical hover:shadow-clinical-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top Subtle Border Highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-royal to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-brand-royal group-hover:bg-gradient-to-br group-hover:from-brand-navy group-hover:to-brand-royal group-hover:text-white transition-all duration-300 shadow-xs">
                      {iconMap[service.icon] || <FileCheck className="w-6 h-6 text-brand-royal" />}
                    </div>
                    <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-slate-100 text-brand-navy border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8 pt-5 border-t border-slate-100">
                    <div className="text-xs font-bold text-brand-navy/60 uppercase tracking-wider">
                      Alcance del Servicio:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-brand-royal shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Harmonized Card CTA */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={whatsappServiceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-royal hover:text-brand-cobalt group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Consultar Servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href="#contacto"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-700 transition-colors"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Consulting Request Banner in Deep Royal/Navy */}
          <div className="bg-gradient-to-br from-brand-darkest via-brand-navy to-brand-royal text-white rounded-2xl p-8 flex flex-col justify-between shadow-clinical border border-white/10 relative overflow-hidden">
            {/* Tech grid texture in card */}
            <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold mb-4 border border-white/20">
                PROYECTOS A MEDIDA
              </div>
              <h3 className="font-heading font-extrabold text-2xl mb-3 text-white">
                ¿Su institución tiene un reto específico?
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                Evaluamos auditorías forenses, planes directores de informática médica, peritajes o proyectos de transformación institucional de gran escala.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                  <span>Diagnóstico institucional confidencial sin costo</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                  <span>Consultores con experiencia médica y directiva</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                  <span>Cobertura presencial y remota en toda la región</span>
                </li>
              </ul>
            </div>

            <Link
              href="#contacto"
              className="relative z-10 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-sky-500 hover:from-brand-cobalt hover:to-sky-400 text-white font-bold text-sm text-center shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Solicitar Reunión de Diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
