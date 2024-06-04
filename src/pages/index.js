import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/home/Hero";
import Timeline from "@/components/home/timeline/TimeLine";
import Features from "@/components/home/features/Features";
import WasteEctomy from "@/components/home/wasteEctomy/WasteEctomy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero/>
      <Timeline/>
      <Features/>
      <WasteEctomy/>
    </div>
  );
}
