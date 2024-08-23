/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsEnum,
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumAlertLevel } from "./EnumAlertLevel";
import { PrepaidMeter } from "../../prepaidMeter/base/PrepaidMeter";

@ObjectType()
class Alert {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumAlertLevel,
  })
  @IsEnum(EnumAlertLevel)
  @IsOptional()
  @Field(() => EnumAlertLevel, {
    nullable: true,
  })
  level?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message!: string | null;

  @ApiProperty({
    required: false,
    type: () => PrepaidMeter,
  })
  @ValidateNested()
  @Type(() => PrepaidMeter)
  @IsOptional()
  prepaidMeter?: PrepaidMeter | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Alert as Alert };
