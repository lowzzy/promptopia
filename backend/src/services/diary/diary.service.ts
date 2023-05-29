import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DiaryDto } from './diary.dto';

@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const diaries = await this.prisma.diary.findMany();

    return diaries.map((diary) => new DiaryDto(diary));
  }

  async findById(id: number) {
    const diary = await this.prisma.diary.findFirst({
      where: { id },
    });

    if (!diary) {
      return null;
    }

    return new DiaryDto(diary);
  }
}
