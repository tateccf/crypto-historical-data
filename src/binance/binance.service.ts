import { Injectable } from '@nestjs/common';
import { CreateBinanceDto } from './dto/create-binance.dto';
import { UpdateBinanceDto } from './dto/update-binance.dto';

@Injectable()
export class BinanceService {
  private readonly K_LINES_PATH = 'klines';

  async fetchHistoricalData(
    symbol: string,
    interval: string,
    startTime: string,
    endTime: string,
  ) {}
}
