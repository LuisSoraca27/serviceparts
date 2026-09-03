/**
 * Las cuatro líneas de negocio de la empresa, tal como aparecen en sus
 * brochures. El héroe las usa como accesos y cada una tiene su sección.
 */
export interface BusinessLine {
  id: string;
  name: string;
  summary: string;
  supplier: string;
  href: string;
}

export const businessLines: BusinessLine[] = [
  {
    id: "undercarriage",
    name: "Tren de rodaje",
    summary: "Zapatas, rodillos, rueda tensora y ruedas motrices para excavadoras hidráulicas y eléctricas de gran minería.",
    supplier: "Progress Mining",
    href: "#undercarriage",
  },
  {
    id: "driveline",
    name: "Componentes y transmisión",
    summary: "Repuestos de transmisión, ejes y reductores para maquinaria pesada y equipo industrial.",
    supplier: "DANA Spicer · ZF",
    href: "#driveline",
  },
  {
    id: "lubricantes",
    name: "Lubricantes especiales",
    summary: "Grasas y aceites de alto desempeño, incluida la línea food grade certificada para alimentos y farmacéutica.",
    supplier: "BECHEM",
    href: "#lubricantes",
  },
  {
    id: "ingenieria",
    name: "Ingeniería de lubricación",
    summary: "Servicio planeado ILA: diagnóstico, acompañamiento continuo, monitoreo de condiciones y formación del personal.",
    supplier: "Servicio propio",
    href: "#ingenieria",
  },
];

/** Marcas representadas. Se muestran juntas porque son la prueba del negocio. */
export const supplierBrands = [
  { name: "Progress Mining", note: "Tren de rodaje minero" },
  { name: "DANA Spicer", note: "Distribuidor autorizado" },
  { name: "ZF", note: "Transmisión y ejes" },
  { name: "BECHEM", note: "Lubricantes especiales" },
];
