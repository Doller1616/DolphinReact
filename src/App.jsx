import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
const SignInPage = lazy(()=>import('@Pages/SigninSignup/signinPage')); 
const DashMainPage = lazy(()=>import('@Pages/Dashboard')); 
const DashStaticsPage = lazy(()=>import('@Pages/Dashboard/dashStaticsPage')); 

const App = () => {
   
    const routes = useRoutes([
    { path:'/', element: <SignInPage/> },
    { path:'/dashboard', element: <DashMainPage/>,  children : [
        { path:':id', element: <DashStaticsPage/> },
      ]}
    ]);
    

    return <Suspense fallback="....LOADING">
        {routes}
    </Suspense> 
}

export default App 