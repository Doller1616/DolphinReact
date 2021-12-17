import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Icons from '../../Assets/Icons/svgs'

const { doubleLessThen, doubleGreaterThen } = Icons;
export default function Sidemenu() {

    const [containerCss, setContainerCss] = useState({
        width : '300px',        
        transition : 'width 1s ease-in-out',
        content : doubleLessThen,
    })

    const toggleContainer = () => {
        setContainerCss( prev => ({ ...prev, ...{
            width : prev.width == '70px' ? '300px' : '70px',
            content : prev.content == doubleGreaterThen ? doubleLessThen : doubleGreaterThen,
        }}));
    };

    useEffect(() => {
        // setInterval(()=>{
        //     toggleContainer();
        // },1000)
        
    }, [])

    const toggleBtnCss = 'absolute top-11 w-8 h-8 rounded-full bg-indigo-600 text-white grid place-content-center cursor-pointer border-2 border-white'
    return (
        <div className='bg-indigo-400 relative border-r-2 border-white break-words z-10' style={containerCss} >
            <span className={toggleBtnCss} style={{ right:'-16px'}}
             onClick={toggleContainer} > {containerCss.content}  </span>
             {/* MENU */}
             <div className="py-4 px-1">
                 <h1 className="font-bold text-white">Sidemenu</h1>
                 </div>
             <ul className='sidemenu mt-2 cursor-pointer'>
                 <li className='p-2 bg-indigo-300'><Link to='/dashboard/statics'>Statics</Link> </li>
                 <li className='p-2'>Permissions</li>
                 <li className='p-2'>TODO List/Events</li>
             </ul>
        </div>
    )
}
