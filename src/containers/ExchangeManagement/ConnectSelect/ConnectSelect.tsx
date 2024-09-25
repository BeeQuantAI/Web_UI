import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';

const ConnectSelect = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CONNECT_SELECT).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Connect Select Page</h3>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default ConnectSelect;
