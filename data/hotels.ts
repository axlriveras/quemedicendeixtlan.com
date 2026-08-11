export type HotelStatus =
  | "verified"
  | "needs-verification"
  | "temporarily-closed";

export type Hotel = {
  id: string;
  slug: string;
  name: string;
  type: string;
  address: string;
  neighborhood?: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
  image: string;
  gallery?: string[];
  description: string;
  amenities: string[];
  status: HotelStatus;
  featured?: boolean;
  sourceLabel?: string;
};

export const hotels: Hotel[] = [
  {
    id: "plaza-hidalgo",
    slug: "hotel-plaza-hidalgo",
    name: "Hotel Plaza Hidalgo",
    type: "Hotel",
    address: "Av. Hidalgo 101 Pte.",
    neighborhood: "Centro",
    phone: "324 243 2100",
    website: "https://hotelplazahidalgo.com",
    image: "/images/plaza-ixtlan.jpg",
    description:
      "Hospedaje tradicional en el centro de Ixtlán del Río, con una ubicación práctica para recorrer la ciudad a pie.",
    amenities: ["Ubicación céntrica", "Cafetería", "Suites", "Wi-Fi"],
    status: "verified",
    featured: true,
    sourceLabel: "Sitio oficial",
  },
  {
    id: "casa-abuelos",
    slug: "la-casa-de-los-abuelos",
    name: "La Casa de Los Abuelos",
    type: "Hotel Boutique",
    address: "Av. Hidalgo Pte. 156 A",
    neighborhood: "Centro",
    phone: "324 118 8315",
    image: "/images/ixtlan-pueblo-magico.jpg",
    description:
      "Hotel boutique de escala íntima ubicado en el centro de Ixtlán del Río.",
    amenities: ["Wi-Fi", "Aire acondicionado", "Recepción 24 h", "Baño privado"],
    status: "verified",
    featured: true,
    sourceLabel: "Google Hotels / Booking",
  },
  {
    id: "hotel-maya",
    slug: "hotel-maya-ixtlan",
    name: "Hotel Maya Ixtlán",
    type: "Hotel",
    address: "Av. Hidalgo 125 Pte.",
    neighborhood: "Centro",
    phone: "324 243 2174",
    image: "/images/ixtlan-hero.jpg",
    description:
      "Opción de hospedaje céntrica con acceso cercano a servicios, comercios y el corazón de Ixtlán.",
    amenities: ["Wi-Fi", "Recepción 24 h", "Ubicación céntrica"],
    status: "needs-verification",
    featured: true,
    sourceLabel: "Booking / directorio local",
  },
  {
    id: "hotel-monarca",
    slug: "hotel-monarca",
    name: "Hotel Monarca",
    type: "Hotel",
    address: "Prisciliano Sánchez 100",
    neighborhood: "Centro",
    phone: "324 243 8401",
    image: "/images/plaza-ixtlan.jpg",
    description:
      "Hospedaje ubicado en el centro de Ixtlán del Río, cerca de servicios y puntos de interés.",
    amenities: ["Ubicación céntrica"],
    status: "verified",
    sourceLabel: "Google Hotels",
  },
  {
    id: "hotel-roma",
    slug: "hotel-roma",
    name: "Hotel Roma",
    type: "Hotel",
    address: "Hidalgo 205",
    neighborhood: "Centro",
    phone: "324 243 2690",
    image: "/images/ixtlan-pueblo-magico.jpg",
    description:
      "Alternativa de hospedaje tradicional ubicada sobre una de las principales vialidades del centro.",
    amenities: ["Ubicación céntrica"],
    status: "needs-verification",
    sourceLabel: "Directorio comercial",
  },
  {
    id: "real-kikinay",
    slug: "hotel-real-de-kikinay",
    name: "Hotel Real de Kikinay",
    type: "Hotel",
    address: "Miguel Hidalgo 187",
    neighborhood: "Centro",
    phone: "324 243 7362",
    image: "/images/ixtlan-hero.jpg",
    description:
      "Establecimiento de hospedaje en el centro de Ixtlán del Río.",
    amenities: ["Ubicación céntrica"],
    status: "needs-verification",
    sourceLabel: "DENUE / directorio local",
  },
  {
    id: "hotel-paraiso",
    slug: "hotel-paraiso",
    name: "Hotel Paraíso",
    type: "Hotel",
    address: "Hidalgo 757",
    neighborhood: "Centro",
    phone: "324 100 2219",
    image: "/images/plaza-ixtlan.jpg",
    description:
      "Hotel ubicado en Ixtlán del Río con acceso cercano a distintos puntos de la ciudad.",
    amenities: ["Wi-Fi", "Restaurante"],
    status: "needs-verification",
    sourceLabel: "Google Hotels",
  },
  {
    id: "marques-minas",
    slug: "el-marques-de-minas",
    name: "El Marqués de Minas",
    type: "Hotel Boutique",
    address: "Justo Barajas Norte 45",
    neighborhood: "Centro",
    phone: "324 243 2159",
    image: "/images/ixtlan-pueblo-magico.jpg",
    description:
      "Propuesta de hospedaje boutique asociada a una experiencia más tranquila y personalizada.",
    amenities: ["Hotel boutique", "Alberca", "Restaurante"],
    status: "needs-verification",
    featured: true,
    sourceLabel: "Directorio turístico",
  },
];

export const featuredHotels = hotels.filter((hotel) => hotel.featured);
