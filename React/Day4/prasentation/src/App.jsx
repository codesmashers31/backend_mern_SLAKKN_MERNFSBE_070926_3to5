

import './App.css'
import SendDatas from './components/continer/SendDatas'
import Navbar from './components/Navbar'
import PropsData from './components/PropsData'
const App = () => {


  return (
   <>
   <Navbar/>
   <SendDatas/>

   <PropsData  datas = {100000} />
   </>
  )
}

export default App