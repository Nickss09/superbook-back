import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userData: CreateUserDto) {
    console.log(userData);
    const emailAlreadyExists = await this.findByEmail(userData.email);

    if (emailAlreadyExists) {
      throw new ConflictException('Email já cadastrado!');
    }

    const usernameAlreadyExists = await this.findByUsername(userData.username);

    if (usernameAlreadyExists) {
      throw new ConflictException('Username já cadastrado!');
    }

    const encryptedPassword = bcrypt.hashSync(userData.password, 10);

    return await this.prismaService.user.create({
      data: { ...userData, password: encryptedPassword },
    });
  }

  async findById(id: number) {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuario não encontrado!');
    }

    return user;
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({ where: { email } });
  }

  async findByUsername(username: string) {
    return await this.prismaService.user.findUnique({ where: { username } });
  }

  async findByAll() {
    return await this.prismaService.user.findMany();
  }

  async updateById(id: number, updateUserData: UpdateUserDto) {
    await this.findById(id);

    await this.prismaService.user.update({
      data: updateUserData,
      where: { id },
    });
  }

  async deleteById(id: number) {
    await this.findById(id);

    await this.prismaService.user.delete({
      where: { id },
    });
  }
}
