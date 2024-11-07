import { Injectable } from '@nestjs/common';

import axios from 'axios';

@Injectable()
export class BinanceService {
  private readonly K_LINES_PATH = '/api/v3/klines';

  constructor() {}

  async fetchHistoricalData(
    symbol: string,
    startTime: string,
    endTime: string,
  ) {
    const historialDataEndpoint = `${process.env.BINANCE_BASE_URL}${this.K_LINES_PATH}`;

    const response = await axios.get(historialDataEndpoint, {
      params: { symbol, interval: '1d', startTime, endTime },
    });

    console.log(response);
    return response.data;
  }
}
