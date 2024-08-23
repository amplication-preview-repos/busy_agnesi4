import { Module } from "@nestjs/common";
import { MeterModuleBase } from "./base/meter.module.base";
import { MeterService } from "./meter.service";
import { MeterController } from "./meter.controller";
import { MeterResolver } from "./meter.resolver";

@Module({
  imports: [MeterModuleBase],
  controllers: [MeterController],
  providers: [MeterService, MeterResolver],
  exports: [MeterService],
})
export class MeterModule {}
