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
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  lecturaCritica: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  cienciasNaturales: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  matematicas: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  ingles: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  socialesYCiudadanas: number;
  @IsNotEmpty()
  @IsString()
  career: string | Types.ObjectId;
}
