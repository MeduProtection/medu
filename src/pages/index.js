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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
  <meta name="theme-color" content="#FFFFF"/>
  <title>MEDU Protection.</title>
  <meta name="description" content="At MEDU Protection, we are committed to advancing healthcare safety with our state-of-the-art medical gowns and protective wear. Each piece is engineered for durability, offering up to 50 wash cycles without losing protective properties. This ensures that healthcare professionals can maintain the highest standards of hygiene and safety, repeatedly and cost-effectively." />
  <meta name="keywords" content="Medical gowns, Washable hospital gowns, Fluid-resistant gowns, ppe, anti cross-contamination, washable coverall, sustainable gowns, personal protective equipment" />
  <meta property="og:title" content="MEDU Protection" />
  <meta property="og:description" content="At MEDU Protection, we are committed to advancing healthcare safety with our state-of-the-art medical gowns and protective wear. Each piece is engineered for durability, offering up to 50 wash cycles without losing protective properties. This ensures that healthcare professionals can maintain the highest standards of hygiene and safety, repeatedly and cost-effectively." />
  <meta property="og:image" content="/assets/ogimage.jpg" />
  <meta property="og:url" content="https://www.meduprotection.com" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="/assets/ogimage.jpg" />
  <link rel="icon" href="favicon.ico" />
</Head>

    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2f7fa] via-white to-[#f2f7fa] overflow-hidden">
      <span className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#95BC67]/20 blur-3xl animate-float-slow" />
      <span className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#4E88B0]/15 blur-3xl animate-float" />
      <span className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1B3954]/10 blur-3xl animate-float-slower" />

      <div className="relative text-center px-6 py-20 md:py-28 animate-thank-you">
        <h1 className="text-[#1B3954] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-sm">
          Thank you
        </h1>
      </div>

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
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 700ms ease-out 120ms both; }
        .animate-thank-you { animation: thank-you 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
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
