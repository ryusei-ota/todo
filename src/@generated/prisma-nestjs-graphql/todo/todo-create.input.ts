import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class todoCreateInput {

    @Field(() => String, {nullable:false})
    todo!: string;

    @Field(() => Date, {nullable:false})
    limit!: Date | string;

    @Field(() => Boolean, {nullable:false})
    done_at!: boolean;
}
