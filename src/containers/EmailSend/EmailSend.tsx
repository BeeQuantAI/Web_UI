import { ROUTE_KEY, getPublicRouteByKey } from '@/routes/routeConfig';
import { useTitle } from '@/hooks/useTitle';
import RegisterSuccess from './components/RegisterSuccess';

const EmailSend = () => {

  useTitle(getPublicRouteByKey(ROUTE_KEY.REGISTER_SEND).title);

  return <RegisterSuccess />;
};

export default EmailSend;
