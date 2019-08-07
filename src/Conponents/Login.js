import React, { Component } from 'react';
import "./../Conponents/Login.css"
import Input from './Input';

class Login extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }
    render(){
      console.log(this.state);
      return(
       <div>
       {/* <h1>Hello App.js</h1> */}
       <h2 style={{textDecoration:"underline"}}>Log In</h2>
       <Input type="email" placeholder="Type here Email ....." onChange={(e)=>this.setState({email:e.target.value})}/>
       <Input type="password" placeholder="Type here Password ...." onChange={(e)=>this.setState({password:e.target.value})}/>
       <button id="LoginBtn" onClick={()=>this.props.onClick(this.state)}>Login</button>
       
       </div>
      )
    }
  }
  export default Login