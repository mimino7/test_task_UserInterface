import { useCallback, useMemo, useState } from 'react';
import { useGetQueryData } from './useGetQueryData';
import { usePagination } from './usePagination';

export const useGetQueryArrayData = (api, params, initialLimit) => {
  const [removeData, setRemoveData] = useState(false);
  const [data, setData] = useState([]);

  const onResponse = useCallback(
    res => {
      setData(removeData ? res : [...data, ...res]);
      setRemoveData(false);
    },
    [data, removeData]
  );

  const { start, nextLoad, setStart } = usePagination(
    data.length,
    initialLimit
  );

  const paramsExtend = useMemo(
    () => ({
      ...params,
      start,
      limit: initialLimit
    }),
    [params, start, initialLimit]
  );

  const { loaded, fetching, error } = useGetQueryData(
    api,
    paramsExtend,
    onResponse
  );

  const reset = useCallback(() => {
    setStart(0);
    setRemoveData(true);
  }, []);

  return {
    data,
    reset,
    loaded,
    fetching,
    nextLoad,
    error
  };
};
