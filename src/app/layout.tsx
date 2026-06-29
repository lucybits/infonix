import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

/**
 * carga de fuentes locales
 * se definen como variables CSS para su uso dinámico en Tailwind
 * la estrategia de carga local evita peticiones externas (Google Fonts),
 * y así  habrá una mejora de la privacidad y el FCP (First Contentful Paint)
 */
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Bold.otf",
  variable: "--font-logo",
  weight: "700",
});

const onest = localFont({
  src: "./fonts/Onest-ExtraBold.ttf",
  variable: "--font-display",
  weight: "800",
});

const ibmPlex = localFont({
  src: "./fonts/IBMPlexSans-Regular.ttf",
  variable: "--font-body",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // scroll-smooth habilita el desplazamiento fluido para anclas internas
    <html lang="es" className="scroll-smooth">
      <body 
        // se hace una inyección de variables tipográficas mediante clases CSS
        // se establece font-body como tipografía base por defecto (default sans)
        // antialiased suaviza el renderizado de texto para mejorar dicha legibilidad
        className={`${clashDisplay.variable} ${onest.variable} ${ibmPlex.variable} font-body bg-white text-slate-900 antialiased`}
      >
        {/* el navbar persistente en todas las rutas bajo el RootLayout */}
        <Navbar />
        
        {/* main es la etiqueta semántica raíz para el contenido principal */}
        <main>{children}</main>
      </body>
    </html>
  );
}