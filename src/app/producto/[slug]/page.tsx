import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Producto no encontrado | Onpres" };
  }

  const firstPrice = Object.values(product.prices)[0];
  const priceText = firstPrice ? `USD ${firstPrice.usd.toLocaleString()}` : "";

  return {
    title: `${product.name} — Onpres`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Onpres`,
      description: product.description,
      url: `${process.env.NEXT_PUBLIC_URL}/producto/${slug}`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Onpres`,
      description: product.description,
      images: [product.images[0]],
    },
    other: {
      "price:amount": String(firstPrice?.usd ?? ""),
      "price:currency": "USD",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
