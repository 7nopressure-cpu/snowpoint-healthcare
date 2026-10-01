"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/data/content";
import { MessageSquare, Menu, X, FileText, ArrowRight, ShieldCheck } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappHref = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
    SITE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Official MKT-3 Image */}
        <Link href="#inicio" className="flex items-center gap-3.5 group">
          <div className="relative h-12 w-auto flex items-center">
            <img
              src="/logo.jpg"
              alt="SnowPoint Healthcare - Primum Non Nocere"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
          <div className="hidden lg:flex flex-col border-l border-slate-200 pl-3.5">
            <span className="text-[11px] font-extrabold tracking-wider text-brand-navy">
              CONSULTORÍA EN GESTIÓN DE SALUD
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-royal" />
              <span className="text-[10px] font-serif tracking-widest text-brand-royal font-bold uppercase">
                PRIMVM NON NOCERE
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <Link
            href="#inicio"
            className="hover:text-brand-royal transition-colors py-1 relative group"
          >
            <span>Inicio</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-royal transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="#servicios"
            className="hover:text-brand-royal transition-colors py-1 relative group"
          >
            <span>Servicios Especializados</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-royal transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="#nosotros"
            className="hover:text-brand-royal transition-colors py-1 relative group"
          >
            <span>Por qué nosotros</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-royal transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="#brochure"
            className="hover:text-brand-royal transition-colors py-1 flex items-center gap-1.5 text-slate-700 relative group"
          >
            <FileText className="w-4 h-4 text-brand-royal" />
            <span>Brochure</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-royal transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="#contacto"
            className="hover:text-brand-royal transition-colors py-1 relative group"
          >
            <span>Contacto</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-royal transition-all duration-200 group-hover:w-full" />
          </Link>
        </nav>

        {/* Harmonized Corporate Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Blue-Harmonized WhatsApp Button (eliminates raw generic green) */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-brand-navy hover:text-brand-royal border border-slate-300 hover:border-brand-royal/40 font-semibold text-sm transition-all duration-200 shadow-2xs group"
          >
            <div className="w-6 h-6 rounded-md bg-emerald-600/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>WhatsApp Directo</span>
          </a>

          {/* Primary CTA: Premium Royal Blue Button */}
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-navy via-brand-royal to-brand-cobalt text-white font-bold text-sm shadow-md hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Agendar Asesoría</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 text-brand-royal hover:bg-sky-50 transition-colors border border-slate-200"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-current text-emerald-600" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl text-brand-navy hover:bg-slate-100 transition-colors border border-slate-200"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-6 py-6 space-y-4 shadow-xl">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
              Menú de Navegación
            </span>
            <span className="text-[11px] font-serif italic text-brand-royal font-bold">
              PRIMVM NON NOCERE
            </span>
          </div>
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <Link
              href="#inicio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-royal transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-royal transition-colors"
            >
              Servicios Especializados
            </Link>
            <Link
              href="#nosotros"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-royal transition-colors"
            >
              Por qué nosotros
            </Link>
            <Link
              href="#brochure"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-royal transition-colors flex items-center justify-between"
            >
              <span>Brochure Institucional (PDF)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-sky-100 text-brand-royal font-bold">
                PDF
              </span>
            </Link>
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-royal transition-colors"
            >
              Contacto y Asesoría
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-navy to-brand-royal text-white font-bold text-sm shadow-md"
            >
              <span>Agendar Asesoría Médica</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50"
            >
              <MessageSquare className="w-4 h-4 fill-current text-emerald-600" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
