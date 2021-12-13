import React, { useState } from 'react'
import Icons from '../../Assets/Icons/svgs'

const { doubleLessThen, doubleGreaterThen } = Icons;
export default function Sidemenu() {

    const [containerCss, setContainerCss] = useState({
        width:'20%',
        transition : 'width 1s ease-in-out',
        content : doubleLessThen
    })

    const toggleContainer = () => {
        setContainerCss( prev => ({ ...prev, ...{
            width : prev.width == '5%' ? '20%' : '5%',
            content : prev.content == doubleGreaterThen ? doubleLessThen : doubleGreaterThen
        }}));
    }

    const toggleBtnCss = 'absolute top-9 w-8 h-8 rounded-full bg-indigo-600 text-white grid place-content-center cursor-pointer border-2 border-white'
    return (
        <div className='bg-indigo-400 relative border-r-2 border-white' style={containerCss} >
            <span className={toggleBtnCss} style={{ right:'-16px'}}
             onClick={toggleContainer} > {containerCss.content}  </span>
             {/* MENU */}
             <div className="py-4 px-1">
                 <h1 className="font-bold text-white">Sidemenu</h1>
                 </div>
             <ul className='mt-2 cursor-pointer'>
                 <li className='p-2 bg-indigo-300 custom-li'>Statics</li>
                 <li className='p-2'>Permissions</li>
                 <li className='p-2'>TODO List/Events</li>
             </ul>
        </div>
    )
}
