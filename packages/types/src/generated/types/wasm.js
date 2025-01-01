
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BadgeScalarFieldEnum = {
  id: 'id',
  title: 'title',
  minExperience: 'minExperience',
  imageId: 'imageId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  password: 'password',
  role: 'role',
  isAlive: 'isAlive',
  photoId: 'photoId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  experience: 'experience',
  coins: 'coins',
  badgeId: 'badgeId',
  deliveryInfo: 'deliveryInfo'
};

exports.Prisma.PurchasedGamesScalarFieldEnum = {
  userId: 'userId',
  gameId: 'gameId',
  played: 'played',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  description: 'description',
  place: 'place',
  difficultness: 'difficultness',
  startingCheckpointId: 'startingCheckpointId',
  endingCheckpointId: 'endingCheckpointId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  imageId: 'imageId',
  authorId: 'authorId',
  isActive: 'isActive',
  price: 'price',
  maxPoints: 'maxPoints'
};

exports.Prisma.GameTagScalarFieldEnum = {
  id: 'id',
  label: 'label'
};

exports.Prisma.CheckpointScalarFieldEnum = {
  id: 'id',
  gameId: 'gameId',
  title: 'title',
  description: 'description',
  imageId: 'imageId',
  mapId: 'mapId',
  riddle: 'riddle',
  answer: 'answer',
  gpsCoordinates: 'gpsCoordinates',
  reachDescription: 'reachDescription',
  maxPoints: 'maxPoints',
  pointsPenalty: 'pointsPenalty',
  ordering: 'ordering'
};

exports.Prisma.HintScalarFieldEnum = {
  id: 'id',
  checkpointId: 'checkpointId',
  label: 'label',
  ordering: 'ordering'
};

exports.Prisma.GameSessionScalarFieldEnum = {
  id: 'id',
  inviteCode: 'inviteCode',
  gameId: 'gameId',
  state: 'state',
  team: 'team',
  start: 'start',
  finish: 'finish',
  earnedPoints: 'earnedPoints',
  duration: 'duration',
  checkpointId: 'checkpointId',
  hints: 'hints',
  answers: 'answers'
};

exports.Prisma.FileScalarFieldEnum = {
  id: 'id',
  generatedName: 'generatedName',
  originalName: 'originalName',
  path: 'path',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ContractScalarFieldEnum = {
  gameId: 'gameId',
  userId: 'userId',
  fileId: 'fileId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderUuid: 'orderUuid',
  userId: 'userId',
  invoiceId: 'invoiceId',
  status: 'status',
  gopayId: 'gopayId',
  gatewayUrl: 'gatewayUrl',
  fakturoidInvoiceId: 'fakturoidInvoiceId',
  hasInvoice: 'hasInvoice',
  emailsSent: 'emailsSent',
  total: 'total',
  emails: 'emails',
  products: 'products',
  deliveryInfo: 'deliveryInfo',
  accessCode: 'accessCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RefreshTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  userId: 'userId',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.BadgeOrderByRelevanceFieldEnum = {
  title: 'title'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  password: 'password'
};

exports.Prisma.GameOrderByRelevanceFieldEnum = {
  title: 'title',
  slug: 'slug',
  description: 'description',
  place: 'place'
};

exports.Prisma.GameTagOrderByRelevanceFieldEnum = {
  label: 'label'
};

exports.Prisma.CheckpointOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description',
  riddle: 'riddle',
  gpsCoordinates: 'gpsCoordinates',
  reachDescription: 'reachDescription'
};

exports.Prisma.HintOrderByRelevanceFieldEnum = {
  label: 'label'
};

exports.Prisma.GameSessionOrderByRelevanceFieldEnum = {
  inviteCode: 'inviteCode',
  team: 'team'
};

exports.Prisma.FileOrderByRelevanceFieldEnum = {
  generatedName: 'generatedName',
  originalName: 'originalName',
  path: 'path'
};

exports.Prisma.OrderOrderByRelevanceFieldEnum = {
  orderUuid: 'orderUuid',
  gatewayUrl: 'gatewayUrl',
  accessCode: 'accessCode'
};

exports.Prisma.RefreshTokenOrderByRelevanceFieldEnum = {
  token: 'token'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  CREATOR: 'CREATOR',
  USER: 'USER'
};

exports.GameDifficulty = exports.$Enums.GameDifficulty = {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD'
};

exports.GameState = exports.$Enums.GameState = {
  CREATED: 'CREATED',
  ON_THE_WAY: 'ON_THE_WAY',
  CHECKPOINT: 'CHECKPOINT',
  FINISHED: 'FINISHED',
  TIMEOUT: 'TIMEOUT'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  DRAFT: 'DRAFT',
  CREATED: 'CREATED',
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELED: 'CANCELED',
  TIMEOUT: 'TIMEOUT'
};

exports.Prisma.ModelName = {
  Badge: 'Badge',
  User: 'User',
  PurchasedGames: 'PurchasedGames',
  Game: 'Game',
  GameTag: 'GameTag',
  Checkpoint: 'Checkpoint',
  Hint: 'Hint',
  GameSession: 'GameSession',
  File: 'File',
  Contract: 'Contract',
  Order: 'Order',
  RefreshToken: 'RefreshToken'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
