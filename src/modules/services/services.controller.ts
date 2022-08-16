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
import { BaseService } from 'src/dto/services/base-service.dto';
import { ServicesService } from './services.service';

@Controller('services')
@ApiTags('services')
export class ServicesController {
    constructor(private readonly service: ServicesService) { }

    @Get()
    @ApiOperation({ summary: 'Get List of Services' })
    @ApiResponse({
        status: 200,
        description: 'The records found',
        type: [BaseService],
    })
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Service' })
    @ApiResponse({
        status: 200,
        description: 'The record found',
        type: BaseService,
    })
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create Service' })
    @ApiResponse({
        status: 200,
        description: 'The record found',
        type: BaseService,
    })
    async create(@Body() createServiceDto: BaseService) {
        return await this.service.create(createServiceDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update Service' })
    @ApiResponse({
        status: 200,
        description: 'The record updated',
        type: BaseService,
    })
    async update(@Param('id') id: string, @Body() updateServiceDto: BaseService) {
        return await this.service.update(id, updateServiceDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Service' })
    @ApiResponse({
        status: 200,
        description: 'The record deleted',
        type: BaseService,
    })
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
