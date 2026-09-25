import ShowDatas from "../prasentation/ShowDatas"


const SendDatas = () => {
  

  const arrobj = [
                  {name:"React",course:"MERN",class:" 3PM to 5PM"},
                  {name:"Node",course:"FSR",class:" 2PM to 4PM"},
                  {name:"Java",course:"FSJ",class:" 1PM to 3PM"},
                  {name:"Python",course:"FSP",class:" 10PM to 12PM"}
                ]  


  const alertData = (p)=>{

    alert(p)

  }


  return (
    <>
    <ShowDatas send = {arrobj}  datasfunction = {alertData} />
    </>
  )
}

export default SendDatas