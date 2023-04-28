import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (inputValue:string) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: inputValue,
          n:1,
          size: "1024x1024"
        },
        {
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const { data } = response;
      if(data?.data){
          setLoading(false)
          setData(data?.data);
      }
    } catch (err) {
      console.log(err);
      setError(`err:${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getLocalData = localStorage.getItem('images')
    if(getLocalData){
        setData(JSON.parse(getLocalData))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(data))
  }, [data]);

  return { data, error, loading, handleSubmit };
};
