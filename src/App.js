
import React, { Component } from 'react';
import Home from './Conponents/Home'
// import Hishmat from './Conponents/Hishmat';
import Login from './Conponents/Login';
import Signup from './Conponents/Signup';
import {SignupFunc,LoginFunc} from './Config/functio'
import Error from './Conponents/Error'


class App extends Component {
  constructor() {
    super();
    this.state = {
signupflag: false,
signinflag: false
    }
    this.signupbtn = this.signupbtn.bind(this)
    this.signinbtn = this.signinbtn.bind(this)
  }
  async signupbtn(data){
    try{
      let user = await SignupFunc(data)
      this.setState({
        signupflag: true
      })
      console.log(user)
    }
    catch(err){
console.log(err)
    }
  }


  async signinbtn(data){
    try{
      let user = await LoginFunc(data)
      this.setState({
        signinflag: true,
        email : user.email
      })
      console.log(user)
    }
    catch(err){
console.log(err)
    }
  }
  render() {
    return (
      <div id="mainDIv" >

        <center>
          < div id="baorder">
            {this.state.signinflag ? <Home name = {this.state.email}/> :
            <div>
            {this.state.signupflag ?
              // <Home name={this.state.email} />
              // :
              <div style={{border:"3px solid rgb(32, 165, 189)",width:"50%",marginTop:"60px",borderRadius:"20px"}}>
              <Login onClick = {this.signinbtn} />
    
            <p onClick={()=>this.setState({signupflag :false})}style={{color:"blue",fontWeight:"bold",textDecoration:"underline"}}>Create New Account</p>
           
            </div>
            :

            <div style={{border:"3px solid rgb(32, 165, 189)",width:"50%",marginTop:"60px",borderRadius:"20px"}}>
             <Signup onClick = {this.signupbtn}/>
            <p onClick={()=>this.setState({signupflag : true})}style={{color:"blue",fontWeight:"bold",textDecoration:"underline"}}>Login Now</p>
            </div>
             
          }
</div>
      
        }
        </div>

        </center>
      </div>

    )
  }
}
export default App