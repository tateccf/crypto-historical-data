import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MarketDataService } from './market-data.service';
import { BinanceService } from 'src/binance/binance.service';

@Controller('market-data')
export class MarketDataController {
  constructor(
    private readonly marketDataService: MarketDataService,
    private readonly binanceService: BinanceService,
  ) {}

  @Get('historical')
  async getHistoricalData(
    @Query('symbol') symbol: string,
    @Query('interval') interval: string,
    @Query('startTime') startTime: string,
    @Query('endTime') endTime: string,
  ) {
    const data = await this.binanceService.fetchHistoricalData(
      symbol,
      interval,
      startTime,
      endTime,
    );

    return data;
  }
}
