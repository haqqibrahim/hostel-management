/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Complaint } from "./Complaint";
import { ComplaintCountArgs } from "./ComplaintCountArgs";
import { ComplaintFindManyArgs } from "./ComplaintFindManyArgs";
import { ComplaintFindUniqueArgs } from "./ComplaintFindUniqueArgs";
import { CreateComplaintArgs } from "./CreateComplaintArgs";
import { UpdateComplaintArgs } from "./UpdateComplaintArgs";
import { DeleteComplaintArgs } from "./DeleteComplaintArgs";
import { ComplaintService } from "../complaint.service";
@graphql.Resolver(() => Complaint)
export class ComplaintResolverBase {
  constructor(protected readonly service: ComplaintService) {}

  async _complaintsMeta(
    @graphql.Args() args: ComplaintCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Complaint])
  async complaints(
    @graphql.Args() args: ComplaintFindManyArgs
  ): Promise<Complaint[]> {
    return this.service.complaints(args);
  }

  @graphql.Query(() => Complaint, { nullable: true })
  async complaint(
    @graphql.Args() args: ComplaintFindUniqueArgs
  ): Promise<Complaint | null> {
    const result = await this.service.complaint(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Complaint)
  async createComplaint(
    @graphql.Args() args: CreateComplaintArgs
  ): Promise<Complaint> {
    return await this.service.createComplaint({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Complaint)
  async updateComplaint(
    @graphql.Args() args: UpdateComplaintArgs
  ): Promise<Complaint | null> {
    try {
      return await this.service.updateComplaint({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Complaint)
  async deleteComplaint(
    @graphql.Args() args: DeleteComplaintArgs
  ): Promise<Complaint | null> {
    try {
      return await this.service.deleteComplaint(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}