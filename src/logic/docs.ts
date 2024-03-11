import { Injectable } from '@nestjs/common';

@Injectable()
export class DocsLogic {
  redirect(): string {
    return 'Unnused route since it is redirected from the HTTP entrypoint';
  }
}
