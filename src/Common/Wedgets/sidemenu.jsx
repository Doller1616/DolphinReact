import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Icons from '../../Assets/Icons/svgs'

const { doubleLessThen, doubleGreaterThen, beetle, dice5dots, flower, wind } = Icons;
export default function Sidemenu() {

    const [containerCss, setContainerCss] = useState({
        width: '250px',
        transition: 'width 0.8s ease-in-out',
        icon: doubleLessThen,
        isOpen: true
    });

    const toggleContainer = () => {
        setContainerCss(prev => ({
            ...prev, ...{
                width: prev.width == '70px' ? '250px' : '70px',
                icon: prev.icon == doubleGreaterThen ? doubleLessThen : doubleGreaterThen,
                isOpen : !prev.isOpen
            }
        }));
    };




    useEffect(() => {
        setInterval(()=>{
            toggleContainer();
        },1000)
    }, [])

    const toggleBtnCss = 'absolute top-11 w-8 h-8 rounded-full bg-indigo-600 text-white grid place-content-center cursor-pointer border-2 border-white z-10'
    return (
        <div className='bg-indigo-400 relative border-r-2 border-white break-words' style={containerCss} >
            <span className={toggleBtnCss} style={{ right: '-16px' }}
                onClick={toggleContainer} > {containerCss.icon}  </span>
            <div className="py-4 px-1 w-full grid place-content-center">
                <small className='text-white'><b>Sidemenu</b></small>
            </div>
            <div className='relative mt-2'>
                {/* Open menu */}
                <ul className='sidemenu cursor-pointer text-white transition-opacity duration-500 ease-linear' 
                    style={{ opacity: (containerCss.isOpen) ? '1' : '0' }}>
                    <li className='p-2 px-3.5 py-4 hover:bg-indigo-600'>
                        <Link className='flex items-center ' to='/dashboard/statics'>
                            {beetle}
                            <span className='px-2'>Dashboard</span>
                        </Link>
                    </li>
                    <li className='p-2 px-3.5 py-4 hover:bg-indigo-600'>
                        <Link className='flex items-center' to='#'>
                            {dice5dots}
                            <span className='px-2'>Statics</span>
                        </Link>
                    </li>
                    <li className='p-2 px-3.5 py-4 hover:bg-indigo-600'>
                        <Link className='flex items-center' to='#'>
                            {flower}
                            <span className='px-2'>Create New</span>
                        </Link>
                    </li>
                    <li className='p-2 px-3.5 py-4 hover:bg-indigo-600'>
                        <Link className='flex items-center' to='#'>
                            {wind}
                            <span className='px-2'>Data Entry</span>
                        </Link>
                    </li>
                </ul>

                {/* Closed Menu  */}
                <ul className='sidemenu absolute top-0 cursor-pointer text-white w-full
                        text-xs text-center transition-opacity duration-500 ease-linear'
                    style={{ opacity: !(containerCss.isOpen) ? '1' : '0', zIndex:(containerCss.isOpen) ? '-1': '0' }}>
                    <li className='p-1 py-2 hover:bg-indigo-600'>
                        <Link className='grid justify-items-center' to='#'>
                            {beetle}
                            Dashboard
                        </Link>
                    </li>
                    <li className='p-1 py-2 hover:bg-indigo-600'>
                        <Link className='grid justify-items-center' to='#'>
                            {dice5dots}
                            Statics
                        </Link>
                    </li>
                    <li className='p-1 py-2 hover:bg-indigo-600'>
                        <Link className='grid justify-items-center' to='#'>
                            {flower}
                            Create New
                        </Link>
                    </li>
                    <li className='p-1 py-2 hover:bg-indigo-600'>
                        <Link className='grid justify-items-center' to='#'>
                            {wind}
                            Data Entry
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
