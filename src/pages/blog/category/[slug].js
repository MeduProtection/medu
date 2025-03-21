import React, { useContext } from 'react';
import Head from 'next/head';
import { getCategories, getPostsByCategory } from '../../../sanity/lib/client';
import PostCard from '../../../components/Blog/PostCard';
import CategoryList from '../../../components/Blog/CategoryList';
import BlogBanner from '../../../components/Blog/BlogBanner';
import { AppContext } from '../../../Context/AppContext';

export default function CategoryPage({ category, posts, categories }) {
  const { idioma } = useContext(AppContext);
  const isSpanish = idioma.nombre === 'ES';

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {isSpanish ? 'Categoría no encontrada' : 'Category not found'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {isSpanish
            ? 'La categoría que buscas no existe o ha sido eliminada.'
            : 'The category you are looking for does not exist or has been removed.'}
        </p>
      </div>
    );
  }

  const title = category.title[isSpanish ? 'es' : 'en'];
  const description = category.description?.[isSpanish ? 'es' : 'en'];

  return (
    <>
      <Head>
        <title>
          {isSpanish
            ? `${title} - Blog de MEDU Protection`
            : `${title} - MEDU Protection Blog`}
        </title>
        <meta
          name="description"
          content={
            description ||
            (isSpanish
              ? `Explora nuestros artículos sobre ${title} en el blog de MEDU Protection.`
              : `Explore our articles about ${title} on the MEDU Protection blog.`)
          }
        />
      </Head>

      <BlogBanner 
        title={title}
        description={description}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CategoryList 
              categories={categories} 
              activeCategory={category.slug.current}
            />
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
                    ? `Aún no hay entradas publicadas en la categoría "${title}".`
                    : `There are no posts published in the "${title}" category yet.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const categories = await getCategories();
  const paths = categories.map((category) => ({
    params: { slug: category.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  try {
    const categories = await getCategories();
    const category = categories.find((cat) => cat.slug.current === params.slug);
    
    if (!category) {
      return {
        notFound: true,
      };
    }
    
    const posts = await getPostsByCategory(params.slug);

    return {
      props: {
        category,
        posts,
        categories,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching category data:', error);
    return {
      notFound: true,
    };
  }
} 