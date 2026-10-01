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
  Shield,
  Server,
  Zap,
} from "lucide-react";

export default function Hero() {
  const whatsappHref = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
    SITE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <section id="inicio" className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 bg-brand-darkest text-white">
      {/* 1. Base Layer: Solid, deep corporate navy foundation ensuring 100% WCAG AAA readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000B1A] via-[#001433] to-[#001D4A] -z-30" />

      {/* 2. Institutional Wallpaper Layer (image_e13e0a4c.jpg) with controlled opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-luminosity pointer-events-none -z-20"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      />

      {/* 3. Tech grid overlay for medical-grade precision */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* 4. Ambient Sapphire/Cyan glowing coronas */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-brand-cobalt/25 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-brand-royal/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ================= LEFT COLUMN: HERO VALUE PROPOSITION ================= */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            
            {/* Latin Motto & Institutional Distinction Badge (Maximum Contrast) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#001E4D]/90 border border-sky-400/40 text-white shadow-glow-blue backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300" />
              </span>
              <span className="font-serif italic font-extrabold tracking-widest text-sky-200 text-xs sm:text-sm uppercase">
                PRIMVM NON NOCERE
              </span>
              <span className="text-sky-400/60 font-mono">|</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Auditoría y Consultoría en Salud
              </span>
            </div>

            {/* Main Headline (Ultra-Legible, Punchy, High Authority) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.75rem] text-white tracking-tight leading-[1.12]">
              Innovación y Rigor en la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-100 to-teal-200 drop-shadow-sm">
                Gestión de Salud
              </span>
            </h1>

            {/* Subtitle with guaranteed WCAG AAA Contrast */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
              <strong className="text-white font-semibold">{SITE_DATA.tagline}</strong>. Acompañamos a hospitales, clínicas y aseguradoras sanitarias en{" "}
              <span className="text-sky-200 font-semibold underline decoration-sky-400/40 underline-offset-4">Auditoría Médica Concurrente</span>,{" "}
              <span className="text-sky-200 font-semibold underline decoration-sky-400/40 underline-offset-4">Transformación Digital e Interoperabilidad (HL7 / FHIR)</span>{" "}
              y programas de <span className="text-sky-200 font-semibold underline decoration-sky-400/40 underline-offset-4">Seguridad del Paciente</span> con cobertura en Bolivia y Latinoamérica.
            </p>

            {/* Harmonized Action Buttons (No raw generic green dominating) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              
              {/* Primary Action Button: Royal Blue with WhatsApp Badge */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-cobalt via-brand-blue to-brand-royal hover:from-brand-blue hover:to-sky-500 text-white font-bold text-base shadow-glow-blue hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 border border-sky-300/30"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <MessageSquare className="w-4 h-4 fill-current" />
                </div>
                <span>Conversar por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-sky-200" />
              </a>

              {/* Secondary Action Button: Institutional Frosted Glass */}
              <a
                href={SITE_DATA.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base backdrop-blur-md border border-white/25 hover:border-sky-300/50 shadow-sm transition-all duration-200"
              >
                <FileDown className="w-5 h-5 text-sky-300" />
                <span>Brochure Institucional (PDF)</span>
              </a>
            </div>

            {/* Bottom Descriptive Checkpoints (100% High Contrast) */}
            <div className="pt-6 border-t border-white/15 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                <span className="text-slate-100 font-semibold">Auditoría Clínica</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                <span className="text-slate-100 font-semibold">Servidor HL7 / FHIR</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                <span className="text-slate-100 font-semibold">Acreditación JCI & ISO</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: PREMIUM TECH-MEDICAL COCKPIT ================= */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Diffuse Outer Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-cobalt/40 via-sky-500/20 to-teal-400/20 rounded-3xl blur-2xl opacity-80 pointer-events-none" />

              {/* Glassmorphic Clinical Cockpit Card */}
              <div className="relative glass-card-dark rounded-2xl p-6 sm:p-7 space-y-5 text-white">
                
                {/* Cockpit Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-lg shadow-sm">
                      <img
                        src="/logo.jpg"
                        alt="SnowPoint Healthcare"
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-white tracking-wide">
                        Tablero Clínico Digital
                      </h2>
                      <p className="text-[10px] font-mono text-sky-300 tracking-wider">
                        SISTEMA TELEMÉTRICO v4.2
                      </p>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVO
                  </span>
                </div>

                {/* Quantitative Metric Gauges Grid */}
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Gauge 1 */}
                  <div className="bg-[#00173D]/80 rounded-xl p-4 border border-white/10 shadow-inner">
                    <div className="flex items-center justify-between text-slate-300 text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">Pertinencia Médica</span>
                      <TrendingUp className="w-4 h-4 text-sky-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                      99.4%
                    </div>
                    <p className="text-[11px] text-sky-200/80 mt-1 font-mono">
                      Conformidad de Cuentas
                    </p>
                  </div>

                  {/* Gauge 2 */}
                  <div className="bg-[#00173D]/80 rounded-xl p-4 border border-white/10 shadow-inner">
                    <div className="flex items-center justify-between text-slate-300 text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">Seguridad Paciente</span>
                      <ShieldCheck className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading text-teal-300">
                      0.02‰
                    </div>
                    <p className="text-[11px] text-teal-200/80 mt-1 font-mono">
                      Eventos Mitigados
                    </p>
                  </div>
                </div>

                {/* Primary Telemetry Module: Servidor HL7 / FHIR v4 */}
                <div className="rounded-xl bg-gradient-to-br from-brand-navy via-brand-royal to-brand-cobalt border border-sky-400/30 p-4 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-sky-300" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        Servidor HL7 / FHIR v4
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-400/20 text-sky-200 border border-sky-400/30">
                      LATENCIA: 12ms
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Integración bidireccional segura entre Sistemas de Gestión Hospitalaria (HIS), Laboratorio (LIS) y Registro Clínico Electrónico.
                  </p>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-sky-200">
                      <span>Rendimiento de Conectividad</span>
                      <span>99.98% SLA</span>
                    </div>
                    <div className="w-full bg-[#001026] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-400 via-teal-300 to-sky-200 h-full w-[96%] rounded-full shadow-glow-cyan" />
                    </div>
                  </div>
                </div>

                {/* Checkpoint rows */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                      <span className="font-medium">Trazabilidad Farmacológica y Dosis</span>
                    </div>
                    <span className="font-mono font-bold text-teal-300">100% OK</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                      <span className="font-medium">Protocolos Acreditación Hospitalaria</span>
                    </div>
                    <span className="font-mono font-bold text-sky-300">FASE 4/4</span>
                  </div>
                </div>

                {/* Cockpit Footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-white/15">
                  <span className="font-mono text-[11px] text-slate-300">
                    +240,000 episodios médicos analizados
                  </span>
                  <Link
                    href="#servicios"
                    className="text-sky-300 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Explorar</span>
                    <ArrowRight className="w-3 h-3" />
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
