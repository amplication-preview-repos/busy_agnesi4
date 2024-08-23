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
  Alert as PrismaAlert,
  PrepaidMeter as PrismaPrepaidMeter,
} from "@prisma/client";

export class AlertServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AlertCountArgs, "select">): Promise<number> {
    return this.prisma.alert.count(args);
  }

  async alerts(args: Prisma.AlertFindManyArgs): Promise<PrismaAlert[]> {
    return this.prisma.alert.findMany(args);
  }
  async alert(args: Prisma.AlertFindUniqueArgs): Promise<PrismaAlert | null> {
    return this.prisma.alert.findUnique(args);
  }
  async createAlert(args: Prisma.AlertCreateArgs): Promise<PrismaAlert> {
    return this.prisma.alert.create(args);
  }
  async updateAlert(args: Prisma.AlertUpdateArgs): Promise<PrismaAlert> {
    return this.prisma.alert.update(args);
  }
  async deleteAlert(args: Prisma.AlertDeleteArgs): Promise<PrismaAlert> {
    return this.prisma.alert.delete(args);
  }

  async getPrepaidMeter(parentId: string): Promise<PrismaPrepaidMeter | null> {
    return this.prisma.alert
      .findUnique({
        where: { id: parentId },
      })
      .prepaidMeter();
  }
}
