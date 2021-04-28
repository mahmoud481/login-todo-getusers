import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class Login extends React.Component{

    constructor(props){
        super();
        this.state={
            username:"",
            password:"",
            email:""
        }
    }
    setInputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    login=async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson = await res.json();
        if(resJson.token){
            alert("Login success");
        }else{
            alert(resJson.error)
        }
    }

    render(){
        return <div className="text-center">
            <h1>Login</h1>
            Email:<input className="form-control w-50 m-auto" type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email" /><br/>
            Password:<input className="form-control w-50 m-auto" type="password" value={this.state.password} onChange={this.setInputValue} name="password" /><br/>
            <button className="btn btn-outline-primary" onClick={this.login}>Login</button>
        </div>
    }
}


export default Login;