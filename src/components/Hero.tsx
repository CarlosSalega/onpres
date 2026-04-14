import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Shield, Zap, Headphones } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function Hero() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/90" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-gray-600">
                Stock disponible
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tecnología{" "}
              <span className="text-gradient">a un click</span>
            </h1>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
              Los mejores productos Apple, Lenovo y más. Stock propio, garantía
              oficial y envío a todo el país.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/catalogo" className="btn-primary">
                Ver catálogo
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/5491157942604"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Consultanos
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield size={16} className="text-onpres-cyan" />
                Garantía oficial
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Zap size={16} className="text-onpres-orange" />
                Entrega inmediata
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Headphones size={16} className="text-onpres-purple" />
                Asesoramiento
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Productos destacados
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Lo más buscado por nuestros clientes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/catalogo" className="btn-outline">
              Ver todo el catálogo
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h2>
              <ul className="space-y-4">
                {[
                  "Productos nuevos y sellados",
                  "Garantía oficial Apple por 12 meses",
                  "Stock propio con entrega inmediata",
                  "Retirá en nuestra oficina en Belgrano",
                  "Estacionamiento privado y seguro",
                  "Envíos a todo el país",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-onpres-orange mt-0.5 shrink-0"
                    />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 via-gray-50 to-cyan-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <Image
                src="/logo.jpg"
                alt="Onpres"
                width={200}
                height={200}
                className="rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tenés dudas sobre qué producto elegir?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Nuestro equipo te asesora para que elijas el equipo perfecto según
            tus necesidades.
          </p>
          <a
            href="https://wa.me/5491157942604?text=Hola!%20Necesito%20asesoramiento%20para%20elegir%20un%20producto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            <WhatsAppIcon size={20} />
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
