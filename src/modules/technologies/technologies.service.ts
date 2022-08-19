import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseTechnology } from 'src/dto/technologies/base-technology.dto';
import { Technology, TechnologyDocument } from '../../schemas/technology.schema';

@Injectable()
export class TechnologiesService {
    constructor(
        @InjectModel(Technology.name) private readonly model: Model<TechnologyDocument>,
    ) { }

    async findAll(): Promise<Technology[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Technology> {
        return await this.model.findById(id).exec();
    }

    async create(createTechnologyDto: BaseTechnology): Promise<Technology> {
        return await new this.model({
            ...createTechnologyDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateTechnologyDto: BaseTechnology): Promise<Technology> {
        return await this.model.findByIdAndUpdate(id, updateTechnologyDto).exec();
    }

    async delete(id: string): Promise<Technology> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
