import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoUpdateManyMutationInput } from './todo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { todoWhereInput } from './todo-where.input';

@ArgsType()
export class UpdateManytodoArgs {

    @Field(() => todoUpdateManyMutationInput, {nullable:false})
    @Type(() => todoUpdateManyMutationInput)
    data!: todoUpdateManyMutationInput;

    @Field(() => todoWhereInput, {nullable:true})
    @Type(() => todoWhereInput)
    where?: todoWhereInput;
}
