import {ObjectType, Field, Int, ID} from '@nestjs/graphql'
import {Document} from 'mongoose'
import {SchemaFactory, Schema , Prop} from '@nestjs/mongoose' 

export type UserDocument = User & Document; 

@ObjectType()
@Schema()
export class User{
    @Field(()=> ID)
    id:string;

    @Field()
    @Prop({required:true})
    email: string;

    @Field(() => Int)
    @Prop()
    age: number;    

    @Field({nullable:true})
    @Prop()
    isSubscribe?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User)