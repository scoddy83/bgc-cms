import instrumenttyp from "./instrumenttyp";

export default {
    title: 'Instrument',
    name: 'instrument',
    type: 'document',
    fields: [
        {
          title: 'Instrument',
          name: 'instrument',
          type: 'string',
        },
        {
          title: 'Register',
          type: 'reference',
          name: 'register',
          to: [{type: 'instrumenttyp'}],
        },
        {
          title: 'Bild',
          name: 'bild',
          type: 'image',
        }
    ]
}