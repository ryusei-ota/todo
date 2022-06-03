import { registerEnumType } from '@nestjs/graphql';

export enum TodoScalarFieldEnum {
    id = "id",
    todo = "todo",
    limit = "limit",
    done_at = "done_at"
}


registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum', description: undefined })
