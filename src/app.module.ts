import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI,{
      dbName: config.db
    }),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
