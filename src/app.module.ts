import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://Maxi50234:MaXiMiLiAnO50234@cluster0.se8xjjp.mongodb.net/NestJs',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
