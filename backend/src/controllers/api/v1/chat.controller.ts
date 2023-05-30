import {
  I18nExceptionFilter,
  I18nNotFoundException,
} from '@anchan828/nest-i18n-i18next';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { ChatDto } from '../../../services/chat/chat.dto';
import { ChatService } from '../../../services/chat/chat.service';
import { DiaryService } from '../../../services/diary/diary.service';
import { UserService } from '../../../services/user/user.service';

@Controller('api/v1/chats')
@UseFilters(I18nExceptionFilter)
export class ChatController {
  constructor(
    private readonly chats: ChatService,
    private readonly users: UserService,
    private readonly diaries: DiaryService
  ) {}

  @Get('/')
  @ApiOkResponse({ type: [ChatDto] })
  async index() {
    const chats = await this.chats.findAll();
    return chats;
  }

  @Get(':id')
  @ApiNotFoundResponse()
  @ApiOkResponse({ type: ChatDto })
  async show(@Param('id', ParseIntPipe) id: number) {
    const chat = await this.chats.findById(id);

    if (!chat) {
      throw new I18nNotFoundException({
        key: 'requests.not_found',
        options: {},
      });
    }

    return chat;
  }
}
