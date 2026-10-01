import Link from "next/link";
import { SITE_DATA } from "@/data/content";
import {
  MessageSquare,
  FileDown,
  ShieldCheck,
  TrendingUp,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const whatsappHref = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
    SITE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <section id="inicio" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background glow highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Consultoría Sanitaria de Alto Nivel • Bolivia & Latinoamérica</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.12]">
              Innovación y Rigor en la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">
                Gestión de Salud
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {SITE_DATA.tagline}. Brindamos soluciones estratégicas en{" "}
              <strong className="text-slate-800 font-semibold">Auditoría Médica</strong>,{" "}
              <strong className="text-slate-800 font-semibold">Transformación Digital e Interoperabilidad (HL7/FHIR)</strong>,{" "}
              e implementación de estándares de <strong className="text-slate-800 font-semibold">Seguridad del Paciente</strong> para clínicas, hospitales y aseguradoras.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Conversar por WhatsApp</span>
              </a>

              <a
                href={SITE_DATA.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-brand-cyan text-brand-navy hover:text-brand-cyan font-semibold text-base shadow-xs hover:shadow-sm transition-all"
              >
                <FileDown className="w-5 h-5 text-brand-cyan" />
                <span>Ver Brochure Institucional</span>
              </a>
            </div>

            {/* Quick Micro-Trust Checkpoints */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Auditorías Clínicas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Normas HL7 & FHIR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Seguridad Hospitalaria</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clinical Intelligence Card (Stitch design preview) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400/20 to-teal-400/20 rounded-2xl blur-lg opacity-70" />

              {/* Main Card */}
              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-clinical p-6 space-y-5">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-cyan flex items-center justify-center">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-brand-navy">Tablero de Control Clínico</h2>
                      <p className="text-xs text-slate-500">SnowPoint Health Systems</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    En Línea
                  </span>
                </div>

                {/* Key Clinical Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                    <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                      <span>Pertinencia Médica</span>
                      <TrendingUp className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div className="text-2xl font-bold text-brand-navy">99.4%</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Conformidad en Cuentas</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                    <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                      <span>Seguridad Paciente</span>
                      <ShieldCheck className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div className="text-2xl font-bold text-brand-teal">0.02‰</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Eventos Adversos Prevenidos</p>
                  </div>
                </div>

                {/* FHIR Interoperability Module */}
                <div className="rounded-xl bg-gradient-to-r from-brand-navy to-slate-900 text-white p-4 space-y-2.5 shadow-sm">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-sky-200">Servidor HL7 / FHIR v4</span>
                    <span className="font-mono text-teal-300 text-[11px]">LATENCIA: 12ms</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Integración fluida de Historias Clínicas Electrónicas (HIS), Laboratorio (LIS) y Diagnóstico por Imagen.
                  </p>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-400 to-teal-400 h-full w-[95%] rounded-full" />
                  </div>
                </div>

                {/* Audit Checkpoints */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                      <span className="font-medium">Trazabilidad Farmacológica & Auditoría</span>
                    </div>
                    <span className="font-bold text-emerald-700">100% OK</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                      <span className="font-medium">Protocolo Acreditación JCI / ISO</span>
                    </div>
                    <span className="font-bold text-sky-700">Certificable</span>
                  </div>
                </div>

                {/* Floating Bottom Pill */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>+240,000 episodios médicos analizados</span>
                  <Link href="#servicios" className="text-brand-cyan hover:underline font-semibold flex items-center gap-1">
                    Ver servicios <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
