import React from 'react';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    }
    // binding 'this'
    this.login = this.login.bind(this);
  }

  async login() {

   
    fakeAuth.authenticate(() => {
    this.setState({ redirectToReferrer: true })
    })
    

  }

  render() {
      console.log(this.props)
    const { from } = this.props.location.state || { from: { pathname: '/admin' } }
    const { redirectToReferrer } = this.state;
    
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
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