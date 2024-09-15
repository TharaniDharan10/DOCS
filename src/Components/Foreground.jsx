import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);  
  const data = [
    {
      desc: "Hello Aliens Welcome to Sunday Samayal",
      filesize : ".6mb",
      close : true,
      tag : {isOpen : false, tagTitle: "Download Now",tagColor:"blue"},
    },

    {
      desc: "I am the description of the card da ***** hehe",
      filesize : ".5mb",
      close : false,
      tag : {isOpen : true, tagTitle: "Its not soo late to start",tagColor:"green"},
    },

    {
      desc: "Yahooooooooooo amazon FlipCart ellame iruku  " ,
      filesize : ".9mb",
      close : true,
      tag : {isOpen : true, tagTitle: "Wanna Date?",tagColor:"blue"},
    }
  ];
  return (
    <div ref = {ref} className='fixed z-[3] w-full h-full bg-blue-800/50 top-0 left-0 flex gap-10 flex-wrap p-5' >
{data.map((item,index)=>(
  <Card data={item} reference = {ref}/>
))}
    </div>
  )
}

export default Foreground;