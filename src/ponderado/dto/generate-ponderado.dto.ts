import { IsNotEmpty, IsNumber, IsPositive, Max, Min } from 'class-validator';

export class GeneratePonderadoDto {
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
}
