import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AiImages from './components/AiImages/AiImages';
import { FetchDataFromApi } from './api';
import SingleImage from './components/SingleImage/SingleImage';

const  App=()=>{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
  useEffect(() => {
    const localData = localStorage.getItem("images");
    if (localData) {
      setData(JSON.parse(localData));
    }
    const fetchData = async () => {
      setLoading(true);
      const response = await FetchDataFromApi();
      setData(response?.data);
      setLoading(false);
      localStorage.setItem("images", JSON.stringify(data));
    };

    fetchData();
  }, []);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<AiImages data={data} loading={loading}/>}/>
        <Route path={"/:id"} element={<SingleImage data={data}/>} />
      </Routes>
    </>
  );
}
export default App;