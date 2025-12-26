import { Global, Module } from "@nestjs/common";
import { PrismaClient } from "../prisma/generated";
import { prisma } from "./client";

@Global()
@Module({
  providers: [
    {
      provide: PrismaClient,
      useValue: prisma,
    },
  ],
  exports: [PrismaClient],
})
export class DatabaseModule {}
