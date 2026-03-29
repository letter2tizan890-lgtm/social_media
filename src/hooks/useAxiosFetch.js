//importing useState and useEffect
import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl /* getting the url from axios */) => {
  //Creating a state for maintaining data
  const [data, setData] = useState([]);
  //Creating a state for maintaining error
  const [fetchError, setFetchError] = useState(null);
  //Creating a state for maintaining loading
  const [isLoading, setIsLoading] = useState(false);

  //UseEffect when page loads
  useEffect(() => {
    // when the component is mounted
    let isMounted = true;
    //If the omponent is not ready request canceling axios token
    const source = axios.CancelToken.source();

    // now fetching the data from axios
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(dataUrl);

    //Clean up function
    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};
export default useAxiosFetch;
