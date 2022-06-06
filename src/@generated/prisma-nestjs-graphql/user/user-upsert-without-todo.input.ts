import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTodoInput } from './user-update-without-todo.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTodoInput } from './user-create-without-todo.input';

@InputType()
export class UserUpsertWithoutTodoInput {

    @Field(() => UserUpdateWithoutTodoInput, {nullable:false})
    @Type(() => UserUpdateWithoutTodoInput)
    update!: UserUpdateWithoutTodoInput;

    @Field(() => UserCreateWithoutTodoInput, {nullable:false})
    @Type(() => UserCreateWithoutTodoInput)
    create!: UserCreateWithoutTodoInput;
}
