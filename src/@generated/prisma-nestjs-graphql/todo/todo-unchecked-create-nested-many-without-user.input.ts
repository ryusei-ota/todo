import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutUserInput } from './todo-create-without-user.input';
import { Type } from 'class-transformer';
import { TodoCreateOrConnectWithoutUserInput } from './todo-create-or-connect-without-user.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';

@InputType()
export class TodoUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [TodoCreateWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateWithoutUserInput)
    create?: Array<TodoCreateWithoutUserInput>;

    @Field(() => [TodoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUserInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;
}
