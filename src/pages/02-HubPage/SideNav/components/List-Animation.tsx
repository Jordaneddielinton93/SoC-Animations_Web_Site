import { useContext, useState } from "react"
import { ACTIONS } from "../../../../00-Hooks/useReducer"
import {IArrayObjStrNumb} from "../../../../00-Interfaces/Interfaces"
import { pageContext } from "../../../../App"



export const AnimationNames:IArrayObjStrNumb[]=[
  {name:"Flowers",uid:100,},
  {name:"Cards",uid:200},
  {name:"Characters",uid:300},
  {name:"Text",uid:400},
]

export default function InputWithAnimationList(){
  let {dispatch}=useContext(pageContext)

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
        <p className="Tags" key={uid} onClick={()=>dispatch({type:ACTIONS.ANIMATION_SHOWN,payload:name})}>
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