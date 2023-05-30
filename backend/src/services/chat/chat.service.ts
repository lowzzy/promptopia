import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChatDto } from './chat.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const chats = await this.prisma.chat.findMany();

    return chats.map((chat) => new ChatDto(chat));
  }

  async findById(id: number) {
    const chat = await this.prisma.chat.findFirst({
      where: { id },
    });

    if (!chat) {
      return null;
    }

    return new ChatDto(chat);
  }
}
