import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Location } from './entity/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationsService {
    constructor(
        @InjectRepository(Location)
        private locationRepo: Repository<Location>,
    ){}

    async create(dto: CreateLocationDto) {
        const location = this.locationRepo.create(dto);
        return this.locationRepo.save(location);
    }

    async findAll() {
        return this.locationRepo.find();
    }

    async findById(id: number) {
        return this.locationRepo.findOne({ where: { id } });
    }

    async update(id: number, dto: CreateLocationDto) {
        return this.locationRepo.update(id, dto);
    }

    async delete(id: number) {
        return this.locationRepo.delete(id);
    }
}
