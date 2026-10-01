"use client";

import { useState } from "react";
import { SITE_DATA } from "@/data/content";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
    SITE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Speech Bubble Styled with High Contrast */}
      {showTooltip && (
        <div className="bg-white border border-slate-200 text-slate-800 text-xs py-2.5 px-4 rounded-2xl shadow-xl flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex flex-col">
            <span className="font-bold text-brand-navy">¿Requiere asesoría sanitaria?</span>
            <span className="text-[11px] text-slate-500">Atención médica directa por WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button: Harmonized Corporate Royal/Navy with emerald indicator */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-navy via-brand-royal to-brand-cobalt text-white flex items-center justify-center shadow-xl hover:shadow-glow-blue transition-all duration-300 hover:scale-110 active:scale-95 group relative border-2 border-white/60"
        aria-label="Contactar por WhatsApp"
      >
        {/* Subtle emerald live status pip */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
        
        {/* WhatsApp Icon */}
        <MessageSquare className="w-6 h-6 fill-current text-white group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
}
