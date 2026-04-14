import Hero from "@/components/Hero";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Onpres | Tecnología a un click — MacBooks, Notebooks y más",
  };
}

export default function Home() {
  return <Hero />;
}
