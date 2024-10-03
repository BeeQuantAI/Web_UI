import { PieChart, Pie } from 'recharts';
import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import { colorGray, colorLightYellow } from '@/styles/palette';
import { left } from '@/styles/directions';

const pieChartData = [{ value: 60, fill: '#b8e986' },
  { value: 40, fill: '#f2f4f7' }];

const CoinAnalysis = () => {

  return (
    <Panel
      lg={12}
      xl={12}
      md={12}
      title='Technical Analysis'
      subhead="BTC"
    >
      <DashboardUsersWrap>
        <DashboardUsersChartWrap>
          <PieChart height={150} width={280}>
            <Pie
              data={pieChartData}
              dataKey="value"
              cx={135}
              cy={140}
              startAngle={180}
              endAngle={0}
              innerRadius={100}
              outerRadius={128}
              paddingAngle={0}
            />
          </PieChart>
          <DashboardUsersChartLabel>55</DashboardUsersChartLabel>
          <DashboardUsersDay>
            <span style={{ color: `${colorLightYellow}` }}>Neutral</span>
          </DashboardUsersDay>
        </DashboardUsersChartWrap>
        <DashboardUsersInfoWrap dir="ltr">
          <DashboardUsersDay>
            <span>Strong Sell</span>
            <span>0</span>
          </DashboardUsersDay>
          <DashboardUsersDay>
            <span>Strong Buy</span>
            <span>100</span>
          </DashboardUsersDay>
        </DashboardUsersInfoWrap>
      </DashboardUsersWrap>
    </Panel>
  );
};

export default CoinAnalysis;

// region STYLES

const DashboardUsersWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DashboardUsersChartWrap = styled.div`
  position: relative;
  width: 100%;

  div, svg {
    width: 100% !important;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) and (max-width: 1539px) {
    svg, div {
      height: 100px !important;
    }
  }
`;

const DashboardUsersChartLabel = styled.p`
  margin: 0;
  position: absolute;
  top: calc(50% + 10px);
  text-align: center;
  ${left}: calc(50% - 30px);
  font-size: 38px;
`;

const DashboardUsersInfoWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  font-size: 13px;
  line-height: 1.54;
  color: ${colorGray};

  p {
    margin: 0;
  }

  @media screen and (min-width: 1539px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 75px;
  }
`;

const DashboardUsersDay = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span:last-child {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 500;
    color: ${colorGray};
  }
`;

// endregion
