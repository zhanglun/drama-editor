import { IsString, IsOptional, IsObject } from 'class-validator';

export class UpdateCharacterDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsObject()
  canvasPosition?: Record<string, unknown>;
}
