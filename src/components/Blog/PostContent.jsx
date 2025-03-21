import React, { useContext, useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { AppContext } from '../../Context/AppContext';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
// Importar lenguajes adicionales para el resaltado de sintaxis
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-bash';

export default function PostContent({ content }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';
  
  const contentToRender = content[isSpanish ? 'es' : 'en'];
  
  // Activar el resaltado de sintaxis después de que el componente se monte
  useEffect(() => {
    Prism.highlightAll();
  }, [contentToRender]);
  
  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset) {
          return null;
        }
        
        return (
          <div className="my-8 relative">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <Image
                src={urlForImage(value).url()}
                alt={value.alt || ''}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {value.caption && (
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                {value.caption}
              </div>
            )}
          </div>
        );
      },
      code: ({ value }) => {
        if (!value) {
          return null;
        }
        
        // El plugin @sanity/code-input proporciona estos campos
        const { code, language, filename } = value;
        
        return (
          <div className="my-6 rounded-lg overflow-hidden">
            {filename && (
              <div className="bg-gray-800 text-white text-xs px-4 py-2 flex items-center">
                <span>{filename}</span>
              </div>
            )}
            <pre className={`language-${language || 'text'}`}>
              <code className={`language-${language || 'text'}`}>
                {code}
              </code>
            </pre>
          </div>
        );
      },
    },
    block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold my-6 text-gray-900 dark:text-white">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-bold my-5 text-gray-900 dark:text-white">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-bold my-4 text-gray-900 dark:text-white">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg font-bold my-4 text-gray-900 dark:text-white">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="pl-4 border-l-4 border-blue-500 my-6 italic text-gray-700 dark:text-gray-300">
          {children}
        </blockquote>
      ),
      normal: ({ children }) => (
        <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 my-4 text-gray-700 dark:text-gray-300 space-y-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 my-4 text-gray-700 dark:text-gray-300 space-y-2">{children}</ol>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded font-mono text-sm">
          {children}
        </code>
      ),
      underline: ({ children }) => <span className="underline">{children}</span>,
      'strike-through': ({ children }) => <span className="line-through">{children}</span>,
    },
  };

  return (
    <div className="prose prose-lg md:prose-xl max-w-none dark:prose-invert">
      <PortableText value={contentToRender} components={components} />
    </div>
  );
} 