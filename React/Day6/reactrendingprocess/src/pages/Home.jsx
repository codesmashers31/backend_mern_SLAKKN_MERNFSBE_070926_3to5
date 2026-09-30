import React from 'react'

const Home = () => {

  const arrobj = [
     
    {name:"React",course:"JS",fees:20000}, {name:"Node",course:"Python",fees:29000}, {name:"Python",course:"Django",fees:37000}, {name:"Java Script",course:"Node",fees:10000}
  

  ]

  return (
    <>
    <div className='bg-black text-white gap-10 h-100 p-10 flex justify-center items-center'>
        {arrobj.map((e,i)=>(
          <div key={i+1} className='bg-white rounded-2xl shadow-3xl p-3 h-60 w-60 text-black flex gap-10 justify-center items-center flex-col'>
            <h3>{e.name}</h3>
            <p>{e.course}</p>
            <p>{e.fees}</p>
          </div>
        ))}
    </div>
    </>
  )
}

export default Home