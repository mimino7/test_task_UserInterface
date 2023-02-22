import { useCallback, useState } from 'react';

const nextLoadAvailable = (length, limit) =>
  length && Number.isInteger(length / limit);

export const usePagination = (dataLength, limitInitial) => {
  const [start, setStart] = useState(0);

  const nextLoad = useCallback(() => {
    if (nextLoadAvailable(dataLength, limitInitial)) {
      setStart(start + limitInitial);
    }
  }, [dataLength, start, limitInitial]);

  return {
    nextLoad,
    start,
    setStart
  };
};
