import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ScriptsService } from './scripts.service';
import { CreateScriptDto } from './dto/create-script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';

@Controller('scripts')
export class ScriptsController {
  constructor(private readonly scriptsService: ScriptsService) {}

  @Get()
  async list() {
    return this.scriptsService.list();
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.scriptsService.get(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateScriptDto) {
    return this.scriptsService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateScriptDto) {
    return this.scriptsService.update(id, dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: UpdateScriptDto) {
    return this.scriptsService.patch(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.scriptsService.delete(id);
  }
}
