import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { FindFirsttodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-firsttodo.args';
import { CreateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-onetodo.args';
import { FindUniquetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-uniquetodo.args';
import { FindManytodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-manytodo.args';
import { UpdateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-onetodo.args';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<todo[]> {
    return await this.prisma.todo.findMany();
  }

  async findFirst(args: FindFirsttodoArgs): Promise<todo> {
    return this.prisma.todo.findFirst(args);
  }

  async createTodo(args: CreateOnetodoArgs): Promise<todo> {
    return this.prisma.todo.create(args);
  }

  async updateTodo(args: UpdateOnetodoArgs): Promise<todo> {
    return this.prisma.todo.update(args);
  }
}
