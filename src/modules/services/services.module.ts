import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Service, ServiceSchema } from '../../schemas/service.schema';

@Module({
  providers: [ServicesService],
  controllers: [ServicesController],
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
  ],
})
export class ServicesModule {}
