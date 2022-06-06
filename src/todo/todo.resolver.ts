import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { TodoService } from 'src/todo/todo.service';
import { FindFirsttodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-firsttodo.args';
import { FindManytodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-manytodo.args';
import { CreateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-onetodo.args';
import { UpdateOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-onetodo.args';
import { DeleteOnetodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-onetodo.args';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  //1件取得
  @Query(() => Todo)
  todo(@Args() args: FindFirsttodoArgs) {
    return this.todoService.findFirst(args);
  }

  //全件取得
  @Query(() => [Todo])
  async findAll(@Args() args: FindManytodoArgs) {
    return await this.todoService.findAll(args);
  }

  //登録
  @Mutation(() => Todo)
  async createTodo(@Args() args: CreateOnetodoArgs) {
    return this.todoService.createTodo(args);
  }

  //更新
  @Mutation(() => Todo)
  async updateTodo(@Args() args: UpdateOnetodoArgs) {
    return this.todoService.updateTodo(args);
  }

  //削除
  @Mutation(() => Todo)
  async deleteTodo(@Args() args: DeleteOnetodoArgs){
    return this.todoService.deleteTodo(args);
  }
}
