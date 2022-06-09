import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { FindFirsttodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-firsttodo.args';
import { CreateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-onetodo.args';
import { UpdateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-onetodo.args';
import { FindManytodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-manytodo.args';
import { DeleteOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-onetodo.args';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  //1件取得
  async findFirst(args: FindFirsttodoArgs): Promise<Todo> {
    return this.prisma.todo.findFirst(args);
  }

  //全件取得
  async findAll(args: FindManytodoArgs): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  //登録
  async createTodo(args: CreateOnetodoArgs): Promise<Todo> {
    return this.prisma.todo.create(args);
  }

  //更新
  async updateTodo(args: UpdateOnetodoArgs): Promise<Todo> {
    return this.prisma.todo.update(args);
  }

  //削除
  async deleteTodo(args: DeleteOnetodoArgs) {
    return this.prisma.todo.delete(args);
  }
  
}
