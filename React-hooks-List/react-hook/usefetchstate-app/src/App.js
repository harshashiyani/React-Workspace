import React, { useState, useEffect} from 'react';
const App =()=>{
  const [data,setData]=useState(null);
  useEffect(()=>{

      fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) =>setData(data));

  }, []); 

  return (

       <>
       {data && data.map((item)=> { 

        return <p align="center" key={item.id}>{item.title}</p>
       })}
       </>

  );

}

export default App
