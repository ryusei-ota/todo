import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  //登録
  async createUser(args: CreateOneUserArgs) {
    return this.prisma.user.create(args);
  }

  //削除
  async deleteUser(args: DeleteOneUserArgs) {
    return this.prisma.user.delete(args);
  }

  //全件取得
  async findAllUser(args: FindManyUserArgs): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
}
