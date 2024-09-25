import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';

const ConnectForm = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CONNECT_FORM).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Connect Form</h3>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default ConnectForm;
