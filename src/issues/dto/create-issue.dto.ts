import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIssueDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  locationId: number;
}
