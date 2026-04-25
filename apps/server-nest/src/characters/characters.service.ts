import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(private readonly prisma: PrismaService) {}

  async list(scriptId: string) {
    return this.prisma.character.findMany({
      where: { scriptId },
    });
  }

  async get(id: string) {
    const character = await this.prisma.character.findUnique({
      where: { id },
    });
    if (!character) {
      throw new NotFoundException('Character not found');
    }
    return character;
  }

  async create(scriptId: string, dto: CreateCharacterDto) {
    return this.prisma.character.create({
      data: {
        scriptId,
        name: dto.name,
        description: dto.description,
        avatarUrl: dto.avatarUrl,
      },
    });
  }

  async update(id: string, dto: UpdateCharacterDto) {
    const character = await this.prisma.character.findUnique({ where: { id } });
    if (!character) {
      throw new NotFoundException('Character not found');
    }

    const updates: Record<string, unknown> = {};
    if (dto.name !== undefined && dto.name !== '') updates['name'] = dto.name;
    if (dto.description !== undefined && dto.description !== '') updates['description'] = dto.description;
    if (dto.avatarUrl !== undefined && dto.avatarUrl !== '') updates['avatarUrl'] = dto.avatarUrl;
    if (dto.color !== undefined && dto.color !== '') updates['color'] = dto.color;
    if (dto.canvasPosition !== undefined) updates['canvasPosition'] = dto.canvasPosition;

    if (Object.keys(updates).length > 0) {
      await this.prisma.character.update({
        where: { id },
        data: updates,
      });
    }

    return this.prisma.character.findUnique({ where: { id } });
  }

  async delete(id: string) {
    const character = await this.prisma.character.findUnique({ where: { id } });
    if (!character) {
      throw new NotFoundException('Character not found');
    }
    await this.prisma.character.delete({ where: { id } });
  }
}
