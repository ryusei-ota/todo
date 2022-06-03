import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodoInput } from './user-create-without-todo.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodoInput } from './user-create-or-connect-without-todo.input';
import { UserUpsertWithoutTodoInput } from './user-upsert-without-todo.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTodoInput } from './user-update-without-todo.input';

@InputType()
export class UserUpdateOneWithoutTodoInput {

    @Field(() => UserCreateWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateWithoutTodoInput)
    create?: UserCreateWithoutTodoInput;

    @Field(() => UserCreateOrConnectWithoutTodoInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoInput)
    connectOrCreate?: UserCreateOrConnectWithoutTodoInput;

    @Field(() => UserUpsertWithoutTodoInput, {nullable:true})
    @Type(() => UserUpsertWithoutTodoInput)
    upsert?: UserUpsertWithoutTodoInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTodoInput, {nullable:true})
    @Type(() => UserUpdateWithoutTodoInput)
    update?: UserUpdateWithoutTodoInput;
}
