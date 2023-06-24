import { useState, useEffect } from "react";
import { generalRequest } from "http/httpService";

const useApi = (urlPath, limit = 100, page = 1) => {
  const [response, setResponse] = useState({
    data: null,
    isLoading: false,
    isError: false,
    errorMessage: "",
  });

  const fetchData = async () => {
    setResponse((prevResponse) => ({ ...prevResponse, isLoading: true }));
    try {
      const { data } = await generalRequest.get(
        `${urlPath}?limit=${limit}&page=${page}`
      );
      setResponse((prevResponse) => ({ ...prevResponse, data }));
    } catch (error) {
      setResponse((prevResponse) => ({
        ...prevResponse,
        isError: true,
        errorMessage: error,
      }));
    } finally {
      setResponse((prevResponse) => ({ ...prevResponse, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return response;
};

export default useApi;
