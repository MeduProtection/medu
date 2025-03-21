export default {
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'object',
      fields: [
        {
          name: 'es',
          title: 'Español',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'en',
          title: 'Inglés',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'description',
      title: 'Descripción',
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
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.es',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }
  ]
} 