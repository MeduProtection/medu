import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

export default function BlogBanner({ title, description }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';
  
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 transform-gpu blur-3xl">
          <svg
            className="h-full w-full"
            viewBox="0 0 1000 1000"
            opacity="0.2"
          >
            <circle cx="500" cy="500" r="400" fill="url(#header-gradient)" />
            <defs>
              <linearGradient
                id="header-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title || (isSpanish ? 'Nuestro Blog' : 'Our Blog')}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          {description || (isSpanish 
            ? 'Descubre las últimas noticias, artículos y recursos sobre nuestros productos y servicios.'
            : 'Discover the latest news, articles, and resources about our products and services.'
          )}
        </p>
      </div>
    </div>
  );
} 