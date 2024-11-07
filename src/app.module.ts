import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceService } from './binance/binance.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BinanceService],
})
export class AppModule {}
