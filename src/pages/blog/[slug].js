import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { getPost, getPosts, getRelatedPosts } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
import PostContent from '../../components/Blog/PostContent';
import RelatedPosts from '../../components/Blog/RelatedPosts';
import { AppContext } from '../../Context/AppContext';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import Link from 'next/link';

export default function PostPage({ post, relatedPosts }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';

  const formatDate = (date) => {
    return format(
      new Date(date),
      'dd MMMM, yyyy',
      { locale: isSpanish ? es : enUS }
    );
  };

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {isSpanish ? 'Entrada no encontrada' : 'Post not found'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {isSpanish
            ? 'La entrada que buscas no existe o ha sido eliminada.'
            : 'The post you are looking for does not exist or has been removed.'}
        </p>
        <Link
          href="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          {isSpanish ? 'Volver al blog' : 'Return to blog'}
        </Link>
      </div>
    );
  }

  const title = post.title[isSpanish ? 'es' : 'en'];
  const excerpt = post.excerpt[isSpanish ? 'es' : 'en'];
  const metaTitle = post.seo?.metaTitle?.[isSpanish ? 'es' : 'en'] || title;
  const metaDescription = post.seo?.metaDescription?.[isSpanish ? 'es' : 'en'] || excerpt;
  const keywords = post.seo?.keywords?.[isSpanish ? 'es' : 'en']?.join(', ') || '';

  return (
    <>
      <Head>
        <title>{metaTitle} - MEDU Protection</title>
        <meta name="description" content={metaDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {post.mainImage && (
          <meta property="og:image" content={urlForImage(post.mainImage).url()} />
        )}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
      </Head>

      <article className="bg-white dark:bg-gray-900">
        {/* Hero */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          {post.mainImage ? (
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.mainImage.alt || title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center text-white/80 text-sm mb-4 gap-x-4 gap-y-2">
                  <span>{formatDate(post.publishedAt)}</span>
                  {post.categories?.length > 0 && (
                    <>
                      <span>•</span>
                      <div className="flex flex-wrap gap-2">
                        {post.categories.map((category) => (
                          <Link
                            key={category._id}
                            href={`/blog/category/${category.slug.current}`}
                            className="hover:text-white"
                          >
                            {category.title[isSpanish ? 'es' : 'en']}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 md:p-8">
                <PostContent content={post.content} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Author */}
                {post.author && (
                  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      {isSpanish ? 'Sobre el autor' : 'About the author'}
                    </h3>
                    <div className="flex items-center mb-4">
                      {post.author.image ? (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={urlForImage(post.author.image).width(128).height(128).url()}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                          <span className="text-xl text-gray-500 dark:text-gray-400">
                            {post.author.name.substring(0, 2)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {post.author.name}
                        </h4>
                        <Link 
                          href={`/blog/author/${post.author.slug.current}`}
                          className="text-sm text-[#95BC67]  dark:text-blue-400 hover:underline"
                        >
                          {isSpanish ? 'Ver perfil' : 'View profile'}
                        </Link>
                      </div>
                    </div>
                    {post.author.bio && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {post.author.bio[isSpanish ? 'es' : 'en']}
                      </p>
                    )}
                  </div>
                )}

                {/* Share */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    {isSpanish ? 'Compartir' : 'Share'}
                  </h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(title)}`, '_blank')}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-5 h-5 text-[#95BC67] " fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.461 5.393c-.82.363-1.7.607-2.624.718 1.943-1.295 2.62-2.073 2.824-3.262-1.076.716-2.127 1.133-3.39 1.38-1.015-1.083-2.465-1.76-4.065-1.76-3.073 0-5.564 2.497-5.564 5.574 0 .437.05.862.145 1.27-4.613-.224-8.7-2.446-11.432-5.812-.475.822-.748 1.775-.748 2.788 0 1.926.986 3.627 2.485 4.623-.917-.026-1.77-.285-2.523-.7v.07c0 2.696 1.92 4.948 4.469 5.456-.467.128-.959.195-1.469.195-.359 0-.706-.035-1.047-.104.707 2.214 2.784 3.83 5.24 3.876-1.914 1.51-4.32 2.41-6.937 2.41-.45 0-.897-.028-1.335-.08 2.478 1.596 5.422 2.534 8.589 2.534 10.307 0 15.936-8.575 15.936-16.014 0-.244-.003-.488-.012-.73 1.092-.744 2.039-1.773 2.792-3.04-.33.147-1.682.73-2.845.848z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`, '_blank')}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5 text-[#95BC67] " fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.992 3.656 9.129 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.77-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.992 22 12z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`, '_blank')}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5 text-[#95BC67] " fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.995 5.996a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-16a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h16zM8 18V9.724H5.372V18H8zm-1.314-9.432c.911 0 1.485-.637 1.485-1.432-.018-.813-.574-1.432-1.462-1.432-.9 0-1.485.619-1.485 1.432 0 .795.562 1.432 1.462 1.432zM19 18v-4.55c0-2.204-1.274-3.207-2.892-3.207-1.333 0-1.932.732-2.267 1.245V10.13h-2.62c.035.749 0 7.864 0 7.864h2.62v-4.402c0-.215.016-.431.08-.586.173-.431.567-.876 1.227-.876.867 0 1.214.657 1.214 1.62V18H19z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: title,
                            text: excerpt,
                            url: typeof window !== 'undefined' ? window.location.href : '',
                          });
                        } else {
                          navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
                          alert(isSpanish ? '¡Enlace copiado!' : 'Link copied!');
                        }
                      }}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Copy link"
                    >
                      <svg className="w-5 h-5 text-[#95BC67]  dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  try {
    const post = await getPost(params.slug);
    
    if (!post) {
      return {
        notFound: true,
      };
    }

    const categoryIds = post.categories?.map((category) => category._id) || [];
    const relatedPosts = await getRelatedPosts(params.slug, categoryIds);

    return {
      props: {
        post,
        relatedPosts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching post data:', error);
    return {
      notFound: true,
    };
  }
} 