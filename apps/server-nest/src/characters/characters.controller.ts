import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('scripts/:id/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async list(@Param('id') scriptId: string) {
    return this.charactersService.list(scriptId);
  }

  @Get(':cid')
  async get(@Param('cid') cid: string) {
    return this.charactersService.get(cid);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Param('id') scriptId: string,
    @Body() dto: CreateCharacterDto,
  ) {
    return this.charactersService.create(scriptId, dto);
  }

  @Put(':cid')
  async update(
    @Param('cid') cid: string,
    @Body() dto: UpdateCharacterDto,
  ) {
    return this.charactersService.update(cid, dto);
  }

  @Delete(':cid')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('cid') cid: string) {
    return this.charactersService.delete(cid);
  }
}
