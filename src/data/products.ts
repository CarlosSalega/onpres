export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    display?: string;
    gpu?: string;
    other?: string[];
  };
  prices: {
    [key: string]: {
      usd: number;
      previousPrice?: number;
      storage?: string;
    };
  };
  images: string[];
  available: boolean;
  featured?: boolean;
  badge?: "Nuevo" | "Oferta" | "Más vendido";
  stockQuantity?: number;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "macbook-air-m5-13",
    name: 'MacBook Air M5 13.6"',
    brand: "Apple",
    category: "Notebooks",
    description:
      "La nueva MacBook Air con chip M5, pantalla Liquid Retina y hasta 18 horas de batería. Ultra delgada, ultra potente.",
    specs: {
      processor: "Apple M5 10-core",
      ram: "16 GB",
      display: '13.6" Liquid Retina',
      gpu: "10-core GPU",
      other: ["Touch ID", "MagSafe", "Wi-Fi 6E"],
    },
    prices: {
      "512 GB": { usd: 1400, previousPrice: 1550, storage: "512 GB SSD" },
      "1 TB": { usd: 1650, previousPrice: 1800, storage: "1 TB SSD" },
    },
    images: ["/macbook-air-13.jpg", "/macbook-air-13.jpg", "/macbook-air-13.jpg"],
    available: true,
    featured: true,
    badge: "Más vendido",
    stockQuantity: 5,
  },
  {
    id: "2",
    slug: "macbook-air-m5-15",
    name: 'MacBook Air M5 15.3"',
    brand: "Apple",
    category: "Notebooks",
    description:
      "Pantalla grande de 15.3 pulgadas con el poder del chip M5. Ideal para productividad y creatividad.",
    specs: {
      processor: "Apple M5 10-core",
      ram: "16 GB",
      display: '15.3" Liquid Retina',
      gpu: "10-core GPU",
      other: ["Touch ID", "MagSafe", "Wi-Fi 6E"],
    },
    prices: {
      "512 GB": { usd: 1600, previousPrice: 1750, storage: "512 GB SSD" },
      "1 TB": { usd: 1850, previousPrice: 2000, storage: "1 TB SSD" },
    },
    images: ["/macbook-air-15.jpg", "/macbook-air-15.jpg", "/macbook-air-15.jpg"],
    available: true,
    featured: true,
    badge: "Oferta",
    stockQuantity: 3,
  },
  {
    id: "3",
    slug: "macbook-pro-m5-14",
    name: 'MacBook Pro M5 14"',
    brand: "Apple",
    category: "Notebooks",
    description:
      "Potencia profesional con chip M5 Pro, pantalla XDR y hasta 22 horas de batería.",
    specs: {
      processor: "Apple M5 Pro 12-core",
      ram: "18 GB",
      display: '14.2" Liquid Retina XDR',
      gpu: "19-core GPU",
      other: ["HDMI", "SDXC", "MagSafe", "Thunderbolt 4"],
    },
    prices: {
      "512 GB": { usd: 2100, storage: "512 GB SSD" },
      "1 TB": { usd: 2400, storage: "1 TB SSD" },
    },
    images: ["/macbook-pro-14.jpg", "/macbook-pro-14.jpg", "/macbook-pro-14.jpg"],
    available: true,
    featured: true,
    stockQuantity: 8,
  },
  {
    id: "4",
    slug: "lenovo-legion-pro",
    name: 'Lenovo Legion Pro 5i 16"',
    brand: "Lenovo",
    category: "Gaming",
    description:
      "Laptop gaming con RTX 4070, pantalla 240Hz y procesador Intel Core i9. Dominá cualquier juego.",
    specs: {
      processor: "Intel Core i9-14900HX",
      ram: "32 GB DDR5",
      storage: "1 TB SSD",
      display: '16" WQXGA 240Hz',
      gpu: "NVIDIA RTX 4070 8GB",
      other: ["RGB Keyboard", "Dolby Vision", "Nahimic Audio"],
    },
    prices: {
      standard: { usd: 1850, previousPrice: 2100, storage: "1 TB SSD" },
    },
    images: ["/lenovo-legion-pro.jpg", "/lenovo-legion-pro.jpg", "/lenovo-legion-pro.jpg"],
    available: true,
    featured: true,
    badge: "Oferta",
    stockQuantity: 2,
  },
  {
    id: "5",
    slug: "lenovo-thinkpad-x1",
    name: 'Lenovo ThinkPad X1 Carbon Gen 12',
    brand: "Lenovo",
    category: "Notebooks",
    description:
      "Ultrabook empresarial premium. Ligera, segura y con la mejor calidad de construcción ThinkPad.",
    specs: {
      processor: "Intel Core Ultra 7 155H",
      ram: "32 GB LPDDR5x",
      storage: "1 TB SSD",
      display: '14" 2.8K OLED',
      gpu: "Intel Arc Graphics",
      other: ["5G Ready", "Fingerprint", "IR Camera"],
    },
    prices: {
      standard: { usd: 1750, storage: "1 TB SSD" },
    },
    images: ["/lenovo-thinkpad-x1.jpg", "/lenovo-thinkpad-x1.jpg", "/lenovo-thinkpad-x1.jpg"],
    available: true,
    featured: false,
    stockQuantity: 12,
  },
  {
    id: "6",
    slug: "mac-mini-m4",
    name: "Mac Mini M4",
    brand: "Apple",
    category: "Desktops",
    description:
      "El Mac Mini más pequeño y potente. Chip M4, perfecto para escritorio o como servidor.",
    specs: {
      processor: "Apple M4 10-core",
      ram: "16 GB",
      storage: "256 GB SSD",
      gpu: "10-core GPU",
      other: ["Thunderbolt 4", "Wi-Fi 6E", "Bluetooth 5.3"],
    },
    prices: {
      "256 GB": { usd: 650, storage: "256 GB SSD" },
      "512 GB": { usd: 850, storage: "512 GB SSD" },
    },
    images: ["/mac-mini-m4.jpg", "/mac-mini-m4.jpg", "/mac-mini-m4.jpg"],
    available: true,
    featured: true,
    badge: "Nuevo",
    stockQuantity: 15,
  },
  {
    id: "7",
    slug: "monitor-lg-ultragear",
    name: 'LG UltraGear 27" 240Hz',
    brand: "LG",
    category: "Monitores",
    description:
      "Monitor gaming OLED de 27 pulgadas con 240Hz y respuesta de 0.03ms. Colores perfectos.",
    specs: {
      display: '27" WQHD OLED 240Hz',
      other: ["0.03ms Response", "HDR True Black", "G-Sync Compatible", "USB-C"],
    },
    prices: {
      standard: { usd: 950, previousPrice: 1100 },
    },
    images: ["/lg-ultragear.jpg", "/lg-ultragear.jpg", "/lg-ultragear.jpg"],
    available: true,
    featured: false,
    badge: "Oferta",
    stockQuantity: 4,
  },
  {
    id: "8",
    slug: "airpods-pro-2",
    name: "AirPods Pro 2 USB-C",
    brand: "Apple",
    category: "Accesorios",
    description:
      "Cancelación activa de ruido, audio adaptativo y hasta 6 horas de batería con estuche MagSafe.",
    specs: {
      other: [
        "Active Noise Cancellation",
        "Adaptive Audio",
        "USB-C Charging",
        "IP54 Water Resistant",
      ],
    },
    prices: {
      standard: { usd: 250 },
    },
    images: ["/airpods-pro-2.jpg", "/airpods-pro-2.jpg", "/airpods-pro-2.jpg"],
    available: true,
    featured: false,
    stockQuantity: 20,
  },
  {
    id: "9",
    slug: "macbook-pro-m5-16",
    name: 'MacBook Pro M5 Max 16"',
    brand: "Apple",
    category: "Notebooks",
    description:
      "Máxima potencia profesional con chip M5 Max, pantalla XDR de 16 pulgadas y hasta 24 horas de batería.",
    specs: {
      processor: "Apple M5 Max 16-core",
      ram: "36 GB",
      display: '16.2" Liquid Retina XDR',
      gpu: "40-core GPU",
      other: ["HDMI 2.1", "SDXC", "MagSafe", "Thunderbolt 5"],
    },
    prices: {
      "1 TB": { usd: 3200, storage: "1 TB SSD" },
      "2 TB": { usd: 3800, storage: "2 TB SSD" },
    },
    images: ["/macbook-pro-16.jpg", "/macbook-pro-16.jpg", "/macbook-pro-16.jpg"],
    available: true,
    featured: true,
    badge: "Nuevo",
    stockQuantity: 3,
  },
  {
    id: "10",
    slug: "lenovo-ideapad-slim",
    name: 'Lenovo IdeaPad Slim 5 15.6"',
    brand: "Lenovo",
    category: "Notebooks",
    description:
      "Notebook versátil para el día a día. Procesador AMD Ryzen, pantalla Full HD y diseño ultraliviano.",
    specs: {
      processor: "AMD Ryzen 7 7735HS",
      ram: "16 GB DDR5",
      storage: "512 GB SSD",
      display: '15.6" Full HD IPS',
      gpu: "AMD Radeon 680M",
      other: ["Fingerprint", "Backlit Keyboard", "Wi-Fi 6"],
    },
    prices: {
      standard: { usd: 780, storage: "512 GB SSD" },
    },
    images: ["/lenovo-ideapad.jpg", "/lenovo-ideapad.jpg", "/lenovo-ideapad.jpg"],
    available: true,
    featured: false,
    stockQuantity: 10,
  },
  {
    id: "11",
    slug: "monitor-samsung-odyssey",
    name: 'Samsung Odyssey G5 32" Curvo',
    brand: "Samsung",
    category: "Monitores",
    description:
      "Monitor gaming curvo 1000R con 165Hz y respuesta de 1ms. Inmersión total para gaming.",
    specs: {
      display: '32" QHD VA 165Hz Curvo 1000R',
      other: ["1ms Response", "HDR10", "FreeSync Premium", "Eye Saver Mode"],
    },
    prices: {
      standard: { usd: 420, previousPrice: 520 },
    },
    images: ["/samsung-odyssey.jpg", "/samsung-odyssey.jpg", "/samsung-odyssey.jpg"],
    available: true,
    featured: false,
    badge: "Oferta",
    stockQuantity: 6,
  },
  {
    id: "12",
    slug: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "Accesorios",
    description:
      "El Apple Watch más resistente y capaz. GPS de doble frecuencia, caja de titanio y hasta 36 horas de batería.",
    specs: {
      display: '49mm Always-On Retina',
      other: [
        "GPS L1/L5",
        "Titanio",
        "WR100",
        "S9 SiP",
        "Precision Finding",
        "Action Button",
      ],
    },
    prices: {
      standard: { usd: 850 },
    },
    images: ["/apple-watch-ultra.jpg", "/apple-watch-ultra.jpg", "/apple-watch-ultra.jpg"],
    available: true,
    featured: false,
    badge: "Nuevo",
    stockQuantity: 7,
  },
  {
    id: "13",
    slug: "lenovo-legion-tower",
    name: "Lenovo Legion Tower 5i",
    brand: "Lenovo",
    category: "Desktops",
    description:
      "PC de escritorio gaming con RTX 4070 Super, procesador Intel i7 y refrigeración avanzada.",
    specs: {
      processor: "Intel Core i7-14700F",
      ram: "32 GB DDR5",
      storage: "1 TB SSD",
      gpu: "NVIDIA RTX 4070 Super 12GB",
      other: ["RGB Lighting", "Wi-Fi 6E", "7.1 Surround Sound"],
    },
    prices: {
      standard: { usd: 1650, storage: "1 TB SSD" },
    },
    images: ["/lenovo-legion-tower.jpg", "/lenovo-legion-tower.jpg", "/lenovo-legion-tower.jpg"],
    available: true,
    featured: false,
    stockQuantity: 4,
  },
  {
    id: "14",
    slug: "ipad-air-m2",
    name: 'iPad Air M2 11"',
    brand: "Apple",
    category: "Tablets",
    description:
      "Potencia del chip M2 en un diseño ultradelgado. Compatible con Apple Pencil Pro y Magic Keyboard.",
    specs: {
      processor: "Apple M2 8-core",
      ram: "8 GB",
      storage: "128 GB",
      display: '11" Liquid Retina',
      other: ["Wi-Fi 6E", "USB-C", "Touch ID", "Apple Pencil Pro"],
    },
    prices: {
      "128 GB": { usd: 650, storage: "128 GB" },
      "256 GB": { usd: 780, storage: "256 GB" },
    },
    images: ["/ipad-air-m2.jpg", "/ipad-air-m2.jpg", "/ipad-air-m2.jpg"],
    available: true,
    featured: false,
    badge: "Nuevo",
    stockQuantity: 9,
  },
];

export const categories = [
  "Todos",
  "Notebooks",
  "Gaming",
  "Desktops",
  "Monitores",
  "Accesorios",
  "Tablets",
];

export const brands = ["Todos", "Apple", "Lenovo", "LG", "Samsung"];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
