export default {
  name: 'post',
  title: 'Entrada de Blog',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.es',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Imagen Principal',
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
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Extracto',
      type: 'object',
      fields: [
        {
          name: 'es',
          title: 'Español',
          type: 'text',
          validation: Rule => Rule.required()
        },
        {
          name: 'en',
          title: 'Inglés',
          type: 'text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'content',
      title: 'Contenido',
      type: 'object',
      fields: [
        {
          name: 'es',
          title: 'Español',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Cita', value: 'blockquote'}
              ],
              lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Code', value: 'code'},
                  {title: 'Underline', value: 'underline'},
                  {title: 'Strike', value: 'strike-through'}
                ]
              }
            },
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {
                  name: 'alt',
                  title: 'Texto alternativo',
                  type: 'string',
                  description: 'Importante para SEO y accesibilidad',
                  options: {
                    isHighlighted: true
                  }
                },
                {
                  name: 'caption',
                  title: 'Leyenda',
                  type: 'string',
                  options: {
                    isHighlighted: true
                  }
                }
              ]
            },
            {
              type: 'code',
              options: {
                withFilename: true
              }
            }
          ],
          validation: Rule => Rule.required()
        },
        {
          name: 'en',
          title: 'Inglés',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'}
              ],
              lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Code', value: 'code'},
                  {title: 'Underline', value: 'underline'},
                  {title: 'Strike', value: 'strike-through'}
                ]
              }
            },
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description: 'Important for SEO and accessibility',
                  options: {
                    isHighlighted: true
                  }
                },
                {
                  name: 'caption',
                  title: 'Caption',
                  type: 'string',
                  options: {
                    isHighlighted: true
                  }
                }
              ]
            },
            {
              type: 'code',
              options: {
                withFilename: true
              }
            }
          ],
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta título',
          type: 'object',
          fields: [
            {
              name: 'es',
              title: 'Español',
              type: 'string'
            },
            {
              name: 'en',
              title: 'Inglés',
              type: 'string'
            }
          ]
        },
        {
          name: 'metaDescription',
          title: 'Meta descripción',
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
          name: 'keywords',
          title: 'Palabras clave',
          type: 'object',
          fields: [
            {
              name: 'es',
              title: 'Español',
              type: 'array',
              of: [{type: 'string'}]
            },
            {
              name: 'en',
              title: 'Inglés',
              type: 'array',
              of: [{type: 'string'}]
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title.es',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `por ${author}`
      })
    }
  }
} 