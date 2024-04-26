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
        type: 'image',
        name: 'bild',
      },
      {
          title: 'Titel',
          type: 'string',
          name: 'PageTitle',
      },
      {
        title: 'Text',
        name: 'shortText',
        type: 'text',
      }
  ]
}