/* Bilingual copy for the whole site. German is the default locale.
   Both locales are typed against `Copy`, so a missing or misspelled
   German key is a build error rather than a blank space on the page. */

export const LOCALES = ['de', 'en'] as const;
export type Lang = (typeof LOCALES)[number];

export interface Copy {
  meta: { title: string; description: string };
  nav: {
    shows: string;
    music: string;
    video: string;
    look: string;
    about: string;
    book: string;
    menu: string;
    themeToggle: string;
    language: string;
    themeDark: string;
    themeLight: string;
  };
  hero: {
    plate: [string, string, string];
    description: string;
    descriptionShort: string;
    nextLabel: string;
    cta: string;
    logoAlt: string;
  };
  marquee: string;
  about: {
    heading: string;
    location: string;
    body: string[];
    chip: string;
    readMore: string;
    readLess: string;
    lineupLabel: string;
    instruments: {
      vocals: string;
      guitarVocals: string;
      guitar: string;
      drums: string;
      bassGuitarVocals: string;
    };
  };
  shows: {
    heading: string;
    upcoming: string;
    past: string;
    none: string;
    tickets: string;
    flyer: string;
    doors: string;
    show: string;
    policy: string;
  };
  listen: {
    heading: string;
    demoLabel: string;
    note: string;
    tbc: string;
    track: string;
    play: string;
    pause: string;
    comingSoon: string;
  };
  video: { heading: string };
  look: {
    heading: string;
    seeAll: string;
    credit: string;
    close: string;
    prev: string;
    next: string;
    photoBy: string;
    openGallery: string;
  };
  booking: {
    eyebrow: string;
    headline: [string, string];
    body: string;
    email: string;
    pressKit: string;
    copyright: string;
    skipToContent: string;
  };
}

export const ui: Record<Lang, Copy> = {
  de: {
    meta: {
      title: 'The Drags — Blues Garage Rock aus Wien',
      description:
        'The Drags sind eine Blues-Garage-Rock-Band aus Wien, Österreich. Konzerttermine, Musik, Videos und Booking.',
    },
    nav: {
      shows: 'Konzerte',
      music: 'Musik',
      video: 'Video',
      look: 'Look',
      about: 'Über uns',
      book: 'Buchen',
      menu: 'Menü',
      themeToggle: 'Farbschema wechseln',
      language: 'Sprache wechseln',
      themeDark: 'Dunkel',
      themeLight: 'Hell',
    },
    hero: {
      plate: ['BLUES', 'GARAGE', 'ROCK'],
      description:
        'Blues Garage Rock aus Wien, Österreich. Howlin’ Wolf, Small Faces, Chess Records, Etta James, Mike Bloomfield — und alles Coole aus den 50ern und 60ern.',
      descriptionShort: 'Blues Garage Rock aus Wien, Österreich.',
      nextLabel: 'NÄCHSTER GIG',
      cta: 'Band buchen',
      logoAlt: 'The Drags',
    },
    marquee: 'HUTSPENDE · ZAHLT WAS IHR WOLLT',
    about: {
      heading: 'Über uns',
      location: 'WIEN, ÖSTERREICH',
      body: [
        'The Drags beschwören den Geist von Howlin’ Wolf, den Small Faces und den Chess-Records-Sound, gefiltert durch eine unverkennbare 60s-Pop-Garage-Blues-Linse — verzerrte Gitarren, treibende Rhythmen und Hooks, die scharf genug sind, um den Lärm zu überleben. Derzeit hat sich die Band zum Schreiben ihres Debütalbums verschanzt und jagt genau jener Energie nach, von der das Publikum im Café Carina schon einen Vorgeschmack bekommen hat.',
        'Die Besetzung bringt Wiener Musikerinnen und Musiker mit dem Chicagoer Zuwanderer Adam Arling zusammen, der auf drei Kontinenten in Hard-Rock-Bands gespielt hat, bevor er in Wien landete und der Bluesszene der Stadt verfiel. Am Mikrofon steht Lill Oehl, deren Stimme zuerst bei Blonde on Blonde auffiel, einer viel geliebten reinen Frauenband des 60s-Pop, die vor Corona die Wiener Szene prägte. Dahinter sitzt Thomas Haberl, Wiener durch und durch, der sich in Londoner Session-Studios die Sporen verdiente, und vorne die Doppelgitarren von Stefan Zisser und Alex K. — Jugendfreunde, die lange genug miteinander spielen, um die Soli des anderen zu Ende zu bringen.',
        'Bis zum nächsten Gig!',
      ],
      chip: 'Mehr folgt bald.',
      readMore: 'Mehr lesen',
      readLess: 'Weniger',
      lineupLabel: 'Die Besetzung',
      instruments: {
        vocals: 'Gesang',
        guitarVocals: 'Gitarre / Gesang',
        guitar: 'Gitarre',
        drums: 'Schlagzeug',
        bassGuitarVocals: 'Bass / Gitarre / Gesang',
      },
    },
    shows: {
      heading: 'Konzerte',
      upcoming: 'ANSTEHEND',
      past: 'VERGANGEN',
      none: 'Keine weiteren Konzerte angekündigt.',
      tickets: 'Tickets',
      flyer: 'Flyer',
      doors: 'Einlass',
      show: 'Beginn',
      policy: 'Hutspende — zahlt was ihr wollt',
    },
    listen: {
      heading: 'Hören',
      demoLabel: 'DEMO-AUFNAHME',
      note: 'Rohe Raumaufnahmen, keine Overdubs. Zwei weitere Tracks kommen diese Woche.',
      tbc: 'TITEL FOLGT',
      track: 'Track',
      play: 'Abspielen',
      pause: 'Pause',
      comingSoon: 'BALD',
    },
    video: { heading: 'Video' },
    look: {
      heading: 'Look',
      seeAll: 'ALLE {n} ANSEHEN',
      credit: 'FOTOS VON {a} & {b}',
      close: 'Schließen',
      prev: 'Vorheriges Foto',
      next: 'Nächstes Foto',
      photoBy: 'Foto',
      openGallery: 'Galerie öffnen',
    },
    booking: {
      eyebrow: 'BOOKING & PRESSE',
      headline: ['Sag', 'wann.'],
      body: 'Clubs, Bars, Festivals, Hinterzimmer, besetzte Punkrock-Häuser, Buschenschanken, was auch immer. Schreibt uns.',
      email: 'contactthedrags@gmail.com',
      pressKit: 'Pressekit laden',
      copyright: '© {year} THE DRAGS — WIEN',
      skipToContent: 'Zum Inhalt springen',
    },
  },

  en: {
    meta: {
      title: 'The Drags — Blues Garage Rock from Vienna',
      description:
        'The Drags are a blues garage rock band from Vienna, Austria. Show dates, music, video and booking.',
    },
    nav: {
      shows: 'Shows',
      music: 'Music',
      video: 'Video',
      look: 'Look',
      about: 'About',
      book: 'Book us',
      menu: 'Menu',
      themeToggle: 'Switch colour scheme',
      language: 'Switch language',
      themeDark: 'Dark',
      themeLight: 'Light',
    },
    hero: {
      plate: ['BLUES', 'GARAGE', 'ROCK'],
      description:
        'Blues garage rock from Vienna, Austria. Howlin’ Wolf, Small Faces, Chess Records, Etta James, Mike Bloomfield — and everything cool from the ’50s and ’60s.',
      descriptionShort: 'Blues garage rock from Vienna, Austria.',
      nextLabel: 'NEXT',
      cta: 'Book the band',
      logoAlt: 'The Drags',
    },
    marquee: 'PASS THE HAT · PAY WHAT YOU LIKE',
    about: {
      heading: 'About',
      location: 'VIENNA, AUSTRIA',
      body: [
        'The Drags channel the spirit of Howlin’ Wolf, the Small Faces, and the Chess Records sound, filtered through a distinctly 60s pop garage blues lens — fuzzed-out guitars, driving rhythms, and sweet hooks. The band is leisurely crafting their debut album, chasing that same vibe local live audiences have caught a glimpse of at Café Carina.',
        'The lineup pairs local Viennese musicians with a Chicago transplant Adam Arling, who has logged time in rock/indie outfits across three continents before landing in Vienna and falling hard for the city’s blues scene. Fronting the band is Lill Oehl, whose voice first turned heads in Blonde on Blonde, a beloved all-female 60s pop outfit that made its mark on the Vienna scene. Beating the skins is Thomas Haberl, a Vienna native who cut his teeth in London session rooms, and out front the twin guitars of Stefan Zisser and Alex K. — longtime friends who have been trading licks long enough to finish each other’s solos.',
      ],
      chip: 'More to come soon.',
      readMore: 'Read more',
      readLess: 'Less',
      lineupLabel: 'The lineup',
      instruments: {
        vocals: 'Vocals',
        guitarVocals: 'Guitar / Vocals',
        guitar: 'Guitar',
        drums: 'Drums',
        bassGuitarVocals: 'Bass / Guitar / Vocals',
      },
    },
    shows: {
      heading: 'Shows',
      upcoming: 'UPCOMING',
      past: 'PAST',
      none: 'No further shows announced.',
      tickets: 'Tickets',
      flyer: 'Flyer',
      doors: 'Doors',
      show: 'Show',
      policy: 'Pass the hat — pay what you like',
    },
    listen: {
      heading: 'Listen',
      demoLabel: 'DEMO RECORDING',
      note: 'Raw room recordings, no overdubs. Two more tracks land this week.',
      tbc: 'TITLE TBC',
      track: 'Track',
      play: 'Play',
      pause: 'Pause',
      comingSoon: 'SOON',
    },
    video: { heading: 'Video' },
    look: {
      heading: 'Look',
      seeAll: 'SEE ALL {n}',
      credit: 'PHOTOS BY {a} & {b}',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
      photoBy: 'Photo',
      openGallery: 'Open gallery',
    },
    booking: {
      eyebrow: 'BOOKING & PRESS',
      headline: ['Say', 'when.'],
      body: 'Clubs, bars, festivals, back rooms, punk rock squatter flats, Buschenschanken, you name it. Drop us a line.',
      email: 'contactthedrags@gmail.com',
      pressKit: 'Download press kit',
      copyright: '© {year} THE DRAGS — VIENNA',
      skipToContent: 'Skip to content',
    },
  },
};
