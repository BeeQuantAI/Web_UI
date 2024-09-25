import { useForm } from 'react-hook-form';
import {
  FormGroup,
  FormGroupField,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { WizardButtonToolbar, WizardFormContainer, WizardTitle } from '@/shared/components/form/WizardFormElements';
import FormField from '@/shared/components/form/FormHookField';
import { RadioButton } from '@/shared/components/RadioButton';


export const radioButtonsGroup = [
  {
    name: 'binance', label: 'Binance', radioValue: '1', initialValue: '1',
  }
];

const StepOne = ({ onSubmit, defaultValues }) => {
  const { handleSubmit, control, formState: {} } = useForm({ defaultValues });
  return (
    <WizardFormContainer horizontal onSubmit={handleSubmit(onSubmit)}>
      <WizardTitle>Select your exchange</WizardTitle>
      <FormGroup>
        {radioButtonsGroup.map(item => (
          <FormGroupField key={`index_${item.label}`}>
            <FormField
              name={`${item.name}_${name}`}
              component={RadioButton}
              label={item.label}
              radioValue={item.radioValue}
              initialValue={item.initialValue}
              control={control}
              defaultValue={item.initialValue}
            />
          </FormGroupField>
        ))}
      </FormGroup>
      <WizardButtonToolbar>
        {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
        <Button variant="primary" type="submit" className="next">Next</Button>
      </WizardButtonToolbar>
    </WizardFormContainer>
  );
};

export default StepOne;
