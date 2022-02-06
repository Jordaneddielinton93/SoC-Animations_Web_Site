import NavItem from "./components/NavItem";
import { SideNavStyled } from "./SideNav.style";
import { AiOutlineHome } from 'react-icons/ai';
import { MdAnimation } from 'react-icons/md';
import { BsTags,BsChevronDown } from 'react-icons/bs';
import { FaChalkboardTeacher} from 'react-icons/fa';
import {  useState } from "react";
import InputWithAnimationList from "./components/List-Animation";
import InputWithHtmlList from "./components/List-Html";
import InputWithWorkShopList from "./components/List-WorkShops";

export default function SideNav(){

  let [isAnimationDropDown,setAnimationDropDown]=useState<boolean>(false)
  let [isHtmlDropDown,setHtmlDropDown]=useState<boolean>(false)
  let [isWorkShopDropDown,setWorkShopDropDown]=useState<boolean>(false)

  return (
    <SideNavStyled>

      <NavItem
        icon={<AiOutlineHome/>} 
        title={"Home"} 
        />
      
      <NavItem
        icon={<MdAnimation/>} 
        title={"Animations"} 
        icon2={<BsChevronDown/>}
        onClick={()=>{setAnimationDropDown(!isAnimationDropDown)}}
        isHtmlDropDown={isAnimationDropDown}
        childElements={<InputWithAnimationList/>}

        />
       
      <NavItem
        icon={<BsTags/>} 
        title={"HTML"} 
        onClick={()=>{setHtmlDropDown(!isHtmlDropDown)}}
        icon2={<BsChevronDown/>}
        isHtmlDropDown={isHtmlDropDown}
        childElements={<InputWithHtmlList/>}
        />
     
        
        <NavItem
        icon={<FaChalkboardTeacher/>} 
        title={"Work-Shops"} 
        onClick={()=>setWorkShopDropDown(!isWorkShopDropDown)}
        icon2={<BsChevronDown/>}
        isHtmlDropDown={isWorkShopDropDown}
        childElements={<InputWithWorkShopList/>}
        />
       
      


    </SideNavStyled>
  )
}