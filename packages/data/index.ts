export {
    PrismaClient,
    // Enums
    GameDifficulty,
    GameState,
    OrderStatus,
    // WTF?? Why I cannot export this enum???? PaymentMethods,
    Role,
  } from "@prisma/client";
  
  export type {  
    // Models
    Badge,
    User,
    PurchasedGames,
    Game,
    GameTag,
    Checkpoint,
    Hint,
    GameSession,
    File,
    Contract,
    Order,
    RefreshToken,
  
    // Utility Types
    Prisma,
  } from "@prisma/client";
  