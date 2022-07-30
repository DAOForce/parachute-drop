import { useState, useCallback } from 'react';

const useInput = <T,>(inputValue: T) => {
  const [value, setValue] = useState<T>(inputValue);
  const onChnage = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return { value, setValue, onChnage };
};

export default useInput;
