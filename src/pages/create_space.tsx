import styled from '@emotion/styled';
import BackBtn from '@src/components/common/BackBtn';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import NextBtn from '@src/components/common/NextBtn';
import CreateSpaceForm, { CreateSpaceFormType } from '@src/components/CreateSpace/Form';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import React, { useState } from 'react';
export type Step = 'SPACE_DETAIL' | 'CREATE_TOKEN';
import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const DEFAULT_VALUES: DefaultValues<CreateSpaceFormType> = {
  image: '',
  spaceName: '',
  intro: '',
  homepage: '',
  tokenName: '',
  tokenSymbol: '',
  tokenSupply: 0,
  ownerAddress: '',
};

export interface CreateSpaceFormType {
  image: string;
  spaceName: string;
  intro: string;
  homepage: string;
  tokenName: string;
  tokenSymbol: string;
  tokenSupply: number;
  ownerAddress: string;
}

function CreateSpace() {
  const [step, setStep] = useState<Step>('SPACE_DETAIL');

  const schema = yup.object().shape({
    image: yup.string().required('image is required.'),
    spaceName: yup.string().required('space name is required'),
    intro: yup.string().required('space intro is required'),
    homepage: yup.string(),
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
    <StyledRoot>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.CREATE_SPACE}</CreateSpaceNav>
      <Title>{TITLE[step]}</Title>
      <Subscription>{SUBSCRIPTION[step]}</Subscription>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CreateSpaceForm step={step} setStep={setStep} />
        </FormProvider>
      </StyledForm>
    </StyledRoot>
  );
}

export default CreateSpace;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > header {
    margin-bottom: 120px;
  }
`;
const StyledForm = styled.form`
  width: 560px;
  & div {
    margin-top: 80px;
    width: 100%;
  }
  & label {
    & span {
      color: #ffffff;
    }
  }
  & input {
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
  }
`;
