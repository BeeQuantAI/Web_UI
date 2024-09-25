import { Col, Row } from 'react-bootstrap';
import Exchange from './components/Exchange';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { colorAccentGreen, colorRed } from '@/styles/palette';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import PlusThickIcon from 'mdi-react/PlusThickIcon';
import { ContentContainer } from '@/shared/components/Container';




const Management = () => {
  useTitle(getRouteByKey(ROUTE_KEY.BOT_MANAGEMENT).title);

  return (
    <ContentContainer>
      <Row>
        <Col md={12}>
        <ButtonToolbar>
        <h3 className="page-title">Exchange Management Page</h3>

      <Button variant="outline-secondary"><span>Connect Exchange</span><PlusThickIcon /></Button>
      </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <Exchange name="Binance Core" value = "0.02 BTC" color={colorAccentGreen} />
        <Exchange name="Binance Adventure" value = "0.1 BTC" color={colorAccentGreen}/>
        <Exchange name="Binance Explorer" value = "0.009 BTC" color={colorAccentGreen}/>
        <Exchange name="Binance Trail" value = "Expired" color={colorRed}/>
      </Row>
    </ContentContainer>
  );
};

export default Management;
