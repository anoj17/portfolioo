import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoute } from './enum/routes.enum'
import Login from './pages/Login'
import Signup from './pages/signup'

const App = () => {
  return <>
  <div className=''>
    <Routes>
      <Route path={PageRoute.LOGIN} element={<Login />}/>
      <Route path={PageRoute.SIGNUP} element={<Signup />}/>
    </Routes>
  </div>
  
  </>
}

export default App
