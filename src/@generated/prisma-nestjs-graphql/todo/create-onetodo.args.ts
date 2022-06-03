import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoCreateInput } from './todo-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOnetodoArgs {

    @Field(() => todoCreateInput, {nullable:false})
    @Type(() => todoCreateInput)
    @ValidateNested()
    @Type(() => todoCreateInput)
    data!: todoCreateInput;
}
