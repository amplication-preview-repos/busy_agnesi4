/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PrepaidMeter as PrismaPrepaidMeter,
  Alert as PrismaAlert,
  Command as PrismaCommand,
  MeterData as PrismaMeterData,
} from "@prisma/client";

export class PrepaidMeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PrepaidMeterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.prepaidMeter.count(args);
  }

  async prepaidMeters(
    args: Prisma.PrepaidMeterFindManyArgs
  ): Promise<PrismaPrepaidMeter[]> {
    return this.prisma.prepaidMeter.findMany(args);
  }
  async prepaidMeter(
    args: Prisma.PrepaidMeterFindUniqueArgs
  ): Promise<PrismaPrepaidMeter | null> {
    return this.prisma.prepaidMeter.findUnique(args);
  }
  async createPrepaidMeter(
    args: Prisma.PrepaidMeterCreateArgs
  ): Promise<PrismaPrepaidMeter> {
    return this.prisma.prepaidMeter.create(args);
  }
  async updatePrepaidMeter(
    args: Prisma.PrepaidMeterUpdateArgs
  ): Promise<PrismaPrepaidMeter> {
    return this.prisma.prepaidMeter.update(args);
  }
  async deletePrepaidMeter(
    args: Prisma.PrepaidMeterDeleteArgs
  ): Promise<PrismaPrepaidMeter> {
    return this.prisma.prepaidMeter.delete(args);
  }

  async findAlerts(
    parentId: string,
    args: Prisma.AlertFindManyArgs
  ): Promise<PrismaAlert[]> {
    return this.prisma.prepaidMeter
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .alerts(args);
  }

  async findCommands(
    parentId: string,
    args: Prisma.CommandFindManyArgs
  ): Promise<PrismaCommand[]> {
    return this.prisma.prepaidMeter
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .commands(args);
  }

  async findMeterDataItems(
    parentId: string,
    args: Prisma.MeterDataFindManyArgs
  ): Promise<PrismaMeterData[]> {
    return this.prisma.prepaidMeter
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .meterDataItems(args);
  }
}
