export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Importante para SEO y accesibilidad'
        }
      ]
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'object',
      fields: [
        {
          name: 'es',
          title: 'Español',
          type: 'text'
        },
        {
          name: 'en',
          title: 'Inglés',
          type: 'text'
        }
      ]
    }
  ]
} 