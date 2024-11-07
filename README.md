# Historical Crypto Price Data

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test
```

## Example of usage

`/GET /market-data/historical?symbol=SOLUSDT&startTime=1730370840095&endTime=1730975640095`

Query Params:

symbol: string!
startTime: LONG!
endTime: LONG!

### Response:

```
{
  "initialPrice": 168.69,
  "finalPrice": 186.59,
  "priceDifference": 17.900000000000006,
  "percentageChange": "+10.61"
}
```
