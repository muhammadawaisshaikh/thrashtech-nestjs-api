import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { BaseProject } from '../../dto/projects/base-project.dto';
import { ProjectService } from './project.service';

@Controller('projects')
@ApiTags('projects')
export class ProjectController {
    constructor(private readonly service: ProjectService) { }

    @Get()
    @ApiOperation({ summary: 'Get List of Projects' })
    @ApiResponse({
        status: 200,
        description: 'The records found',
        type: [BaseProject],
    })
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Project' })
    @ApiResponse({
        status: 200,
        description: 'The record found',
        type: BaseProject,
    })
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create Project' })
    @ApiResponse({
        status: 200,
        description: 'The record found',
        type: BaseProject,
    })
    async create(@Body() createTodoDto: BaseProject) {
        return await this.service.create(createTodoDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update Project' })
    @ApiResponse({
        status: 200,
        description: 'The record updated',
        type: BaseProject,
    })
    async update(@Param('id') id: string, @Body() updateTodoDto: BaseProject) {
        return await this.service.update(id, updateTodoDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Project' })
    @ApiResponse({
        status: 200,
        description: 'The record deleted',
        type: BaseProject,
    })
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
