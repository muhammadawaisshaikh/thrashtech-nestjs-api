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
import { BaseTechnology } from 'src/dto/technologies/base-technology.dto';
import { TechnologiesService } from './technologies.service';

@Controller('technologies')
@ApiTags('technologies')
export class TechnologiesController {
    constructor(private readonly service: TechnologiesService) { }

    @Get()
    @ApiOperation({ summary: 'Get List of Technologies' })
    @ApiResponse({
        status: 200,
        description: 'The records found',
        type: [BaseTechnology],
    })
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Technology' })
    @ApiResponse({
        status: 200,
        description: 'The record found',
        type: BaseTechnology,
    })
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create Technology' })
    @ApiResponse({
        status: 200,
        description: 'The record found',
        type: BaseTechnology,
    })
    async create(@Body() createTechnologyDto: BaseTechnology) {
        return await this.service.create(createTechnologyDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update Technology' })
    @ApiResponse({
        status: 200,
        description: 'The record updated',
        type: BaseTechnology,
    })
    async update(@Param('id') id: string, @Body() updateTechnologyDto: BaseTechnology) {
        return await this.service.update(id, updateTechnologyDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Technology' })
    @ApiResponse({
        status: 200,
        description: 'The record deleted',
        type: BaseTechnology,
    })
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
