import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { FindFirsttodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-firsttodo.args';
import { CreateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-onetodo.args';
import { UpdateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-onetodo.args';
import { FindManytodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-manytodo.args';
import { DeleteOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-onetodo.args';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}
  
  async findFirst(args: FindFirsttodoArgs): Promise<todo> {
    return this.prisma.todo.findFirst(args);
  }

  async findAll(args:FindManytodoArgs): Promise<todo[]> {
    return await this.prisma.todo.findMany();
  }

  async createTodo(args: CreateOnetodoArgs): Promise<todo> {
    return this.prisma.todo.create(args);
  }

  async updateTodo(args: UpdateOnetodoArgs): Promise<todo> {
    return this.prisma.todo.update(args);
  }

  async deleteTodo(args:DeleteOnetodoArgs){
    return this.prisma.todo.delete(args);
  }
}