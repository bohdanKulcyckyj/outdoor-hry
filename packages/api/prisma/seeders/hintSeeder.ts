import { prisma } from '../..'

export const hints = async () =>
  await prisma.hint.createMany({
    data: [
      // Hints for Game 1, Checkpoint 1
      { checkpointId: 1, label: 'První nápověda', ordering: 1 },
      { checkpointId: 1, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 1, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 1, Checkpoint 2
      { checkpointId: 2, label: 'První nápověda', ordering: 1 },
      { checkpointId: 2, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 2, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 2, Checkpoint 1
      { checkpointId: 3, label: 'První nápověda', ordering: 1 },
      { checkpointId: 3, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 3, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 2, Checkpoint 2
      { checkpointId: 4, label: 'První nápověda', ordering: 1 },
      { checkpointId: 4, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 4, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 3, Checkpoint 1
      { checkpointId: 5, label: 'První nápověda', ordering: 1 },
      { checkpointId: 5, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 5, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 3, Checkpoint 2
      { checkpointId: 6, label: 'První nápověda', ordering: 1 },
      { checkpointId: 6, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 6, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 4, Checkpoint 1
      { checkpointId: 7, label: 'První nápověda', ordering: 1 },
      { checkpointId: 7, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 7, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 4, Checkpoint 2
      { checkpointId: 8, label: 'První nápověda', ordering: 1 },
      { checkpointId: 8, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 8, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 5, Checkpoint 1
      { checkpointId: 9, label: 'První nápověda', ordering: 1 },
      { checkpointId: 9, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 9, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 5, Checkpoint 2
      { checkpointId: 10, label: 'První nápověda', ordering: 1 },
      { checkpointId: 10, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 10, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 6, Checkpoint 1
      { checkpointId: 11, label: 'První nápověda', ordering: 1 },
      { checkpointId: 11, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 11, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 6, Checkpoint 2
      { checkpointId: 12, label: 'První nápověda', ordering: 1 },
      { checkpointId: 12, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 12, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 7, Checkpoint 1
      { checkpointId: 13, label: 'První nápověda', ordering: 1 },
      { checkpointId: 13, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 13, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 7, Checkpoint 2
      { checkpointId: 14, label: 'První nápověda', ordering: 1 },
      { checkpointId: 14, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 14, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 8, Checkpoint 1
      { checkpointId: 15, label: 'První nápověda', ordering: 1 },
      { checkpointId: 15, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 15, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 8, Checkpoint 2
      { checkpointId: 16, label: 'První nápověda', ordering: 1 },
      { checkpointId: 16, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 16, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 9, Checkpoint 1
      { checkpointId: 17, label: 'První nápověda', ordering: 1 },
      { checkpointId: 17, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 17, label: 'Třetí nápověda', ordering: 3 },
      // Hints for Game 9, Checkpoint 2
      { checkpointId: 18, label: 'První nápověda', ordering: 1 },
      { checkpointId: 18, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 18, label: 'Třetí nápověda', ordering: 3 },

      { checkpointId: 19, label: 'První nápověda', ordering: 1 },
      { checkpointId: 19, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 19, label: 'Třetí nápověda', ordering: 3 },

      { checkpointId: 20, label: 'První nápověda', ordering: 1 },
      { checkpointId: 20, label: 'Druhá nápověda', ordering: 2 },
      { checkpointId: 20, label: 'Třetí nápověda', ordering: 3 },
    ],
  })
