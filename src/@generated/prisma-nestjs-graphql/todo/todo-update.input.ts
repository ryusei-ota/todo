import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneWithoutTodoInput } from '../user/user-update-one-without-todo.input';

@InputType()
export class TodoUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    todo?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    limit?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    done_at?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutTodoInput, {nullable:true})
    user?: UserUpdateOneWithoutTodoInput;
}
