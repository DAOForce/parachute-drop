import UploadCsv from '@src/components/common/UploadCsv';
import { FreeObject } from '@src/types';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function SetDelegation() {
  const [fileData, setFileData] = useState<Array<FreeObject> | null>(null);
  const { setValue, getValues } = useFormContext();
  useEffect(() => {
    if (fileData) {
      setValue('delegationList', fileData, { shouldDirty: true, shouldValidate: true });
      setValue('isDelegate', true, { shouldDirty: true, shouldValidate: true });
    }
    if (getValues().delegationList) {
      setFileData(getValues().delegationList);
    }
  }, [fileData]);
  return (
    <section className="flex flex-col justify-center items-center">
      <UploadCsv fileData={fileData} setFileData={setFileData} className="mt-[40px]" />
    </section>
  );
}

export default SetDelegation;
