import React from 'react'
import Badcrumble from '../../Common/Elements/badcrumble'
import CardView from '../../Common/Elements/cardview'

export default function DashStaticPage() {
    return (<>
            <Badcrumble fromTo={['dashboard','statics']} />
        <div className='px-3 py-4 flex gap-2'>
            <CardView className='w-2/4 h-44'>
                DDDDD
            </CardView>
            <CardView className='w-2/4 h-44'>
                DDDDD
            </CardView>
        </div>
        <div className='px-3 pb-4 flex gap-2'>
            <CardView className='w-full h-44'>
                DDDDD
            </CardView>
            <CardView className='w-full h-44'>
                DDDDD
            </CardView>
            <CardView className='w-full h-44'>
                DDDDD
            </CardView>
        </div>
        <div className='px-3 pb-4 flex gap-2'>
            <CardView className='w-full h-44'>
                DDDDD
            </CardView>
        </div>
    </>
    )
}