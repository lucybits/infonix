"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LANDING_ROUTES } from "@/lib/routes";
import logoImg from "@/app/images/logo.png";

export default function Navbar() {
  // este es un estado para gestionar el modo de visualización al hacer scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // patrón de ticking para desacoplar el evento scroll del repintado (frame budget)
    // y eventualmente evitará la ejecución excesiva del hook de estado y mejora la performance en scroll
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      // will-change-transform optimiza la composición en GPU para animaciones de scroll
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 will-change-transform ${
        isScrolled 
          ? "bg-[#191A18]/90 backdrop-blur-md border-b border-stone-800/40 shadow-md" 
          : "bg-white/90 backdrop-blur-md border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* enlace de marca con focus ring para accesibilidad (WCAG compliance) */}
        <a 
          href={LANDING_ROUTES.home} 
          className="flex items-center gap-2.5 group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
        >
          <Image 
            src={logoImg} 
            alt="INFONIX" 
            width={36} 
            height={36} 
            className="w-9 h-9 object-contain transition-transform duration-500 ease-out group-hover:rotate-12"
            priority
          />
          <div className="flex flex-col">
            <span className={`font-logo text-xl tracking-wide transition-colors duration-300 leading-none ${
              isScrolled ? "text-lime-300" : "text-slate-900"
            }`}>
              INFONIX
            </span>
            <span className={`text-[10px] font-medium tracking-wider transition-colors duration-300 uppercase mt-0.5 ${
              isScrolled ? "text-stone-400" : "text-slate-500"
            }`}>
              Soluciones en Ingeniería
            </span>
          </div>
        </a>

        {/* sobre la navegación: el contenedor h-[20px] overflow-hidden nos sirve para el efecto de máscara vertical (clipping) */}
        <nav className="hidden md:flex items-center gap-7 font-display text-sm font-medium">
          {[
            { label: "Inicio", href: LANDING_ROUTES.home },
            { label: "Cómo funciona", href: "#como-funciona" },
            { label: "Características", href: LANDING_ROUTES.features },
            { label: "Plantillas", href: "#ejemplos" },
            { label: "Precios", href: LANDING_ROUTES.pricing }
          ].map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="relative h-[20px] overflow-hidden group/link flex flex-col focus:outline-none"
            >
              {/* sobre el primer estado -> el texto original que será desplazado fuera del viewport (Y negative) */}
              <span className={`transition-all duration-300 ease-out transform group-hover/link:-translate-y-full group-hover/link:opacity-0 ${
                isScrolled ? "text-stone-300" : "text-slate-600"
              }`}>
                {link.label}
              </span>
              
              {/* sobre el segundo estado -> el clon posicionado fuera del viewport que asciende al hacer hover */}
              {/* el top-full coloca el clon exactamente debajo del contenedor, evitando saltos de reflow */}
              <span className={`absolute top-full transition-all duration-300 ease-out transform group-hover/link:-translate-y-full ${
                isScrolled ? "text-lime-300" : "text-slate-900"
              }`}>
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* sobre el bloque de autenticación -> es la misma lógica de animación para consistencia visual */}
        <div className="flex items-center gap-4 font-display text-sm font-medium">
          <a 
            href={LANDING_ROUTES.auth.login} 
            className="relative h-[20px] overflow-hidden group/link flex flex-col focus:outline-none"
          >
            <span className={`transition-all duration-300 ease-out transform group-hover/link:-translate-y-full group-hover/link:opacity-0 ${
              isScrolled ? "text-stone-300" : "text-slate-600"
            }`}>
              Iniciar sesión
            </span>
            <span className={`absolute top-full transition-all duration-300 ease-out transform group-hover/link:-translate-y-full ${
              isScrolled ? "text-white" : "text-slate-900"
            }`}>
              Iniciar sesión
            </span>
          </a>
          
          {/* sobre el button con active:scale para feedback táctil instantáneo -> */}
          <a 
            href={LANDING_ROUTES.auth.register} 
            className={`font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isScrolled 
                ? "bg-lime-300 hover:bg-lime-400 text-black focus-visible:ring-lime-300" 
                : "bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900"
            }`}
          >
            Crear presupuesto
          </a>
        </div>
      </div>
    </header>
  );
}