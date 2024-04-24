export default {
    title: 'Sujet',
    name: 'sujet',
    type: 'document',
    fields: [
        {
          title: 'Sujet',
          name: 'sujet',
          type: 'string',
        },
        {
          title: 'Zedel',
          type: 'text',
          name: 'zedel',
        },
        {
            title: 'Datum Morgenstreich',
            type: 'date',
            name: 'datum',
        },
        {
            title: 'Vortrab',
            type: 'string',
            name: 'vortrab',
        },
        {
          title: 'Requisit',
          type: 'string',
          name: 'requisit',
        },
        {
            title: 'Major',
            type: 'string',
            name: 'major',
        },
        {
            title: 'Spiel',
            type: 'string',
            name: 'spiel',
        },
        {
          title: 'Bild',
          name: 'bild',
          type: 'image',
        }
    ]
}