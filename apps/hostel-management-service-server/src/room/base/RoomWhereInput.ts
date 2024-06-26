/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomAllocationListRelationFilter } from "../../roomAllocation/base/RoomAllocationListRelationFilter";
import { StudentListRelationFilter } from "../../student/base/StudentListRelationFilter";

@InputType()
class RoomWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  numberOfStudents?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RoomAllocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RoomAllocationListRelationFilter)
  @IsOptional()
  @Field(() => RoomAllocationListRelationFilter, {
    nullable: true,
  })
  roomAllocations?: RoomAllocationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StudentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StudentListRelationFilter)
  @IsOptional()
  @Field(() => StudentListRelationFilter, {
    nullable: true,
  })
  Students?: StudentListRelationFilter;
}

export { RoomWhereInput as RoomWhereInput };
