import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import { Table } from '@/shared/components/TableElements';

const header = [
  { id: 0, title: 'Coin' },
  { id: 1, title: 'Price Change (24 hrs.)' },
  { id: 2, title: 'Percentage Gain (24 hrs.)' },
];

const colors = [
 '#f6a81e',
 '#5e62e6',
 '#3ddb42',
 '#21cbe6',
 '#6d6a6a',
 '#b7b3b3',
];

const TopGainer = () => {
  const topSix = [
    {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 11747,
        "date_added": "2010-07-13T00:00:00.000Z",
        "tags": [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channel",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "galaxy-digital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "bitcoin-ecosystem",
            "ftx-bankruptcy-estate"
        ],
        "max_supply": 21000000,
        "circulating_supply": 19760912,
        "total_supply": 19760912,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 1,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:05:00.000Z",
        "quote": {
            "USD": {
                "price": 63781.92300253501,
                "volume_24h": 28763364665.03916,
                "volume_change_24h": 105.3206,
                "percent_change_1h": -0.52381331,
                "percent_change_24h": -3.04030474,
                "percent_change_7d": 0.84790171,
                "percent_change_30d": 8.15693439,
                "percent_change_60d": -1.34078787,
                "percent_change_90d": 1.83472894,
                "market_cap": 1260388967643.87,
                "market_cap_dominance": 55.8482,
                "fully_diluted_market_cap": 1339420383053.24,
                "tvl": null,
                "last_updated": "2024-09-30T14:05:00.000Z"
            }
        }
    },
    {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 9367,
        "date_added": "2015-08-07T00:00:00.000Z",
        "tags": [
            "pos",
            "smart-contracts",
            "ethereum-ecosystem",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "layer-1",
            "ftx-bankruptcy-estate"
        ],
        "max_supply": null,
        "circulating_supply": 120367966.81148952,
        "total_supply": 120367966.81148952,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 2,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:04:00.000Z",
        "quote": {
            "USD": {
                "price": 2622.4467267756268,
                "volume_24h": 14850685220.433535,
                "volume_change_24h": 45.4881,
                "percent_change_1h": -0.52476088,
                "percent_change_24h": -1.27110414,
                "percent_change_7d": -0.92261405,
                "percent_change_30d": 4.15842371,
                "percent_change_60d": -17.5960566,
                "percent_change_90d": -23.63866904,
                "market_cap": 315658580573.428,
                "market_cap_dominance": 13.9921,
                "fully_diluted_market_cap": 315658580573.43,
                "tvl": null,
                "last_updated": "2024-09-30T14:04:00.000Z"
            }
        }
    },
    {
        "id": 825,
        "name": "Tether USDt",
        "symbol": "USDT",
        "slug": "tether",
        "num_market_pairs": 99043,
        "date_added": "2015-02-25T00:00:00.000Z",
        "tags": [
            "stablecoin",
            "asset-backed-stablecoin",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "injective-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
            "optimism-ecosystem",
            "fiat-stablecoin"
        ],
        "max_supply": null,
        "circulating_supply": 119629274444.24619,
        "total_supply": 121372683868.56189,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        "infinite_supply": true,
        "cmc_rank": 3,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:04:00.000Z",
        "quote": {
            "USD": {
                "price": 0.9999913573817275,
                "volume_24h": 56197783196.76989,
                "volume_change_24h": 57.3692,
                "percent_change_1h": 0.0087681,
                "percent_change_24h": -0.01196102,
                "percent_change_7d": -0.06362108,
                "percent_change_30d": -0.0074029,
                "percent_change_60d": 0.03988395,
                "percent_change_90d": 0.12169677,
                "market_cap": 119628240534.09294,
                "market_cap_dominance": 5.3023,
                "fully_diluted_market_cap": 121371634890.79,
                "tvl": null,
                "last_updated": "2024-09-30T14:04:00.000Z"
            }
        }
    },
    {
        "id": 1839,
        "name": "BNB",
        "symbol": "BNB",
        "slug": "bnb",
        "num_market_pairs": 2251,
        "date_added": "2017-07-25T00:00:00.000Z",
        "tags": [
            "marketplace",
            "centralized-exchange",
            "payments",
            "smart-contracts",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "bnb-chain",
            "layer-1",
            "sec-security-token",
            "alleged-sec-securities",
            "celsius-bankruptcy-estate"
        ],
        "max_supply": null,
        "circulating_supply": 145932832.2231783,
        "total_supply": 145932832.2231783,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 4,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:04:00.000Z",
        "quote": {
            "USD": {
                "price": 577.3131389784124,
                "volume_24h": 1937858409.207136,
                "volume_change_24h": 22.2764,
                "percent_change_1h": 0.06476907,
                "percent_change_24h": -3.48457507,
                "percent_change_7d": -2.7197781,
                "percent_change_30d": 7.67041266,
                "percent_change_60d": 0.72185365,
                "percent_change_90d": -0.12656763,
                "market_cap": 84248941450.77307,
                "market_cap_dominance": 3.7321,
                "fully_diluted_market_cap": 84248941450.77,
                "tvl": null,
                "last_updated": "2024-09-30T14:04:00.000Z"
            }
        }
    },
    {
        "id": 5426,
        "name": "Solana",
        "symbol": "SOL",
        "slug": "solana",
        "num_market_pairs": 747,
        "date_added": "2020-04-10T00:00:00.000Z",
        "tags": [
            "pos",
            "platform",
            "solana-ecosystem",
            "cms-holdings-portfolio",
            "kenetic-capital-portfolio",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "okx-ventures-portfolio",
            "layer-1",
            "ftx-bankruptcy-estate",
            "sec-security-token",
            "alleged-sec-securities",
            "cmc-crypto-awards-2024"
        ],
        "max_supply": null,
        "circulating_supply": 468976463.9630656,
        "total_supply": 585524572.8318634,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 5,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:04:00.000Z",
        "quote": {
            "USD": {
                "price": 156.85276490970443,
                "volume_24h": 2309381366.705947,
                "volume_change_24h": 76.4855,
                "percent_change_1h": -0.01812365,
                "percent_change_24h": -0.33572206,
                "percent_change_7d": 9.50952902,
                "percent_change_30d": 15.25787542,
                "percent_change_60d": -7.6509707,
                "percent_change_90d": 5.41070009,
                "market_cap": 73560255050.18321,
                "market_cap_dominance": 3.2595,
                "fully_diluted_market_cap": 91841148171.25,
                "tvl": null,
                "last_updated": "2024-09-30T14:04:00.000Z"
            }
        }
    },
  ];

  return (
    <Panel
      xl={4}
      xs={12}
      title="Top Climbers"
      subhead="Performance by Price Increase"
      isLoading={false}
      refreshRequest={()=>{}}
    >
      <Table responsive striped>
        <thead>
          <tr>
            {header.map(item => (
              <TradeHistoryTh key={item.id}>{item.title}</TradeHistoryTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {topSix?.map((item, index) => (
            <tr key={item?.id}>
              <td>
                <DashboardCoin color={colors[index]}>
                  {item?.symbol}
                </DashboardCoin>
              </td>
              <td>{item?.quote?.USD?.volume_change_24h?.toFixed(2)}</td>
              <td>{item?.quote?.USD?.percent_change_24h?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default TopGainer;

// region STYLES

const DashboardCoin = styled.p`
  color: ${props => props.color};
  font-weight: 700;
`;

const TradeHistoryTh = styled.th`
  white-space: pre;
`;

// endregion
