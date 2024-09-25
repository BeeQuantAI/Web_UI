import { useForm } from 'react-hook-form';
import {
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { WizardButtonToolbar, WizardFormContainer, WizardTitle } from '@/shared/components/form/WizardFormElements';
import FormField from '@/shared/components/form/FormHookField';


const StepOne = ({ onSubmit, previousPage, defaultValues }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({ defaultValues });
  return (
    <WizardFormContainer horizontal onSubmit={handleSubmit(onSubmit)}>
      <WizardTitle>Fill your API keys</WizardTitle>
      <FormGroup>
        <FormGroupLabel>Display name</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="username"
            as="input"
            placeholder="Display name"
            control={control}
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>API key</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="email"
            as="input"
            errors={errors}
            placeholder="API key"
            control={control}
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>API secret</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="url"
            as="input"
            control={control}
            errors={errors}
            type="url"
            placeholder="API secret"
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <WizardButtonToolbar>
        <Button variant="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
        <Button variant="primary" type="submit" className="next">Submit</Button>
      </WizardButtonToolbar>
    </WizardFormContainer>
  );
};

export default StepOne;
