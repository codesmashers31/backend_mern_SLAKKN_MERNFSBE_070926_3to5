import NonPrimitive from "./components/NonPrimitive"
import PrimitiveData from "./components/PrimitiveData"


const App = () => {
  
  const title = "Seema"
  const vote = 20000
  const isActive = 300
  const emptyVlaue = null
  const noValue = undefined

  const obj = {title,vote,isActive,emptyVlaue,noValue}
  
  const arr = [1,2,3,4,5,6]

  const objob = {name:"Recat"}

  return (
    <>
    <PrimitiveData  dataSent={obj} />
    <div>
      <h1>Non Primitive</h1>
    </div>
    <NonPrimitive  propsArr = {arr} obj={objob}  />
    </>
  )
}

export default App