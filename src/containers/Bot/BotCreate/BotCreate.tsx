import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';

const BotCreate = () => {
  useTitle(getRouteByKey(ROUTE_KEY.BOT_CREATE).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Bot Create</h3>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default BotCreate;
