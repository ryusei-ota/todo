import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoUpdateWithoutUserInput } from './todo-update-without-user.input';
import { TodoCreateWithoutUserInput } from './todo-create-without-user.input';

@InputType()
export class TodoUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoUpdateWithoutUserInput, {nullable:false})
    @Type(() => TodoUpdateWithoutUserInput)
    update!: TodoUpdateWithoutUserInput;

    @Field(() => TodoCreateWithoutUserInput, {nullable:false})
    @Type(() => TodoCreateWithoutUserInput)
    create!: TodoCreateWithoutUserInput;
}
