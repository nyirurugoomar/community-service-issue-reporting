import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../../common/enums/category.enum';

export class CreateCategoryDto{

    @IsNotEmpty()
    @IsEnum(Category)
    name: Category;
}