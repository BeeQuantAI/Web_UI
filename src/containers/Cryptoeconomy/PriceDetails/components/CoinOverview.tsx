import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import { colorAdditional } from '@/styles/palette';
import { marginRight } from '@/styles/directions';
import { Row } from 'react-bootstrap';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const CoinOverview = () => {

  return (
    <Panel md={12} lg={12} xl={12} sm={12} xs={12} title="Coin overview">        
    
      <Row style={{ marginTop: '-22px', marginBottom: '3px' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
          <DashboardStatMainNumber>$12,321</DashboardStatMainNumber>
          <span style={{ color: '#4ce1b6' }}><TrendingUpIcon /></span>
          </div>
          <DashboardStatMnTitle style={{ fontWeight: '500' }}>BTC/USDT</DashboardStatMnTitle>
          </div>
 
        </Row>
        <Row>
        <DashboardSalesReportWrap>
          <div>
            <DashboardStatDataNumber style={{ color: '#4ce1b6' }}>+$21.3</DashboardStatDataNumber>
            <DashboardStatMnTitle>1h Change (value)</DashboardStatMnTitle>
          </div>
          <div>
            <DashboardStatDataNumber>$61123.77</DashboardStatDataNumber>
            <DashboardStatMnTitle>24h high</DashboardStatMnTitle>
          </div>
          <div>
            <DashboardStatDataNumber>$63092.13</DashboardStatDataNumber>
            <DashboardStatMnTitle>24h low</DashboardStatMnTitle>
          </div>
          <div>
            <DashboardStatDataNumber style={{ color: '#4ce1b6' }}>+$123.77</DashboardStatDataNumber>
            <DashboardStatMnTitle>24h Change (value)</DashboardStatMnTitle>
          </div>
          <div>
            <DashboardStatDataNumber style={{ color: '#4ce1b6' }}>+2.62%</DashboardStatDataNumber>
            <DashboardStatMnTitle>24h Change (percent)</DashboardStatMnTitle>
          </div>
          <div>
            <DashboardStatDataNumber>$75252152.53</DashboardStatDataNumber>
            <DashboardStatMnTitle>24h Volume</DashboardStatMnTitle>
          </div>
          </DashboardSalesReportWrap>
          </Row>
    
    </Panel>
  );
};

export default CoinOverview;

// region STYLES

const DashboardStatData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  p {
    margin: 0;
  }
`;

const DashboardStatSubTitle = styled.p`
color: ${colorAdditional};
  font-size: 18px;
  margin-top: 0;
`;

const DashboardStatDataNumber = styled.p`
  font-size: 18px;
  line-height: 34px;
  font-weight: 500;
  margin-top: 0;
`;

const DashboardStatMain = styled.div`
  width: 100%;

  hr {
    margin-bottom: 30px;
    margin-top: 40px;
  }
`;

const DashboardStatLargeTitle = styled.p`
  font-size: 30px;
  margin-bottom: -10px;
`;

const DashboardStatMnTitle = styled.p`
  color: ${colorAdditional};
  margin-top: 0;
`;

const DashboardStatMainNumber = styled.p`
  font-size: 28px;
  line-height: 34px;
`;

const DashboardSalesReportWrap = styled.div`
  display: flex;
  align-items: center;


   flex-wrap: wrap;

  & > div {
    width: 155px;
    ${marginRight}: 25px;
    margin-bottom: 0;

    &:last-child {
      ${marginRight}: 0;
    }
  }
`;

// endregion
