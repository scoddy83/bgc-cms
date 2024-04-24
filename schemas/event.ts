export default {
    title: 'Event',
    name: 'event',
    type: 'document',
    fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Text',
          type: 'text',
          name: 'text',
        },
        {
          title: 'Event Datum',
          name: 'eventDatum',
          type: 'date',
        },
        {
          title: 'Ort',
          name: 'ort',
          type: 'string',
        },
        {
          title: 'Veranstalter',
          name: 'veranstalter',
          type: 'string',
        },
        {
          title: 'Link',
          name: 'link',
          type: 'url',
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