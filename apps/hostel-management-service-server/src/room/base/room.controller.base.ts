/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RoomService } from "../room.service";
import { RoomCreateInput } from "./RoomCreateInput";
import { Room } from "./Room";
import { RoomFindManyArgs } from "./RoomFindManyArgs";
import { RoomWhereUniqueInput } from "./RoomWhereUniqueInput";
import { RoomUpdateInput } from "./RoomUpdateInput";
import { RoomAllocationFindManyArgs } from "../../roomAllocation/base/RoomAllocationFindManyArgs";
import { RoomAllocation } from "../../roomAllocation/base/RoomAllocation";
import { RoomAllocationWhereUniqueInput } from "../../roomAllocation/base/RoomAllocationWhereUniqueInput";
import { StudentFindManyArgs } from "../../student/base/StudentFindManyArgs";
import { Student } from "../../student/base/Student";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

export class RoomControllerBase {
  constructor(protected readonly service: RoomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Room })
  async createRoom(@common.Body() data: RoomCreateInput): Promise<Room> {
    return await this.service.createRoom({
      data: data,
      select: {
        createdAt: true,
        id: true,
        numberOfStudents: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Room] })
  @ApiNestedQuery(RoomFindManyArgs)
  async rooms(@common.Req() request: Request): Promise<Room[]> {
    const args = plainToClass(RoomFindManyArgs, request.query);
    return this.service.rooms({
      ...args,
      select: {
        createdAt: true,
        id: true,
        numberOfStudents: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async room(
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Room | null> {
    const result = await this.service.room({
      where: params,
      select: {
        createdAt: true,
        id: true,
        numberOfStudents: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRoom(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() data: RoomUpdateInput
  ): Promise<Room | null> {
    try {
      return await this.service.updateRoom({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          numberOfStudents: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRoom(
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Room | null> {
    try {
      return await this.service.deleteRoom({
        where: params,
        select: {
          createdAt: true,
          id: true,
          numberOfStudents: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/roomAllocations")
  @ApiNestedQuery(RoomAllocationFindManyArgs)
  async findRoomAllocations(
    @common.Req() request: Request,
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<RoomAllocation[]> {
    const query = plainToClass(RoomAllocationFindManyArgs, request.query);
    const results = await this.service.findRoomAllocations(params.id, {
      ...query,
      select: {
        adminApproval: true,
        allocationDate: true,
        allocationStatus: true,
        createdAt: true,
        id: true,

        room: {
          select: {
            id: true,
          },
        },

        studentEmail: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/roomAllocations")
  async connectRoomAllocations(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: RoomAllocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roomAllocations: {
        connect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/roomAllocations")
  async updateRoomAllocations(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: RoomAllocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roomAllocations: {
        set: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/roomAllocations")
  async disconnectRoomAllocations(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: RoomAllocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roomAllocations: {
        disconnect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/Students")
  @ApiNestedQuery(StudentFindManyArgs)
  async findStudents(
    @common.Req() request: Request,
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Student[]> {
    const query = plainToClass(StudentFindManyArgs, request.query);
    const results = await this.service.findStudents(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        fullName: true,
        id: true,
        level: true,
        matricNumber: true,

        room: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/Students")
  async connectStudents(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Students: {
        connect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Students")
  async updateStudents(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Students: {
        set: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Students")
  async disconnectStudents(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Students: {
        disconnect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }
}
