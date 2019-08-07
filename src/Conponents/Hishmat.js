import React, { Component } from 'react';
class Hishmat extends Component {
    render(){
      return(
       <div>
       {/* <h1>Hello App.js</h1> */}
       <h1 style={{backgroundColor:`blue`}}>{this.props.children}</h1>
       
       </div>
      )
    }
  }
  export default Hishmat