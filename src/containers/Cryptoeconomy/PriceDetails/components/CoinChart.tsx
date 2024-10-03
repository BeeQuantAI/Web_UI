import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';

const getRandomArbitrary = (minValue, maxValue) => {
  const ratio = (maxValue - minValue) + minValue;
  return Math.random() * ratio;
};

const generateRandomData = (dataLength, minDeviationValue, maxDeviationValue, minRange, maxRange) => {
  const rangeFactor = (maxRange - minRange) / dataLength;

  return Array.from({ length: dataLength }, (v, k) => (
    {
      name: k,
      point: (k * rangeFactor) + getRandomArbitrary(minDeviationValue, maxDeviationValue),
      amt: 2000,
    }));
};

const data = generateRandomData(100, -2000, 2000, 300, 6000);

const tickFormer = tick => `${tick / 1000}k`;

const CoinChart = ({ dir }) => {

  return (
    <Panel
      lg={9}
      xl={9}
      md={12}
      title='Price chart'
    >
      <div dir="ltr">
        <ResponsiveContainer height={650} className="dashboard__active-users-chart">
          <LineChart
            height={650}
            data={data}
          >
            <YAxis
              tickLine={false}
              tickFormatter={tickFormer}
              interval="preserveStartEnd"
              width={50}
              orientation={dir === 'rtl' ? 'right' : 'left'}
            />
            <XAxis
              hide
              padding={{ left: 30, right: 30 }}
              reversed={dir === 'rtl'}
            />
            <CartesianGrid vertical={false} />
            <Line type="linear" dataKey="point" dot={false} stroke="#b8e986" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

CoinChart.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default CoinChart;
