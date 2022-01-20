import { useContext, useState } from "react"
import { ACTIONS } from "../../../../00-Hooks/useReducer"
import { IArrayObjStrNumb } from "../../../../00-Interfaces/Interfaces"
import { pageContext } from "../../../../App"

export const TagNames:IArrayObjStrNumb[]=[
  {name:"<!DocType>",uid:100,title:"doctype"},
  {name:"<HTML>",uid:200,title:"html"},
  {name:"<head>",uid:300,title:"head"},
  {name:"<meta>",uid:400,title:"meta"},
  {name:"<title>",uid:500,title:"title"},
  {name:"<body>",uid:600,title:"body"},
  {name:"<header>",uid:700,title:"header"},
  {name:"<nav>",uid:800,title:"nav"},
  {name:"<main>",uid:900,title:"main"},
  {name:"<main>",uid:110,title:"section"},
  {name:"<ul>",uid:120,title:"ul"},
  {name:"<li>",uid:123,title:"li"},
  {name:"class selector",uid:170,title:"class"},
]

export default function InputWithHtmlList(){
  let {dispatch}=useContext(pageContext)
  
  let [input,setInput]=useState("")

  return (
    <>

    <input 
      className="Html_Input"
      style={{"width":"95%","border":"none"}}
      type="text" 
      onChange={(e)=>setInput(e.target.value)}/>

    {TagNames.map(({name,uid,title})=>{
      return input.length===0?
      (
        <p className="Tags" key={uid} onClick={()=>dispatch({type:ACTIONS.HTML_PAGE_TAG_SHOWN,payload:title})}>
          {name}
        </p>
      )
      :
      (name.toLowerCase().includes(input.toLowerCase())&& (
        <p className="Tags" key={uid} onClick={()=>dispatch({type:ACTIONS.HTML_PAGE_TAG_SHOWN,payload:title})}>
          {name}
        </p>
      ))
    })
  }
  </>
  )
}