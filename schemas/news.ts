export default {
    title: 'News',
    name: 'news',
    type: 'document',
    fields: [
        {
          title: 'Titel',
          name: 'titel',
          type: 'string',
        },
        {
          title: 'Text',
          type: 'text',
          name: 'text',
        },
        {
            title: 'Bild',
            name: 'bild',
            type: 'image',
        },
        {
          title: 'Publiziert von',
          name: 'publiziertVon',
          type: 'date',
        },
        {
            title: 'Publiziert bis',
            name: 'publiziertBis',
            type: 'date',
        },
        {
            title: 'Status',
            name: 'status',
            type: 'boolean',
        }
    ]
}