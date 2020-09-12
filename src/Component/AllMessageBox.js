import React, { Component } from 'react'
import {Col } from 'react-bootstrap';
import firebase from "../firebase" 
import ShowMessage from './ShowMessage';
import { Link } from 'react-router-dom';
class AllMessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {newChat:true,counter:0,title:"",stutus:""  };
        this.addButton=this.addButton.bind(this);
        this.addButtonOFF=this.addButtonOFF.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const countRef = firebase.database().ref('Create');
        
        countRef.on('value', (snapshot) => {
            console.log(snapshot.val())
            if(snapshot.val().counter !==null){

                this.setState({
                    counter:snapshot.val().counter
                });
            }
            
            
        });

    }
    addButton(){
        this.setState({
            newChat:false
        });
    }
    addButtonOFF(){
        this.setState({
            newChat:true
        });
    }
    handleChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const cartRef = firebase.database().ref('Create');
        cartRef.update({
            counter:(this.state.counter + 1),
        });

        const messageRef = firebase.database().ref(`Message${this.state.counter}`);
        const message = {
            
            text:this.state.title,
            status:this.state.status,
            name:firebase.auth().currentUser.providerData[0],
        }; 
        
        messageRef.child("/data").push(message);
        messageRef.child("/title").set(this.state.title);

        this.setState({
            title:"",
            stutus:"",
        });
    }
    render() {
        return (
            <div>
                {this.state.newChat === true ? (
                    <div>
                    <button onClick={this.addButton} >Create a Chat</button>
                    <ShowMessage/>
                    </div>
                ):(
                    <form style={{color:'white'}} onSubmit={this.handleSubmit}>
                        <h3 style={{fontSize:"16px",paddingLeft:'22px'}}>Create a new Chat</h3>
                        <label for="title">Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /> 
                        <br/>
                        <label for="status">Description:</label>
                        <input type="text" name="status" value={this.state.status} onChange={this.handleChange} />
                        <Col>
                        <button onClick={this.addButtonOFF }>Cancle</button>
                        <Link to="/"><button onClick={this.handleSubmit }>Create a Chat</button></Link>
                        </Col>
                    </form>
                )}
            </div>

        );
    }
}

export default AllMessageBox;

