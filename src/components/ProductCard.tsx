import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

function getBadgeColor(badge: string) {
  switch (badge) {
    case "Oferta":
      return "bg-red-500";
    case "Nuevo":
      return "bg-onpres-cyan";
    case "Más vendido":
      return "bg-onpres-orange";
    default:
      return "bg-gray-500";
  }
}

function getStockLabel(qty?: number) {
  if (qty === undefined) return null;
  if (qty <= 3) return { text: `¡Quedan ${qty}!`, color: "text-red-500" };
  if (qty <= 7) return { text: `Quedan ${qty}`, color: "text-orange-500" };
  return { text: "En stock", color: "text-green-600" };
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstPrice = Object.values(product.prices)[0];
  const stockLabel = getStockLabel(product.stockQuantity);
  const hasDiscount = firstPrice?.previousPrice !== undefined && firstPrice.previousPrice > firstPrice.usd;
  const discountPercent = hasDiscount && firstPrice.previousPrice !== undefined
    ? Math.round(((firstPrice.previousPrice - firstPrice.usd) / firstPrice.previousPrice) * 100)
    : 0;

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="card-product group block"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <span
              className={`${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-full`}
            >
              {product.badge}
            </span>
          )}
          {hasDiscount && discountPercent > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Out of stock overlay */}
        {!product.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Sin stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge">{product.brand}</span>
          <span className="badge">{product.category}</span>
        </div>

        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-onpres-orange transition-colors">
          {product.name}
        </h3>

        {/* Specs preview */}
        <p className="text-xs text-gray-400 mb-3">
          {product.specs.processor && `${product.specs.processor} · `}
          {product.specs.ram && `${product.specs.ram} RAM`}
        </p>

        {/* Price */}
        {firstPrice && (
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {hasDiscount && firstPrice.previousPrice !== undefined && (
                <span className="text-xs text-gray-400 line-through">
                  USD {firstPrice.previousPrice.toLocaleString()}
                </span>
              )}
              <span className="price-tag text-sm">
                USD {firstPrice.usd.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Stock label */}
        {stockLabel && product.available && (
          <p className={`text-xs font-medium ${stockLabel.color}`}>
            {stockLabel.text}
          </p>
        )}

        {/* Multiple variants indicator */}
        {Object.keys(product.prices).length > 1 && (
          <p className="text-xs text-gray-400 mt-1">
            {Object.keys(product.prices).length} configuraciones
          </p>
        )}
      </div>
    </Link>
  );
}
