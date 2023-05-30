import { Prisma, PrismaClient, PrismaPromise } from '@prisma/client';

const chats: Prisma.ChatCreateInput[] = [
  {
    isUser: true,
    content: 'こんにちは',
    diary: {
      create: {
        entryDate: new Date(),
        user: {
          create: {
            avatarUrl: 'https://via.placeholder.com/100x100',
          },
        },
      },
    },
  },
];

export default function (prisma: PrismaClient): PrismaPromise<unknown>[] {
  return chats.map((chat) =>
    prisma.chat.create({
      data: chat,
    })
  );
}
