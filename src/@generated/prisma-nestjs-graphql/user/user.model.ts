import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Todo } from '../todo/todo.model';
import { HideField } from '@nestjs/graphql';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [Todo], {nullable:true})
    todo?: Array<Todo>;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    password!: string;

    /**
     * @Validator.@IsEmail()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsEmail()'})
    email!: string;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
