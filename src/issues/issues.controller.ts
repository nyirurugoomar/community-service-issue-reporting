import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssueStatus } from 'src/common/enums/issue-status.enum';

@Controller('issues')
export class IssuesController {
  constructor(private readonly service: IssuesService) {}

  @Post()
  create(@Body() dto: CreateIssueDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body('status') status: string) {
    return this.service.updateStatus(id, IssueStatus.PENDING);
  }
  
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }
  @Get('user/:userId')
  findByUserId(@Param('userId') userId: number) {
    return this.service.findByUserId(userId);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
