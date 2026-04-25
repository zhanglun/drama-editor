import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { VariantsService } from './variants.service';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { LinkScenesDto } from './dto/link-scenes.dto';

@Controller('scripts/:id/variants')
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) {}

  @Get()
  async list(@Param('id') scriptId: string) {
    return this.variantsService.list(scriptId);
  }

  @Get(':vid')
  async get(@Param('vid') vid: string) {
    return this.variantsService.get(vid);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateVariantDto) {
    return this.variantsService.create(dto.characterId, dto);
  }

  @Put(':vid')
  async update(
    @Param('vid') vid: string,
    @Body() dto: UpdateVariantDto,
  ) {
    return this.variantsService.update(vid, dto);
  }

  @Delete(':vid')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(
    @Param('vid') vid: string,
    @Query('cascade') cascade?: string,
  ) {
    return this.variantsService.delete(vid, cascade === 'true');
  }

  @Post(':vid/links')
  @HttpCode(HttpStatus.NO_CONTENT)
  async addLinks(
    @Param('vid') vid: string,
    @Body() dto: LinkScenesDto,
  ) {
    return this.variantsService.addLinks(vid, dto.sceneIds);
  }

  @Delete(':vid/links/:sceneId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeLink(
    @Param('vid') vid: string,
    @Param('sceneId') sceneId: string,
  ) {
    return this.variantsService.removeLink(vid, sceneId);
  }
}
