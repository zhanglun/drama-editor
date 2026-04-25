import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVersionDto } from './dto/create-version.dto';

type PrismaInputJsonValue = string | number | boolean | readonly PrismaInputJsonValue[] | { readonly [key: string]: PrismaInputJsonValue | null } | { toJSON(): unknown };

@Injectable()
export class VersionsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(scriptId: string) {
    return this.prisma.scriptVersion.findMany({
      where: { scriptId },
      orderBy: { versionNumber: 'asc' },
    });
  }

  async get(id: string) {
    const version = await this.prisma.scriptVersion.findUnique({
      where: { id },
    });
    if (!version) {
      throw new NotFoundException('Version not found');
    }
    return version;
  }

  async create(scriptId: string, dto: CreateVersionDto) {
    const versions = await this.list(scriptId);

    let versionNumber = 1;
    if (versions.length > 0) {
      versionNumber = versions[versions.length - 1].versionNumber + 1;
    }

    return this.prisma.scriptVersion.create({
      data: {
        scriptId,
        versionNumber,
        content: dto.content as PrismaInputJsonValue,
        changeSummary: dto.changeSummary,
      },
    });
  }

  async delete(id: string) {
    const version = await this.prisma.scriptVersion.findUnique({
      where: { id },
    });
    if (!version) {
      throw new NotFoundException('Version not found');
    }
    await this.prisma.scriptVersion.delete({ where: { id } });
  }
}
