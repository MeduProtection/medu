import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - MEDU Protection</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2f7fa] via-white to-[#f2f7fa] overflow-hidden">
        {/* Floating background elements */}
        <span className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#95BC67]/20 blur-3xl animate-float-slow" />
        <span className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#4E88B0]/15 blur-3xl animate-float" />
        <span className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1B3954]/10 blur-3xl animate-float-slower" />

        <div className="relative text-center px-6 py-20 md:py-28 max-w-3xl mx-auto animate-fade-in">
          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-[#1B3954]/10 text-[120px] md:text-[200px] lg:text-[240px] font-bold leading-none select-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="relative -mt-20 md:-mt-32 lg:-mt-40">
            <h2 className="text-[#1B3954] text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-sm mb-4">
              MEDU Protection
            </h2>
            <h3 className="text-[#4E88B0] text-2xl md:text-4xl font-semibold mb-6">
              Page Not Found
            </h3>
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Decorative line */}
            <div className="flex justify-center gap-2 mb-8">
              <span className="h-1.5 w-12 bg-[#95BC67] rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-[#4E88B0] rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-[#4E88B0] rounded-full"></span>
            </div>

            {/* CTA Button */}
            <Link href="/">
              <button className="text-white bg-[#95BC67] hover:bg-[#7da355] transition-colors duration-300 rounded-[40px] text-lg md:text-xl px-8 py-3.5 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Back to Home
              </button>
            </Link>
          </div>
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
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
          .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
          .animate-fade-in { animation: fade-in 700ms ease-out 120ms both; }
        `}</style>
      </div>
    </>
  );
}
