import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
export default function DashStaticsPage() {
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
    console.log("params",params);
    console.log("location",location);
    }, [])

    return (
        <div className='px-1 py-4'>
            Statics
        </div>
    )
}
