// import { useReducer, useRef, useState } from "react"

import { useRef, useState } from "react"


// const App = () => {

//   console.log('Running coponantes');
  

//   const [count,setCount] = useState(0)

//   const countRef = useRef(0)

//   const showRef = useRef(0)


//   const handleState = ()=>{

//     setCount(p=>p+1)

//   }

//   const handleRef = ()=>{

//    console.log(countRef.current);
//    console.log(showRef.current)
   
    

//   }

//   return (
//    <>
//    <div>
//     <h1>{count}</h1>
//     <h2 ref={showRef}>Count{countRef.current}</h2>

//     <button onClick={handleState}>Click state Update</button>
//     <button onClick={handleRef}>Clcik Ref Update</button>
//    </div>
//    </>
//   )
// }

// export default App




// const App = () => {

 
 
//   const myRef = useRef("")
//   const ShowRef = useRef("")
  
  
//   const hanldeChange = ()=>{

//     // console.log(myRef.current.value);

//     const myData = myRef.current.value

//     console.log(myData);

//     localStorage.setItem("mydatas",myData)
    


//     // ShowRef.current.textContent = myData

//     // ShowRef.current.style.color = "red"
    

//   }

//   return (
//     <>
//     <input type="text" ref={myRef}  onChange={hanldeChange} />
//    <h1 ref={ShowRef}></h1>
//     </>
//   )
// }

// export default App










// const App = () => {


//  const showRef = useRef(null)

 

//   const handleon = ()=>{

    

//     showRef.current.style.backgroundColor = "yellow"
//     showRef.current.innerHTML = "Off"



//   }

//   const handleoff = ()=>{

//     showRef.current.style.backgroundColor = "beige"
//     showRef.current.innerHTML = "ON"

//   }
//   return (
//     <>

//     <div className="banner">
//       <div ref={showRef} className="onshowing">
//       ON
//     </div> 
//  <br/>
//     <button onClick={handleon}>ON</button>
//     <button onClick={handleoff}>OFF</button>
//     </div>
//     </>
//   )
// }

// export default App





// const App = () => {

//   const homeref = useRef(null)
//   const aboutref = useRef(null)
//   const contactref = useRef(null)
//   const helpref = useRef(null)

//   const movetoHome = ()=>{

//     homeref.current.scrollIntoView({behavior: 'smooth',
// })
//   }
//  const movetoabout = ()=>{

//     aboutref.current.scrollIntoView({behavior: 'smooth',
// })
//  }
//  const movetocontact = ()=>{

//     contactref.current.scrollIntoView({behavior: 'smooth',
// })
//  }
//  const movetohelp = ()=>{

//     helpref.current.scrollIntoView({behavior: 'smooth',
// })

//   }
//   return (
//     <>
//     <div className="datas">
//       <div>
//         LOGO
//       </div>
//       <div>
//         <button onClick={movetoHome}>Home</button>
//         <button onClick={movetoabout}> About</button>
//         <button onClick={movetocontact}>Contact</button>
//         <button onClick={movetohelp}>Help</button>
//       </div>
//     </div>


//     <section ref={homeref}>
//        <h1>Home</h1>
//        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perspiciatis odio minus, esse repellat ullam beatae maiores ipsum ipsam nostrum quis aut, labore tempora quam rerum? Error veritatis aut temporibus asperiores facilis similique rerum dolore! Non, laborum?
//        Porro quis labore rerum voluptate, tenetur natus aperiam perferendis ab esse ex. Labore eaque sequi quis pariatur in architecto soluta repellendus tenetur, cumque id dicta asperiores deserunt excepturi dignissimos voluptates.
//        Explicabo vitae reprehenderit qui adipisci laudantium harum? Error id vero natus totam maxime cum? Expedita, cupiditate laborum. Quam atque harum, enim eveniet laboriosam possimus quibusdam molestiae inventore, unde quo et?
//        Porro consecteturLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil per, maiores adipisci incidunt debitis doloribus suscipit mollitia rerum soluta nulla fuga nisi dolor officiis possimus delectus vitae consequatur officia repellat maxime cupiditate! Velit consequatur a assumenda consectetur atque.</p> 
//     </section>
//     <section ref={aboutref}>
//       <h2>About</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptatesLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil per amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perspiciatis odio minus, esse repellat ullam beatae maiores ipsum ipsam nostrum quis aut, labore tempora quam rerum? Error veritatis aut temporibus asperiores facilis similique rerum dolore! Non, laborum?
//        Porro quis labore rerum voluptate, tenetur natus aperiam perferendis ab esse ex. Labore eaque sequi quis pariatur in architecto soluta repellendus tenetur, cumque id dicta asperiores deserunt excepturi dignissimos voluptates.
//        Explicabo vitae reprehenderit qui adipisci laudantium harum? Error id vero natus totam maxime cum? Expedita, cupiditate laborum. Quam atque harum, enim eveniet laboriosam possimus quibusdam molestiae inventore, unde quo et?
//        Porro consectetur, maiores adipisci incidunt debitis doloribus suscipit mollitia rerum soluta nulla fuga nisi dolor officiis possimus delectus vitae consequatur officia repellat maxime cupiditate! Velit consequatur a assumenda consectetur atque.</p> 
//     </section>
//     <section ref={contactref}>
//       <h2>Contact</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil persa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perspiciatis odio minus, esse repellat ullam beatae maiores ipsum ipsam nostrum quis aut, labore tempora quam rerum? Error veritatis aut temporibus asperiores facilis similique rerum dolore! Non, laborum?
//        Porro quis labore rerum voluptate, tenetur natus aperiam perferendis ab esse ex. Labore eaque sequi quis pariatur in architecto soluta repellendus tenetur, cumque id dicta asperiores deserunt excepturi dignissimos voluptates.
//        Explicabo vitae reprehenderit qui adipisci laudantium harum? Error id vero natus totam maxime cum? Expedita, cupiditate laborum. Quam atque harum, enim eveniet laboriosam possimus quibusdam molestiae inventore, unde quo et?
//        Porro consectetur, maiores adipisci incidunt debitis doloribus suscipit mollitia rerum soluta nulla fuga nisi dolor officiis possimus delectus vitae consequatur officia repellat maxime cupiditate! Velit consequatur a assumenda consectetur atque.</p> 
//     </section>
//     <section ref={helpref}>
//       <h2>Help</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natuLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio aspernatur dolorum, minus iusto alias beatae voluptas quo reiciendis molestiae nihil a quod odio, est reprehenderit nobis! Fugiat, sunt obcaecati!
//        Corrupti autem suscipit hic odio quisquam repellat deleniti incidunt esse aut amet, harum aliquid molestias ipsum, dicta officia quod, quasi eum. Delectus qui quas omnis commodi sit quisquam fugit ea?
//        Earum culpa ipsa dolores explicabo voluptates, blanditiis molestias quibusdam aut quos nobis illum accusantium magnam ad adipisci, illo nemo enim sunt numquam quidem sequi aspernatur itaque beatae quam. Molestiae, beatae!
//        Nesciunt, natus dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil pers dolores facere sequi asperiores tempora quisquam excepturi error nihil reiciendis quos nobis iste unde, esse iusto illum. Distinctio expedita ipsa beatae reprehenderit quidem, nisi dolorem cum minima amet?
//        Dolor laudantium exercitationem non quae est tempora id officiis quibusdam sed quam labore perferendis commodi molestias, inventore dignissimos, quisquam dicta sapiente vero delectus voluptates cumque ut nostrum. Quos, sit culpa.
//        Ea, voluptates amet quidem exercitationem ut reprehenderit quos quas saepe, minima quia optio id maxime cum nisi? Vel ipsa cum sequi sapiente totam in, consequatur necessitatibus ducimus molestias dolorem eius.
//        Hic nihil perspiciatis odio minus, esse repellat ullam beatae maiores ipsum ipsam nostrum quis aut, labore tempora quam rerum? Error veritatis aut temporibus asperiores facilis similique rerum dolore! Non, laborum?
//        Porro quis labore rerum voluptate, tenetur natus aperiam perferendis ab esse ex. Labore eaque sequi quis pariatur in architecto soluta repellendus tenetur, cumque id dicta asperiores deserunt excepturi dignissimos voluptates.
//        Explicabo vitae reprehenderit qui adipisci laudantium harum? Error id vero natus totam maxime cum? Expedita, cupiditate laborum. Quam atque harum, enim eveniet laboriosam possimus quibusdam molestiae inventore, unde quo et?
//        Porro consectetur, maiores adipisci incidunt debitis doloribus suscipit mollitia rerum soluta nulla fuga nisi dolor officiis possimus delectus vitae consequatur officia repellat maxime cupiditate! Velit consequatur a assumenda consectetur atque.</p> 
//     </section>
//     </>
//   )
// }

// export default App









// const App = () => {

//   console.log('Running');
  

//   const counter = useRef(0)
//   let timerRef = null
//   const newValue = useRef(0)

//   const handlestart = ()=>{

//     timerRef = setInterval(()=>{

//      const datas = newValue.current += 1

//      counter.current.innerText = datas
      

//     },1000)

//     // counter.current.innerHTML = 

//   }

//   const handlestop = ()=>{

//      clearInterval(timerRef)


//   }
//   return (
    
//   <>
//   <p ref={counter}>0</p>
//    <button onClick={handlestart}>Start</button>
//    <button onClick={handlestop}>Stop</button>
//   </>

//   )
// }

// export default App