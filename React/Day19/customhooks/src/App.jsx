// import useCustomeHooks from "./hooks/useCustomeHooks"

import useCounter from "./hooks/useCounter"
import useFetchDatas from "./hooks/useFetchDatas"


// const App = () => {
  
//   const {value,handlechange} = useCustomeHooks()

//   return (
//     <>
//     <h1>{value}</h1>
//     <button onClick={handlechange}>Click</button>
//     </>
//   )
// }

// export default App




// const App = () => {

//   const counter1 = useCounter(0,10)

//   console.log(counter1);
  
//   const counter2 = useCounter(100,10)

//   return (
//     <div>
//       <h2>count:{counter1.count}</h2>
//       <button onClick={counter1.increment}>Increment</button>
//       <button onClick={counter1.decrement}>Decrement</button>
//       <button onClick={counter1.reset}>Reset</button>
//     </div>
//   )
// }

// export default App



// const App = () => {

//   const {datasave} = useFetchDatas("https://dummyjson.com/products")



  

//   return (
//    <>
//    <div>
//      {datasave.map((e,i)=>(
//       <div key={e.id}>
//         <h3>{e.title}</h3>
//       </div>
//      ))}
//    </div>
//    </>
//   )
// }

// export default App



import "./App.css"


const App = () => {
  return (
    
 <>
    <div className="bg-amber-300 p-2">
      <a href="" className="flex gap-6 p-2 justify-center items-center custom">
        <span className="bg-red-400 rounded w-40 text-center text-white p-1">Limited Offer</span>
        <span>Get website + email free with your domain .COM $14.77/yr | .NET $15.77/yr | .ORG $16.77/yr | <span>More &#x2192;</span></span>
      </a>
    </div>

    <div className="flex p-10 justify-between items-center">
       <div className="mx-6">
          <img className="w-40" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcyLjI3IDIzLjk5Jz48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTJ7ZmlsbDojNDA0MDQwO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0nbGluZWFyLWdyYWRpZW50JyB4MT0nMTA4LjgyJyB5MT0nMTIuMjEnIHgyPScxMDguODEnIHkyPScxOC44MycgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnPjxzdG9wIG9mZnNldD0nMCcgc3RvcC1jb2xvcj0nI2Y3OTE0YicvPjxzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nI2VhNDgyMicvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT53c0xvZ29fZGFyazwvdGl0bGU+PGcgaWQ9J0xheWVyXzInIGRhdGEtbmFtZT0nTGF5ZXIgMic+PGcgaWQ9J0xheWVyXzEtMicgZGF0YS1uYW1lPSdMYXllciAxJz48cGF0aCBjbGFzcz0nY2xzLTEnIGQ9J00xMTMsMTUuNTlhNC4xNyw0LjE3LDAsMSwxLTQuMTYtNC4xNkE0LjE3LDQuMTcsMCwwLDEsMTEzLDE1LjU5WicvPjxwYXRoIGNsYXNzPSdjbHMtMicgZD0nTTAsNy4zOGw0LjEzLS41LDMsOC43NywzLjcxLTguNDRoMS44NWwzLjcxLDguMjcsMy04LjYsNC4xMy41TDE3Ljg0LDIzLjQ5SDE2bC00LjE3LTguNzdMNy42MywyMy40OUg1Ljc4WicvPjxwYXRoIGNsYXNzPSdjbHMtMicgZD0nTTI4Ljg4LDE4LjgxYTQuMjEsNC4yMSwwLDAsMCwzLjM4LDEuNjRjMS43NywwLDMuMTItLjc2LDQuNzItMi41M2wxLjUyLDMuNTlBOC4yNyw4LjI3LDAsMCwxLDMyLjE3LDI0Yy00LjkzLDAtOC42LTMuMzMtOC42LTguODVhOC4yMiw4LjIyLDAsMCwxLDguMzEtOC4yNmMzLjcxLDAsNiwxLjcyLDcuOCw1Wm01LjctNy41MWE1LjA3LDUuMDcsMCwwLDAtMi45NS0uODgsNC41LDQuNSwwLDAsMC00LjA5LDQuNTEsMi43MiwyLjcyLDAsMCwwLC4xNi45M1onLz48cGF0aCBjbGFzcz0nY2xzLTInIGQ9J000MC43Mi4zNCw0NC44NSwwVjkuMjRhNi42NSw2LjY1LDAsMCwxLDUtMi4zNmM0LjM1LDAsOC4yNywzLDguMjcsOC41NlM1NC4xNywyNCw0OS44MiwyNGMtNS40OCwwLTkuMS0zLTkuMS04Ljg1Wm04LjYsMTkuODZBNC41OCw0LjU4LDAsMCwwLDU0LDE1LjQ0YTQuNTYsNC41NiwwLDEsMC05LjExLDBBNC41NCw0LjU0LDAsMCwwLDQ5LjMyLDIwLjJaJy8+PHBhdGggY2xhc3M9J2Nscy0yJyBkPSdNNjcuMywxMi40Yy0uNzItMS42OS0xLjY1LTIuMjQtMi41My0yLjI0cy0xLjY1LjQzLTEuNjUsMS40YzAsMyw2Ljg4LjcxLDYuODgsNi43OUE1LjgxLDUuODEsMCwwLDEsNjMuODgsMjRhNi41LDYuNSwwLDAsMS01LTIuMTlMNjEuMzEsMTlhMy44NywzLjg3LDAsMCwwLDIuODcsMS42OUExLjcsMS43LDAsMCwwLDY2LDE4Ljk0YzAtMy02Ljg3LTEuNC02Ljg3LTYuNjdhNS4zNCw1LjM0LDAsMCwxLDUuNDgtNS4zOSw2LjQyLDYuNDIsMCwwLDEsNS4xNSwzLjI0WicvPjxwYXRoIGNsYXNzPSdjbHMtMicgZD0nTTcxLjA3LjI2aDQuMTR2NC4zSDcxLjA3Wm0wLDcuMjksNC4xNC0uMzRWMjMuMzJsLTQuMTQuMzRaJy8+PHBhdGggY2xhc3M9J2Nscy0yJyBkPSdNNzYuNTksNy4zOGgxLjU2VjIuMjhsNC4xMy0yVjcuMzhoMy4zN3YzLjhIODIuMjh2NS42OWMwLDIuMTksMS4wOSwzLDIuNzgsM2guNTl2My44aC0uODhjLTMuOTMsMC02LjYyLTEuNTItNi42Mi01LjM2VjExLjE4SDc2LjU5WicvPjxwYXRoIGNsYXNzPSdjbHMtMicgZD0nTTkxLjU1LDE4LjgxYTQuMTcsNC4xNywwLDAsMCwzLjM3LDEuNjRjMS43NywwLDMuMTItLjc2LDQuNzItMi41M2wxLjUyLDMuNTlBOC4yNyw4LjI3LDAsMCwxLDk0Ljg0LDI0Yy00Ljk0LDAtOC42MS0zLjMzLTguNjEtOC44NWE4LjIyLDguMjIsMCwwLDEsOC4zMS04LjI2YzMuNzEsMCw2LDEuNzIsNy44LDVabTUuNjktNy41MWE1LjA3LDUuMDcsMCwwLDAtMi45NS0uODgsNC41LDQuNSwwLDAsMC00LjA5LDQuNTEsMi41MiwyLjUyLDAsMCwwLC4xNy45M1onLz48cGF0aCBjbGFzcz0nY2xzLTInIGQ9J00xMjkuMzMsMTIuMWE1LDUsMCwwLDAtMy40Ni0xLjQzYy0zLDAtNC44OSwxLjktNC44OSw0LjY4LDAsMy4yMSwyLjA3LDQuODUsNC41MSw0Ljg1YTUuNzMsNS43MywwLDAsMCw0LjMtMS43M0wxMzEuNDQsMjJhMTAuMzgsMTAuMzgsMCwwLDEtNiwyYy00LjkzLDAtOC42LTMuMzMtOC42LTguODVhOC4yMiw4LjIyLDAsMCwxLDguMy04LjI2LDExLjEsMTEuMSwwLDAsMSw2LjE2LDJaJy8+PHBhdGggY2xhc3M9J2Nscy0yJyBkPSdNMTQwLjU1LDYuODhhOC42Niw4LjY2LDAsMCwxLDguNjQsOC41Niw4LjY1LDguNjUsMCwwLDEtMTcuMjksMEE4LjcsOC43LDAsMCwxLDE0MC41NSw2Ljg4Wm00LjUxLDguNTZhNC41Miw0LjUyLDAsMSwwLTksMCw0LjUyLDQuNTIsMCwxLDAsOSwwWicvPjxwYXRoIGNsYXNzPSdjbHMtMicgZD0nTTE2OC4xNCwxNC4xM2MwLTIuMzYtLjkzLTMuMTItMi40LTMuMTJzLTIuNDUsMS4wNS0yLjQ1LDMuNTR2OC43N2wtNC4xMy4zNFYxNC4xM2MwLTIuMzYtLjkzLTMuMTItMi40LTMuMTJzLTIuNDUsMS4wNS0yLjQ1LDMuNTR2OC43N2wtNC4xMy4zNFY3LjU1bDQtLjM0djJoLjA5YTQuNiw0LjYsMCwwLDEsNC4wOS0yLjMxLDQuNDksNC40OSwwLDAsMSw0LjEzLDIuNTMsNSw1LDAsMCwxLDQuNi0yLjUzYzMuMiwwLDUuMjIsMiw1LjIyLDUuMzFWMjMuMzJsLTQuMTMuMzRaJy8+PC9nPjwvZz48L3N2Zz4=" alt="" />
       </div>
       <div className="flex gap-10 mx-6">
         <a href="" className="hover:text-blue-500">Contact Us</a>
         <a href="" className="hover:text-blue-500">WebMail</a>
         <a href="" className="hover:text-blue-500">Login</a>
         <a href="" className="bg-red-500 font-semibold text-white text-center p-1 w-30">SIGN UP</a>
       </div>
    </div>

    <div className="p-10 flex bg-gray-200 justify-between">
      <div className="w-500">
        <img src="./img_hero2.webp" alt="" />
      </div>
      <div className="flex flex-col justify-start items-start gap-7">
         <h2 className="text-7xl">Buy a <span className="text-blue-400">domain</span> name, get a FREE website and email</h2>
         <h4 className="text-2xl">Get a website and custom email for FREE ($72 value) when you register a domain name.</h4>
         <button className="bg-blue-400 rounded text-white shadow-black shadow-2xl w-70 p-2 text-2xl">Search Domains</button>
      </div>
    </div>
 </>

  )
}





export default App