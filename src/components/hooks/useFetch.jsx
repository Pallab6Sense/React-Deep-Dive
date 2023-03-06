import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setUser] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data);
    });
  }, [url]);

  return data;
};

export default useFetch;
