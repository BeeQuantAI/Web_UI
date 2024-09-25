import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';

const ConnectSuccess = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CONNECT_SUCCESS).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Connect Success</h3>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default ConnectSuccess;
