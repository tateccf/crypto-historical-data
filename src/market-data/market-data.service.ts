import { Injectable } from '@nestjs/common';

@Injectable()
export class MarketDataService {
  getPriceAnalysis(data: [number, string][]) {
    const parsedData = data.map(this.parseCandleStickData);

    const initialPrice = parsedData[0].openPrice;
    const finalPrice = parsedData[parsedData.length - 1].openPrice;

    const priceDifference = finalPrice - initialPrice;
    const percentageChange = ((priceDifference / initialPrice) * 100).toFixed(
      2,
    );

    return {
      initialPrice,
      finalPrice,
      priceDifference,
      percentageChange:
        Number(percentageChange) >= 0
          ? `+${percentageChange}`
          : `-${percentageChange}`,
    };
  }

  private parseCandleStickData(candleStick: [number, string]) {
    return {
      openTime: new Date(candleStick[0]).toISOString(),
      openPrice: parseFloat(candleStick[1]),
    };
  }
}
