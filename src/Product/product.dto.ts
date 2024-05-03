import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Max(9999)
  price: number;
}
