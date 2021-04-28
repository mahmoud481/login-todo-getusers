import logo from './logo.svg';
import './App.css';
import React from 'react';

class Users extends React.Component{

    constructor(props){
        super();
       
    }

    render(){
        return <div>
            <UserList />
        </div>
    }
}

class UserList extends React.Component{

    constructor(){
        super();
        this.state={
            users:[],
            loading:false
        };
    }

    async componentDidMount(){
        this.setState({loading:true});       
        let res= await fetch("https://reqres.in/api/users?page=2",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        });
        let resJson = await res.json();
        this.setState({users:resJson.data,loading: false});
   
    }

    render(){
        return <div  className="row">
            {!this.state.loading ? this.state.users.map((item)=>{
                return <div  className="col-md-4">
                    <UserView key={item.id}  user={item} />
                </div>
            }): "Loading Users"}
        </div>
    }
}

class UserView extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        return (<div>
            <div className="card my-2">
                <img className="card-img-top " src={this.props.user.avatar}/><br/>
                <div className="card-body">
                    <span className="card-text">{this.props.user.first_name} {this.props.user.last_name}</span>
                    <div className="card-text">Email : {this.props.user.email}</div> 
                </div>   
            </div>
        </div>)
    }
}

export default Users;