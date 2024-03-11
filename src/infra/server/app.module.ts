import { Module } from '@nestjs/common';
import { DocsHttp } from '../http-in/docs';
import { DocsLogic } from '../../logic/docs';

@Module({
  imports: [],
  controllers: [DocsHttp],
  providers: [DocsLogic],
})
export class AppModule {}
