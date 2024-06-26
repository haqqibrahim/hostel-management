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
import { RoomAllocationWhereInput } from "./RoomAllocationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RoomAllocationOrderByInput } from "./RoomAllocationOrderByInput";

@ArgsType()
class RoomAllocationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RoomAllocationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RoomAllocationWhereInput, { nullable: true })
  @Type(() => RoomAllocationWhereInput)
  where?: RoomAllocationWhereInput;

  @ApiProperty({
    required: false,
    type: [RoomAllocationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RoomAllocationOrderByInput], { nullable: true })
  @Type(() => RoomAllocationOrderByInput)
  orderBy?: Array<RoomAllocationOrderByInput>;

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

export { RoomAllocationFindManyArgs as RoomAllocationFindManyArgs };
