import { useState } from 'react';

export const useMutationData = api => {
  const [fetching, setFetching] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);

  const change = async params => {
    setSuccess(false);
    setError(false);
    setFetching(true);
    try {
      await api(params);
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setFetching(false);
    }
  };

  return [change, fetching, isSuccess, isError];
};
