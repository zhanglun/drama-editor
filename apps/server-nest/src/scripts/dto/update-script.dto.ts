import { IsString, IsOptional, IsObject } from 'class-validator';

type JsonValue = Record<string, unknown>;

export class UpdateScriptDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsObject()
  content?: JsonValue;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsString()
  logline?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
