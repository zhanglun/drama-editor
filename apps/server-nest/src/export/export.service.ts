import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExportService {
  constructor(private readonly prisma: PrismaService) {}

  async getContentForExport(id: string): Promise<string> {
    const script = await this.prisma.script.findFirst({
      where: { id, deletedAt: null },
    });
    if (!script) {
      throw new NotFoundException('Script not found');
    }

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
