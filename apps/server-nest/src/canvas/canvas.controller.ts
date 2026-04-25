import { Controller, Get, Put, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CanvasService } from './canvas.service';

@Controller('scripts/:id/canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @Get()
  async getState(@Param('id') scriptId: string) {
    return this.canvasService.loadCanvasState(scriptId);
  }

  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  async saveState(
    @Param('id') scriptId: string,
    @Body() body: { nodes: unknown[]; viewport: Record<string, unknown> },
  ) {
    return this.canvasService.saveCanvasState(scriptId, body);
  }
}
