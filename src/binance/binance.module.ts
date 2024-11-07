import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [BinanceService],
  exports: [BinanceService],
})
export class BinanceModule {}
