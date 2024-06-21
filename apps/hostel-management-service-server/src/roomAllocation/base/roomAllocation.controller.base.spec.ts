import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RoomAllocationController } from "../roomAllocation.controller";
import { RoomAllocationService } from "../roomAllocation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adminApproval: "exampleAdminApproval",
  allocationDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  studentEmail: "exampleStudentEmail",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  adminApproval: "exampleAdminApproval",
  allocationDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  studentEmail: "exampleStudentEmail",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    adminApproval: "exampleAdminApproval",
    allocationDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    studentEmail: "exampleStudentEmail",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  adminApproval: "exampleAdminApproval",
  allocationDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  studentEmail: "exampleStudentEmail",
  updatedAt: new Date(),
};

const service = {
  createRoomAllocation() {
    return CREATE_RESULT;
  },
  roomAllocations: () => FIND_MANY_RESULT,
  roomAllocation: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("RoomAllocation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RoomAllocationService,
          useValue: service,
        },
      ],
      controllers: [RoomAllocationController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /roomAllocations", async () => {
    await request(app.getHttpServer())
      .post("/roomAllocations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        allocationDate: CREATE_RESULT.allocationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /roomAllocations", async () => {
    await request(app.getHttpServer())
      .get("/roomAllocations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          allocationDate: FIND_MANY_RESULT[0].allocationDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /roomAllocations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/roomAllocations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /roomAllocations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/roomAllocations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        allocationDate: FIND_ONE_RESULT.allocationDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /roomAllocations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/roomAllocations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        allocationDate: CREATE_RESULT.allocationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/roomAllocations")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
