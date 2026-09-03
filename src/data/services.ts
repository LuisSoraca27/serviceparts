export interface HeroPillar {
  icon: 'globe' | 'dollar' | 'shield' | 'chart';
  title: string;
  titleEn: string;
  description: string;
}

export const heroPillars: HeroPillar[] = [
  {
    icon: 'globe',
    title: 'Alcance Global',
    titleEn: 'Global Reach',
    description:
      'Suministro de conjuntos de tren de rodaje a operaciones mineras en África, Asia, Australia, Canadá, Norteamérica, Sudamérica y Europa.',
  },
  {
    icon: 'dollar',
    title: 'Costo Competitivo',
    titleEn: 'Cost Competitive',
    description:
      'Intercambiabilidad de componentes y términos de garantía superiores que brindan una alternativa de costo altamente competitiva para su tren de rodaje.',
  },
  {
    icon: 'shield',
    title: 'Diseño Australiano',
    titleEn: 'Australian Design',
    description:
      'Todos los productos están diseñados bajo estándares australianos y fabricados en planta europea con certificación ISO 9001.',
  },
  {
    icon: 'chart',
    title: 'Mayor Vida Útil',
    titleEn: 'Extended Part Life',
    description:
      'Cada compra incluye servicios de monitoreo de condiciones. Los datos recopilados permiten asesorar técnicamente y maximizar la vida útil de sus componentes.',
  },
];

export interface ValueProposition {
  title: string;
  description: string;
}

/** La tríada que cierra todas sus piezas impresas. */
export const valuePropositions: ValueProposition[] = [
  {
    title: "Confiabilidad que protege",
    description: "Componentes y lubricantes que resisten las condiciones más exigentes de la minería y la industria.",
  },
  {
    title: "Eficiencia que impulsa",
    description: "Menos paradas y menor coste de funcionamiento gracias a la ingeniería de precisión.",
  },
  {
    title: "Resultados que perduran",
    description: "Acompañamiento continuo: la mejora se sostiene cuando el equipo del cliente la hace propia.",
  },
];

/** Servicio Planeado — Ingeniería de Lubricación Aplicada. */
export interface ReliabilityStep {
  title: string;
  description: string;
}

export const reliabilitySteps: ReliabilityStep[] = [
  {
    title: "Diagnóstico de planta",
    description: "Levantamiento de puntos de lubricación, prácticas actuales y estado de los activos críticos.",
  },
  {
    title: "Plan de lubricación",
    description: "Selección de producto por punto, frecuencias, cantidades y rutas de aplicación documentadas.",
  },
  {
    title: "Acompañamiento continuo",
    description: "Apoyo técnico en sitio, supervisión de la ejecución y ajuste del plan sobre resultados reales.",
  },
  {
    title: "Monitoreo de condiciones",
    description: "Análisis de lubricante e inspecciones de desgaste. Los datos sostienen la asesoría y prolongan la vida útil.",
  },
];

export interface FieldServiceItem {
  title: string;
  description: string;
}

export const fieldServices: FieldServiceItem[] = [
  {
    title: "Kit de inspección de desgaste",
    description: "Solicite su propio kit y déjese guiar por nuestros técnicos para medir el desgaste de su tren de rodaje.",
  },
  {
    title: "Supervisión del acondicionamiento",
    description: "Reserve una visita de supervisión sin coste con uno de nuestros técnicos cualificados.",
  },
  {
    title: "Análisis de lubricantes",
    description: "Muestreo periódico e interpretación de resultados para anticipar fallas antes de que detengan el equipo.",
  },
];

export const drivelineFeatures = [
  "Amplio portafolio de componentes y partes",
  "Calidad superior para máximo rendimiento",
  "Marcas líderes que garantizan confiabilidad",
];

export const drivelineBrands = [
  {
    name: "DANA Spicer",
    description: "Repuestos Spicer para transmisión, ejes y diferenciales. Somos distribuidores autorizados.",
  },
  {
    name: "ZF",
    description: "Repuestos de transmisión y reductores de alta calidad para maquinaria pesada.",
  },
];

export const serviceQuote =
  "Cualquiera puede vender lubricantes, pero solo quienes ofrecen servicio crean valor real y duradero.";
