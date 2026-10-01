"use client";

import { useState } from "react";
import { SITE_DATA } from "@/data/content";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-royal text-xs font-bold uppercase tracking-wider border border-brand-royal/15">
            <HelpCircle className="w-3.5 h-3.5 text-brand-royal" />
            Preguntas Frecuentes
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
            Consultas Frecuentes sobre Nuestros Servicios
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
            Respuestas a las dudas más comunes sobre modalidades de consultoría, confidencialidad y plazos de ejecución.
          </p>
        </div>

        <div className="space-y-3.5">
          {SITE_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all shadow-xs ${
                  isOpen
                    ? "border-brand-royal/40 ring-1 ring-brand-royal/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-navy hover:text-brand-royal transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isOpen ? "bg-sky-50 text-brand-royal" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
