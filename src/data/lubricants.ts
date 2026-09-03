/**
 * Lubricantes especiales BECHEM. Los datos técnicos vienen del brochure
 * "Lubricantes especiales para la industria alimenticia y farmacéutica".
 */

export interface Certification {
  code: string;
  title: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    code: "H1",
    title: "Food grade",
    description: "Lubricantes admitidos donde no puede excluirse un contacto ocasional, técnicamente inevitable, con alimentos.",
  },
  {
    code: "H2",
    title: "Uso general en planta",
    description: "Desarrollados para tecnología alimentaria en puntos donde no existe contacto con el alimento.",
  },
  {
    code: "3H",
    title: "Agentes separadores",
    description: "Separadores empleados en producción de alimentos para evitar la adherencia; se permite contacto directo.",
  },
  {
    code: "ISO 21469",
    title: "Norma internacional",
    description: "Requisitos de formulación, manufactura y uso de lubricantes cuando el contacto con el alimento no puede excluirse.",
  },
  {
    code: "Halal",
    title: "Norma islámica",
    description: "Productos elaborados conforme a las normas halal.",
  },
  {
    code: "Kosher",
    title: "Ley alimentaria judía",
    description: "Productos clasificados como kosher según las leyes alimentarias judías.",
  },
];

export interface Grease {
  product: string;
  base: string;
  nlgi: string;
  temp: string;
  grade: string;
  note: string;
}

/** Selección representativa de la tabla del brochure. */
export const greases: Grease[] = [
  { product: "Berulub L", base: "PFPE / PTFE", nlgi: "1 – 2", temp: "−60 a +190 °C", grade: "H1", note: "Muy buena resistencia a la oxidación y a fluidos agresivos." },
  { product: "Berulub 932 Antiseize", base: "Aceite blanco / gel", nlgi: "1", temp: "−20 a +1400 °C", grade: "H1", note: "Pasta antiagarrotante para uniones sometidas a temperatura extrema." },
  { product: "Berulub FA 37", base: "Aceite blanco / jabón de aluminio", nlgi: "1 – 2", temp: "−20 a +120 °C", grade: "H1", note: "Universal para rodamientos, cadenas y guías en línea de proceso." },
  { product: "Berulub FB 34", base: "PAO / jabón de aluminio", nlgi: "1", temp: "−40 a +160 °C", grade: "H1", note: "Amplio rango térmico para equipos de proceso y transportes." },
  { product: "Berulub FG-H 2 EP", base: "PAO / jabón de calcio", nlgi: "1 – 2", temp: "−40 a +160 °C", grade: "H1", note: "Formulación EP para cargas elevadas con lavados frecuentes." },
  { product: "Berutemp 500 T2", base: "PFPE / PTFE", nlgi: "1 – 2", temp: "−20 a +180 °C", grade: "H1", note: "Altas temperaturas, protección contra desgaste y corrosión." },
  { product: "Berutox VPT 54-1", base: "PFPE", nlgi: "1", temp: "−30 a +290 °C", grade: "H1", note: "Reduce fricción y desgaste a temperatura elevada, a toda velocidad." },
  { product: "Berulub FG K 164-2", base: "PFPE / PTFE", nlgi: "2", temp: "−30 a +250 °C", grade: "H1", note: "Larga duración en rodamientos de proceso térmico." },
];

export const lubricantApplications = [
  "Rodamientos y chumaceras",
  "Cojinetes de deslizamiento",
  "Engranajes cerrados y reductores",
  "Cadenas y transportadores",
  "Válvulas y bombas",
  "Guías y correderas",
  "Juntas, o-rings y elastómeros",
  "Hidráulica",
];

export const lubricantProperties = [
  "Compatibilidad con plásticos y elastómeros",
  "Resistencia al agua y a la corrosión",
  "Desempeño en temperaturas extremas",
  "Buena capacidad de carga",
  "Amortiguación de ruido",
  "Disponible en envase aerosol",
];
