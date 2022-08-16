import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseService } from 'src/dto/services/base-service.dto';
import { ServicesService } from './services.service';

@Controller('services')
@ApiTags('services')
export class ServicesController {
    constructor(private readonly service: ServicesService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createServiceDto: BaseService) {
        return await this.service.create(createServiceDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateServiceDto: BaseService) {
        return await this.service.update(id, updateServiceDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
