import * as graphql from "@nestjs/graphql";
import { MeterResolverBase } from "./base/meter.resolver.base";
import { Meter } from "./base/Meter";
import { MeterService } from "./meter.service";

@graphql.Resolver(() => Meter)
export class MeterResolver extends MeterResolverBase {
  constructor(protected readonly service: MeterService) {
    super(service);
  }
}
