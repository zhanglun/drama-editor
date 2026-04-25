import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { VersionsService } from './versions.service';
import { CreateVersionDto } from './dto/create-version.dto';

@Controller('scripts/:id/versions')
export class VersionsController {
  constructor(private readonly versionsService: VersionsService) {}

  @Get()
  async list(@Param('id') scriptId: string) {
    return this.versionsService.list(scriptId);
  }

  @Get(':versionId')
  async get(@Param('versionId') versionId: string) {
    return this.versionsService.get(versionId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Param('id') scriptId: string,
    @Body() dto: CreateVersionDto,
  ) {
    return this.versionsService.create(scriptId, dto);
  }

  @Delete(':versionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('versionId') versionId: string) {
    return this.versionsService.delete(versionId);
  }
}
