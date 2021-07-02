import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseProject } from './dto/base-project.dto';
import { Project, ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private readonly model: Model<ProjectDocument>,
    ) { }

    async findAll(): Promise<Project[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Project> {
        return await this.model.findById(id).exec();
    }

    async create(createTodoDto: BaseProject): Promise<Project> {
        return await new this.model({
            ...createTodoDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateTodoDto: BaseProject): Promise<Project> {
        return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
    }

    async delete(id: string): Promise<Project> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
