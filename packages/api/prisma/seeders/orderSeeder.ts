import { OrderStatus } from '@prisma/client'
import { prisma } from '../..'

export const orders = async () =>
  await prisma.order.createMany({
    data: [
      {
        userId: 1,
        status: OrderStatus.PAID,
        fakturoidInvoiceId: 123456,
        total: 299,
        emails: { emails: ['alice@example.com'] },
        products: { product: 1 },
        deliveryInfo: { info: 1 },
        accessCode: "LSJ595S5DFSF"
      },
      {
        userId: 1,
        status: OrderStatus.PAID,
        fakturoidInvoiceId: 123457,
        total: 399,
        emails: { emails: ['bob@example.com'] },
        products: { product: 2 },
        deliveryInfo: { info: 2 },
        accessCode: "LSJ5D5S5DD4F"
      },
    ],
  })
