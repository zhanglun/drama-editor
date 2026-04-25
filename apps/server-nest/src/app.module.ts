import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ScriptsModule } from './scripts/scripts.module';
import { CharactersModule } from './characters/characters.module';
import { VersionsModule } from './versions/versions.module';
import { VariantsModule } from './variants/variants.module';
import { CanvasModule } from './canvas/canvas.module';
import { ExportModule } from './export/export.module';

@Module({
  imports: [
    PrismaModule,
    ScriptsModule,
    CharactersModule,
    VersionsModule,
    VariantsModule,
    CanvasModule,
    ExportModule,
  ],
})
export class AppModule {}
