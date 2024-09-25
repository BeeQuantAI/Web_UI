import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  WizardFormContainer,
} from '@/shared/components/form/WizardFormElements';
import {
  AccountButton,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountTitle
} from '@/shared/components/account/AccountElements';
import imageSuccess from '@/shared/img/success.png';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';

const AccountImage = styled.img`
  max-width: 500px;
  width: 100%;
  margin-bottom: 40px;
`;

const StepThree = ({ onSubmit, previousPage, defaultValues }) => {
  const { handleSubmit } = useForm({ defaultValues });

  return (
    <WizardFormContainer horizontal onSubmit={handleSubmit(onSubmit)}>
  
        <AccountImage src={imageSuccess} alt="success" />
        <AccountHead>
          <AccountTitle>
            <AccountLogo>
              <AccountLogoAccent>
                {' '}
                Cool! <br />{' '}
              </AccountLogoAccent>
            </AccountLogo>{' '}
            Your exchange key is added successfully
          </AccountTitle>
        </AccountHead>
        {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
        <AccountButton
          as={NavLink}
          variant="outline-primary"
          to={getRouteByKey(ROUTE_KEY.EXCHANGE_MANAGEMENT).path}
        >
          Back to Exchange Management
        </AccountButton>
    </WizardFormContainer>
  );
};

export default StepThree;
