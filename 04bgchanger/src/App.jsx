import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive")

  return (
    <div className = "w-full h-screen duration-200" style={{backgroundColor:color}}>
       <div className = "rounded-xl fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2 ">

       <div className="flex flex-wrap gap-5 justify-center shadow-lg bg-white rounded-3xl px-3 py-2">

          <button  onClick={()=>setColor("red")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "red"}}>red</button>
          <button  onClick={()=>setColor("green")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "green"}}>green</button>
          <button  onClick={()=>setColor("blue")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "blue"}}>blue</button>
          <button  onClick={()=>setColor("yellow")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "yellow"}}>yellow</button>
          <button  onClick={()=>setColor("purple")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "purple"}}>purple</button>
          <button  onClick={()=>setColor("grey")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "grey"}}>grey</button>
          <button  onClick={()=>setColor("orange")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "orange"}}>orange</button>
          <button  onClick={()=>setColor("pink")} className="outline-none px-4 rounded-full py-1 text-white shadow-large" style={{backgroundColor: "pink"}}>pink</button>
            
       </div>
      
       </div>
    </div>
  )
}

export default App
