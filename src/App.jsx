import React from 'react'
import { useRoutes } from 'react-router-dom'
import InputBox from '@Elements/Inputbox'
import Dashboard from '@Pages/Dashboard'

const App = () => {
   
    const routes = useRoutes([
    { path:'/', element:<Dashboard/>}
    ])
    
    return routes
}

export default App 