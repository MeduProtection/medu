import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/Context/AppContext";
import "@/styles/globals.css";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHoldPage = router.pathname === "/" || router.pathname === "/404";

  useEffect(() => {
    if (!isHoldPage) return;

    // Hide HubSpot chat/widget and any chatwith widget on hold page and 404 page.
    const style = document.createElement("style");
    style.id = "hide-hubspot-chat";
    style.innerHTML = `
      #hubspot-messages-iframe-container,
      iframe[id^="hubspot-conversations-iframe"],
      iframe[src*="hubspot.com/conversations-iframe"],
      iframe[src*="chat"],
      #chatwith-widget-d58b6232-33ed-458e-962c-5d8b34db2894 {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, [isHoldPage]);

  return (
    <>
    <AppProvider>
      {!isHoldPage && <Navbar />}
      <Component {...pageProps} />
      {!isHoldPage && <Footer />}
    </AppProvider>

    </>
  );
  
}
