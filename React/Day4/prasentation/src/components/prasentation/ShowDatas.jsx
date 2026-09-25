

const ShowDatas = (props) => {


//    console.log(props);

   const datas = props.send


   

  return (
    <div className="bg-gray-200 gap-10 flex p-10 justify-center items-center">
        {datas.map((e,i)=>(
            <div key={i+1} className="bg-white flex flex-col gap-4 rounded-2xl shadow-2xl p-5 w-50 h-50">

                <h3>{e.name}</h3>
                <p>{e.course}</p>
                <p>{e.class}</p>

                <button className="bg-black text-white p-1 rounded " onClick={()=>props.datasfunction(e.name)}>Details</button>

            </div>
        ))}
    </div>
  )
}

export default ShowDatas