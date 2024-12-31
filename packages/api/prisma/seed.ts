import { prisma } from '..'
// seeders
import { files } from './seeders/fileSeeder'
import { badges } from './seeders/badgeSeeder'
import { users } from './seeders/userSeeder'
import { games } from './seeders/gameSeeder'
import { checkpoints } from './seeders/checkpointSeeder'
import { gameSessions } from './seeders/gameSessionSeeder'
import { contracts } from './seeders/contractSeeder'
import { purchasedGames } from './seeders/purchasedGameSeeder'
import { orders } from './seeders/orderSeeder'
import { tags } from './seeders/tagSeeder'
import { hints } from './seeders/hintSeeder'
import { entityRelations } from './seeders/entityRelationsSeeder'

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
  // Creating game sessions
  await gameSessions()
  // Creating contracts
  await contracts()
  // Creating purchased games
  await purchasedGames()
  // Creating orders
  await orders()
  // Creating tags
  await tags()
  // Entity relations
  await entityRelations()
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
