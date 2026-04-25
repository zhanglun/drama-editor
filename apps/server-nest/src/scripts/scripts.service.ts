import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateScriptDto } from './dto/create-script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';

type PrismaInputJsonValue = string | number | boolean | readonly PrismaInputJsonValue[] | { readonly [key: string]: PrismaInputJsonValue | null } | { toJSON(): unknown };

@Injectable()
export class ScriptsService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.script.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
  }

  async get(id: string) {
    const script = await this.prisma.script.findFirst({
      where: { id, deletedAt: null },
    });
    if (!script) {
      throw new NotFoundException('Script not found');
    }
    return script;
  }

  async create(dto: CreateScriptDto) {
    return this.prisma.script.create({
      data: {
        title: dto.title,
        description: dto.description,
        content: (dto.content ?? undefined) as PrismaInputJsonValue | undefined,
      },
    });
  }

  async update(id: string, dto: UpdateScriptDto) {
    await this.get(id);

    const updates: Record<string, unknown> = {};
    if (dto.title !== undefined && dto.title !== '') updates['title'] = dto.title;
    if (dto.description !== undefined && dto.description !== '') updates['description'] = dto.description;
    if (dto.content !== undefined && dto.content?.type !== '') updates['content'] = dto.content;
    if (dto.author !== undefined && dto.author !== '') updates['author'] = dto.author;
    if (dto.genre !== undefined && dto.genre !== '') updates['genre'] = dto.genre;
    if (dto.logline !== undefined && dto.logline !== '') updates['logline'] = dto.logline;
    if (dto.notes !== undefined && dto.notes !== '') updates['notes'] = dto.notes;

    await this.prisma.script.update({
      where: { id },
      data: updates,
    });

    return this.prisma.script.findFirst({ where: { id, deletedAt: null } });
  }

  async patch(id: string, dto: UpdateScriptDto) {
    const script = await this.get(id);

    const updates: Record<string, unknown> = {};
    if (dto.title !== undefined && dto.title !== '') updates['title'] = dto.title;
    if (dto.description !== undefined && dto.description !== '') updates['description'] = dto.description;
    if (dto.content !== undefined && dto.content?.type !== '') updates['content'] = dto.content;
    if (dto.author !== undefined && dto.author !== '') updates['author'] = dto.author;
    if (dto.genre !== undefined && dto.genre !== '') updates['genre'] = dto.genre;
    if (dto.logline !== undefined && dto.logline !== '') updates['logline'] = dto.logline;
    if (dto.notes !== undefined && dto.notes !== '') updates['notes'] = dto.notes;

    if (Object.keys(updates).length === 0) {
      return script;
    }

    await this.prisma.script.update({
      where: { id },
      data: updates,
    });

    return this.prisma.script.findFirst({ where: { id, deletedAt: null } });
  }

  async delete(id: string) {
    await this.get(id);
    await this.prisma.script.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async getContentForExport(id: string): Promise<string> {
    const script = await this.get(id);
    const content = script.content as Record<string, unknown> | null;
    if (!content) return '';
    return this.contentToText(content);
  }

  private contentToText(content: Record<string, unknown>): string {
    const nodes = content['content'] as Record<string, unknown>[] | undefined;
    if (!nodes) return '';
    return nodes.map((node) => this.nodeToText(node) + '\n').join('');
  }

  private nodeToText(node: Record<string, unknown>): string {
    const text = node['text'] as string | undefined;
    if (text) return text;

    const children = node['content'] as Record<string, unknown>[] | undefined;
    let combined = '';
    if (children) {
      combined = children.map((child) => this.nodeToText(child)).join('');
    }

    const type = node['type'] as string | undefined;
    switch (type) {
      case 'heading':
        return '\n' + combined + '\n';
      case 'paragraph':
        return combined + '\n';
      default:
        return combined;
    }
  }
}
