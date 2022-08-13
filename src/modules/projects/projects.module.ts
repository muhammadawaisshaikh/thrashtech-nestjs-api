import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '../../schemas/project.schema';

@Module({
  providers: [ProjectService],
  controllers: [ProjectController],
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
})
export class ProjectsModule {}
