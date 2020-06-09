import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const [RedirectToReferrer, setRedirectToReferrer] = useState(false);
   const login = async () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    })
  };
  const { from } = props.location.state || { from: { pathname: '/admin' } };
  if (RedirectToReferrer) {
    return (
      <Redirect to={from} />
    )
  }
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={()=>login()}>Log in</button>
    </div>
  )
}

/* A fake authentication function */
export const fakeAuth = {
  
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
     setTimeout(cb, 500)
  },
}

export default Login;