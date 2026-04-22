import React from 'react'
import { useState,useEffect } from 'react'

const TextChange = () => {
    const text=["Hii,I am Mohit,"]
    const[currentText,setcurrentText]=useState("");
    const[endValue,setendValue]=useState(true)
    const [isForward,setIsForward]=useState(true)
    const[index,setIndex]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setcurrentText(text[index].substring(0,endValue));
            if(isForward){
                setendValue((prev)=>prev+1)
            }else{
                setendValue((prev)=>prev-1)
            }
            if(endValue>text[index].length+10){
                setIsForward(false)
            }
            if(endValue<2.1){
                setIsForward(true)
                setIndex((prev)=>prev&text.length);
            }
        },50)
        return ()=>clearInterval(interval)

    },[endValue,isForward,text,index])
  return (
    <div className='transition ease duration-300'>{currentText}</div>
  )
}

export default TextChange
