import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTodoInput } from './user-create-without-todo.input';

@InputType()
export class UserCreateOrConnectWithoutTodoInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTodoInput, {nullable:false})
    @Type(() => UserCreateWithoutTodoInput)
    create!: UserCreateWithoutTodoInput;
}
