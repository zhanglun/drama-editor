import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExportService } from './export.service';

@Controller('export/scripts')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  @Get(':id/pdf')
  async exportPdf(@Param('id') id: string, @Res() res: Response) {
    const content = await this.exportService.getContentForExport(id);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=script.pdf');
    res.send(content);
  }

  @Get(':id/docx')
  async exportDocx(@Param('id') id: string, @Res() res: Response) {
    const content = await this.exportService.getContentForExport(id);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', 'attachment; filename=script.docx');
    res.send(content);
  }

  @Get(':id/txt')
  async exportTxt(@Param('id') id: string, @Res() res: Response) {
    const content = await this.exportService.getContentForExport(id);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename=script.txt');
    res.send(content);
  }
}
