import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { useRouter } from 'next/router';
import UploadImage from '@src/components/CreateSpace/UploadImage';
import NextBtn from '@src/components/common/NextBtn';
import BackBtn from '@src/components/common/BackBtn';

function spacedetail() {
  const router = useRouter();
  const nameRef = useRef(null);
  const introRef = useRef(null);
  const homepageRef = useRef(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [isAbled, setIsAbled] = useState<boolean>();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(nameRef?.current.value);
    console.log(introRef?.current.value);
    console.log(homepageRef?.current.value);
    console.log(imageData);
    if (!nameRef?.current.value) {
      alert('Please enter the name');
      return;
    } else if (!introRef?.current.value) {
      alert('Please enter the intro');
      return;
    } else if (!homepageRef?.current.value) {
      alert('Please enter the homepage');
      return;
    } else if (!imageData) {
      alert('Please upload the image');
      return;
    }
    router.push({
      pathname: '/createspace/createtoken',
      query: {
        name: nameRef?.current.value,
        intro: introRef?.current.value,
        homepage: homepageRef?.current.value,
        imageData: imageData,
      },
    });
  };

  return (
    <StyledRoot>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.CREATE_SPACE}</CreateSpaceNav>
      <Title>{TITLE.SPACE_DETAIL}</Title>
      <Subscription>{SUBSCRIPTION.SPACE_DETAIL}</Subscription>
      <UploadImage setImageData={setImageData} />
      <StyledForm>
        <div className="form-control w-full">
          <label className="label w-full">
            <span className="label-text w-full">Name</span>
          </label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Intro</span>
          </label>
          <input
            ref={introRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Homepage</span>
          </label>
          <input
            ref={homepageRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <StyledButtonGroup>
          <div></div>
          <NextBtn onClick={handleClick} />
        </StyledButtonGroup>
      </StyledForm>
    </StyledRoot>
  );
}

export default spacedetail;

const StyledRoot = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > header {
    margin-bottom: 120px;
  }
  & > p {
    margin-bottom: 87px;
  }
  .upload__image {
    margin-bottom: 52px;
  }
`;

const StyledForm = styled.form`
  width: 560px;
  & div {
    width: 100%;
  }
  & label {
    & span {
      color: #ffffff;
    }
  }
  & input {
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 36px;
  }
`;
const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 66px;
`;
