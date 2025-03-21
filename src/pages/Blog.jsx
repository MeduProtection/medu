import React, { useContext } from 'react';
import Head from 'next/head';
import { getPosts, getCategories } from '../sanity/lib/client';
import PostCard from '../components/Blog/PostCard';
import CategoryList from '../components/Blog/CategoryList';
import BlogBanner from '../components/Blog/BlogBanner';
import { AppContext } from '../Context/AppContext';

export default function Blog({ posts, categories }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';

  return (
    <>
      <Head>
        <title>{isSpanish ? 'Blog - MEDU Protection' : 'Blog - MEDU Protection'}</title>
        <meta
          name="description"
          content={
            isSpanish
              ? 'Explora nuestro blog para conocer las últimas noticias, artículos y recursos sobre MEDU Protection.'
              : 'Explore our blog to learn about the latest news, articles, and resources about MEDU Protection.'
          }
        />
      </Head>

      <BlogBanner />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CategoryList categories={categories} />
          </div>

          <div className="lg:col-span-3">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  {isSpanish ? 'No se encontraron entradas' : 'No posts found'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {isSpanish
                    ? 'Aún no hay entradas publicadas en esta categoría.'
                    : 'There are no posts published in this category yet.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const posts = await getPosts();
    const categories = await getCategories();

    return {
      props: {
        posts,
        categories,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return {
      props: {
        posts: [],
        categories: [],
      },
      revalidate: 60,
    };
  }
}
