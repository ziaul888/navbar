import React from 'react'
import {useState,useRef,useEffect} from "react"
import {FaBars} from "react-icons/fa"
import logo from "./logo/logo.svg"
import {links,social} from "./Data"

 const NavBar=()=>{
   const   [showLink,setShowLinks]=useState(false)
     return(
     <nav>
      <div className="nav-center">
         <div className="nav-header">
             <img src={logo} alt="logo"></img>
             <button className="nav-toggle" onClick={()=>setShowLinks(!showLink)}>
                 <FaBars/>
             </button>
         </div>
         <div className={`${showLink ? "links-container show-container" : "links-container"}`}>
             <ul className="links">
              {links.map((link)=>{
              const {id,url,text}=link;
              return<li key={id}>
                  <a href={url}> {text}</a>
              </li>
              }
              )}
             </ul>
         </div>
         <ul className= "social-icons">
             {social.map((item)=>{
                 const{id,url,icon}=item;
                 return<li key={id}>
                     <a href={url}>{icon}</a>
                 </li>
             })}
             </ul> 
      </div>
     </nav>)
 }
 export default NavBar