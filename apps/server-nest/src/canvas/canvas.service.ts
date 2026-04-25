import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type PrismaInputJsonValue = string | number | boolean | readonly PrismaInputJsonValue[] | { readonly [key: string]: PrismaInputJsonValue | null } | { toJSON(): unknown };

@Injectable()
export class CanvasService {
  constructor(private readonly prisma: PrismaService) {}

  async loadCanvasState(scriptId: string) {
    const script = await this.prisma.script.findFirst({
      where: { id: scriptId, deletedAt: null },
      select: { canvasState: true },
    });
    if (!script) {
      throw new NotFoundException('Script not found');
    }

    if (!script.canvasState) {
      return {
        nodes: [],
        viewport: { x: 0, y: 0, zoom: 1 },
      };
    }

    const state = script.canvasState as Record<string, unknown>;
    return {
      nodes: state['nodes'] || [],
      viewport: state['viewport'] || { x: 0, y: 0, zoom: 1 },
    };
  }

  async saveCanvasState(
    scriptId: string,
    state: { nodes: unknown[]; viewport: Record<string, unknown> },
  ): Promise<void> {
    const script = await this.prisma.script.findFirst({
      where: { id: scriptId, deletedAt: null },
    });
    if (!script) {
      throw new NotFoundException('Script not found');
    }

    await this.prisma.script.update({
      where: { id: scriptId },
      data: { canvasState: state as PrismaInputJsonValue },
    });
  }
}
