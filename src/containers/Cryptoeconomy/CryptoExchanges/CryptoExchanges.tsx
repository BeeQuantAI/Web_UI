import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';
import TopMarketCap from './components/TopMarketCap';
import TopGainer from './components/TopGainer';
import TopLoser from './components/TopLoser';
import TopTen from './components/TopTen';

const CryptoExchanges = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CRYPTO_EXCHANGES).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Market Overview</h3>
        </Col>
      </Row>
      <Row>        
        <TopMarketCap />
        <TopGainer />
        <TopLoser />
        <TopTen />
      </Row>
    </ContentContainer>
  );
};

export default CryptoExchanges;

