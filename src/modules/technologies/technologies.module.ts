import { Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Technology, TechnologySchema } from '../../schemas/technology.schema';

@Module({
  providers: [TechnologiesService],
  controllers: [TechnologiesController],
  imports: [
    MongooseModule.forFeature([{ name: Technology.name, schema: TechnologySchema }]),
  ],
})
export class TechnologiesModule {}
