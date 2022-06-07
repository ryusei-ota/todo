import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateNestedManyWithoutUserInput } from '../todo/todo-create-nested-many-without-user.input';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {

    @Field(() => TodoCreateNestedManyWithoutUserInput, {nullable:true})
    todo?: TodoCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(8)
    password!: string;

    @HideField()
    hashedRefreshToken?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
