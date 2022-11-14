import UploadCsv from '@src/components/common/UploadCsv';
import { csvFile, FreeObject } from '@src/types';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function AddWhiteList() {
  const [fileData, setFileData] = useState<csvFile | null>(null);
  const { setValue, getValues } = useFormContext();
  const currentValue = getValues();

  useEffect(() => {
    if (fileData) {
      setValue('whiteList', fileData, { shouldDirty: true, shouldValidate: true });
    }
    if (currentValue.whiteList) {
      setFileData(currentValue.whiteList);
    }
  }, [fileData]);

  return (
    <section className="flex flex-col justify-center items-center">
      <UploadCsv fileData={fileData} setFileData={setFileData} className="mt-[40px]" />
    </section>
  );
}

export default AddWhiteList;
