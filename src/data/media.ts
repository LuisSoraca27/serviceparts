import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Ranuras de imagen. El sitio funciona sin ellas: si el archivo no está en
 * public/img, la sección se compone sin foto en lugar de mostrar un hueco roto.
 * Basta con dejar el archivo con el nombre exacto para que aparezca.
 */
const publicDir = fileURLToPath(new URL('../../public', import.meta.url));

export function hasImage(name: string): boolean {
  return existsSync(`${publicDir}/img/${name}`);
}

export interface ImageSlot {
  file: string;
  alt: string;
  width: number;
  height: number;
}

export const media = {
  driveline: {
    file: 'transmision.webp',
    alt: 'Componentes de transmisión y ejes DANA Spicer y ZF listos para despacho',
    width: 1200,
    height: 900,
  },
  lubricants: {
    file: 'lubricantes-planta.webp',
    alt: 'Línea de envasado en una planta de alimentos donde se aplican lubricantes food grade',
    width: 1200,
    height: 900,
  },
  reliability: {
    file: 'servicio-campo.webp',
    alt: 'Técnico de Powertrain aplicando lubricante durante una visita de servicio en planta',
    width: 1200,
    height: 900,
  },
  training: [
    { file: 'formacion-1.png', alt: 'Sesión de formación en lubricación con personal de mantenimiento', width: 1008, height: 553 },
    { file: 'formacion-2.png', alt: 'Taller práctico de lubricación en sala de capacitación', width: 1008, height: 553 },
    { file: 'formacion-3.png', alt: 'Instructor de Powertrain durante una jornada de formación técnica', width: 1008, height: 553 },
  ],
} satisfies Record<string, ImageSlot | ImageSlot[]>;
