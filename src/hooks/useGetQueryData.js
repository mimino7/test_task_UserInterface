import { useEffect, useState } from 'react';

export const useGetQueryData = (api, params, onResponse) => {
  const [data, setData] = useState(undefined);
  const [fetching, setFetching] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const response = await api(params);
        setData(response.data);
        if (onResponse) onResponse(response.data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      } finally {
        setLoaded(true);
        setFetching(false);
      }
    };

    fetchData();
  }, [JSON.stringify(params)]);

  return {
    data,
    loaded,
    fetching,
    error
  };
};
