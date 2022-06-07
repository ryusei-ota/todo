import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TodoUncheckedCreateNestedManyWithoutUserInput } from '../todo/todo-unchecked-create-nested-many-without-user.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => TodoUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    todo?: TodoUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
