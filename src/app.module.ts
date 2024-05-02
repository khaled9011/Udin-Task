import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
//will uncomment after I figure out what to do with the DB for this task.
//import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    //MongooseModule.forRoot(''),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
