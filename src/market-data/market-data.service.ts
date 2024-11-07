import { Injectable } from '@nestjs/common';

@Injectable()
export class MarketDataService {
  getPriceAnalysis(data: [number, string][]) {
    const parsedData = data.map(this.parseCandleStickData);
    console.log(parsedData);
  }

  private parseCandleStickData(candleStick: [number, string]) {
    return {
      openTime: new Date(candleStick[0]).toISOString(),
      openPrice: parseFloat(candleStick[1]),
    };
  }
}
