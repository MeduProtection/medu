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

        {/* Additional decorative elements */}
        <span className="pointer-events-none absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-[#95BC67]/10 blur-2xl animate-pulse-slow" />
        <span className="pointer-events-none absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-[#4E88B0]/10 blur-2xl animate-pulse-slower" />

        <div className="relative text-center px-6 py-20 md:py-28 max-w-4xl mx-auto">
          {/* 404 Number with enhanced animation */}
          <div className="mb-6 animate-404">
            <h1 className="text-[#1B3954]/15 text-[140px] md:text-[220px] lg:text-[280px] font-bold leading-none select-none tracking-tight">
              404
            </h1>
          </div>

          {/* Main Message with staggered animations */}
          <div className="relative -mt-24 md:-mt-40 lg:-mt-52">
            {/* Brand badge */}
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <span className="inline-block px-6 py-2 bg-[#95BC67]/10 text-[#95BC67] text-sm md:text-base font-semibold rounded-full border border-[#95BC67]/20">
                MEDU Protection
              </span>
            </div>

            <h2 className="text-[#1B3954] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-sm mb-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
              Page Not Found
            </h2>

            <p className="text-gray-700 text-lg md:text-2xl max-w-2xl mx-auto mb-4 leading-relaxed animate-slide-up" style={{ animationDelay: '600ms' }}>
              Oops! The page you're looking for doesn't exist.
            </p>

            <p className="text-[#4E88B0] text-base md:text-lg max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '700ms' }}>
              It might have been moved or deleted. Let's get you back on track.
            </p>

            {/* Decorative line with animation */}
            <div className="flex justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '800ms' }}>
              <span className="h-1.5 w-16 bg-gradient-to-r from-[#95BC67] to-[#4E88B0] rounded-full animate-shimmer"></span>
              <span className="h-1.5 w-1.5 bg-[#4E88B0] rounded-full animate-pulse"></span>
              <span className="h-1.5 w-1.5 bg-[#1B3954] rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></span>
            </div>

            {/* CTA Button with enhanced hover effects */}
            <div className="animate-slide-up" style={{ animationDelay: '900ms' }}>
              <Link href="/">
                <button className="group relative text-white bg-[#95BC67] hover:bg-[#7da355] transition-all duration-300 rounded-[40px] text-lg md:text-xl px-10 py-4 font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7da355] to-[#95BC67] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </Link>
            </div>
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
          @keyframes slide-up {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes animate-404 {
            0% {
              opacity: 0;
              transform: scale(0.5) rotate(-5deg);
              filter: blur(20px);
            }
            50% {
              transform: scale(1.05) rotate(2deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
              filter: blur(0px);
            }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          @keyframes pulse-slower {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.15); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
          .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
          .animate-slide-up { animation: slide-up 800ms cubic-bezier(0.34, 1.56, 0.64, 1) both; }
          .animate-404 { animation: animate-404 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
          .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
          .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
          .animate-shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
            animation: shimmer 3s infinite;
          }
        `}</style>
      </div>
    </>
  );
}
