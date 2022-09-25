import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateUserInput{
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @Field()
    @IsNotEmpty()
    age:number;

    @Field()
    @IsOptional()
    isSubscribe:boolean;
}