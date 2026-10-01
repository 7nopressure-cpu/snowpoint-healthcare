export interface Service {
  id: string;
  badge: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  deliverables: string[];
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const SITE_DATA = {
  name: "SnowPoint Healthcare",
  tagline: "Asesoría y Consultoría Especializada en Servicios de Salud",
  metaDescription: "Consultoría médica y sanitaria de alto nivel: Auditoría Médica, Transformación Digital (HL7/FHIR), Acreditación Hospitalaria, Ingeniería de Datos y Seguridad del Paciente en Bolivia y Latinoamérica.",
  email: "info@SnowPointHealthcare.com",
  phone: "+591 777 00000", // Número WhatsApp configurable
  whatsappNumber: "59177700000",
  whatsappDefaultMessage: "Hola SnowPoint Healthcare, me comunico desde la web y deseo solicitar una asesoría especializada para mi institución de salud.",
  brochureUrl: "https://drive.google.com/file/d/1dCNw9YGSoJIUOpVwDTOBC0J-vsu5bJeW/view",
  brochureDownloadUrl: "https://drive.google.com/uc?id=1dCNw9YGSoJIUOpVwDTOBC0J-vsu5bJeW&export=download",
  logoUrl: "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72tQhN7gAXLy5SLNfL8hQKhdBU-CwQt7SY7XSCrjxxXaTKnEgun8ClhmHAvAG3gjg-G8BalOu4wh97bLYcttJm2PU__CelnHLyB70jnf5_oSSNM-BOuMbnWRfqcQ9H9A7ZwRz5QZsdzqWUAo6IZ_2vSmYDuRiJ2bUfpJX9JK8b5FaQiHV317ikjtDxx-pU-BeB-GcfKInODv2YWnI-zDA8nAzj3LxDZwgYYctyd80G8=w1280",
  
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: "linkedin",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61594503839181",
      icon: "facebook",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/snowpointhealthcare/",
      icon: "instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@SnowPointHealthcare",
      icon: "youtube",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@snowpointhealthcare?is_from_webapp=1&sender_device=pc",
      icon: "video",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/snowpointh",
      icon: "twitter",
    },
  ] as SocialLink[],

  metrics: [
    {
      value: "+18",
      label: "Años de Trayectoria",
      description: "Liderando equipos clínicos y gestión hospitalaria en la región.",
    },
    {
      value: "99.4%",
      label: "Conformidad en Auditorías",
      description: "Optimización estricta de pertinencia médica y cuentas clínicas.",
    },
    {
      value: "HL7 / FHIR",
      label: "Interoperabilidad Total",
      description: "Estándares internacionales integrados en HCE y software médico.",
    },
    {
      value: "100%",
      label: "Enfoque en Seguridad",
      description: "Cultura de gestión de riesgos y seguridad centrada en el paciente.",
    },
  ] as Metric[],

  services: [
    {
      id: "auditoria-medica",
      badge: "CONTROL ASISTENCIAL",
      title: "Auditoría Médica y Gestión de Calidad",
      shortDescription: "Evaluación rigurosa de pertinencia médica, control de estancias, conciliación de cuentas y protocolización basada en evidencia.",
      fullDescription: "Implementamos sistemas de auditoría médica concurrente y retrospectiva para clínicas, hospitales y aseguradoras, reduciendo glosas, eliminando sobrecostes y asegurando la máxima calidad en cada acto médico.",
      icon: "FileCheck",
      deliverables: [
        "Auditoría concurrente y retrospectiva de historias clínicas",
        "Control de pertinencia diagnóstica y terapéutica",
        "Comités de auditoría clínica y optimización de facturación hospitalaria",
        "Diseño de Guías de Práctica Clínica (GPC) y protocolos basados en evidencia"
      ]
    },
    {
      id: "transformacion-digital",
      badge: "TECNOLOGÍA SANITARIA",
      title: "Transformación Digital e Interoperabilidad (HL7 / FHIR)",
      shortDescription: "Modernización de registros médicos electrónicos (HCE/EHR), integración de sistemas de salud y arquitectura de software médico.",
      fullDescription: "Guiamos a las instituciones en su transición hacia la salud digital moderna. Evaluamos, seleccionamos e implementamos sistemas clínicos interoperables bajo normativas HL7 FHIR v4 y conectividad segura.",
      icon: "Cpu",
      deliverables: [
        "Evaluación e implementación de Sistemas de Historia Clínica Electrónica (EHR/HIS)",
        "Interoperabilidad médica conforme a estándares HL7 v2, v3 y FHIR v4",
        "Diseño de arquitecturas para plataformas de Telemedicina",
        "Asesoría en gobernanza del dato y ciberseguridad clínica"
      ]
    },
    {
      id: "analitica-datos",
      badge: "BUSINESS INTELLIGENCE",
      title: "Ingeniería de Datos y Analítica Sanitaria",
      shortDescription: "Dashboards clínicos y de gestión, análisis epidemiológico, predicción de ocupación hospitalaria y KPI estratégicos.",
      fullDescription: "Transformamos los datos clínicos y operativos en decisiones estratégicas. Construimos tableros de control en tiempo real para direcciones médicas, comités ejecutivos y análisis epidemiológico poblacional.",
      icon: "BarChart3",
      deliverables: [
        "Cuadros de mando ejecutivos e indicadores de rendimiento clínico-financiero",
        "Análisis epidemiológico institucional y vigilancia sanitaria",
        "Modelado predictivo de estancias medias, reingresos y uso de camas",
        "Limpieza, estandarización y modelado de datos de salud"
      ]
    },
    {
      id: "acreditacion-seguridad",
      badge: "SEGURIDAD DEL PACIENTE",
      title: "Acreditación Sanitaria y Seguridad del Paciente",
      shortDescription: "Implementación de estándares internacionales (JCI, ISO), gestión de eventos adversos, farmacovigilancia y tecnovigilancia.",
      fullDescription: "Acompañamos a su institución en todo el ciclo de acreditación de calidad sanitaria, transformando la cultura de seguridad del paciente y garantizando el cumplimiento de normativas ministeriales e internacionales.",
      icon: "ShieldCheck",
      deliverables: [
        "Preparación para acreditaciones nacionales e internacionales de calidad hospitalaria",
        "Sistemas de notificación y gestión proactiva de eventos adversos",
        "Programas institucionales de tecnovigilancia y farmacovigilancia",
        "Evaluación y mitigación de riesgos en unidades críticas y quirúrgicas"
      ]
    },
    {
      id: "asesoria-estrategica",
      badge: "GOBERNANZA CLÍNICA",
      title: "Asesoría Estratégica y Educación Médica Continua",
      shortDescription: "Consultoría de alta dirección sanitaria, optimización de recursos y programas de formación continua para equipos de salud.",
      fullDescription: "Facilitamos la toma de decisiones estratégicas en instituciones sanitarias complejas. Desarrollamos planes de desarrollo estratégico, reestructuración de servicios médicos y capacitación directiva continua.",
      icon: "GraduationCap",
      deliverables: [
        "Planificación estratégica y rediseño de servicios médico-quirúrgicos",
        "Consultoría en gobernanza clínica para directorios hospitalarios",
        "Capacitación continua en gestión de calidad, auditoría y normativas",
        "Evaluación de costo-efectividad de tecnologías sanitarias"
      ]
    }
  ] as Service[],

  whyChooseUs: [
    {
      title: "Expertise Clínico y Directivo",
      description: "Nuestro equipo combina experiencia médica asistencial con postgrados en gestión hospitalaria, auditoría médica y tecnología de la información.",
      icon: "Stethoscope"
    },
    {
      title: "Metodología Rigurosa Basada en Evidencia",
      description: "No aplicamos fórmulas genéricas. Cada diagnóstico institucional se fundamenta en datos cuantitativos y estándares sanitarios validados.",
      icon: "CheckCircle2"
    },
    {
      title: "Enfoque Integral: Médico, Legal y Tecnológico",
      description: "Articulamos la práctica médica con la conformidad regulatoria legal y la modernización digital hospitalaria.",
      icon: "Layers"
    },
    {
      title: "Acompañamiento Cercano y Ágil",
      description: "Asesoría personalizada con comunicación fluida y soporte directo a directores de clínica, administradores y jefaturas de servicio.",
      icon: "Users"
    }
  ],

  faqs: [
    {
      question: "¿A qué tipo de instituciones de salud están dirigidos sus servicios?",
      answer: "Trabajamos con hospitales públicos y privados, clínicas, centros de especialidades, compañías aseguradoras de salud, instituciones de seguridad social y empresas HealthTech que requieren respaldo médico-normativo."
    },
    {
      question: "¿Cómo se inicia un proceso de consultoría con SnowPoint Healthcare?",
      answer: "Iniciamos con una reunión de diagnóstico inicial (presencial o virtual). Tras evaluar sus requerimientos específicos, entregamos una propuesta personalizada con cronograma, entregables y metodología de trabajo."
    },
    {
      question: "¿Brindan asesoría para la implementación de Historia Clínica Electrónica?",
      answer: "Sí, guiamos en la formulación de términos de referencia técnicos, evaluación de proveedores de software, interoperabilidad bajo estándares HL7/FHIR y adopción por parte del personal médico."
    },
    {
      question: "¿Cómo puedo contactar a un consultor de inmediato?",
      answer: "Puede contactarnos al instante a través de nuestro botón directo de WhatsApp, enviando un correo a info@SnowPointHealthcare.com o completando el formulario de contacto en esta página."
    }
  ]
};
