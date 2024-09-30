import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import { Table } from '@/shared/components/TableElements';
import TopTenRow from './TopTenRow';

const TopTen = () => {
  const topTen = [
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
    {
        "id": 3408,
        "name": "USDC",
        "symbol": "USDC",
        "slug": "usd-coin",
        "num_market_pairs": 22246,
        "date_added": "2018-10-08T00:00:00.000Z",
        "tags": [
            "medium-of-exchange",
            "stablecoin",
            "asset-backed-stablecoin",
            "coinbase-ventures-portfolio",
            "solana-ecosystem",
            "hedera-hashgraph-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
            "optimism-ecosystem",
            "base-ecosystem",
            "fiat-stablecoin"
        ],
        "max_supply": null,
        "circulating_supply": 35978150953.40934,
        "total_supply": 35978150953.40934,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        },
        "infinite_supply": false,
        "cmc_rank": 6,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:04:00.000Z",
        "quote": {
            "USD": {
                "price": 1.0000312582620885,
                "volume_24h": 5225940600.166421,
                "volume_change_24h": 93.2938,
                "percent_change_1h": 0.01399249,
                "percent_change_24h": 0.00991294,
                "percent_change_7d": -0.01022068,
                "percent_change_30d": -0.00052872,
                "percent_change_60d": -0.01093323,
                "percent_change_90d": 0.01055636,
                "market_cap": 35979275567.8813,
                "market_cap_dominance": 1.5938,
                "fully_diluted_market_cap": 35979275567.88,
                "tvl": null,
                "last_updated": "2024-09-30T14:04:00.000Z"
            }
        }
    },
    {
        "id": 52,
        "name": "XRP",
        "symbol": "XRP",
        "slug": "xrp",
        "num_market_pairs": 1397,
        "date_added": "2013-08-04T00:00:00.000Z",
        "tags": [
            "medium-of-exchange",
            "enterprise-solutions",
            "arrington-xrp-capital-portfolio",
            "galaxy-digital-portfolio",
            "a16z-portfolio",
            "pantera-capital-portfolio",
            "ftx-bankruptcy-estate"
        ],
        "max_supply": 100000000000,
        "circulating_supply": 56564039920,
        "total_supply": 99987161962,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 7,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:05:00.000Z",
        "quote": {
            "USD": {
                "price": 0.6259070781761046,
                "volume_24h": 2687079890.7279997,
                "volume_change_24h": 67.8495,
                "percent_change_1h": -1.41532502,
                "percent_change_24h": -0.75334966,
                "percent_change_7d": 6.68172391,
                "percent_change_30d": 10.47189525,
                "percent_change_60d": 3.07832234,
                "percent_change_90d": 28.68312553,
                "market_cap": 35403832956.16374,
                "market_cap_dominance": 1.5692,
                "fully_diluted_market_cap": 62590707817.61,
                "tvl": null,
                "last_updated": "2024-09-30T14:05:00.000Z"
            }
        }
    },
    {
        "id": 74,
        "name": "Dogecoin",
        "symbol": "DOGE",
        "slug": "dogecoin",
        "num_market_pairs": 1075,
        "date_added": "2013-12-15T00:00:00.000Z",
        "tags": [
            "mineable",
            "pow",
            "scrypt",
            "medium-of-exchange",
            "memes",
            "payments",
            "doggone-doggerel",
            "bnb-chain",
            "ftx-bankruptcy-estate"
        ],
        "max_supply": null,
        "circulating_supply": 146172226383.7052,
        "total_supply": 146172226383.7052,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 8,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:05:00.000Z",
        "quote": {
            "USD": {
                "price": 0.11979171569171158,
                "volume_24h": 909668036.1739997,
                "volume_change_24h": -30.341,
                "percent_change_1h": -0.66962501,
                "percent_change_24h": -5.44787399,
                "percent_change_7d": 12.52790481,
                "percent_change_30d": 18.62945896,
                "percent_change_60d": -0.23196018,
                "percent_change_90d": -3.17084485,
                "market_cap": 17510221784.981316,
                "market_cap_dominance": 0.7761,
                "fully_diluted_market_cap": 17510221784.98,
                "tvl": null,
                "last_updated": "2024-09-30T14:05:00.000Z"
            }
        }
    },
    {
        "id": 11419,
        "name": "Toncoin",
        "symbol": "TON",
        "slug": "toncoin",
        "num_market_pairs": 569,
        "date_added": "2021-08-26T13:40:22.000Z",
        "tags": [
            "pos",
            "layer-1",
            "ftx-bankruptcy-estate",
            "dwf-labs-portfolio",
            "toncoin-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 2535897986.3294024,
        "total_supply": 5112383339.963077,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 9,
        "self_reported_circulating_supply": 3414166606,
        "self_reported_market_cap": 19832886002.663963,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:04:00.000Z",
        "quote": {
            "USD": {
                "price": 5.808997712006783,
                "volume_24h": 215584274.32675153,
                "volume_change_24h": -3.0052,
                "percent_change_1h": -0.30036023,
                "percent_change_24h": 0.1206974,
                "percent_change_7d": 2.3954222,
                "percent_change_30d": 9.75175642,
                "percent_change_60d": -14.89157982,
                "percent_change_90d": -27.81543531,
                "market_cap": 14731025600.470108,
                "market_cap_dominance": 0.653,
                "fully_diluted_market_cap": 29697823124.75,
                "tvl": null,
                "last_updated": "2024-09-30T14:04:00.000Z"
            }
        }
    },
    {
        "id": 1958,
        "name": "TRON",
        "symbol": "TRX",
        "slug": "tron",
        "num_market_pairs": 1041,
        "date_added": "2017-09-13T00:00:00.000Z",
        "tags": [
            "media",
            "payments",
            "tron-ecosystem",
            "layer-1",
            "dwf-labs-portfolio",
            "sec-security-token",
            "alleged-sec-securities"
        ],
        "max_supply": null,
        "circulating_supply": 86615652696.95877,
        "total_supply": 86615732172.55296,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 10,
        "self_reported_circulating_supply": 71659659264,
        "self_reported_market_cap": 11176861165.176453,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:04:00.000Z",
        "quote": {
            "USD": {
                "price": 0.15597145283652536,
                "volume_24h": 341590006.8681414,
                "volume_change_24h": 45.5768,
                "percent_change_1h": 0.09903727,
                "percent_change_24h": -0.31131802,
                "percent_change_7d": 2.25339488,
                "percent_change_30d": -0.60323341,
                "percent_change_60d": 20.83482106,
                "percent_change_90d": 21.95788256,
                "market_cap": 13509569189.528566,
                "market_cap_dominance": 0.5986,
                "fully_diluted_market_cap": 13509581585.45,
                "tvl": null,
                "last_updated": "2024-09-30T14:04:00.000Z"
            }
        }
    }
]

  const chartData = {
    "BTC": [
        {
            "name": "23",
            "value": "63546.75"
        },
        {
            "name": "24",
            "value": "63546.64"
        },
        {
            "name": "25",
            "value": "63783.86"
        },
        {
            "name": "26",
            "value": "64251.91"
        },
        {
            "name": "27",
            "value": "65589.19"
        },
        {
            "name": "28",
            "value": "65663.15"
        },
        {
            "name": "29",
            "value": "65625.43"
        }
    ],
    "ETH": [
        {
            "name": "23",
            "value": "2651.85"
        },
        {
            "name": "24",
            "value": "2638.94"
        },
        {
            "name": "25",
            "value": "2615.53"
        },
        {
            "name": "26",
            "value": "2622.71"
        },
        {
            "name": "27",
            "value": "2666.79"
        },
        {
            "name": "28",
            "value": "2676.00"
        },
        {
            "name": "29",
            "value": "2659.60"
        }
    ],
    "USDT": [
        {
            "name": "23",
            "value": "1.00"
        },
        {
            "name": "24",
            "value": "1.00"
        },
        {
            "name": "25",
            "value": "1.00"
        },
        {
            "name": "26",
            "value": "1.00"
        },
        {
            "name": "27",
            "value": "1.00"
        },
        {
            "name": "28",
            "value": "1.00"
        },
        {
            "name": "29",
            "value": "1.00"
        }
    ],
    "BNB": [],
    "SOL": [
        {
            "name": "23",
            "value": "144.74"
        },
        {
            "name": "24",
            "value": "147.05"
        },
        {
            "name": "25",
            "value": "150.65"
        },
        {
            "name": "26",
            "value": "152.45"
        },
        {
            "name": "27",
            "value": "157.05"
        },
        {
            "name": "28",
            "value": "156.58"
        },
        {
            "name": "29",
            "value": "156.81"
        }
    ],
    "USDC": [
        {
            "name": "23",
            "value": "1.00"
        },
        {
            "name": "24",
            "value": "1.00"
        },
        {
            "name": "25",
            "value": "1.00"
        },
        {
            "name": "26",
            "value": "1.00"
        },
        {
            "name": "27",
            "value": "1.00"
        },
        {
            "name": "28",
            "value": "1.00"
        },
        {
            "name": "29",
            "value": "1.00"
        }
    ],
    "XRP": [
        {
            "name": "23",
            "value": "0.59"
        },
        {
            "name": "24",
            "value": "0.59"
        },
        {
            "name": "25",
            "value": "0.59"
        },
        {
            "name": "26",
            "value": "0.59"
        },
        {
            "name": "27",
            "value": "0.59"
        },
        {
            "name": "28",
            "value": "0.61"
        },
        {
            "name": "29",
            "value": "0.63"
        }
    ],
    "DOGE": [
        {
            "name": "23",
            "value": "0.11"
        },
        {
            "name": "24",
            "value": "0.11"
        },
        {
            "name": "25",
            "value": "0.11"
        },
        {
            "name": "26",
            "value": "0.11"
        },
        {
            "name": "27",
            "value": "0.12"
        },
        {
            "name": "28",
            "value": "0.13"
        },
        {
            "name": "29",
            "value": "0.13"
        }
    ],
    "TON": [],
    "TRX": [
        {
            "name": "23",
            "value": "0.15"
        },
        {
            "name": "24",
            "value": "0.15"
        },
        {
            "name": "25",
            "value": "0.15"
        },
        {
            "name": "26",
            "value": "0.15"
        },
        {
            "name": "27",
            "value": "0.15"
        },
        {
            "name": "28",
            "value": "0.15"
        },
        {
            "name": "29",
            "value": "0.16"
        }
    ],
    "BCH": [
        {
            "name": "23",
            "value": "341.76"
        },
        {
            "name": "24",
            "value": "343.34"
        },
        {
            "name": "25",
            "value": "348.64"
        },
        {
            "name": "26",
            "value": "349.18"
        },
        {
            "name": "27",
            "value": "359.70"
        },
        {
            "name": "28",
            "value": "353.25"
        },
        {
            "name": "29",
            "value": "350.83"
        }
    ]
};


  return (
    <Panel
      lg={12}
      title="Top 20 cryptocurrencies"
      refreshRequest={()=>{}}
    >
   
        <DashboardTableCrypto responsive bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Change 24h</th>
              <th>Change 7d</th>
            </tr>
          </thead>
          <tbody>
            {topTen.length > 0 && topTen.map((crypto, index) => (
              <TopTenRow
                key={crypto.id}
                crypto={crypto}
                index={index}
                chartData={chartData?.[crypto.symbol]}
              />
            ))}
          </tbody>
        </DashboardTableCrypto>

    </Panel>
  );
};

export default TopTen;

// region STYLES

const DashboardTableCrypto = styled(Table)`

  tbody td {
    padding: 10px;
    white-space: nowrap;
  }
`;

// endregion
