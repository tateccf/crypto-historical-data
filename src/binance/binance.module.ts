import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [BinanceService],
})
export class BinanceModule {}
