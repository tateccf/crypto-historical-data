import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MarketDataService } from './market-data.service';
import { BinanceService } from 'src/binance/binance.service';
import { GetHistorialDataDto } from './dto/get-historical-data.dto';

@Controller('market-data')
export class MarketDataController {
  constructor(
    private readonly marketDataService: MarketDataService,
    private readonly binanceService: BinanceService,
  ) {}

  @Get('historical')
  @UsePipes(new ValidationPipe())
  async getHistoricalData(@Query() query: GetHistorialDataDto) {
    const { symbol, startTime, endTime } = query;

    const data: [number, string][] =
      await this.binanceService.fetchHistoricalData(symbol, startTime, endTime);

    const analysis = this.marketDataService.getPriceAnalysis(data);

    return analysis;
  }
}
