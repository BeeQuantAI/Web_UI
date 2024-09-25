import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ButtonToolbar } from '@/shared/components/Button';
import { ContentContainer } from '@/shared/components/Container';

const Management = () => {
  useTitle(getRouteByKey(ROUTE_KEY.BOT_MANAGEMENT).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
        <ButtonToolbar>
        <h3 className="page-title">Bot Management</h3>
      </ButtonToolbar>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default Management;
