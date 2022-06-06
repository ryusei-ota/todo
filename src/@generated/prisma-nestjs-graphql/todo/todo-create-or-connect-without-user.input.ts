import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoCreateWithoutUserInput } from './todo-create-without-user.input';

@InputType()
export class TodoCreateOrConnectWithoutUserInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoCreateWithoutUserInput, {nullable:false})
    @Type(() => TodoCreateWithoutUserInput)
    create!: TodoCreateWithoutUserInput;
}
