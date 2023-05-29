import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users.map((user) => new UserDto(user));
  }

  async findById(id: number) {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      return null;
    }

    return new UserDto(user);
  }

  async create(userData: any) {
    const user = await this.prisma.user.create({
      data: userData,
    });

    return new UserDto(user);
  }
}
