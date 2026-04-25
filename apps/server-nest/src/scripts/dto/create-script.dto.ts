import { IsString, IsOptional, IsObject } from 'class-validator';

type JsonValue = Record<string, unknown>;

export class CreateScriptDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsObject()
  content?: JsonValue;
}
