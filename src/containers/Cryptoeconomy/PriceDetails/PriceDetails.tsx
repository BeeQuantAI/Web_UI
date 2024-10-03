import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';
import CoinOverview from './components/CoinOverview';
import CoinChart from './components/CoinChart';
import MarketInfo from './components/MarketInfo';
import { Col, Row } from 'react-bootstrap';
import CoinAnalysis from './components/CoinAnalysis';
import CreateBot from './components/CreateBot';

const PriceDetails = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CRYPTO_EXCHANGES).title);

  return (
    <ContentContainer>
      <CoinOverview />
      <Row>
        <CoinChart dir="rtl" />
        <Col lg={3}>
          <MarketInfo dir="rtl" />
          <CoinAnalysis />
          <CreateBot />
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default PriceDetails;
