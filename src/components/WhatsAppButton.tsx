"use client";

import { WhatsAppIcon } from "./WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491157942604?text=Hola!%20Vi%20su%20web%20y%20me%20interesa%20un%20producto"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
