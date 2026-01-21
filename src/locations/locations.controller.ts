import { Controller, Param, Post,Body,Get,Patch,Delete } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationsService } from './locations.service';
 
@Controller('locations')
export class LocationsController {
    constructor(private readonly service: LocationsService) {}

    @Post()
    create(@Body() dto: CreateLocationDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.service.findById(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: CreateLocationDto) {
        return this.service.update(id, dto);
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
