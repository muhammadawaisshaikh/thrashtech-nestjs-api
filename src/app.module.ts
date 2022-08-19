import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { ProjectsModule } from './modules/projects/projects.module';
import { ServicesModule } from './modules/services/services.module';
import { TechnologiesModule } from './modules/technologies/technologies.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI, {
      dbName: config.dbName,
    }),
    ProjectsModule,
    ServicesModule,
    TechnologiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
