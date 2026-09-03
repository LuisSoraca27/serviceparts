export interface ModelItem {
  name: string;
  isNew?: boolean;
}

export interface BrandPlatform {
  brand: string;
  models: ModelItem[];
}

export interface PlatformCategory {
  title: string;
  brands: BrandPlatform[];
}

export const platformCategories: PlatformCategory[] = [
  {
    title: "Plataforma para Excavadoras Hidráulicas",
    brands: [
      {
        brand: "Caterpillar®",
        models: [
          { name: "RH120E / 6030" },
          { name: "RH170 / 6040" },
          { name: "RH200 / 6050" },
          { name: "RH340 / 6060" },
          { name: "RH400 / 6090" },
        ]
      },
      {
        brand: "Hitachi®",
        models: [
          { name: "EX1800", isNew: true },
          { name: "EX1900", isNew: true },
          { name: "EX2500 / EX2600" },
          { name: "EX3500 / EX3600" },
          { name: "EX5500 / EX5600" },
          { name: "EX8000" },
        ]
      },
      {
        brand: "Komatsu®",
        models: [
          { name: "PC2000", isNew: true },
          { name: "PC3000" },
          { name: "PC4000" },
          { name: "PC5500" },
          { name: "PC7000" },
          { name: "PC8000" },
        ]
      },
      {
        brand: "Liebherr®",
        models: [
          { name: "R9200", isNew: true },
          { name: "R9250", isNew: true },
          { name: "R9350", isNew: true },
          { name: "R9400", isNew: true },
          { name: "R996B" },
          { name: "R9600" },
          { name: "R9800" },
        ]
      }
    ]
  },
  {
    title: "Plataforma para Excavadoras Eléctricas",
    brands: [
      {
        brand: "Caterpillar®",
        models: [
          { name: "495HR / 7495HR" },
          { name: "495HD / 7495HD" },
          { name: "495HF / 7495HF" },
        ]
      },
      {
        brand: "P&H®",
        models: [
          { name: "2800XP Range" },
          { name: "4100XP Range" },
          { name: "4100BOSS" },
          { name: "DELTA Upgrades" },
        ]
      }
    ]
  }
];
