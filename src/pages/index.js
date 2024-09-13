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

    <div className="overflow-hidden">
      <Hero/>
      <div className="relative ">
     {/*  <img src='/assets/shadows/green.svg' alt='shadow' className='absolute h-[1000px] w-[900px] -top-[200px] xl:-top-[0px] left-0 w-full -z-10 '/> */}
      <Timeline/>
      </div>
      <Features/>
      <WasteEctomy
      />
      <div className="relative"
       id='Contact'>
     {/*  <img src='/assets/shadows/green2.svg' alt='shadow' className='absolute h-[1000px] w-[900px] -top-[100px] left-0 w-full -z-10 '/> */}
      <Form/>
      </div>
      <HowItWorks/>
      <AppDemo/>
      <div className="relative">
     {/*  <img src='/assets/shadows/blue2.svg' alt='shadow' className='absolute h-[1000px] w-[900px] -top-[100px] right-0 w-full -z-10 '/> */}
      <Headlines/>
      </div>
      <MedicalMiracle/>
      <Difference/>
      <CallToAction/>
    </div>
    </>
  );
}
