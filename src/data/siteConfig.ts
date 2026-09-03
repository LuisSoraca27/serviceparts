export interface SiteConfig {
  title: string;
  description: string;
  brandName: string;
  brandSubtitle: string;
  tagline: string;
  credentials: {
    brands: string;
    origin: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    website: string;
    websiteDisplay: string;
  };
}

export const siteConfig: SiteConfig = {
  title: "Powertrain Service & Parts | Repuestos, lubricantes e ingeniería de lubricación",
  description:
    "Suministro de componentes de tren de rodaje Progress Mining, repuestos DANA Spicer y ZF, y lubricantes especiales BECHEM. Servicio planeado de ingeniería de lubricación y formación técnica en Colombia.",
  brandName: "Powertrain",
  brandSubtitle: "Service & Parts",
  tagline: "Always move forward, always Powertrain",
  credentials: {
    brands: "Progress Mining · DANA Spicer · ZF · BECHEM",
    origin: "Colombia",
  },
  contact: {
    email: "ventas@powertrainsas.com",
    phone: "+573205460682",
    phoneDisplay: "+57 320 546 0682",
    website: "https://www.powertrainserviceparts.com",
    websiteDisplay: "www.powertrainserviceparts.com",
  },
};
