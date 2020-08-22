import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';


export default class Comment extends Component {
    render() {
        return (
            <Col style={{background: "#393D49",height:"80%",padding:"3%",borderRadius:"23px"}}>
                <Row style={{marginTop:"10px"}}>
                    <Col className="fas fa-user-circle" style={{fontSize:"45px",color:"#C4C4C4"}} xs={2}></Col>
                    <Col style={{backgroundColor:"#4E555E",padding:'3px 10px',fontSize:"20px",color:"#C4C4C4",borderRadius: "10px" }} className="text-left" xs={9}><p>Hello, long time no see! How are you doing these days. How is you pet cat doing? Is she still alive or dead?</p></Col>
                </Row>
                <Row style={{marginTop:"10px"}}>
                    <Col className="fas fa-user-circle" style={{fontSize:"45px",color:"#C4C4C4"}} xs={2}></Col>
                    <Col style={{backgroundColor:"#4E555E",padding:'3px 10px',fontSize:"20px",color:"#C4C4C4",borderRadius: "10px" }} className="text-left" xs={9}><p>Hello, long time no see! </p></Col>
                </Row>
                <Row style={{marginTop:"10px"}}>
                    <Col className="fas fa-user-circle" style={{fontSize:"45px",color:"#C4C4C4"}} xs={2}></Col>
                    <Col style={{backgroundColor:"#4E555E",padding:'3px 10px',fontSize:"20px",color:"#C4C4C4",borderRadius: "10px" }} className="text-left" xs={9}><p>Hello, long time no see! How are you doing these days. </p></Col>
                </Row>
            </Col>
        )
    }
}