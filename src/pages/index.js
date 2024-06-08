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
import Form from "@/components/home/form/Form";
import Hero from "@/components/home/hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Timeline/>
      <Features/>
      <WasteEctomy/>
      <Form/>
      <HowItWorks/>
      <AppDemo/>
      <Headlines/>
      <MedicalMiracle/>
      <Difference/>
      <CallToAction/>
    </div>
  );
}
