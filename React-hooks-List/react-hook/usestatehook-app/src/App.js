import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
// types of hook
//useState()
//useEffect()
//useFetch()
  
function App()
{
   
  const[color,setColor]=useState("black");

  return (

       <>
       <center>
        <h1>My choice of color is {color}</h1>
        <button type='button' onClick={()=>setColor("red")}>Red</button>
        
        <button type='button' onClick={()=>setColor("blue")}>Blue</button>
        
        <button type='button' onClick={()=>setColor("orange")}>Orange</button>
        
        <button type='button' onClick={()=>setColor("yellow")}>Yellow</button>       
       </center>
       </>
  )
}
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />);

export default App