import './App.css';
import React from 'react';
import Login from './Login'
import Routerr from './Routerr'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component{

    constructor(props){
        super();
    }
    
    render(){
        return <div>
           <Routerr />
        </div>
    }
}


export default App;