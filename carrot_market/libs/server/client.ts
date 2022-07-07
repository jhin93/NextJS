import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}

const client = global.client || new PrismaClient(); // 처음 구동될때는 새로 생성 = new

if (process.env.NODE_ENV === "development") global.client = client;

export default client;