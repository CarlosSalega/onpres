"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Check,
  Shield,
  Truck,
  CreditCard,
  Tag,
} from "lucide-react";
import type { Product } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface ProductDetailProps {
  product: Product;
}

function getStockLabel(qty?: number) {
  if (qty === undefined) return { text: "Disponible", color: "text-green-600", bg: "bg-green-50" };
  if (qty <= 3) return { text: `¡Últimas ${qty} unidades!`, color: "text-red-500", bg: "bg-red-50" };
  if (qty <= 7) return { text: `Quedan ${qty} unidades`, color: "text-orange-500", bg: "bg-orange-50" };
  return { text: "En stock", color: "text-green-600", bg: "bg-green-50" };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    Object.keys(product.prices)[0]
  );

  const currentPrice = product.prices[selectedVariant];
  const stockLabel = getStockLabel(product.stockQuantity);

  const hasDiscount = currentPrice?.previousPrice !== undefined && currentPrice.previousPrice > currentPrice.usd;
  const discountPercent = hasDiscount && currentPrice.previousPrice !== undefined
    ? Math.round(((currentPrice.previousPrice - currentPrice.usd) / currentPrice.previousPrice) * 100)
    : 0;

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el ${product.name}${selectedVariant !== "standard" ? ` (${selectedVariant})` : ""}. ¿Está disponible?`
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ChevronLeft size={16} />
          Volver al catálogo
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            {/* Main image */}
            <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />

              {/* Badge overlay */}
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span
                    className={`${product.badge === "Oferta" ? "bg-red-500" : product.badge === "Nuevo" ? "bg-onpres-cyan" : "bg-onpres-orange"} text-white text-sm font-bold px-4 py-1.5 rounded-full`}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {!product.available && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Sin stock
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i
                        ? "border-onpres-orange"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - Imagen ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">{product.brand}</span>
              <span className="badge">{product.category}</span>
              {product.badge && (
                <span
                  className={`${product.badge === "Oferta" ? "bg-red-500" : product.badge === "Nuevo" ? "bg-onpres-cyan" : "bg-onpres-orange"} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-gray-500 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Especificaciones
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.processor && (
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Procesador</p>
                    <p className="text-sm font-medium text-gray-700">
                      {product.specs.processor}
                    </p>
                  </div>
                )}
                {product.specs.ram && (
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Memoria RAM</p>
                    <p className="text-sm font-medium text-gray-700">
                      {product.specs.ram}
                    </p>
                  </div>
                )}
                {product.specs.storage && (
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Almacenamiento</p>
                    <p className="text-sm font-medium text-gray-700">
                      {product.specs.storage}
                    </p>
                  </div>
                )}
                {product.specs.display && (
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Pantalla</p>
                    <p className="text-sm font-medium text-gray-700">
                      {product.specs.display}
                    </p>
                  </div>
                )}
                {product.specs.gpu && (
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Gráficos</p>
                    <p className="text-sm font-medium text-gray-700">
                      {product.specs.gpu}
                    </p>
                  </div>
                )}
              </div>
              {product.specs.other && product.specs.other.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-400 mb-2">Otros</p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.other.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 text-xs text-gray-600 bg-white px-3 py-1 rounded-full"
                      >
                        <Check size={12} className="text-onpres-orange" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Variants */}
            {Object.keys(product.prices).length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Configuración
                </p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(product.prices).map(([variant, data]) => {
                    const variantHasDiscount = data.previousPrice && data.previousPrice > data.usd;
                    return (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors ${
                          selectedVariant === variant
                            ? "border-onpres-orange bg-orange-50 text-onpres-orange"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {data.storage || variant}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-3">
                {hasDiscount && currentPrice.previousPrice !== undefined && (
                  <span className="text-lg text-gray-400 line-through">
                    USD {currentPrice.previousPrice.toLocaleString()}
                  </span>
                )}
                <span className="price-tag text-2xl">
                  USD {currentPrice.usd.toLocaleString()}
                </span>
                {hasDiscount && discountPercent > 0 && (
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -{discountPercent}%
                  </span>
                )}
              </div>

              {/* Stock */}
              <div className={`inline-flex items-center gap-2 ${stockLabel.bg} px-3 py-1.5 rounded-full`}>
                <Check size={14} className={stockLabel.color} />
                <span className={`text-sm font-medium ${stockLabel.color}`}>
                  {stockLabel.text}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`https://wa.me/5491157942604?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 min-w-[200px]"
              >
                <WhatsAppIcon size={18} />
                Consultar por WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              <div className="text-center">
                <Shield
                  size={20}
                  className="mx-auto mb-2 text-onpres-cyan"
                />
                <p className="text-xs text-gray-500">Garantía oficial</p>
              </div>
              <div className="text-center">
                <Truck size={20} className="mx-auto mb-2 text-onpres-orange" />
                <p className="text-xs text-gray-500">Envío a todo el país</p>
              </div>
              <div className="text-center">
                <CreditCard
                  size={20}
                  className="mx-auto mb-2 text-onpres-purple"
                />
                <p className="text-xs text-gray-500">Múltiples medios de pago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
