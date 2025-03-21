import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { AppContext } from '../../Context/AppContext';

export default function RelatedPosts({ posts }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {isSpanish ? 'Entradas relacionadas' : 'Related posts'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02] bg-white dark:bg-gray-800 h-full flex flex-col">
              <div className="relative h-48">
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
              
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {post.title[isSpanish ? 'es' : 'en']}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 flex-1">
                  {post.excerpt[isSpanish ? 'es' : 'en']}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 