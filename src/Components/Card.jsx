import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion" //got it from Framer motion ,search this is chrome


const Card = ({data,reference}) => {
  return (
    <motion.div 
    drag dragConstraints={reference} 
    whileDrag={{scale:1.2}} 
    dragElastic={0.2}
     className='relative flex-shrink-0 w-60 h-80 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-xs mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 bg-yellow-800 w-full left-0'>
        <div className='flex items-center justify-between mb-3 py-3  px-8 '> 
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <MdOutlineFileDownload size = ".7em" color='#000'/>
            }  
            </span>
        </div>
        {/* {data.tag.isOpen ? (
            <div className='tag w-full py-4 bg-green-700 flex items-center justify-center'>
            <h3 className='text-sm font-semibold'>Download Now</h3>
        </div>
        ) : null} */}

    {/* or  */}

    {data.tag.isOpen && (
            <div className = {`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
        )}
        
        </div>

    </motion.div>  )
}

export default Card;
        {/* relative-relative to its actual position and will leave a gap at its normal position*/}
            {/* absolute-relative to the position of its first parent  */}
// fixed-positions element relative to the browser window