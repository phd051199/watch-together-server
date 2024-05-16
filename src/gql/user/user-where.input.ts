import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScriptListRelationFilter } from '../user-script/user-script-list-relation-filter.input';
import { OAuthProviderListRelationFilter } from '../o-auth-provider/o-auth-provider-list-relation-filter.input';
import { ProfileNullableRelationFilter } from '../profile/profile-nullable-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLogin?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScriptListRelationFilter, {nullable:true})
    userScripts?: UserScriptListRelationFilter;

    @Field(() => OAuthProviderListRelationFilter, {nullable:true})
    oauthProviders?: OAuthProviderListRelationFilter;

    @Field(() => ProfileNullableRelationFilter, {nullable:true})
    profile?: ProfileNullableRelationFilter;
}