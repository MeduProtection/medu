import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/Context/AppContext";
import "@/styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <>
    <AppProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
      
    </>
  );
  
}
