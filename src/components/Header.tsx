"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Onpres"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-gradient">Onpres</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/catalogo"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Catálogo
          </Link>
          <a
            href="#contacto"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contacto
          </a>
          <a
            href="https://wa.me/5491157942604"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm py-2 px-5 rounded-full font-medium transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <Link
            href="/catalogo"
            className="block text-sm font-medium text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Catálogo
          </Link>
          <a
            href="#contacto"
            className="block text-sm font-medium text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
          <a
            href="https://wa.me/5491157942604"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm py-2 px-5 rounded-full font-medium transition-colors inline-block"
            onClick={() => setMenuOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
