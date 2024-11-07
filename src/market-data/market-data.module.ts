import { Module } from '@nestjs/common';
import { MarketDataService } from './market-data.service';
import { MarketDataController } from './market-data.controller';
import { BinanceModule } from 'src/binance/binance.module';

@Module({
  controllers: [MarketDataController],
  providers: [MarketDataService],
  imports: [BinanceModule],
})
export class MarketDataModule {}
