/**
 * Pantalla de cotización. Las opciones salen del catálogo real: cada
 * servicio corresponde a una sección del sitio y cada marca a una
 * plataforma de platforms.ts. "Otro / Otra" abre un campo de texto para
 * que nadie se quede sin poder pedir lo que necesita.
 */

/** Valor que dispara el campo libre. Compartido por el select y el script. */
export const OTHER = 'otro';

export interface Choice {
  value: string;
  label: string;
}

export const quoteServices: Choice[] = [
  { value: 'tren-de-rodaje', label: 'Tren de rodaje' },
  { value: 'transmision', label: 'Componentes y partes de transmisión' },
  { value: 'lubricantes', label: 'Lubricantes especiales' },
  { value: 'ingenieria', label: 'Ingeniería de lubricación (ILA)' },
  { value: 'formacion', label: 'Formación técnica' },
  { value: OTHER, label: 'Otro servicio' },
];

export const machineBrands: Choice[] = [
  { value: 'caterpillar', label: 'Caterpillar®' },
  { value: 'komatsu', label: 'Komatsu®' },
  { value: 'hitachi', label: 'Hitachi®' },
  { value: 'liebherr', label: 'Liebherr®' },
  { value: 'ph', label: 'P&H®' },
  { value: OTHER, label: 'Otra marca' },
];

/**
 * Endpoint del servicio de correo. Mientras esté vacío el formulario
 * valida igual y entrega la solicitud por correo con todos los campos
 * ya redactados, para que ninguna cotización se pierda. Al contratar el
 * servicio basta con pegar aquí la URL: el envío pasa a ser un POST.
 */
export const quoteEndpoint = '';

/** Lo que el visitante puede esperar después de enviar. */
export const quotePromise = [
  'Respuesta de un asesor técnico dentro de un día hábil.',
  'Cotización con referencia, disponibilidad y tiempo de entrega.',
  'Si no tenemos la parte en catálogo, se lo decimos de una vez.',
];
