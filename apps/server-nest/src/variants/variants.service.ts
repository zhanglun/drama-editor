import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';

type PrismaInputJsonValue = string | number | boolean | readonly PrismaInputJsonValue[] | { readonly [key: string]: PrismaInputJsonValue | null } | { toJSON(): unknown };

export interface VariantResponse {
  id: string;
  characterId: string;
  parentVariantId: string | null;
  name: string;
  description: string | null;
  imageUrl: string | null;
  traits: unknown;
  color: string | null;
  canvasPosition: unknown;
  createdAt: Date | null;
  updatedAt: Date | null;
  sceneIds: string[];
  childCount: number;
}

@Injectable()
export class VariantsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(scriptId: string): Promise<VariantResponse[]> {
    const characters = await this.prisma.character.findMany({
      where: { scriptId },
      select: { id: true },
    });
    const characterIds = characters.map((c) => c.id);

    if (characterIds.length === 0) return [];

    const variants = await this.prisma.characterVariant.findMany({
      where: { characterId: { in: characterIds } },
    });

    const childCountMap = new Map<string, number>();
    for (const v of variants) {
      if (v.parentVariantId) {
        childCountMap.set(
          v.parentVariantId,
          (childCountMap.get(v.parentVariantId) || 0) + 1,
        );
      }
    }

    const variantIds = variants.map((v) => v.id);
    const variantSceneMap = new Map<string, string[]>();

    if (variantIds.length > 0) {
      const variantScenes = await this.prisma.variantScene.findMany({
        where: { variantId: { in: variantIds } },
      });
      for (const vs of variantScenes) {
        const existing = variantSceneMap.get(vs.variantId) || [];
        existing.push(vs.sceneId);
        variantSceneMap.set(vs.variantId, existing);
      }
    }

    return variants.map((v) => ({
      id: v.id,
      characterId: v.characterId,
      parentVariantId: v.parentVariantId,
      name: v.name,
      description: v.description,
      imageUrl: v.imageUrl,
      traits: v.traits,
      color: v.color,
      canvasPosition: v.canvasPosition,
      createdAt: v.createdAt,
      updatedAt: v.updatedAt,
      sceneIds: variantSceneMap.get(v.id) || [],
      childCount: childCountMap.get(v.id) || 0,
    }));
  }

  async get(id: string): Promise<VariantResponse> {
    const variant = await this.prisma.characterVariant.findUnique({
      where: { id },
    });
    if (!variant) {
      throw new NotFoundException('Variant not found');
    }

    const variantScenes = await this.prisma.variantScene.findMany({
      where: { variantId: id },
    });
    const sceneIds = variantScenes.map((vs) => vs.sceneId);

    const childCount = await this.prisma.characterVariant.count({
      where: { parentVariantId: id },
    });

    return {
      id: variant.id,
      characterId: variant.characterId,
      parentVariantId: variant.parentVariantId,
      name: variant.name,
      description: variant.description,
      imageUrl: variant.imageUrl,
      traits: variant.traits,
      color: variant.color,
      canvasPosition: variant.canvasPosition,
      createdAt: variant.createdAt,
      updatedAt: variant.updatedAt,
      sceneIds,
      childCount,
    };
  }

  async create(characterId: string, dto: CreateVariantDto) {
    const character = await this.prisma.character.findUnique({
      where: { id: characterId },
    });
    if (!character) {
      throw new NotFoundException('character not found');
    }

    if (dto.parentVariantId) {
      const parent = await this.prisma.characterVariant.findFirst({
        where: { id: dto.parentVariantId, characterId },
      });
      if (!parent) {
        throw new NotFoundException(
          'parent variant not found or does not belong to this character',
        );
      }
    }

    return this.prisma.characterVariant.create({
      data: {
        characterId,
        parentVariantId: dto.parentVariantId ?? null,
        name: dto.name,
        description: dto.description ?? null,
        imageUrl: dto.imageUrl ?? null,
        traits: (dto.traits ?? {}) as PrismaInputJsonValue,
        color: dto.color ?? null,
        canvasPosition: (dto.canvasPosition ?? { x: 0, y: 0 }) as PrismaInputJsonValue,
      },
    });
  }

  async update(id: string, dto: UpdateVariantDto) {
    const variant = await this.prisma.characterVariant.findUnique({
      where: { id },
    });
    if (!variant) {
      throw new NotFoundException('Variant not found');
    }

    const updates: Record<string, unknown> = {};
    if (dto.name !== undefined && dto.name !== '') updates['name'] = dto.name;
    if (dto.description !== undefined && dto.description !== '') updates['description'] = dto.description;
    if (dto.imageUrl !== undefined && dto.imageUrl !== '') updates['imageUrl'] = dto.imageUrl;
    if (dto.color !== undefined && dto.color !== '') updates['color'] = dto.color;
    if (dto.traits !== undefined) updates['traits'] = dto.traits;
    if (dto.canvasPosition !== undefined) updates['canvasPosition'] = dto.canvasPosition;

    if (Object.keys(updates).length > 0) {
      await this.prisma.characterVariant.update({
        where: { id },
        data: updates,
      });
    }

    return this.prisma.characterVariant.findUnique({ where: { id } });
  }

  async delete(id: string, cascade: boolean): Promise<void> {
    const variant = await this.prisma.characterVariant.findUnique({
      where: { id },
    });
    if (!variant) {
      throw new NotFoundException('Variant not found');
    }

    if (cascade) {
      const descendantIds = await this.findDescendantIds(id);
      const allIds = [...descendantIds, id];

      await this.prisma.variantScene.deleteMany({
        where: { variantId: { in: allIds } },
      });
      await this.prisma.characterVariant.deleteMany({
        where: { id: { in: allIds } },
      });
    } else {
      await this.prisma.characterVariant.updateMany({
        where: { parentVariantId: id },
        data: { parentVariantId: null },
      });
      await this.prisma.variantScene.deleteMany({
        where: { variantId: id },
      });
      await this.prisma.characterVariant.delete({
        where: { id },
      });
    }
  }

  async addLinks(variantId: string, sceneIds: string[]): Promise<void> {
    const variant = await this.prisma.characterVariant.findUnique({
      where: { id: variantId },
    });
    if (!variant) {
      throw new NotFoundException('Variant not found');
    }

    const existing = await this.prisma.variantScene.findMany({
      where: { variantId },
      select: { sceneId: true },
    });
    const existingSceneIds = new Set(existing.map((e) => e.sceneId));

    const newLinks = sceneIds
      .filter((sceneId) => !existingSceneIds.has(sceneId))
      .map((sceneId) => ({
        variantId,
        sceneId,
      }));

    if (newLinks.length > 0) {
      await this.prisma.variantScene.createMany({ data: newLinks });
    }
  }

  async removeLink(variantId: string, sceneId: string): Promise<void> {
    await this.prisma.variantScene.deleteMany({
      where: { variantId, sceneId },
    });
  }

  async findDescendantIds(variantId: string): Promise<string[]> {
    const result = await this.prisma.$queryRaw<Array<{ id: string }>>`
      WITH RECURSIVE variant_tree AS (
        SELECT id FROM character_variants WHERE parent_variant_id = ${variantId}
        UNION ALL
        SELECT cv.id FROM character_variants cv
        INNER JOIN variant_tree vt ON cv.parent_variant_id = vt.id
      )
      SELECT id FROM variant_tree
    `;
    return result.map((row) => row.id);
  }
}
