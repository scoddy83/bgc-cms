export default {
    title: 'Instrument',
    name: 'instrument',
    type: 'document',
    fields: [
        {
          title: 'Name',
          name: 'jahNamer',
          type: 'string',
        },
        {
          title: 'Vorname',
          name: 'vorname',
          type: 'date',
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
          type: 'instrumente',
        },
        {
          title: 'Vorstand',
          name: 'vorstand',
          type: 'vorstand',
        },
        {
          title: 'Mitglied sit',
          name: 'eintritt',
          type: 'date',
        },
        {
          title: 'Profilbild',
          name: 'profilbild',
          type: 'image',
        }
    ]
}