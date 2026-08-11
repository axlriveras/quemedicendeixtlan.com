import { tourismRecords, type TourismRecord } from "@/data/tourism";

export type Hotel = TourismRecord;

export const hotels = tourismRecords.filter(
  (record) => record.category === "Hospedaje"
);

export const publishableHotels = hotels.filter(
  (hotel) =>
    hotel.publish_ready === "Sí" ||
    hotel.publish_ready === "Condicional"
);

export const featuredHotels = publishableHotels.slice(0, 8);

export function getHotelBySlug(slug: string) {
  return hotels.find((hotel) => hotel.slug === slug);
}

export function formatPhone(phone: string) {
  if (!phone) return "";

  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }

  return phone;
}
