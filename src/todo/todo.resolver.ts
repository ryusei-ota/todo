import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-onetodo.args';
import { FindFirsttodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-firsttodo.args';
import { todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { TodoService } from 'src/todo/todo.service';
import { FindManytodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-manytodo.args';
import { UpdateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-onetodo.args';
import { DeleteOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-onetodo.args';

@Resolver(() => todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => todo)
  user(@Args() args: FindFirsttodoArgs) {
    return this.todoService.findFirst(args);
  }

  @Query(() => [todo])
  async findAll(@Args() args: FindManytodoArgs) {
    return await this.todoService.findAll(args);
  }

  @Mutation(() => todo)
  async createTodo(@Args() args: CreateOnetodoArgs) {
    return this.todoService.createTodo(args);
  }

  @Mutation(() => todo)
  async updateTodo(@Args() args: UpdateOnetodoArgs) {
    return this.todoService.updateTodo(args);
  }

  @Mutation(() => todo)
  async deleteTodo(@Args() args: DeleteOnetodoArgs){
    return this.todoService.deleteTodo(args);
  }
}
