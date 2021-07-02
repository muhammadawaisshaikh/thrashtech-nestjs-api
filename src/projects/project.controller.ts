import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { BaseProject } from './dto/base-project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly service: ProjectService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createTodoDto: BaseProject) {
        return await this.service.create(createTodoDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: BaseProject) {
        return await this.service.update(id, updateTodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
