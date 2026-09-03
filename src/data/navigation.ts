export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { id: "undercarriage", label: "Tren de rodaje", href: "#undercarriage" },
  { id: "driveline", label: "Transmisión", href: "#driveline" },
  { id: "lubricantes", label: "Lubricantes", href: "#lubricantes" },
  { id: "ingenieria", label: "Ingeniería", href: "#ingenieria" },
  { id: "formacion", label: "Formación", href: "#formacion" },
];
