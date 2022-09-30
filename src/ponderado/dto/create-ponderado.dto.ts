import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreatePonderadoDto {
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  @IsNotEmpty()
  lecturaCritica: number;
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  @IsNotEmpty()
  cienciasNaturales: number;
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  @IsNotEmpty()
  matematicas: number;
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  @IsNotEmpty()
  ingles: number;
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  @IsNotEmpty()
  socialesYCiudadanas: number;
  @IsNotEmpty()
  @IsString()
  career: string | Types.ObjectId;
}
