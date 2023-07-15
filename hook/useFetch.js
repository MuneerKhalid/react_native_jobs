import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'ae49e354b9msh8c7583f2809f712p1a7192jsn3483405f6e54',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setisLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error')
    } finally {
      setisLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
}

export default useFetch;