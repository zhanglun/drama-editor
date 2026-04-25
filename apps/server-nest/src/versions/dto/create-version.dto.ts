import { IsObject, IsOptional, IsString } from 'class-validator';

export type JsonValue = Record<string, unknown> | unknown[];

export class CreateVersionDto {
  @IsObject()
  content: JsonValue;

  @IsOptional()
  @IsString()
  changeSummary?: string;
}
