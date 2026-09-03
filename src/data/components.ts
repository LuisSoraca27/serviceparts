/** Elevación técnica que acompaña a cada conjunto (ver ui/PartDrawing.astro). */
export type PartName = 'shoe' | 'roller' | 'idler' | 'sprocket';

export interface ProductComponent {
  drawing: PartName;
  title: string;
  spec: string;
  lead: string;
  description: string;
}

export const productComponents: ProductComponent[] = [
  {
    drawing: "shoe",
    title: "Conjunto de Zapatas",
    spec: "Acero de baja aleación templado y revenido",
    lead: "Superficies de desgaste endurecidas que garantizan durabilidad y alta resistencia al impacto.",
    description: "Pasadores de conexión endurecidos con material de alta calidad y engranaje de retención mejorado proporcionan retención de pasadores sin mantenimiento durante toda la vida del conjunto."
  },
  {
    drawing: "roller",
    title: "Conjunto de Rodillos",
    spec: "Aceite, grasa o lubricación automática",
    lead: "Lubricados con aceite, grasa o adaptados al sistema de lubricación automática de la máquina; personalizables según especificaciones exactas.",
    description: "Sellos de calidad superior; bujes de bronce al manganeso fundido y ejes rectificados/endurecidos maximizan el rendimiento; ensamblaje en condiciones controladas garantiza confiabilidad."
  },
  {
    drawing: "idler",
    title: "Conjunto Rueda Tensora",
    spec: "Rodadura mecanizada y endurecida",
    lead: "Ruedas guía de acero de baja aleación templado y revenido que prolongan la vida y aumentan la resistencia al impacto.",
    description: "Sellos de calidad superior; bujes de bronce al manganeso fundido y ejes rectificados/endurecidos maximizan el rendimiento; ensamblaje en condiciones controladas garantiza confiabilidad."
  },
  {
    drawing: "sprocket",
    title: "Ruedas Motrices",
    spec: "Perfil de diente optimizado",
    lead: "La optimización del perfil de diente maximiza la vida útil, aumenta los intervalos de reemplazo y reduce los costes operativos generales.",
    description: "Asesoramiento experto sobre la introducción de pasadores estándar o sobredimensionados en el momento óptimo puede aumentar la vida del tren de rodaje y reducir costes operativos."
  }
];
