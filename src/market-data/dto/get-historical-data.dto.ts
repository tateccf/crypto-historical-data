import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class GetHistorialDataDto {
  @IsString()
  symbol: string;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;
}
