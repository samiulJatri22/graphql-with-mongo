import { User, UserSchema } from './model/user';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { Module } from "@nestjs/common";

@Module({
    imports:[MongooseModule.forFeature([{name:User.name, schema: UserSchema}])],
    providers:[UserResolver, UserService]
})
export class UserModule{}