// We import object and document schemas
// import { instrumente } from "./instrumente";

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
          name: 'instrument',
          type: 'string',
        },
        {
          title: 'Vorstand',
          name: 'vorstand',
          type: 'string',
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