import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import Image from 'next/image';

export default function BlogBanner({ title, description }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';
  
  return (
    <div className="relative h-[400px] w-full"> {/* Asegúrate de que el contenedor principal tenga altura fija */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        <Image 
          src="/assets/Blog/blogbanner.png" 
          alt="Blog Banner" 
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        <div 
         className='bg-black/50 absolute inset-0'
        />
      </div>
    </div>
    
    <div className="absolute inset-0 flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title || (isSpanish ? 'Nuestro Blog' : 'Our Blog')}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          {description || (isSpanish 
            ? 'Descubre las últimas noticias, artículos y recursos sobre nuestros productos y servicios.'
            : 'Discover the latest news, articles, and resources about our products and services.'
          )}
        </p>
      </div>
    </div>
  </div>
  );
} 