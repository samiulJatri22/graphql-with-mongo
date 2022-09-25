import { UserModule } from './users/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/samiul_demo_graphql'),
    GraphQLModule.forRoot({
      driver:ApolloDriver,
      autoSchemaFile:true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
