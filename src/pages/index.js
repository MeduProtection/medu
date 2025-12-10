import Image from "next/image";
import { Inter } from "next/font/google";
import Timeline from "@/components/home/timeline/TimeLine";
import Features from "@/components/home/features/Features";
import WasteEctomy from "@/components/home/wasteEctomy/WasteEctomy";
import HowItWorks from "@/components/home/howItWorks/HowItWorks";
import AppDemo from "@/components/home/appDemo/AppDemo";
import Headlines from "@/components/home/headlines/Headlines";
import MedicalMiracle from "@/components/home/medicalMiracle/MedicalMiracle";
import Difference from "@/components/home/difference/Difference";
import CallToAction from "@/components/home/callToAction/CallToAction";
/* import Form from "@/components/home/form/Form";
 */import Hero from "@/components/home/hero/Hero";
import Head from "next/head";
import Form from "@/components/ContactUs/Form";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    <Head>
  <meta name="theme-color" content="#FFFFF"/>
  <title>MEDU Protection.</title>
  <meta name="description" content="At MEDU Protection, we are committed to advancing healthcare safety with our state-of-the-art medical gowns and protective wear. Each piece is engineered for durability, offering up to 50 wash cycles without losing protective properties. This ensures that healthcare professionals can maintain the highest standards of hygiene and safety, repeatedly and cost-effectively." />
  <meta name="keywords" content="Medical gowns, Washable hospital gowns, Fluid-resistant gowns, ppe, anti cross-contamination, washable coverall, sustainable gowns, personal protective equipment" />
  <meta property="og:title" content="MEDU Protection" />
  <meta property="og:description" content="At MEDU Protection, we are committed to advancing healthcare safety with our state-of-the-art medical gowns and protective wear. Each piece is engineered for durability, offering up to 50 wash cycles without losing protective properties. This ensures that healthcare professionals can maintain the highest standards of hygiene and safety, repeatedly and cost-effectively." />
  <meta property="og:image" content="#/assets/ogimage.jpg" />
  <meta property="og:url" content="https://www.meduprotection.com" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="#/assets/ogimage.jpg" />
  <link rel="icon" href="favicon.ico" />
</Head>

    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2f7fa] via-white to-[#f2f7fa] overflow-hidden">
      <span className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#95BC67]/20 blur-3xl animate-float-slow" />
      <span className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#4E88B0]/15 blur-3xl animate-float" />
      <span className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1B3954]/10 blur-3xl animate-float-slower" />

      <div className="relative text-center px-6 py-20 md:py-28 animate-thank-you">
        <h1 className="text-[#1B3954] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-sm mb-8">
          Thank you
        </h1>
        <button
          onClick={() => setShowPopup(true)}
          className="text-[#4E88B0] hover:text-[#1B3954] text-sm md:text-base font-normal underline decoration-1 underline-offset-4 transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100"
        >
          Aviso de baja de sitio
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in px-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative animate-popup"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#1B3954] transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Popup content */}
            <div className="text-left max-h-[80vh] overflow-y-auto px-2">
              <div className="mb-6 text-center">
                <span className="inline-block px-4 py-2 bg-[#95BC67]/10 text-[#95BC67] text-sm font-semibold rounded-full">
                  Aviso Oficial
                </span>
              </div>

              <h2 className="text-[#1B3954] text-2xl md:text-3xl font-bold mb-6 text-center">
                AVISO OFICIAL DE CIERRE Y BAJA DEFINITIVA DEL SITIO WEB
              </h2>

              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                <p className="font-semibold">
                  MEDU BIOPROTECCIÓN SUSTENTABLE, S.A. DE C.V. (&quot;MEDU&quot;), en cumplimiento con las leyes mexicanas aplicables y con fundamento en decisiones internas adoptadas, informa a los usuarios y al público en general lo siguiente:
                </p>

                <h3 className="text-[#1B3954] font-bold text-lg mt-6 mb-3">
                  1. CIERRE DE OPERACIONES Y BAJA DEL SITIO WEB
                </h3>
                <p>
                  Por decisiones corporativas y derivado del inicio del proceso formal de disolución y liquidación de la sociedad, conforme a la Ley General de Sociedades Mercantiles (LGSM), MEDU informa que el sitio web [https://meduprotection.com/] será dado de baja de manera permanente una vez culminado el proceso de liquidación.
                </p>
                <p>
                  A partir de dicho momento, el sitio dejará de estar disponible y cualquier acceso, contenido, catálogo, material o herramienta digital quedará definitivamente deshabilitado.
                </p>

                <h3 className="text-[#1B3954] font-bold text-lg mt-6 mb-3">
                  2. MARCO LEGAL APLICABLE AL TRATAMIENTO Y ELIMINACIÓN DE DATOS PERSONALES
                </h3>
                <p>Durante el proceso de disolución, MEDU actuará conforme a la:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</li>
                  <li>Reglamento de la LFPDPPP</li>
                  <li>Principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad.</li>
                </ul>

                <h4 className="text-[#1B3954] font-semibold mt-4 mb-2">2.1. Finalidad temporal del tratamiento</h4>
                <p>Los Datos Personales que se encuentren en posesión de MEDU serán utilizados únicamente con las siguientes finalidades estrictamente necesarias:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Concluir operaciones pendientes.</li>
                  <li>Realizar gestiones contables, fiscales o legales propias del proceso de disolución.</li>
                  <li>Atender solicitudes de derechos ARCO.</li>
                  <li>Cumplir obligaciones legales vinculadas a la retención temporal de información.</li>
                </ul>

                <h4 className="text-[#1B3954] font-semibold mt-4 mb-2">2.2. Eliminación segura de datos</h4>
                <p>
                  Una vez concluido el proceso de disolución, MEDU procederá a la supresión definitiva, bloqueo y posterior eliminación de los Datos Personales, en cumplimiento de la legislación aplicable.
                </p>

                <h3 className="text-[#1B3954] font-bold text-lg mt-6 mb-3">
                  3. EJERCICIO DE DERECHOS ARCO
                </h3>
                <p>Los titulares podrán ejercer sus derechos ARCO durante el periodo de cierre.</p>
                <p>Correo: <a href="mailto:tamarachayo@hotmail.com" className="text-[#4E88B0] underline">tamarachayo@hotmail.com</a></p>
                <p>Teléfono: <a href="tel:5544817464" className="text-[#4E88B0] underline">55 4481 7464</a></p>

                <h3 className="text-[#1B3954] font-bold text-lg mt-6 mb-3">
                  4. CONTACTO DURANTE EL PROCESO DE CIERRE
                </h3>
                <p>
                  Los canales estarán activos exclusivamente hasta el <span className="font-semibold">30 de abril del 2026</span>.
                </p>

                <h3 className="text-[#1B3954] font-bold text-lg mt-6 mb-3">
                  5. PROPIEDAD INTELECTUAL
                </h3>
                <p>
                  Todos los elementos de propiedad intelectual utilizados en el sitio web han sido propiedad de BIOPROTECCIÓN SUSTENTABLE, S.A. DE C.V.
                </p>

                <h3 className="text-[#1B3954] font-bold text-lg mt-6 mb-3">
                  7. MENSAJE FINAL
                </h3>
                <p className="text-[#4E88B0] font-semibold">
                  MEDU agradece profundamente la confianza y el apoyo brindado durante su operación.
                </p>
              </div>

              <div className="mt-8 flex justify-center gap-2">
                <span className="h-1.5 w-16 bg-gradient-to-r from-[#95BC67] to-[#4E88B0] rounded-full"></span>
                <span className="h-1.5 w-1.5 bg-[#4E88B0] rounded-full"></span>
                <span className="h-1.5 w-1.5 bg-[#1B3954] rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slower {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes thank-you {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
            filter: blur(10px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 700ms ease-out 120ms both; }
        .animate-thank-you { animation: thank-you 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
        .animate-popup { animation: popup 400ms cubic-bezier(0.34, 1.56, 0.64, 1) both; }
      `}</style>
    </div>

    {/* <div className="overflow-hidden">
      <Hero/>
      <div className="relative ">
      <Timeline/>
      </div>
      <Features/>
      <WasteEctomy
      />
      <div className="relative"
       id='Contact'>
      <Form/>
      </div>
      <HowItWorks/>
      <AppDemo/>
      <div className="relative">
      <Headlines/>
      </div>
      <MedicalMiracle/>
      <Difference/>
      <CallToAction/>
    </div> */}
    </>
  );
}
