import { IsArray, IsString } from 'class-validator';

export class LinkScenesDto {
  @IsArray()
  @IsString({ each: true })
  sceneIds: string[];
}
