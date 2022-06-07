import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateNestedManyWithoutUserInput } from '../todo/todo-create-nested-many-without-user.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {

    @Field(() => TodoCreateNestedManyWithoutUserInput, {nullable:true})
    todo?: TodoCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
