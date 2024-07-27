import { prisma } from '..'
// seeders
import { files } from './seeders/fileSeeder'
import { badges } from './seeders/badgeSeeder'
import { users } from './seeders/userSeeder'
import { games } from './seeders/gameSeeder'
import { checkpoints } from './seeders/checkpointSeeder'
import { gameRecords } from './seeders/gameRecordSeeder'
import { participants } from './seeders/participantSeeder'
import { contracts } from './seeders/contractSeeder'
import { purchasedGames } from './seeders/purchasedGameSeeder'
import { orders } from './seeders/orderSeeder'
import { tags } from './seeders/tagSeeder'
import { gameTagsOnGames } from './seeders/gameTagsOnGameSeeder'
import { hints } from './seeders/hintSeeder'

async function main() {
  // Creating files
  await files()
  // Creating badges
  await badges()
  // Creating users
  await users()
  // Creating games
  await games()
  // Creating checkpoints
  await checkpoints()
  // Creating hints
  await hints()
  // Creating game records
  await gameRecords()
  // Creating participants
  await participants()
  // Creating contracts
  await contracts()
  // Creating purchased games
  await purchasedGames()
  // Creating orders
  await orders()
  // Creating tags
  await tags()
  // Linking tags to games
  await gameTagsOnGames()
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
