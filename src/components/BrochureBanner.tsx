"use client";

import { useState } from "react";
import { SITE_DATA } from "@/data/content";
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  X,
  PlayCircle,
  FileCheck,
} from "lucide-react";

export default function BrochureBanner() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="brochure" className="py-20 bg-slate-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-brand-navy via-slate-900 to-brand-midnight text-white p-8 sm:p-14 relative overflow-hidden shadow-clinical-xl">
          {/* Decorative ambient gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-xs border border-white/10">
                <FileCheck className="w-4 h-4 text-teal-300" />
                <span>Documento Institucional Oficial • Formato PDF</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Conozca nuestro portafolio completo de consultoría médica
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Descargue el brochure corporativo con el marco metodológico detallado, programas de auditoría clínica, interoperabilidad HL7/FHIR y casos de éxito en instituciones de salud.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Download PDF button */}
                <a
                  href={SITE_DATA.brochureDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-cyan hover:bg-sky-500 text-white font-semibold text-sm sm:text-base shadow-md transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Brochure PDF</span>
                </a>

                {/* View inside page / Modal button */}
                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-xs border border-white/20 transition-colors"
                >
                  <Eye className="w-5 h-5 text-teal-300" />
                  <span>Previsualizar en Pantalla</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-slate-400">
                <span>✓ Acceso libre y sin registro</span>
                <span>✓ Actualizado 2025</span>
                <span>✓ Compatible con móviles y tablets</span>
              </div>

            </div>

            {/* Right Card: Interactive Document Preview Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setShowPreviewModal(true)}
                className="w-full max-w-sm rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer group hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* PDF Header Mockup */}
                <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-300" />
                    <span className="font-semibold text-white">Brochure.pdf</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-sky-400/20 text-sky-200">
                    PDF Drive
                  </span>
                </div>

                {/* Document Visual Body */}
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-sky-400 to-teal-400 flex items-center justify-center text-brand-navy shadow-lg group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg font-heading">
                      SnowPoint Healthcare
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Asesoría y Consultoría Especializada en Salud
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 group-hover:text-teal-200">
                    <span>Haga clic para abrir visor</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Documento institucional oficial</span>
                  <span className="text-white font-medium">Ver en línea</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Embedded Google Drive Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 bg-brand-navy text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-300" />
                <span className="font-semibold text-sm sm:text-base">
                  Visor Institucional: Brochure SnowPoint Healthcare
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={SITE_DATA.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors flex items-center gap-1"
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
