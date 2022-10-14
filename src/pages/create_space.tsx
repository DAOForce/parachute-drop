import { yupResolver } from '@hookform/resolvers/yup';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import CreateSpaceForm from '@src/components/CreateSpace/Form';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import { useEffect, useState } from 'react';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

export type Step = 'SPACE_DETAIL' | 'CREATE_TOKEN';

const DEFAULT_VALUES: DefaultValues<CreateSpaceFormType> = {
  image: '',
  spaceName: '',
  intro: '',
  homepage: '',
  tokenName: '',
  tokenSymbol: '',
  // tokenSupply: null,
  ownerAddress: '',
};

export interface CreateSpaceFormType {
  image?: string;
  spaceName?: string;
  intro?: string;
  homepage?: string;
  tokenName?: string;
  tokenSymbol?: string;
  tokenSupply?: number;
  ownerAddress?: string;
}

function CreateSpace() {
  const [step, setStep] = useState<Step>('SPACE_DETAIL');

  const schema = yup.object().shape({
    image: yup.string().required('image is required.'),
    spaceName: yup.string().required('space name is required'),
    intro: yup.string().required('space intro is required'),
    homepage: yup.string().required('homepage url is required'),
    tokenName: yup.string().required('token name is required'),
    tokenSymbol: yup.string().required('token symbol is required'),
    tokenSupply: yup.number().required('token supply is required'),
    ownerAddress: yup.string().required('owner address is required'),
  });
  const methods = useForm<CreateSpaceFormType>({
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const {
    handleSubmit,
    watch,
    formState: { dirtyFields },
  } = methods;
  const onSubmit = (data: CreateSpaceFormType) => {
    const notify = confirm('Are you sure you want to create the space?');

    console.log('notify', notify);
    console.log('data', data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CreateSpaceNav routingAddress="/" className="mb-[120px]">
        {HEADER_NAME.CREATE_SPACE}
      </CreateSpaceNav>
      <Title>{TITLE[step]}</Title>
      <Subscription>{SUBSCRIPTION[step]}</Subscription>
      <form className="w-[560px]" onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CreateSpaceForm step={step} setStep={setStep} />
        </FormProvider>
      </form>
    </div>
  );
}

export default CreateSpace;
