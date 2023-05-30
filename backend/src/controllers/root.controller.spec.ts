import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './root.controller';
import { DiaryService } from '../services/diary/diary.service';
import { ChatService } from '../services/chat/chat.service';
import { UserService } from '../services/user/user.service';
import { PrismaService } from '../services/prisma/prisma.service';

describe('RootController', () => {
  let controller: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [DiaryService, ChatService, UserService, PrismaService],
    }).compile();

    controller = app.get(RootController);
  });

  describe('root', () => {
    it('should return', async () => {
      expect(await controller.index()).toEqual({ healthz: true });
    });
  });
});
