import { prisma } from '../..'

export const checkpoints = async () =>
  await prisma.checkpoint.createMany({
    data: [
      {
        gameId: 1,
        title: 'Startovní bod',
        description: 'Začněte své dobrodružství zde!',
        mapId: 1,
        riddle: 'Co má klíče, ale nemůže otevírat zámky?',
        gpsCoordinates: '50.0755° N, 14.4378° E',
        reachDescription: 'Dosáhli jste startovního bodu.',
        maxPoints: 100,
        pointsPenalty: 0,
        order: 1,
        imageId: 17,
        answer: {
          "correctAnswers": ['klávesnice']
        },
      },
      {
        gameId: 1,
        title: 'Tajemná Jeskyně',
        description: 'Prozkoumejte hloubky jeskyně.',
        mapId: 18,
        riddle: 'Čím víc jich berete, tím víc jich zanecháváte za sebou. Co je to?',
        gpsCoordinates: '50.0755° N, 14.4378° E',
        reachDescription: 'Dosáhli jste tajemné jeskyně.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 19,
        answer: {
          "correctAnswers": ['kroky']
        },
      },
      {
        gameId: 2,
        title: 'Vstupní brána',
        description: 'Začněte svoji cestu zde.',
        mapId: 20,
        riddle: 'Jaká budova má nejvíce příběhů?',
        gpsCoordinates: '49.1951° N, 16.6068° E',
        reachDescription: 'Dosáhli jste vstupní brány.',
        maxPoints: 100,
        pointsPenalty: 0,
        order: 1,
        imageId: 21,
        answer: {
          "correctAnswers": ['knihovna']
        },
      },
      {
        gameId: 2,
        title: 'Skrytá komnata',
        description: 'Objevte skrytou komnatu.',
        mapId: 22,
        riddle: 'Co má jedno oko, ale nemůže vidět?',
        gpsCoordinates: '49.1951° N, 16.6068° E',
        reachDescription: 'Dosáhli jste skryté komnaty.',
        maxPoints: 200,
        pointsPenalty: 20,
        order: 2,
        imageId: 23,
        answer: {
          "correctAnswers": ['jehla']
        },
      },
      {
        gameId: 3,
        title: 'Městské Náměstí',
        description: 'Projděte se náměstím.',
        mapId: 24,
        riddle: 'Co je plné děr, ale stále drží vodu?',
        gpsCoordinates: '49.5955° N, 17.2518° E',
        reachDescription: 'Dosáhli jste městského náměstí.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 25,
        answer: {
          "correctAnswers": ['houba']
        },
      },
      {
        gameId: 3,
        title: 'Starý Hrad',
        description: 'Objevte tajemství starého hradu.',
        mapId: 26,
        riddle: 'Co má jednu hlavu, jednu nohu a čtyři ruce?',
        gpsCoordinates: '49.5955° N, 17.2518° E',
        reachDescription: 'Dosáhli jste starého hradu.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 27,
        answer: {
          "correctAnswers": ['postel']
        },
      },
      {
        gameId: 4,
        title: 'Strašidelný Les',
        description: 'Prozkoumejte strašidelný les.',
        mapId: 28,
        riddle: 'Co letí bez křídel?',
        gpsCoordinates: '49.7451° N, 13.3774° E',
        reachDescription: 'Dosáhli jste strašidelného lesa.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 29,
        answer: {
          "correctAnswers": ['čas']
        },
      },
      {
        gameId: 4,
        title: 'Opustěný Dům',
        description: 'Prozkoumejte opuštěný dům.',
        mapId: 30,
        riddle: 'Co běží, ale nikdy se nepohybuje?',
        gpsCoordinates: '49.7451° N, 13.3774° E',
        reachDescription: 'Dosáhli jste opuštěného domu.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 31,
        answer: {
          "correctAnswers": ['řeka']
        },
      },
      {
        gameId: 5,
        title: 'Skrytá Pláž',
        description: 'Najděte skrytou pláž.',
        mapId: 32,
        riddle: 'Co je tak křehké, že ho můžete zlomit i vyslovením jeho názvu?',
        gpsCoordinates: '48.8105° N, 14.3158° E',
        reachDescription: 'Dosáhli jste skryté pláže.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 33,
        answer: {
          "correctAnswers": ['ticho']
        },
      },
      {
        gameId: 5,
        title: 'Opustěný Maják',
        description: 'Prozkoumejte opuštěný maják.',
        mapId: 34,
        riddle: 'Co má jedno oko, ale nemůže vidět?',
        gpsCoordinates: '48.8105° N, 14.3158° E',
        reachDescription: 'Dosáhli jste opuštěného majáku.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 35,
        answer: {
          "correctAnswers": ['jehla']
        },
      },
      {
        gameId: 6,
        title: 'Staré Město',
        description: 'Objevte staré město.',
        mapId: 36,
        riddle: 'Co stoupá a neklesá?',
        gpsCoordinates: '50.0880° N, 14.4208° E',
        reachDescription: 'Dosáhli jste starého města.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 37,
        answer: {
          "correctAnswers": ['věk']
        },
      },
      {
        gameId: 6,
        title: 'Tajná Ulička',
        description: 'Najděte tajnou uličku.',
        mapId: 38,
        riddle: 'Co je vždy před vámi, ale nikdy to nemůžete vidět?',
        gpsCoordinates: '50.0880° N, 14.4208° E',
        reachDescription: 'Dosáhli jste tajné uličky.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 39,
        answer: {
          "correctAnswers": ['budoucnost']
        },
      },
      {
        gameId: 7,
        title: 'Podzemní Vstup',
        description: 'Vstupte do podzemí.',
        mapId: 40,
        riddle: 'Co má krk, ale žádnou hlavu?',
        gpsCoordinates: '49.1951° N, 16.6068° E',
        reachDescription: 'Dosáhli jste podzemního vstupu.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 41,
        answer: {
          "correctAnswers": ['láhev']
        },
      },
      {
        gameId: 7,
        title: 'Skrytá Chodba',
        description: 'Objevte skrytou chodbu.',
        mapId: 42,
        riddle: 'Co je těžší než kámen, ale plave na vodě?',
        gpsCoordinates: '49.1951° N, 16.6068° E',
        reachDescription: 'Dosáhli jste skryté chodby.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 43,
        answer: {
          "correctAnswers": ['led', 'blbec']
        },
      },
      {
        gameId: 8,
        title: 'Městský Park',
        description: 'Projděte se parkem.',
        mapId: 45,
        riddle: 'Co má čtyři nohy, ale nemůže chodit?',
        gpsCoordinates: '49.7451° N, 13.3774° E',
        reachDescription: 'Dosáhli jste městského parku.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 46,
        answer: {
          "correctAnswers": ['židle', 'stul', 'stůl']
        },
      },
      {
        gameId: 8,
        title: 'Stará Fabrika',
        description: 'Prozkoumejte starou fabriku.',
        mapId: 47,
        riddle: 'Co má jednu hlavu, jednu nohu a čtyři ruce?',
        gpsCoordinates: '49.7451° N, 13.3774° E',
        reachDescription: 'Dosáhli jste staré fabriky.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 48,
        answer: {
          "correctAnswers": ['mutant']
        },
      },
      {
        gameId: 9,
        title: 'Kouzelný Les',
        description: 'Prozkoumejte kouzelný les.',
        mapId: 49,
        riddle: 'Co běží, ale nikdy se nepohybuje?',
        gpsCoordinates: '48.8105° N, 14.3158° E',
        reachDescription: 'Dosáhli jste kouzelného lesa.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 50,
        answer: {
          "correctAnswers": ['lednička', 'operační systémy', 'os']
        },
      },
      {
        gameId: 9,
        title: 'Tajemný Hrad',
        description: 'Najděte tajemný hrad.',
        mapId: 51,
        riddle: 'Co má jedno oko, ale nemůže vidět?',
        gpsCoordinates: '48.8105° N, 14.3158° E',
        reachDescription: 'Dosáhli jste tajemného hradu.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 52,
        answer: {
          "correctAnswers": ['jehla', 'blbec']
        },
      },
      {
        gameId: 10,
        title: 'Městská Brána',
        description: 'Projděte městskou bránou.',
        mapId: 53,
        riddle: 'Co má klíče, ale nemůže otevírat zámky?',
        gpsCoordinates: '49.5955° N, 17.2518° E',
        reachDescription: 'Dosáhli jste městské brány.',
        maxPoints: 100,
        pointsPenalty: 5,
        order: 1,
        imageId: 54,
        answer: {
          "correctAnswers": ['pitomec', 'pitomio']
        },
      },
      {
        gameId: 10,
        title: 'Starý Most',
        description: 'Projděte starým mostem.',
        mapId: 55,
        riddle: 'Co stoupá a neklesá?',
        gpsCoordinates: '49.5955° N, 17.2518° E',
        reachDescription: 'Dosáhli jste starého mostu.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 56,
        answer: {
          "correctAnswers": ['PP', 'Petr Pavel', 'Pavel Petr']
        },
      },
    ],
  })
