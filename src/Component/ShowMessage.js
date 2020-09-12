import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ShowMessage() {
    const [todoList, setTodoList] = useState();
    const [titleList, setTitleList] = useState();
    useEffect(() => {
    const todoRef = firebase.database().ref();
    todoRef.on('value', (snapshot) => {
        const todos = snapshot.val();
        const todoList = [];
        for (let id in todos) {
        todoList.push({ id, ...todos[id] });
        }
        
        setTodoList(todoList);
        
    });
    }, []);
    return (
    <Container   fluid>
                <Row xs={4}>
            {todoList
            ? todoList.map((todo) =>
                    todo.id !=="Create"?(
                            <Link to={`/message/${todo.id}`}><Col  id="catagoryBoxes">
                                        <h3 id="catagoryText">{todo.title}</h3>
                                        
                                        </Col></Link>
                            
                            
                        ):(null)
                
            
            )
            : (null)}
            </Row>
    </Container>
    );
}