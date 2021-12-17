import React from 'react'
import { Link } from 'react-router-dom'

export default function Badcrumble() {
    return (<>
         <header className="p-3 pt-3 px-8 text-white">
          <ul className='flex font-bold'>
            <li className='hover:text-indigo-600'><Link to='/dashboard'>Dashboard</Link></li>
            <li className='px-2'>/</li>
            <li>Statics</li>
          </ul>
          <p className='font-bold text-2xl mt-2'>Statics</p>
        </header>     
        </>
    )
}
