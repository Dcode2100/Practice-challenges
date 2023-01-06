import React, { useState, useEffect } from 'react'
import "./Style.css";
import axios from 'axios';
import Records from '../records.json';

const Map = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data);
      });
  }, []);
  return (
    <div>
     
      {data ? <Records data={data} /> : 'Loading...'}
    
    </div>
  )
}
export default Map;