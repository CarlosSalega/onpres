"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MessageCircle,
} from "lucide-react";
import {
  products,
  categories,
  brands,
  type Product,
} from "@/data/products";
import ProductCard from "@/components/ProductCard";

const PRODUCTS_PER_PAGE = 8;

type SortOption = "default" | "price-asc" | "price-desc";

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchCategory =
        selectedCategory === "Todos" || p.category === selectedCategory;
      const matchBrand =
        selectedBrand === "Todos" || p.brand === selectedBrand;
      const matchSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchBrand && matchSearch;
    });

    // Sort by first price USD
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => {
        const priceA = Object.values(a.prices)[0]?.usd ?? 0;
        const priceB = Object.values(b.prices)[0]?.usd ?? 0;
        return priceA - priceB;
      });
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => {
        const priceA = Object.values(a.prices)[0]?.usd ?? 0;
        const priceB = Object.values(b.prices)[0]?.usd ?? 0;
        return priceB - priceA;
      });
    }

    return result;
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleFilterChange = (
    setter: (val: string) => void,
    value: string
  ) => {
    setter(value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
          >
            <ChevronLeft size={16} />
            Volver
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Catálogo
          </h1>
          <p className="text-gray-500">
            {filtered.length} producto{filtered.length !== 1 && "s"}{" "}
            encontrado{filtered.length !== 1 && "s"}
          </p>
        </div>
      </section>

      {/* Search + Filters Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Search */}
          <div className="relative mb-6">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Buscar productos, marcas, categorías..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-onpres-orange focus:ring-1 focus:ring-onpres-orange transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Category filters */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Categoría
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilterChange(setSelectedCategory, cat)}
                    className={`filter-chip ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand filters */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Marca
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleFilterChange(setSelectedBrand, brand)}
                    className={`filter-chip ${selectedBrand === brand ? "active" : ""}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="ml-auto">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Ordenar
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSortBy("price-asc");
                    setCurrentPage(1);
                  }}
                  className={`filter-chip flex items-center gap-1 ${sortBy === "price-asc" ? "active" : ""}`}
                >
                  <ArrowUp size={14} />
                  Menor precio
                </button>
                <button
                  onClick={() => {
                    setSortBy("price-desc");
                    setCurrentPage(1);
                  }}
                  className={`filter-chip flex items-center gap-1 ${sortBy === "price-desc" ? "active" : ""}`}
                >
                  <ArrowDown size={14} />
                  Mayor precio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-gray-900 text-white"
                          : "border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400 text-lg mb-2">
              No encontramos productos con esos filtros
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Probá cambiando los filtros o buscando otro término
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                setSelectedBrand("Todos");
                setSearchQuery("");
                setSortBy("default");
              }}
              className="btn-outline text-sm"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ¿No encontrás lo que buscás?
          </h2>
          <p className="text-gray-500 mb-6">
            Consultanos por productos a pedido o modelos específicos
          </p>
          <a
            href="https://wa.me/5491157942604?text=Hola!%20Busco%20un%20producto%20que%20no%20encuentro%20en%20el%20catálogo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Consultanos
          </a>
        </div>
      </section>
    </div>
  );
}
