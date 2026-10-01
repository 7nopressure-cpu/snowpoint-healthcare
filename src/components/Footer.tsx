import Link from "next/link";
import { SITE_DATA } from "@/data/content";
import {
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#inicio" className="inline-block group">
              <div className="bg-white p-2.5 rounded-xl shadow-md inline-block">
                <img
                  src="/logo.jpg"
                  alt="SnowPoint Healthcare - Primum Non Nocere"
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <div className="text-xs font-serif italic text-teal-300 tracking-wider">
              PRIMVM NON NOCERE — Primero, no hacer daño
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SITE_DATA.tagline}. Acompañamos a organizaciones sanitarias, clínicas, hospitales y aseguradoras en la mejora de sus estándares clínicos, auditoría médica y modernización tecnológica.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>📍 Bolivia & Cobertura Regional en Latinoamérica</div>
              <div className="flex items-center gap-1.5 text-sky-300">
                <Mail className="w-3.5 h-3.5" />
                <a href={`mailto:${SITE_DATA.email}`} className="hover:underline font-medium">
                  {SITE_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Specialized Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Servicios Principales
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SITE_DATA.services.map((s) => (
                <li key={s.id}>
                  <Link href="#servicios" className="hover:text-sky-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#inicio" className="hover:text-sky-300 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-sky-300 transition-colors">
                  Cartera de Especialidades
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-sky-300 transition-colors">
                  Por qué elegirnos
                </Link>
              </li>
              <li>
                <a
                  href={SITE_DATA.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1 text-teal-400 font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Brochure Institucional (PDF)</span>
                </a>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-sky-300 transition-colors">
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Redes Sociales
            </h4>
            <p className="text-xs text-slate-400">
              Canales oficiales de SnowPoint Healthcare:
            </p>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              {SITE_DATA.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{soc.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} SnowPoint Healthcare. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Interoperabilidad HL7 & FHIR</span>
            <span>•</span>
            <span>Estándares JCI e ISO</span>
            <span>•</span>
            <span className="font-serif italic text-teal-300">Primum Non Nocere</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
