import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/dto/services/base-service.dto';
import { Service, ServiceDocument } from '../../schemas/service.schema';

@Injectable()
export class ServicesService {
    constructor(
        @InjectModel(Service.name) private readonly model: Model<ServiceDocument>,
    ) { }

    async findAll(): Promise<Service[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Service> {
        return await this.model.findById(id).exec();
    }

    async create(createServiceDto: BaseService): Promise<Service> {
        return await new this.model({
            ...createServiceDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateServiceDto: BaseService): Promise<Service> {
        return await this.model.findByIdAndUpdate(id, updateServiceDto).exec();
    }

    async delete(id: string): Promise<Service> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
