"use client";

import { useState } from "react";
import { SITE_DATA } from "@/data/content";
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  X,
  FileCheck,
  ArrowRight,
} from "lucide-react";

export default function BrochureBanner() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="brochure" className="py-24 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with institutional royal background treatment */}
        <div className="rounded-3xl bg-gradient-to-br from-brand-darkest via-brand-navy to-brand-royal text-white p-8 sm:p-14 relative overflow-hidden shadow-clinical-xl border border-white/10">
          {/* Subtle watermark layer */}
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url('/hero-bg.jpg')` }}
          />
          <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-xs border border-white/15">
                <FileCheck className="w-4 h-4 text-sky-300" />
                <span>Documento Institucional Oficial • Formato PDF</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Conozca nuestro portafolio completo de consultoría médica
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
                Descargue el brochure corporativo con el marco metodológico detallado, programas de auditoría clínica, interoperabilidad HL7/FHIR y casos de éxito en instituciones de salud.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Download PDF button: High contrast white/royal */}
                <a
                  href={SITE_DATA.brochureDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white text-brand-navy hover:bg-sky-50 font-bold text-sm sm:text-base shadow-md transition-all hover:scale-[1.02]"
                >
                  <Download className="w-5 h-5 text-brand-royal" />
                  <span>Descargar Brochure PDF</span>
                </a>

                {/* View inside page / Modal button */}
                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/25 transition-colors"
                >
                  <Eye className="w-5 h-5 text-sky-300" />
                  <span>Previsualizar en Pantalla</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-3 text-xs text-slate-300 font-medium">
                <span>✓ Acceso libre y directo</span>
                <span>✓ Edición Institucional 2025</span>
                <span>✓ Primum Non Nocere</span>
              </div>

            </div>

            {/* Right Card: Interactive Document Preview Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setShowPreviewModal(true)}
                className="w-full max-w-sm rounded-2xl glass-card-dark p-6 cursor-pointer group hover:border-sky-300/40 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* PDF Header Mockup */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/15 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-300" />
                    <span className="font-semibold text-white">Brochure.pdf</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-400/20 text-sky-200 border border-sky-400/30">
                    PDF DRIVE
                  </span>
                </div>

                {/* Document Visual Body */}
                <div className="py-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white flex items-center justify-center p-3 shadow-lg group-hover:scale-110 transition-transform">
                    <img
                      src="/logo.jpg"
                      alt="Logo SnowPoint Healthcare"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg font-heading">
                      SnowPoint Healthcare
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 font-serif italic">
                      PRIMVM NON NOCERE
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 group-hover:text-white transition-colors">
                    <span>Haga clic para abrir visor</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-3.5 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Documento institucional oficial</span>
                  <span className="text-sky-200 font-bold">Ver en línea</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Embedded Google Drive Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-300">
            {/* Modal Header */}
            <div className="p-4 bg-brand-navy text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-sky-300" />
                <span className="font-bold text-sm sm:text-base">
                  Visor Institucional: Brochure SnowPoint Healthcare
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={SITE_DATA.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Abrir en Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors"
                  aria-label="Cerrar visor"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body: Google Drive Preview Iframe */}
            <div className="flex-1 bg-slate-100">
              <iframe
                src="https://drive.google.com/file/d/1dCNw9YGSoJIUOpVwDTOBC0J-vsu5bJeW/preview"
                className="w-full h-full border-0"
                title="Brochure SnowPoint Healthcare"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
