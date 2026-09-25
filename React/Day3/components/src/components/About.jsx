

const About = () => {
  return (
    <>
    <div className="bg-gray-100 p-10  flex items-center">
        <div className=" p-10 flex flex-col w-300 gap-6">
          <div className="bg-blue-200 opacity-85 p-1 rounded-2xl text-center w-50">
            <span className="text-blue-700"  >13+ Years in Service</span>
          </div>
          <div>
            <h1 className="text-6xl text-wrap">Custom Website Design & <span className="text-blue-500">Development</span></h1>
          </div>
          <div>
               <p className="text-2xl text-wrap">CleverBit Solutions offers custom Website designing, Web development & Software development services that help our Clients to achieve their Online business goals and objectives.</p>
          </div>
          <div>
            <p className="font-bold text-wrap">We craft elegant, intuitive & responsive websites that are built on a solid framework & latest technologies. Are you looking for a trusted partner backed by 13+ years of proven experience to set forth or enhance your Online presence?</p>
          </div>
          <div className="flex gap-5">
            <button className="bg-blue-500 p-4 w-70 text-white rounded text-1xl">Request a Callback</button>
          <button className="bg-blue-500 p-4 w-70 text-white rounded text-1xl">View Packages & Prices</button>
          </div>
        </div>
        <div className="bg-white p-10 h-100  rounded-2xl shadow-2xl"> 
           <div className="w-100 h-100">
             <img src="https://cleverbitsolutions.com/landing/chennai_website_design/images/web_development_chennai.jpg" alt="" />
           </div>
        </div>
    </div>
    </>
  )
}

export default About