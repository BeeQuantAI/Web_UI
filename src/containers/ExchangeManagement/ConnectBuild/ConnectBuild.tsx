import { Col, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import Form from './components/Form';
import { ContentContainer } from '@/shared/components/Container';

const ConnectForm = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CONNECT_BUILD).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Connect new exchange page</h3>
        </Col>
      </Row>
      <Form onSubmit={()=>{}} />
    </ContentContainer>
  );
};

export default ConnectForm;
