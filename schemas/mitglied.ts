// We import object and document schemas
 import instrument from "./instrumente";
 import vorstand from "./vorstand";

export default {
    title: 'Mitglied',
    name: 'mitglied',
    type: 'document',
    fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Vorname',
          name: 'vorname',
          type: 'string',
        },
        {
          title: 'Geburtsdatum',
          name: 'geburtsdatum',
          type: 'date',
        },
        {
          title: 'Spruch',
          name: 'spruch',
          type: 'string',
        },
        {
          title: 'Instrument',
          type: 'reference',
          name: 'instrument',
          to: [{type: 'instrument'}],
        },
        {
          title: 'Vorstand',
          type: 'reference',
          name: 'vorstand',
          to: [{type: 'vorstand'}],
        },
        {
          title: 'Mitglied sit',
          name: 'eintritt',
          type: 'date',
        },
        {
          title: 'Mail',
          name: 'mail',
          type: 'string',
        },
        {
          title: 'Mobile',
          name: 'mobile',
          type: 'string',
        },  
        {
          title: 'Profilbild',
          name: 'profilbild',
          type: 'image',
        }
    ]
}