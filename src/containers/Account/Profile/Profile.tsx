import { Row } from 'react-bootstrap';
import ProfileMain from './components/ProfileMain';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import { ContentContainer } from '@/shared/components/Container';

const Profile = () => {
  useTitle(getRouteByKey(ROUTE_KEY.ACCOUNT_PROFILE).title);

  return (
    <ContentContainer>
      <Row>
        <ProfileMain />
      </Row>
    </ContentContainer>
  );
};
export default Profile;
