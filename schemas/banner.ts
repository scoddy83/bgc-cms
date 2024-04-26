export default {
  title: 'Banner',
  name: 'banner',
  type: 'document',
  fields: [
      {
        title: 'Page',
        name: 'page',
        type: 'string',
      },
      {
        title: 'Bild',
        type: 'bild',
        name: 'image',
      },
      {
          title: 'Titel',
          type: 'titel',
          name: 'string',
      },
      {
        title: 'Text',
        name: 'shortText',
        type: 'text',
      }
  ]
}