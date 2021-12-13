import React from 'react'

export default function Sidemenu() {
    const container_style = {
        position: 'relative',
        width:'20%'
    }
    // width: 5rem;
    const toggle = 'absolute w-8 h-8 rounded-full bg-indigo-600 text-white grid place-content-center'
    return (
        <div className='py-1 px-2 bg-indigo-400' style={container_style}>
            <span className={toggle} style={{top:'10px',right:'-16px'}}> @ </span>
            Sidemenu
        </div>
    )
}
