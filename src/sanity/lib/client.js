import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
})

// Función para obtener todas las entradas del blog
export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    slug,
    mainImage,
    title,
    excerpt,
    publishedAt,
    author->{name, slug, image},
    categories[]->{title, slug}
  }`)
}

// Función para obtener una entrada específica por su slug
export async function getPost(slug) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0] {
    _id,
    slug,
    mainImage,
    title,
    excerpt,
    publishedAt,
    content,
    author->{name, slug, image, bio},
    categories[]->{title, slug}
  }`, { slug })
}

// Función para obtener todas las categorías
export async function getCategories() {
  return client.fetch(`*[_type == "category"] | order(title.es asc) {
    _id,
    title,
    slug
  }`)
}

// Función para obtener entradas relacionadas (misma categoría)
export async function getRelatedPosts(slug, categoryIds) {
  return client.fetch(`*[_type == "post" && slug.current != $slug && references($categoryIds)] | order(publishedAt desc)[0...3] {
    _id,
    slug,
    mainImage,
    title,
    excerpt,
    publishedAt,
    author->{name, slug, image},
    categories[]->{title, slug}
  }`, { slug, categoryIds })
}

// Función para obtener entradas por categoría
export async function getPostsByCategory(categorySlug) {
  return client.fetch(`*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    _id,
    slug,
    mainImage,
    title,
    excerpt,
    publishedAt,
    author->{name, slug, image},
    categories[]->{title, slug}
  }`, { categorySlug })
}
