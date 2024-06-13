import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <a
        href="https://wa.me/+5255?text=Hello!%20Could%20you%20give%20me%20more%20information?"
        className='animate-pulse transition-all duration-700 hover:animate-none hover:scale-110 '
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          padding: '10px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          textDecoration: 'none'
        }}
        onClick={() => {
          if (typeof window !== 'undefined') {
            sendGTMEvent('whatsapp', 'click', 'whatsapp');
          }
        }}
      >
        <Image
          src="/assets/icons/whatsapp.svg"
          alt="WhatsApp"
          width={100}
          height={100}
          style={{ width: '48px', height: '48px' }}
        />
      </a>
    </>
  );
  
}
