/** Identificador del conjunto dentro del tren de rodaje. */
export type PartName = 'shoe' | 'roller' | 'idler' | 'sprocket';

export interface ProductComponent {
  name: PartName;
  /** Render del conjunto real, recortado sobre transparencia. */
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  spec: string;
  lead: string;
  description: string;
}

export const productComponents: ProductComponent[] = [
  {
    name: "shoe",
    image: "/parts-conjunto-zapatas.webp",
    imageAlt: "Conjunto de zapatas de tren de rodaje con pasadores y bujes, vista en tres cuartos",
    imageWidth: 760,
    imageHeight: 506,
    title: "Conjunto de Zapatas",
    spec: "Acero de baja aleación templado y revenido",
    lead: "Superficies de desgaste endurecidas que garantizan durabilidad y alta resistencia al impacto.",
    description: "Pasadores de conexión endurecidos con material de alta calidad y engranaje de retención mejorado proporcionan retención de pasadores sin mantenimiento durante toda la vida del conjunto."
  },
  {
    name: "roller",
    image: "/parts-conjunto-rodillos.webp",
    imageAlt: "Rodillo de tren de rodaje con soportes de montaje y sellos, vista en tres cuartos",
    imageWidth: 760,
    imageHeight: 434,
    title: "Conjunto de Rodillos",
    spec: "Aceite, grasa o lubricación automática",
    lead: "Lubricados con aceite, grasa o adaptados al sistema de lubricación automática de la máquina; personalizables según especificaciones exactas.",
    description: "Sellos de calidad superior; bujes de bronce al manganeso fundido y ejes rectificados/endurecidos maximizan el rendimiento; ensamblaje en condiciones controladas garantiza confiabilidad."
  },
  {
    name: "idler",
    image: "/parts-rueda-tensora.webp",
    imageAlt: "Rueda tensora con rodadura mecanizada y soporte de eje, vista en tres cuartos",
    imageWidth: 760,
    imageHeight: 715,
    title: "Conjunto Rueda Tensora",
    spec: "Rodadura mecanizada y endurecida",
    lead: "Ruedas guía de acero de baja aleación templado y revenido que prolongan la vida y aumentan la resistencia al impacto.",
    description: "Sellos de calidad superior; bujes de bronce al manganeso fundido y ejes rectificados/endurecidos maximizan el rendimiento; ensamblaje en condiciones controladas garantiza confiabilidad."
  },
  {
    name: "sprocket",
    image: "/parts-ruedas-motrices.webp",
    imageAlt: "Rueda motriz con perfil de diente optimizado y pista de rodamientos, vista en tres cuartos",
    imageWidth: 760,
    imageHeight: 728,
    title: "Ruedas Motrices",
    spec: "Perfil de diente optimizado",
    lead: "La optimización del perfil de diente maximiza la vida útil, aumenta los intervalos de reemplazo y reduce los costes operativos generales.",
    description: "Asesoramiento experto sobre la introducción de pasadores estándar o sobredimensionados en el momento óptimo puede aumentar la vida del tren de rodaje y reducir costes operativos."
  }
];
