import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTodoInput } from '../user/user-create-nested-one-without-todo.input';

@InputType()
export class TodoCreateInput {

    @Field(() => String, {nullable:false})
    todo!: string;

    @Field(() => Date, {nullable:false})
    limit!: Date | string;

    @Field(() => Boolean, {nullable:false})
    done_at!: boolean;

    @Field(() => UserCreateNestedOneWithoutTodoInput, {nullable:true})
    user?: UserCreateNestedOneWithoutTodoInput;
}
