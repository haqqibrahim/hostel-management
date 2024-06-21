import { Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { ComplaintModule } from "./complaint/complaint.module";
import { RoomModule } from "./room/room.module";
import { RoomAllocationModule } from "./roomAllocation/roomAllocation.module";
import { StudentModule } from "./student/student.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    AdminModule,
    ComplaintModule,
    RoomModule,
    RoomAllocationModule,
    StudentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
