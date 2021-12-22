import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Icons from '../../Assets/Icons/svgs'

const { doubleLessThen, doubleGreaterThen, playsStation, beetle, dice5dots, flower, wind } = Icons;
export default function Sidemenu() {

    const menuData = [
        {name : 'Statics', path : '/dashboard/statics', icon: beetle },
        {name : 'List', path : '/dashboard/lists', icon: dice5dots },
        {name : 'Add New', path : '/dashboard/add-new', icon: flower },
        {name : 'Global Settings', path : '/dashboard/global-settings', icon: wind },
    ]

    const [custCss, setCustCss] = useState({
        width: '250px',
        icon: doubleLessThen,
        isOpen: true,
        fs: '',
        transition: 'width 0.8s ease-in-out',
        txalg: ''
    });

    const toggleContainer = () => {
        const minMaxView = (prev)  => ({
            width: prev.width == '70px' ? '250px' : '70px',
            icon: prev.icon == doubleGreaterThen ? doubleLessThen : doubleGreaterThen,
            isOpen : !prev.isOpen,
            fs : prev.fs == '' ? 'xx-small' : '',
            txalg : prev.txalg == '' ? 'center': ''
        });
        setCustCss(prev => ({...prev, ...minMaxView(prev)}));
    };

    useEffect(() => {
        setInterval(()=>{
        //    toggleContainer();
            // console.log("custCss",custCss);
        },1000)
    }, [])

    const tagName = (css) => ({fontSize:css.fs,textAlign: css.txalg, transition:'font-size .8s linear',lineHeight: '0.6rem'})
    const toggleBtnCss = 'absolute top-11 w-8 h-8 rounded-full bg-indigo-600 text-white grid place-content-center cursor-pointer border-2 border-white z-10'
    return (
        <div className='bg-indigo-400 relative border-r-2 border-white break-words' style={custCss} >
            <span className={toggleBtnCss} style={{ right: '-16px' }}
                onClick={toggleContainer} > {custCss.icon}  </span>
            <div className="py-3.5 px-1 w-full grid place-content-center">
                <small className='text-white'>{playsStation}</small>
            </div>
            <div className='mt-2'>
                {/* Open menu */}
                <ul className='cursor-pointer text-white transition-opacity duration-500 ease-linear'>
                  {
                    menuData.map((data,i)=>(
                        <li key={'itm'+i} className='p-2 px-3 py-3 hover:bg-indigo-600 border-t-2'>
                        <Link className='flex items-center flex-wrap' to={data.path}>
                            <span className='px-2.5 pb-1'>{data.icon}</span>
                            <span className='flex-auto' style={tagName(custCss)}> {data.name} </span> 
                        </Link>
                    </li>  
                    ))  
                  }  
                </ul>
            </div>
        </div>
    )
}
