import CatalogoPage from "@/components/CatalogoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo — Onpres",
  description:
    "Explorá todos los productos disponibles: MacBooks, iPads, Lenovo, monitores, gaming y más. Precios en USD, stock propio y envío a todo el país.",
  openGraph: {
    title: "Catálogo de productos — Onpres",
    description:
      "Explorá todos los productos disponibles: MacBooks, iPads, Lenovo, monitores y más.",
    url: `${process.env.NEXT_PUBLIC_URL}/catalogo`,
  },
};

export default function Catalogo() {
  return <CatalogoPage />;
}
