import Link from "next/link";
import { SITE_DATA } from "@/data/content";
import {
  Shield,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-midnight text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-teal flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white">
                  SnowPoint <span className="text-brand-cyan">Healthcare</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Consultoría Especializada en Salud
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SITE_DATA.tagline}. Acompañamos a organizaciones sanitarias, clínicas, hospitales y aseguradoras en la mejora de sus estándares clínicos, auditoría médica y modernización tecnológica.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>📍 Bolivia & Cobertura Regional en Latinoamérica</div>
              <div className="flex items-center gap-1.5 text-sky-300">
                <Mail className="w-3.5 h-3.5" />
                <a href={`mailto:${SITE_DATA.email}`} className="hover:underline">
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
                  <Link href="#servicios" className="hover:text-white transition-colors">
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
                <Link href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Cartera de Especialidades
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-white transition-colors">
                  Por qué elegirnos
                </Link>
              </li>
              <li>
                <a
                  href={SITE_DATA.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-teal-300"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Brochure Institucional (PDF)</span>
                </a>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition-colors">
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
              Síganos en nuestros canales oficiales:
            </p>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              {SITE_DATA.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                >
                  <span>{soc.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} SnowPoint Healthcare. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Interoperabilidad HL7 & FHIR</span>
            <span>•</span>
            <span>Estándares JCI e ISO</span>
            <span>•</span>
            <span>Despliegue Estático en Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
