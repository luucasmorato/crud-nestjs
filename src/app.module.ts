import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://morato:<mongo@mongo123>@cluster0.7wgny.mongodb.net/test'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
