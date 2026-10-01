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
} from "lucide-react";

export default function Services() {
  const iconMap: Record<string, React.ReactNode> = {
    FileCheck: <FileCheck className="w-6 h-6 text-brand-cyan" />,
    Cpu: <Cpu className="w-6 h-6 text-brand-cyan" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-brand-cyan" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-teal" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-brand-cyan" />,
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            Cartera de Especialidades Clínicas
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
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
                className={`bg-white rounded-2xl p-7 border border-slate-200/90 shadow-clinical hover:shadow-clinical-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
                      {iconMap[service.icon] || <FileCheck className="w-6 h-6 text-brand-cyan" />}
                    </div>
                    <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Alcance del Servicio:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={whatsappServiceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 py-1"
                  >
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href="#contacto"
                    className="text-xs text-slate-500 hover:text-brand-navy transition-colors"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Consulting Request Banner */}
          <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-midnight text-white rounded-2xl p-7 flex flex-col justify-between shadow-clinical">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-4 border border-sky-400/30">
                PROYECTOS A MEDIDA
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-white">
                ¿Su institución tiene un reto específico?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Evaluamos auditorías forenses, planes directores de informática médica, peritajes o proyectos de transformación institucional de gran escala.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Diagnóstico institucional confidencial sin costo</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Consultores con experiencia médica y directiva</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Cobertura presencial y remota en toda la región</span>
                </li>
              </ul>
            </div>

            <Link
              href="#contacto"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-cyan to-teal-500 hover:from-sky-500 hover:to-teal-600 text-white font-semibold text-sm text-center shadow-md transition-all hover:shadow-lg"
            >
              Solicitar Reunión de Diagnóstico
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
