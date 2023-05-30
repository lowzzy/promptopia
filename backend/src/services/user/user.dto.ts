import { User } from '@prisma/client';

export class UserDto {
  id: number;
  updatedAt: Date;
  createdAt: Date;
  avatarUrl: String | null;

  constructor({ id, createdAt, updatedAt, avatarUrl }: User) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
    this.avatarUrl = avatarUrl;
  }
}

export class CreateUserDto {
  avatarUrl: String | null;

  constructor({ avatarUrl }: User) {
    this.avatarUrl = avatarUrl;
  }
}
