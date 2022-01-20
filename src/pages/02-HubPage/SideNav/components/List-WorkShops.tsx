
import { useState } from "react"
import { IArrayObjStrNumb } from "../../../../00-Interfaces/Interfaces"

export const TagNames:IArrayObjStrNumb[]=[
  {name:"HTML",uid:200},
  {name:"JAVASCRIPT",uid:300},
  {name:"CSS",uid:400},
  {name:"REACT",uid:500},
  {name:"NODE",uid:600},
  {name:"SQL",uid:700},
]

export default function InputWithWorkShopList() {
  
  let [input,setInput]=useState("")

  return (
    <>

    <input 
      className="Html_Input"
      style={{"width":"95%","border":"none"}}
      type="text" 
      onChange={(e)=>setInput(e.target.value)}/>

    {TagNames.map(({name,uid})=>{
      return input.length===0?
      (
        <p className="Tags" key={uid} onClick={()=>console.log("click")}>
          {name}
        </p>
      )
      :
      (name.toLowerCase().includes(input.toLowerCase())&& (
        <p className="Tags" key={uid} onClick={()=>console.log("click")}>
          {name}
        </p>
      ))
    })
  }
  </>
  )
}