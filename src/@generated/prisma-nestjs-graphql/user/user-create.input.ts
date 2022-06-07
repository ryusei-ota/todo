import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateNestedManyWithoutUserInput } from '../todo/todo-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => TodoCreateNestedManyWithoutUserInput, {nullable:true})
    todo?: TodoCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
