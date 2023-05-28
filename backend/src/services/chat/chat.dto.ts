import { Chat } from '@prisma/client';

export class ChatDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isUser: Boolean;
  content: String | null;

  constructor({ id, createdAt, updatedAt, isUser, content }: Chat) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
    this.isUser = isUser;
    this.content = content;
  }
}

export class CreateChatDto {
  isUser: Boolean;
  content: String | null;

  constructor({ isUser, content }: Chat) {
    this.isUser = isUser;
    this.content = content;
  }
}

// TODO: chatGPTを再度叩いて
// スレッドを再生成できるように
// しなければならないのでskip

// export class UpdateChatDto {
// }
