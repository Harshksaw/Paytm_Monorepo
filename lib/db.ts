import {PrismaClient} from "@prisma/client"

export const db = globalThis.prisma || env PrismaClient();


if(process.env.NODE_ENV !== "production" ) globalThis.prisma = db;
