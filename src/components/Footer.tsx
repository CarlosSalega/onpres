import { MapPin, Clock, CreditCard, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gradient mb-4">Onpres</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Los mejores productos tecnológicos con stock propio y entrega
              inmediata. Belgrano, Buenos Aires.
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Información
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gray-400 shrink-0" />
                <span>Belgrano, Buenos Aires</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 text-gray-400 shrink-0" />
                <span>Lun a Sáb: 10 a 19hs</span>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Formas de pago
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <CreditCard
                  size={16}
                  className="mt-0.5 text-gray-400 shrink-0"
                />
                <span>Efectivo, Transferencia</span>
              </li>
              <li className="flex items-start gap-2">
                <CreditCard
                  size={16}
                  className="mt-0.5 text-gray-400 shrink-0"
                />
                <span>MercadoPago, Binance</span>
              </li>
              <li className="flex items-start gap-2">
                <CreditCard
                  size={16}
                  className="mt-0.5 text-gray-400 shrink-0"
                />
                <span>PayPal, USDT</span>
              </li>
            </ul>
          </div>

          {/* Shipping */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Envíos</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <Truck size={16} className="mt-0.5 text-gray-400 shrink-0" />
                <span>Envíos a todo el país</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck size={16} className="mt-0.5 text-gray-400 shrink-0" />
                <span>Retirá en nuestra oficina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          © 2026 Onpres. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
