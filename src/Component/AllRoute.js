import React,{Component} from 'react';
import {Route, Switch } from 'react-router-dom'
import AllMessageBox from './AllMessageBox';
import MessageBox from './MessageBox';



export default class AllRoute extends Component{

    constructor(props) {
        super(props);
    }
    render(){
        
        return(
        <Switch>
        <Route exact path='/'><AllMessageBox/></Route>
        <Route path='/message/:id'><MessageBox/></Route>

        </Switch>
        )
    }
    }
