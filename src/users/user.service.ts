import { DeleteUserInput } from './dto/input/delete-user.input';
import { GetUsersArgs } from './dto/args/get-users.args';
import { GetUserArgs } from './dto/args/get-user.args';
import { UpdateUserInput } from './dto/input/update-user.input';
import { CreateUserInput } from './dto/input/create-user.input';
import { User, UserDocument } from './model/user';
import { Injectable } from "@nestjs/common";
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class UserService{
    
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ){}

    async createUser(createUserData: CreateUserInput):Promise<User>{
        return await new this.userModel(createUserData).save();        
    }

    async updateUser(userUpdateData: UpdateUserInput):Promise<User>{
        const id = userUpdateData.id;
        delete userUpdateData.id;
        await this.userModel.findOneAndUpdate({id},{...userUpdateData}).exec()
        return await this.userModel.findById(id);
    }

    async getUser(getUserArgs: GetUserArgs):Promise<User>{
        return await this.userModel.findOne({id:getUserArgs.id}).exec()
    }

    async getUsers(getUsersArgs: GetUsersArgs):Promise<User[]>{
        return await this.userModel.find({id: {"$in": getUsersArgs.ids}}).exec();
    }

    async deleteUser(deleteUserData: DeleteUserInput):Promise<User>{
        return await this.userModel.findOneAndDelete({id: deleteUserData.id}).exec();
    }

}