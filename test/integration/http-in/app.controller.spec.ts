import { Test, TestingModule } from '@nestjs/testing';
import { DocsHttp } from '../../../src/infra/http-in/docs';
import { DocsLogic } from '../../../src/logic/docs';

describe('DocsHttp', () => {
  let appController: DocsHttp;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocsHttp],
      providers: [DocsLogic],
    }).compile();

    appController = app.get<DocsHttp>(DocsHttp);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.redirect()).toBe('Hello World!');
    });
  });
});
