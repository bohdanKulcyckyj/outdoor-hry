import { Role, GameDificultness, GameState, OrderStatus, User } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { prisma } from '..';

async function main() {
  // Creating files
  const files = await prisma.file.createMany({
    data: [
      { id: 1, generatedName: 'file1.png', originalName: 'original1.png', path: '/uploads/images/file1.png' },
      { id: 2, generatedName: 'file2.png', originalName: 'original2.png', path: '/uploads/images/file2.png' },
      { id: 3, generatedName: 'file3.png', originalName: 'original3.png', path: '/uploads/images/file3.png' },
      { id: 4, generatedName: 'file4.png', originalName: 'original4.png', path: '/uploads/images/file4.png' },
      { id: 5, generatedName: 'file5.png', originalName: 'original5.png', path: '/uploads/images/file5.png' },
      { id: 6, generatedName: 'file6.png', originalName: 'original6.png', path: '/uploads/contracts/file6.png' },
      { id: 7, generatedName: 'file7.png', originalName: 'original7.png', path: '/uploads/images/file7.png' },
      { id: 8, generatedName: 'file8.png', originalName: 'original8.png', path: '/uploads/images/file8.png' },
      { id: 9, generatedName: 'file9.png', originalName: 'original9.png', path: '/uploads/images/file9.png' },
    ]
  });
  // Creating badges
  const badges = await prisma.badge.createMany({
    data: [
      { id: 1, title: 'Bronze Badge', minExperience: 0, imageId: 1 },
      { id: 2, title: 'Silver Badge', minExperience: 500, imageId: 2 },
      { id: 3, title: 'Gold Badge', minExperience: 1000, imageId: 3 }
    ]
  });

  // Creating users
  const users = await prisma.user.createMany({
    data: [
      { id: 1, name: 'Alice', email: 'alice@example.com', password: hashSync("12345", 10), role: Role.USER, badgeId: 1 },
      { id: 2, name: 'Bob', email: 'bob@example.com', password: hashSync("xxxxx", 10), role: Role.ADMIN, badgeId: 3 },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', password: hashSync("123456789", 10), role: Role.CREATOR, badgeId: 1 }
    ]
  });

  // Creating games
  const games = await prisma.game.createMany({
    data: [
      {
        id: 1,
        title: 'Adventure Quest',
        description: 'A thrilling adventure awaits!',
        place: 'Mysterious Island',
        dificultness: GameDificultness.NORMAL,
        startingCheckpointId: 1,
        endingCheckpointId: 5,
        authorId: 3,
        isActive: true,
        price: 299,
        maxPoints: 1000,
        imageId: 4
      },
      {
        id: 2,
        title: 'Escape Room Challenge',
        description: 'Can you escape in time?',
        place: 'Abandoned Mansion',
        dificultness: GameDificultness.HARD,
        startingCheckpointId: 1,
        endingCheckpointId: 3,
        authorId: 2,
        isActive: true,
        price: 399,
        maxPoints: 1500,
        imageId: 5
      }
    ]
  });

  // Creating checkpoints
  const checkpoints = await prisma.checkpoint.createMany({
    data: [
      {
        gameId: 1,
        title: 'Starting Point',
        description: 'Begin your adventure here!',
        mapId: 1,
        riddle: 'What has keys but can\'t open locks?',
        gpsCoordinates: '40.7128° N, 74.0060° W',
        reachDescription: 'You have reached the starting point.',
        maxPoints: 100,
        pointsPenalty: 0,
        order: 1,
        imageId: 7
      },
      {
        gameId: 1,
        title: 'Mysterious Cave',
        description: 'Explore the depths of the cave.',
        mapId: 2,
        riddle: 'The more you take, the more you leave behind. What am I?',
        gpsCoordinates: '41.8781° N, 87.6298° W',
        reachDescription: 'You have entered the mysterious cave.',
        maxPoints: 150,
        pointsPenalty: 10,
        order: 2,
        imageId: 8
      }
    ]
  });

  // Creating game records
  const gameRecords = await prisma.gameRecord.createMany({
    data: [
      {
        id: 1,
        gameId: 2,
        state: GameState.CREATED,
        team: 'Team Alpha',
        earnedPoints: 0,
        duration: 0,
        checkpointId: 1,
        inviteCode: "12345abcde"
      },
      {
        id: 2,
        gameId: 2,
        state: GameState.FINISHED,
        team: 'Team Beta',
        earnedPoints: 0,
        duration: 0,
        checkpointId: 2,
        inviteCode: "abcde12345"
      }
    ]
  });

  const participants = await prisma.participant.createMany({
    data: [
      {
        gameRecordId: 1,
        userId: 1
      },
      {
        gameRecordId: 2,
        userId: 2
      },
    ]
  })

  // Creating contracts
  const contracts = await prisma.contract.createMany({
    data: [
      { gameId: 1, userId: 3, fileId: 6 },
    ]
  });

  // Creating purchased games
  const purchasedGames = await prisma.purchasedGames.createMany({
    data: [
      { userId: 1, gameId: 1, played: false },
      { userId: 1, gameId: 2, played: true }
    ]
  });

  // Creating orders
  const orders = await prisma.order.createMany({
    data: [
      {
        userId: 1,
        status: OrderStatus.PAID,
        fakturoidInvoiceId: 123456,
        total: 299,
        email: 'alice@example.com',
        products: {"product" : 1},
        deliveryInfo: {"info": 1}
      },
      {
        userId: 1,
        status: OrderStatus.PAID,
        fakturoidInvoiceId: 123457,
        total: 399,
        email: 'bob@example.com',
        products: {"product" : 2},
        deliveryInfo: {"info": 2}
      }
    ]
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
