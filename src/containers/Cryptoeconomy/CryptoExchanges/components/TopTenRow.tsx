import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import { COLORS_UP_DOWN } from '@/shared/constants/cryptocurrencies';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length > 0) {
    return (
      <div className="dashboard__total-tooltip">
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
  })),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: null,
};

const TopTenRow = ({
  crypto,
  index,
  chartData,
}) => {
  const isTrendUp = Math.sign(crypto?.quote.USD.percent_change_7d) > 0;
  const chartColor = isTrendUp ? COLORS_UP_DOWN.UP : COLORS_UP_DOWN.DOWN;

  return (
    <tr key={crypto.id}>
      <td>{index + 1}</td>
      <td>{crypto.name}</td>
      <td dir="ltr">$ {crypto.quote.USD.market_cap.toFixed(2)}</td>
      <td dir="ltr">$ {crypto.quote.USD.price.toFixed(2)}</td>
      <td dir="ltr">$ {crypto.quote.USD.volume_24h.toFixed(2)}</td>
      <td>{crypto.quote.USD.percent_change_24h.toFixed(2)} %</td>
      <td>{crypto.quote.USD.percent_change_7d.toFixed(2)} %</td>
    </tr>
           
  );
};

TopTenRow.propTypes = {
  crypto: PropTypes.shape({
    quote: PropTypes.shape({
      USD: PropTypes.shape({
        market_cap: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        percent_change_24h: PropTypes.number.isRequired,
        volume_24h: PropTypes.number.isRequired,
        percent_change_7d: PropTypes.number.isRequired,
      }),
    }),
    percent_change_1h: PropTypes.number.isRequired,
    percent_change_24h: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    total_supply: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })),
};

TopTenRow.defaultProps = {
  chartData: [],
};

export default TopTenRow;

// region STYLES

const DashboardTableCryptoChartCell = styled.td`
  padding: 10px;
  width: 180px;
`;

const DashboardTableNoDataText = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// endregion
