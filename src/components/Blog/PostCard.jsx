import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { AppContext } from '../../Context/AppContext';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

export default function PostCard({ post }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';
  
  const formatDate = (date) => {
    return format(
      new Date(date),
      'dd MMMM, yyyy',
      { locale: isSpanish ? es : enUS }
    );
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white dark:bg-gray-800">
      <div className="relative h-48 sm:h-64">
        {post.mainImage ? (
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.mainImage.alt || post.title[isSpanish ? 'es' : 'en']}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
            <span className="text-gray-400 dark:text-gray-500">No imagen</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-2">•</span>
          <span>
            {post.categories && post.categories.length > 0 
              ? post.categories[0].title[isSpanish ? 'es' : 'en'] 
              : isSpanish ? 'Sin categoría' : 'Uncategorized'}
          </span>
        </div>
        
        <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 dark:text-white">
          <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {post.title[isSpanish ? 'es' : 'en']}
          </Link>
        </h3>
        
        <p className="flex-1 mb-4 text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {post.excerpt[isSpanish ? 'es' : 'en']}
        </p>
        
        <div className="flex items-center mt-auto">
          {post.author?.image ? (
            <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
              <Image
                src={urlForImage(post.author.image).width(96).height(96).url()}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mr-3 flex items-center justify-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {post.author?.name?.substring(0, 2) || '?'}
              </span>
            </div>
          )}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {post.author?.name || (isSpanish ? 'Autor desconocido' : 'Unknown author')}
          </span>
        </div>
      </div>
    </div>
  );
} 