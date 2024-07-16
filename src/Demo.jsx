import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Demo = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch('/api/data')
        .then((res)=>res.json())
        .then((dt)=>{
            console.log("DATA:::",dt.data);
            setData(dt.data)
        })
    },[]);
  return (
    <div>
        <h1>Demo</h1>
        <h1>{data ? data.join(', '):'Loading.....'}</h1>
    </div>
  )
}

export default Demo