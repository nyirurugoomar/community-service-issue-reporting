import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { Issue } from './entity/issue.entity';
import { Category } from '../categories/entity/category.entity';
import { Location } from '../locations/entity/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Issue,Category,Location])],
  providers: [IssuesService],
  controllers: [IssuesController]
})
export class IssuesModule {}