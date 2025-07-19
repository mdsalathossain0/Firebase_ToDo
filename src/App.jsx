import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";

const App = () => {
  const db = getDatabase();
  let [input, setInput]=useState('')

  
  let handleClick =()=>{
     set(ref(db, 'alldata/'), {
    name: input
   
  }).then(()=>{
    console.log("done")
  })
  }

  return (
    <div>
      <input onChange={(e)=> setInput(e.target.value)} className='border border-gray-500 m-5' type="text" />
      <button onClick={handleClick} className='bg-blue-500 py-2 px-3 rounded-[6px] text-white'>Add</button>

    </div>
  )
}

export default App