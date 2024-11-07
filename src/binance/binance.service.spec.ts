import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from './binance.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BinanceService', () => {
  let service: BinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinanceService],
    }).compile();

    service = module.get<BinanceService>(BinanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('fetchHistoricalData', () => {
    it('should fetch historical data successfully', async () => {
      const MOCKED_SYMBOL = 'BTCUSDT';
      const MOCKED_START_TIME = 'start-time';
      const MOCKED_END_TIME = 'end-time';
      const MOCKED_RESPONSE_DATA = [
        [1111, '100'],
        [1112, '200'],
      ];

      mockedAxios.get.mockResolvedValueOnce({ data: MOCKED_RESPONSE_DATA });

      const result = await service.fetchHistoricalData(
        MOCKED_SYMBOL,
        MOCKED_START_TIME,
        MOCKED_END_TIME,
      );

      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        `${process.env.BINANCE_BASE_URL}/api/v3/klines`,
        {
          params: {
            symbol: MOCKED_SYMBOL,
            endTime: MOCKED_END_TIME,
            startTime: MOCKED_START_TIME,
            interval: '1d',
          },
        },
      );

      expect(result).toEqual(MOCKED_RESPONSE_DATA);
    });
  });
});
