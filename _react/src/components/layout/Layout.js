import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Footer from './Footer'
import Navbar from './Navbar'


function Layout() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

  // console.log("user ", user)
  // useEffect(()=>{

  //   if(user==null){
  //     navigate('/login')
  //   }
  // },[user])
  
  return (
    <section>
        <Navbar/>


        <div className='min-h-[80vh]'>
              <Outlet />
        </div>

      
    </section>
  )
}

export default Layout