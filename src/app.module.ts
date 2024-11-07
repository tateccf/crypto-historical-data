import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { BinanceModule } from './binance/binance.module';
import { MarketDataModule } from './market-data/market-data.module';

@Module({
  imports: [ConfigModule.forRoot(), BinanceModule, MarketDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
