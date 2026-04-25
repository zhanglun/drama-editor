import { IsString, IsOptional, IsObject } from 'class-validator';

export class UpdateVariantDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

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
