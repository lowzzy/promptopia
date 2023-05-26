import { Module } from '@nestjs/common';
import { I18nModule } from './i18n/module';

import { RootController } from './controllers/root.controller';
import { ChatController } from './controllers/api/v1/chat.controller';
import { UserController } from './controllers/api/v1/user.controller';
import { PrismaService } from './services/prisma/prisma.service';
import { ChatService } from './services/chat/chat.service';
import { DiaryService } from './services/diary/diary.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [I18nModule],
  controllers: [RootController, ChatController, UserController],
  providers: [PrismaService, ChatService, DiaryService, UserService],
})
export class AppModule {}
