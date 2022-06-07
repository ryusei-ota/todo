import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { PrismaService } from 'src/prisma.service';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  //削除
  async deleteUser(args: DeleteOneUserArgs) {
    return this.prisma.user.delete(args);
  }

  //全件取得
  async findAllUser(args: FindManyUserArgs): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findFirst(args: FindFirstUserArgs): Promise<User | null> {
    return this.prisma.user.findFirst(args);
}

async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args);
}

async createUser(args: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(args);
}

  async update(args: UpdateOneUserArgs): Promise<User> {
      return this.prisma.user.update(args)
  }
}