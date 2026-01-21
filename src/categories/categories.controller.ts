import { Controller, Post, Body,Get,Patch,Param,Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
@Controller('categories')
export class CategoriesController {
    constructor(private readonly service: CategoriesService) {}

    @Post()
    create(@Body() dto: CreateCategoryDto) {
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
    update(@Param('id') id: number, @Body() dto: CreateCategoryDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
