/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MeterWhereUniqueInput } from "../../meter/base/MeterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MeterUpdateManyWithoutUsersInput {
  @Field(() => [MeterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeterWhereUniqueInput],
  })
  connect?: Array<MeterWhereUniqueInput>;

  @Field(() => [MeterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeterWhereUniqueInput],
  })
  disconnect?: Array<MeterWhereUniqueInput>;

  @Field(() => [MeterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeterWhereUniqueInput],
  })
  set?: Array<MeterWhereUniqueInput>;
}

export { MeterUpdateManyWithoutUsersInput as MeterUpdateManyWithoutUsersInput };
