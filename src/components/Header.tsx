"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/data/content";
import { MessageSquare, Menu, X, Shield, FileText } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappHref = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
    SITE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-navy to-brand-cyan flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
            {/* Medical Shield / Cross icon */}
            <div className="relative flex items-center justify-center">
              <Shield className="w-6 h-6 text-white stroke-[2.2]" />
              <span className="absolute text-[11px] font-extrabold text-brand-cyanLight leading-none">
                +
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl text-brand-navy tracking-tight leading-tight group-hover:text-brand-cyan transition-colors">
              SnowPoint
              <span className="text-brand-cyan font-bold ml-1 text-lg">Healthcare</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Consultoría Especializada
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link
            href="#inicio"
            className="hover:text-brand-cyan transition-colors py-1"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            className="hover:text-brand-cyan transition-colors py-1"
          >
            Servicios
          </Link>
          <Link
            href="#nosotros"
            className="hover:text-brand-cyan transition-colors py-1"
          >
            Por qué nosotros
          </Link>
          <Link
            href="#brochure"
            className="hover:text-brand-cyan transition-colors py-1 flex items-center gap-1.5 text-slate-700"
          >
            <FileText className="w-4 h-4 text-brand-cyan" />
            Brochure
          </Link>
          <Link
            href="#contacto"
            className="hover:text-brand-cyan transition-colors py-1"
          >
            Contacto
          </Link>
        </nav>

        {/* Header CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp Directo</span>
          </a>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-brand-navy text-brand-navy hover:bg-slate-50 font-medium text-sm transition-colors"
          >
            Agendar Asesoría
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700">
            <Link
              href="#inicio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Servicios Especializados
            </Link>
            <Link
              href="#nosotros"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Por qué nosotros
            </Link>
            <Link
              href="#brochure"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Brochure Institucional (PDF)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">
                PDF
              </span>
            </Link>
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Contacto y Asesoría
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-600 text-white font-medium text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chatear por WhatsApp</span>
            </a>
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-lg border border-slate-300 text-slate-800 font-medium text-sm"
            >
              Enviar Mensaje por Correo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
