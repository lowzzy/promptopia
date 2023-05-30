import { Diary } from '@prisma/client';

export class DiaryDto {
  updatedAt: Date;
  id: number;
  createdAt: Date;
  entryDate: Date;

  constructor({ id, createdAt, updatedAt, entryDate }: Diary) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
    this.entryDate = entryDate;
  }
}

export class CreateDiaryDto {
  entryDate: Date;
  userId: number;
  constructor({ entryDate, userId }: Diary) {
    this.entryDate = entryDate;
    // todo: userが存在するか確認する
    this.userId = userId;
  }
}
