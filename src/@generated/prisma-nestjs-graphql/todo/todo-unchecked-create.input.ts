import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class todoUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    todo!: string;

    @Field(() => Date, {nullable:false})
    limit!: Date | string;

    @Field(() => Boolean, {nullable:false})
    done_at!: boolean;
}
