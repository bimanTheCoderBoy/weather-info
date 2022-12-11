import React, { useEffect, useState } from 'react'
import "./darkButton.css"
const DarkButton = () => {
  const [mode, setMode]=useState("light")

  const dark=()=>{
    document.getElementById("search").focus()
    if(mode==='dark'){
      document.getElementsByClassName('widget')[0].style.boxShadow=` 0 27px 55px 0 rgba(0, 0, 0, 0.3),
      0 17px 17px 0 rgba(0, 0, 0, 0.15)`;
      document.body.style.backgroundColor='rgb(212,212,212)';
      document.getElementsByClassName('weatherInfo')[0].style.backgroundColor="black"
      document.getElementsByClassName('date')[0].style.backgroundColor="rgb(112, 193, 179)"
      document.getElementsByClassName('weatherIcon')[0].style.backgroundColor="rgb(220,220,220)"
      document.getElementsByClassName('weatherIcon')[0].style.color="black"
      document.getElementsByClassName('extra-temp')[0].style.backgroundColor="white"
     Array.from(document.getElementsByClassName('extra-info-leftside')).forEach(ele => {
      ele.style.color="black"
      });

      document.getElementsByClassName('searchTerm')[0].style.color="black"
      document.getElementsByClassName('searchTerm')[0].style.backgroundColor="white"
      setMode('light')
    }else{
      document.body.style.backgroundColor="#2f2f2f";
      document.getElementsByClassName('widget')[0].style.boxShadow="0 0 40px rgba(129, 226, 243, 0.829)"
      document.getElementsByClassName('weatherInfo')[0].style.backgroundColor="rgb(50, 0, 50)"
      document.getElementsByClassName('date')[0].style.backgroundColor="black"
      document.getElementsByClassName('weatherIcon')[0].style.backgroundColor="rgb(40,40,40)"
      document.getElementsByClassName('weatherIcon')[0].style.color="white"
      document.getElementsByClassName('extra-temp')[0].style.backgroundColor="rgb(40,40,40)"
      Array.from(document.getElementsByClassName('extra-info-leftside')).forEach(ele => {
        ele.style.color="rgb(212, 212, 212)"
        });
        document.getElementsByClassName('searchTerm')[0].style.backgroundColor="rgb(70,70,70)"
        document.getElementsByClassName('searchTerm')[0].style.color="white"

      setMode("dark")
    }
    

  }
  return (
    <div className='body'>
       
        <div className = 'toggle-switch'>
            <label>
                <input onClick={dark} type = 'checkbox'/>
                <span className= 'slider'></span>
            </label>
            {/* <a href = 'https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y'>
        
            </a> */}
        </div>
    
    </div>
  )
}

export default DarkButton
