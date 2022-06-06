import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutUserInput } from './todo-create-without-user.input';
import { Type } from 'class-transformer';
import { TodoCreateOrConnectWithoutUserInput } from './todo-create-or-connect-without-user.input';
import { TodoUpsertWithWhereUniqueWithoutUserInput } from './todo-upsert-with-where-unique-without-user.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoUpdateWithWhereUniqueWithoutUserInput } from './todo-update-with-where-unique-without-user.input';
import { TodoUpdateManyWithWhereWithoutUserInput } from './todo-update-many-with-where-without-user.input';
import { TodoScalarWhereInput } from './todo-scalar-where.input';

@InputType()
export class TodoUncheckedUpdateManyWithoutUserInput {

    @Field(() => [TodoCreateWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateWithoutUserInput)
    create?: Array<TodoCreateWithoutUserInput>;

    @Field(() => [TodoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUserInput>;

    @Field(() => [TodoUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TodoUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TodoUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    set?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    disconnect?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    delete?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TodoUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TodoUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TodoUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TodoUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TodoUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    @Type(() => TodoScalarWhereInput)
    deleteMany?: Array<TodoScalarWhereInput>;
}
