import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  AccountButton,
  AccountCard,
  AccountContent,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountTitle,
  AccountWrap,
} from '@/shared/components/account/AccountElements';
import { ROUTE_KEY, getPublicRouteByKey } from '@/routes/routeConfig';
import imageWaiting from '@/shared/img/waiting.png';

const RegisterSuccess = () => {
  return (
    <AccountWrap>
      <AccountContent>
        <AccountCard>
          <AccountImage src={imageWaiting} alt="success" />
          <AccountHead>
            <AccountTitle>
              <AccountLogo>
                <AccountLogoAccent>
                  {' '}
                  Verification email sent ! <br />{' '}
                </AccountLogoAccent>
              </AccountLogo>{' '}
              Please check your mailbox
            </AccountTitle>
          </AccountHead>
          {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
          <AccountButton
            as={NavLink}
            variant="outline-primary"
            to={getPublicRouteByKey(ROUTE_KEY.LOGIN).path}
          >
            Back to Login
          </AccountButton>
        </AccountCard>
      </AccountContent>
    </AccountWrap>
  );
};

export default RegisterSuccess;

// region STYLES

const AccountImage = styled.img`
  max-width: 500px;
  width: 100%;
  margin-bottom: 40px;
`;

// endregion
