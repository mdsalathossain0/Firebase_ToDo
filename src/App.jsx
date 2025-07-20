import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, push, onValue, remove } from "firebase/database";

const App = () => {
  const db = getDatabase();
  let [input, setInput] = useState('')
  let [allitem, setAllitem] = useState([])
  let [message, setMessage] = useState(false)


  let handleClick = () => {
    if(!input){
      setMessage(true)
    }else{
      set(push(ref(db, 'alldata/')), {
      name: input

    }).then(() => {
      console.log("done")
      setInput("")
      setMessage(false)
    })
    }
  }

  let handleDelete = (item) =>{
    remove(ref(db, 'alldata/' + item.id))
  }

  useEffect(() => {
    const starCountRef = ref(db, 'alldata/');
    onValue(starCountRef, (snapshot) => {
      let arr = []
      snapshot.forEach(item=>{
        arr.push({...item.val(),id:item.key})
      })
      setAllitem(arr)
    });
  }, [])

  return (
    <div className='bg-blue-200 w-full  lg:w-[500px] h-auto mx-auto drop-shadow-2xl py-5 px-8 lg:rounded-lg lg:mt-10'>
      <h1 className='text-4xl font-semibold text-center py-5'>Crud Operation</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} className='w-[70%] border border-gray-500 mr-5 rounded-[4px] pl-2 pr-8 py-1.5 mb-5' type="text" />
      <button onClick={handleClick} className='bg-blue-500 py-2 px-3 rounded-[6px] text-white'>Add</button>
      {
        message && <p className='text-red-600 pb-3'>*Please enter something</p>
      }
      {
        allitem.map(item=>(
          <p className=' pb-3 flex flex-col flex-wrap items-center border-b border-black last:border-0'>
          <span className='pt-1 pb-3'>{item.name}</span>
          <span className='pb-2'><button onClick={()=> handleDelete(item)} className='bg-red-500 py-2 px-3 rounded-[6px] text-white mx-5'>Delete</button><button className='bg-blue-800 py-2 px-3 rounded-[6px] text-white'>Edit</button></span>
          </p>
        ))
      }
    </div>
  )
}

export default App