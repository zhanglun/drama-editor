import { IsString, IsOptional, IsObject } from 'class-validator';

export class CreateVariantDto {
  @IsString()
  characterId: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  parentVariantId?: string;

  @IsOptional()
  @IsObject()
  traits?: { [key: string]: unknown };

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsObject()
  canvasPosition?: { [key: string]: unknown };
}
