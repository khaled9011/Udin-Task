import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(''), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
