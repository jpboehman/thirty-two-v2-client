import { useState, useEffect } from 'react';
import { generalRequest } from 'http/httpService';

const useApi = (urlPath) => {
  const [response, setResponse] = useState({
    data: null,
    isLoading: false,
    isError: false,
    erroMessage: "",
  });

  const fetchData = async (params) => {
    setResponse({ ...response, isLoading: true });
    try {
      const { data } = await generalRequest.request(params);
      setResponse({ ...response, data });
    } catch (error) {
      setResponse({ ...response, isError: true, errorMessage: error });
    } finally {
      setResponse({ ...response, isLoading: false });
    }
  };

  useEffect(() => {
    fetchData(urlPath);
  }, []);

  return response;
};

export default useApi;
