import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoUpdateWithoutUserInput } from './todo-update-without-user.input';

@InputType()
export class TodoUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoUpdateWithoutUserInput, {nullable:false})
    @Type(() => TodoUpdateWithoutUserInput)
    data!: TodoUpdateWithoutUserInput;
}
