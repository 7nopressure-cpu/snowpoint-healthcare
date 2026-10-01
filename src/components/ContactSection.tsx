"use client";

import { useState } from "react";
import { SITE_DATA } from "@/data/content";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Copy,
  Check,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    service: "Auditoría Médica y Gestión de Calidad",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappHref = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
    `Hola SnowPoint Healthcare, mi nombre es ${formData.name || "..."} y me comunico para consultar sobre ${formData.service}.`
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Consulta Web: ${formData.service} - ${formData.institution || formData.name}`
    );
    const body = encodeURIComponent(
      `Estimado equipo de SnowPoint Healthcare,\n\n` +
      `Nombre: ${formData.name}\n` +
      `Correo: ${formData.email}\n` +
      `Teléfono/WhatsApp: ${formData.phone}\n` +
      `Institución: ${formData.institution}\n` +
      `Servicio de Interés: ${formData.service}\n\n` +
      `Mensaje / Requerimiento:\n${formData.message}\n`
    );

    window.location.href = `mailto:${SITE_DATA.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-brand-royal text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-royal" />
            Canales de Contacto Directo
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Iniciemos una Asesoría Estratégica
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Comuníquese directamente con nuestro equipo de consultores médicos para coordinar una reunión de diagnóstico institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Methods & Trust */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-100">
                  Respuesta Inmediata
                </span>
                <span className="flex items-center gap-1.5 text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-medium">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  Disponible
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">
                  Atención Directa por WhatsApp
                </h3>
                <p className="text-sm text-emerald-50 mt-1">
                  Chatee al instante con un consultor para consultas rápidas, agendamiento de reuniones y presupuestos.
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5 fill-current text-emerald-600" />
                <span>Abrir Chat de WhatsApp</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-brand-royal flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Correo Corporativo
                  </div>
                  <a
                    href={`mailto:${SITE_DATA.email}`}
                    className="text-base font-bold text-brand-navy hover:text-brand-royal transition-colors"
                  >
                    {SITE_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`mailto:${SITE_DATA.email}`}
                  className="flex-1 text-center py-2 px-3 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white hover:border-brand-royal hover:text-brand-royal transition-colors"
                >
                  Escribir correo
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-2 px-3 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white flex items-center gap-1.5 transition-colors"
                  title="Copiar email al portapapeles"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Confidentiality & Ethics Card */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-slate-600 text-xs space-y-3">
              <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                <Shield className="w-4 h-4 text-brand-royal" />
                <span>Ética Médica: Primum Non Nocere</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Toda la información institucional y clínica compartida con SnowPoint Healthcare está protegida bajo rigurosos acuerdos de confidencialidad (NDA) y estándares de secreto profesional médico.
              </p>
              <div className="flex items-center gap-1.5 text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-brand-royal" />
                <span>Tiempo promedio de respuesta: menos de 24 horas hábiles.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-clinical">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-brand-navy">
                  Formulario de Contacto Directo
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Complete los datos a continuación para enviar su requerimiento a{" "}
                  <strong className="text-brand-navy">{SITE_DATA.email}</strong>.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 font-heading">
                    ¡Solicitud Preparada con Éxito!
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Se ha iniciado el envío de su consulta hacia nuestro correo oficial. Si su cliente de correo no se abrió automáticamente, puede escribirnos directamente a{" "}
                    <strong>{SITE_DATA.email}</strong> o por WhatsApp.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Continuar por WhatsApp
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg border border-emerald-300 text-emerald-900 text-sm font-semibold hover:bg-emerald-100/50"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nombre y Apellido *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Juan Pérez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-sky-100 text-sm outline-hidden transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="direccion@clinica.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-sky-100 text-sm outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+591 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-sky-100 text-sm outline-hidden transition-all"
                      />
                    </div>

                    {/* Institution */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Institución / Organización
                      </label>
                      <input
                        type="text"
                        placeholder="Hospital / Clínica / Aseguradora"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-sky-100 text-sm outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Servicio de Interés Principal
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-sky-100 text-sm outline-hidden bg-white transition-all text-slate-700"
                    >
                      {SITE_DATA.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Auditoría Médica Específica">Auditoría Médica Específica</option>
                      <option value="Consultoría Integral Hospitalaria">Consultoría Integral Hospitalaria</option>
                      <option value="Otro Requerimiento">Otro Requerimiento Personalizado</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Detalle de su Requerimiento o Consulta *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describa brevemente las necesidades de su institución, objetivos de mejora o dudas técnicas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-sky-100 text-sm outline-hidden transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-brand-navy hover:bg-brand-royal text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Enviando..." : "Enviar Consulta Directa"}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    🔒 Sus datos se envían de forma directa y segura. No se almacenan en bases de datos intermedias.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
