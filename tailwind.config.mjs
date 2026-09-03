import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/**
 * Paleta tomada de los brochures de la empresa: azul marino profundo como
 * base, azul eléctrico para la estructura y dorado como único acento cálido.
 */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Superficies, del fondo de página al panel más claro
        ink: '#010c16',
        navy: '#01101c',
        'navy-700': '#06203a',
        'navy-600': '#0a2c4d',
        'navy-500': '#10395f',
        hairline: '#0d2a44',

        // Azul estructural y acento frío
        'blue-deep': '#003c84',
        blue: '#0f7ad4',
        'blue-bright': '#33a1f5',

        // Acento cálido
        gold: '#f5ae00',
        'gold-bright': '#ffc422',
        'gold-deep': '#b07d00',
        'gold-ink': '#17120a',

        // Texto
        bone: '#eef2f6',
        smoke: '#b9c6d3',
        grit: '#7f92a4',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
        // Curvas amplias: reservadas a la imagen, no a los paneles tecnicos
        xl: '14px',
        '2xl': '22px',
        '3xl': '28px',
        full: '9999px',
      },
      spacing: {
        'section-gap': '104px',
        'section-gap-lg': '144px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
        'container-max': '1440px',
        unit: '8px',
        gutter: '32px',
      },
      fontFamily: {
        display: ['"Manrope"', 'system-ui', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        'container-max': '1440px',
        measure: '66ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [forms, containerQueries],
};
