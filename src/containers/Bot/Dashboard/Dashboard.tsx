import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';

const Dashboard = () => {
  useTitle(getRouteByKey(ROUTE_KEY.BOT_DASHBOARD).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Bots Board</h3>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default Dashboard;
