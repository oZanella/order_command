import { PrismaClient } from '@prisma/client'




const newPrisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
})

declare global {
    var prisma: typeof newPrisma
}

let prisma = globalThis.prisma ?? newPrisma

globalThis.prisma = prisma

export { prisma }