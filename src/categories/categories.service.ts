import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>,
    ){}

    async create(dto: CreateCategoryDto) {
        const category = this.categoryRepo.create(dto);
        return this.categoryRepo.save(category);
    }

    async findAll() {
        return this.categoryRepo.find();
    }

    async findById(id: number) {
        return this.categoryRepo.findOne({ where: { id } });
    }

    async update(id: number, dto: CreateCategoryDto) {
        return this.categoryRepo.update(id, dto);
    }

    async delete(id: number) {
        return this.categoryRepo.delete(id);
    }
}
