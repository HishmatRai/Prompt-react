import React, { Component } from 'react';
import "./../Conponents/Login.css"
import Input from './Input';
import  {Login} from '../Config/functio'

class Signup extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:"",
      name :'',
      number : '',
      
    }
  }
    render(){
      console.log(this.state);
      return(
       <div>
       {/* <h1>Hello App.js</h1> */}
       <h2 style={{textDecoration:"underline"}}>Sign Up</h2>
       <Input type="text" placeholder="Type here Name ....." onChange={(e)=>this.setState({name:e.target.value})}/>
       <Input type="number" placeholder="Type here Number ....." onChange={(e)=>this.setState({number:e.target.value})}/>
       <Input type="email" placeholder="Type here Email ....." onChange={(e)=>this.setState({email:e.target.value})}/>
       <Input type="password" placeholder="Type here Password ...." onChange={(e)=>this.setState({password:e.target.value})}/>
       <button id="LoginBtn" onClick={()=>this.props.onClick(this.state)}>Sign UP</button>
       
       </div>
      )
    }
  }
  export default Signup