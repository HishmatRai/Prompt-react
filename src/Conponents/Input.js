import React, { Component } from 'react';
import "./../Conponents/Input.css"
class Input extends Component {
    render(){
      return(
       <div>
       {/* <h1>Hello App.js</h1> */}
       {/* <button id="Input">{this.props.children}</button>
     */}
     <input type={this.props.type} id="input1" placeholder={this.props.placeholder} onChange={this.props.onChange}/>
     
       
       </div>
      )
    }
  }
  export default Input