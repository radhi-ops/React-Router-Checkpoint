  
import React from 'react'
import { Redirect } from 'react-router-dom'
import {fakeAuth}  from './Login' ;
const Admin = () => {
  
    return (
        (fakeAuth.isAuthenticated) ? <h3>Welcome Admin</h3> : <Redirect to="/login"/>
    )
}

export default Admin;