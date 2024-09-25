import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';

const CryptoPrices = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CRYPTO_PRICES).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Crypto Prices</h3>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default CryptoPrices;
