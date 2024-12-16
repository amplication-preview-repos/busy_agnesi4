/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UsageWhereInput } from "./UsageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UsageOrderByInput } from "./UsageOrderByInput";

@ArgsType()
class UsageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UsageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UsageWhereInput, { nullable: true })
  @Type(() => UsageWhereInput)
  where?: UsageWhereInput;

  @ApiProperty({
    required: false,
    type: [UsageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UsageOrderByInput], { nullable: true })
  @Type(() => UsageOrderByInput)
  orderBy?: Array<UsageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UsageFindManyArgs as UsageFindManyArgs };
