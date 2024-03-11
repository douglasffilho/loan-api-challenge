import { Controller, Get, Redirect } from '@nestjs/common';
import { DocsLogic } from '../../logic/docs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class DocsHttp {
  constructor(private readonly docsLogic: DocsLogic) {}

  @Get()
  @ApiTags('loans')
  @ApiOperation({ summary: 'Go to the docs' })
  @ApiResponse({ status: 301, description: 'Docs page' })
  @Redirect('/docs', 301)
  redirect(): string {
    return this.docsLogic.redirect();
  }
}
