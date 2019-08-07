import React, { Component } from 'react';
class Home extends Component {
    render(){
      return(
       <div>

       <nav >
    <div class="nav-wrapper" style={{backgroundColor:"rgb(32, 165, 189)"}}>
      <a href="#!" class="brand-logo">React</a>
      <ul class="right hide-on-med-and-down">
        <li ><a class="waves-effect waves-light btn-large" style={{border:"2px solid red"}}>Logout</a></li>
      </ul>
    </div>
  </nav>

       <h1>{this.props.name}</h1>
       
       </div>
      )
    }
  }
  export default Home