export interface TrainingModule {
  title: string;
  description: string;
  topics: string[];
}

export const trainingModules: TrainingModule[] = [
  {
    title: "Fundamentos de la Lubricación",
    description: "Introducción a conceptos básicos adaptados al tipo de maquinaria y sector.",
    topics: ["Tipos de lubricantes", "Errores comunes", "Criterios de selección"]
  },
  {
    title: "Optimización y Seguimiento",
    description: "Estrategias de mejora para alargar la vida útil de los activos.",
    topics: ["Análisis de lubricantes", "Rutinas de inspección", "Indicadores de desgaste"]
  },
  {
    title: "Técnicas y Aplicaciones",
    description: "Prácticas personalizadas según los equipos del cliente.",
    topics: ["Herramientas de aplicación", "Métodos en campo", "Casos por equipo"]
  }
];
