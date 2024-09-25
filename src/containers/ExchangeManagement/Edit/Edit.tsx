import { Col, Row } from 'react-bootstrap';
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
  CardSubhead,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import FormField from '@/shared/components/form/FormHookField';
import { useForm } from 'react-hook-form';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import Modal from '@/shared/components/Modal';
import { ContentContainer } from '@/shared/components/Container';

const ExchangeEdit = () => {
  useTitle(getRouteByKey(ROUTE_KEY.EXCHANGE_EDIT).title);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('data:', data);
  };

  return (
    <ContentContainer>
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <CardBody>
              <CardTitleWrap>
                <CardTitle>Edit Key</CardTitle>
                <CardSubhead>Update your exchange key</CardSubhead>
              </CardTitleWrap>
              <FormContainer $horizontal onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <FormGroupLabel>Key Display Name</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="displayName"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{
                        required: 'This is required field',
                      }}
                      defaultValue=""
                      placeholder="Key Display Name"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Exchange</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="email"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{}}
                      defaultValue="Binance"
                      placeholder="Binance"
                      isAboveError
                      disabled
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>API Key</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="mobile"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{}}
                      defaultValue=""
                      placeholder="API Key"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>API Secret</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="ref"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{
                        required: 'This is required field',
                      }}
                      defaultValue="admin"
                      placeholder="API Secret"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
                  <Modal
                    color="primary"
                    title="Attention!"
                    btn="Submit"
                    message="You're going to update this exchange key. Are you sure?"
                  />
                  <Modal
                    color="danger"
                    title="Attention!"
                    btn="Delete"
                    message="You're going to remove this exchange. Are you sure?"
                  />
                  <Button variant="secondary" type="button" onClick={() => {}}>
                    Cancel
                  </Button>
                </FormButtonToolbar>
              </FormContainer>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default ExchangeEdit;
