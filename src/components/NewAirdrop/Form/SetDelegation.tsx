import SelectableCard from '@src/components/common/SelectableCard';
import UploadCsv from '@src/components/common/UploadCsv';
import { FreeObject } from '@src/types';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function SetDelegation() {
  const [fileData, setFileData] = useState<Array<FreeObject> | null>(null);
  const [isDelegateActive, setIsDelegateActive] = useState(true);
  const { setValue, getValues } = useFormContext();

  const currentValue = getValues();
  useEffect(() => {
    if (fileData) {
      setValue('delegationList', fileData, { shouldDirty: true, shouldValidate: true });
      setValue('isDelegate', true, { shouldDirty: true, shouldValidate: true });
    }
    if (currentValue.delegationList) {
      setFileData(currentValue.delegationList);
    }
  }, [fileData]);

  const handleClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    if (e.target.id === 'active') {
      setIsDelegateActive(true);
      setValue('isDelegate', true, { shouldDirty: true, shouldValidate: true });
    } else {
      setIsDelegateActive(false);
      setValue('isDelegate', false, { shouldDirty: true, shouldValidate: true });
    }
  };
  return (
    <section className="flex flex-col justify-center items-center">
      <ul className="flex flex-row w-full justify-between mt-[151px]" onClick={handleClick}>
        <SelectableCard
          id="active"
          className="w-[49%] h-[108px]"
          role="button"
          tabIndex={0}
          isSelected={isDelegateActive}
        >
          Activate delegation
        </SelectableCard>
        <SelectableCard
          id="disactive"
          className="w-[49%] h-[108px]"
          role="button"
          tabIndex={0}
          isSelected={!isDelegateActive}
        >
          Disactive Delegatation
        </SelectableCard>
      </ul>
      {isDelegateActive ? (
        <UploadCsv fileData={fileData} setFileData={setFileData} className="mt-[40px]" />
      ) : (
        <div className="h-[100px]" />
      )}
    </section>
  );
}

export default SetDelegation;
