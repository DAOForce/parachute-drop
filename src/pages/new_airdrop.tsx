import { yupResolver } from '@hookform/resolvers/yup';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import NewAirdropForm from '@src/components/NewAirdrop/Form';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import React, { useState } from 'react';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

export type AirdropStep =
  | 'ENTER_DETAIL_AIRDROP'
  | 'SET_DELEGATION'
  | 'ADD_WHITELIST_ADDRRESS'
  | 'REVIEW_AIRDROP'
  | 'CONFIRM_WALLET'
  | 'AIRDROP_START'
  | 'NONE';

export type HeaderType = 'START_NEW_AIRDROP' | 'CLAIM_TOKEN';

type SubscriptionStep = 'ENTER_DETAIL_AIRDROP' | 'SET_DELEGATION';

const DEFAULT_VALUES: DefaultValues<NewAirdropType> = {
  treasuryAddress: '',
  startDate: '',
  rounds: null,
  interval: null,
  duration: null,
  isDelegate: null,
  whiteList: null,
};

export interface NewAirdropType {
  treasuryAddress: string;
  startDate: string;
  rounds: number | null;
  interval: number | null;
  duration: number | null;
  isDelegate: boolean | null;
  delegationList?: Array<any>;
  whiteList: Array<any> | null;
}
const schema = yup.object().shape({
  treasuryAddress: yup.string().required('treasury address is required.'),
  startDate: yup.string().required('start date is required'),
  rounds: yup.number().required('rounds is required'),
  interval: yup.number().required('interval is required'),
  duration: yup.number().required('duration is required'),
  isDelegate: yup.bool().required('delegate selection is required'),
  delegationList: yup.array(),
  whiteList: yup.array().required('white list is required'),
});

function NewAirdrop() {
  const [step, setStep] = useState<AirdropStep>('ENTER_DETAIL_AIRDROP');
  const [header, setHeader] = useState<HeaderType>('START_NEW_AIRDROP');

  console.log('>step', step);

  const methods = useForm<NewAirdropType>({
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const {
    handleSubmit,
    watch,
    formState: { dirtyFields },
  } = methods;
  const onSubmit = (data: NewAirdropType) => {
    const notify = confirm('Are you sure you want to start new airdrop');

    console.log('notify', notify);
    console.log('data', data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CreateSpaceNav routingAddress="/" className="mb-[120px]">
        {HEADER_NAME[header]}
      </CreateSpaceNav>
      <Title>{TITLE[step]}</Title>
      <Subscription>{SUBSCRIPTION[step]}</Subscription>
      <form className="w-fit min-w-[560px]" onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <NewAirdropForm step={step} setStep={setStep} setHeader={setHeader} />
        </FormProvider>
      </form>
    </div>
  );
}

export default NewAirdrop;
