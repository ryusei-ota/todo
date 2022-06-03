import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodoInput } from './user-create-without-todo.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodoInput } from './user-create-or-connect-without-todo.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTodoInput {

    @Field(() => UserCreateWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateWithoutTodoInput)
    create?: UserCreateWithoutTodoInput;

    @Field(() => UserCreateOrConnectWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoInput)
    connectOrCreate?: UserCreateOrConnectWithoutTodoInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
