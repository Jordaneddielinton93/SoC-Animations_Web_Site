import { useState } from "react"
import {IArrayObjStrNumb} from "../../../../00-Interfaces/Interfaces"



export const AnimationNames:IArrayObjStrNumb[]=[
  {name:"animation1",uid:100},
  {name:" animation2",uid:200},
  {name:" animation3",uid:300},
  {name:" animation4",uid:400},
  {name:" animation5",uid:500},
  {name:" animation6",uid:600},
  {name:" animation7",uid:700}
]

export default function InputWithAnimationList(){
  let [input,setInput]=useState("")
  return (
    <>

    <input 
      className="Html_Input"
      style={{"width":"95%","border":"none"}}
      type="text" 
      onChange={(e)=>setInput(e.target.value)}/>

    {AnimationNames.map(({name,uid})=>{
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