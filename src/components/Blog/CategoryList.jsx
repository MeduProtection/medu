import React, { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '../../Context/AppContext';

export default function CategoryList({ categories, activeCategory = null }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        {isSpanish ? 'Categorías' : 'Categories'}
      </h3>
      <div className="flex flex-wrap gap-2">
        <Link 
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm ${
            !activeCategory 
              ? 'bg-[#1B3954] text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {isSpanish ? 'Todos' : 'All'}
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/blog/category/${category.slug.current}`}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category.slug.current
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.title[isSpanish ? 'es' : 'en']}
          </Link>
        ))}
      </div>
    </div>
  );
} 