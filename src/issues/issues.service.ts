import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Issue } from './entity/issue.entity';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssueStatus } from '../common/enums/issue-status.enum';
import { Category } from '../categories/entity/category.entity';
import { Location } from '../locations/entity/location.entity';
@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(Issue)
    private issueRepo: Repository<Issue>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
    @InjectRepository(Location)
    private locationRepo: Repository<Location>,
  ) {}

  async create(dto: CreateIssueDto) {
    // Load the category and location entities
    const category = await this.categoryRepo.findOne({ 
      where: { id: dto.categoryId } 
    });
    const location = await this.locationRepo.findOne({ 
      where: { id: dto.locationId } 
    });

    if (!category) {
      throw new Error(`Category with id ${dto.categoryId} not found`);
    }
    if (!location) {
      throw new Error(`Location with id ${dto.locationId} not found`);
    }

    // Create issue with entity objects
    const issue = this.issueRepo.create({
      title: dto.title,
      description: dto.description,
      latitude: dto.latitude,
      longitude: dto.longitude,
      category: category,
      location: location,
    });

    return this.issueRepo.save(issue);
  }

  async findAll() {
    return this.issueRepo.find({ relations: ['category', 'location','reportedBy'] });
  }

  async updateStatus(id: number, status: IssueStatus) {
    return this.issueRepo.update(id, { status });
  }

  

  async findById(id: number) {
    return this.issueRepo.findOne({ where: { id }, relations: ['category', 'location'] });
  }

  async findByUserId(userId: number) {
    return this.issueRepo.find({ where: { reportedBy: { id: userId } }, relations: ['category', 'location'] });
  }

  async delete(id: number) {
    return this.issueRepo.delete(id);
  }

}
