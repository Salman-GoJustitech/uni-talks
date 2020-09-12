import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { Container, Row, Col } from 'react-bootstrap';
import AddMessage from './AddMessage';
import ScrollableFeed from 'react-scrollable-feed'

export default function MessageBox() {
    const [todoList, setTodoList] = useState();
    // useEffect(()=>{
    //     window.scrollTo({
    //         top: 100,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    // },[])
    const id=window.location.pathname;
    var ret = id.replace("/message/",'');
    useEffect(() => {
    const todoRef = firebase.database().ref(ret).child("/data");
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
        
        <div>
    <Container  id="box" fluid>
    <ScrollableFeed>
                
            {todoList
            ? todoList.map((todo) =>
            <Row key={todo.id} style={{marginTop:"10px"}}>
                    {todo.name.photoURL ?(
                        <Col xs={1}><img src={todo.name.photoURL} alt="Avatar" className="avatar"></img></Col> 
                    ):(
                        <Col className="fas fa-user-circle" style={{fontSize:"40px",color:"#C4C4C4"}} xs={1}></Col> 
                    )}
                    
                    <Col  className="text-left" xs={11}><p style={{background:"#4E555E",padding:'3px 10px',fontSize:"20px",color:"#C4C4C4",borderRadius: "10px" }}>{todo.text} </p></Col>
                </Row>
            )
            : (<div style={{fontSize:'40px',color:"white",textAlign:"center",margin:'10% 42%'}} >
                <Row>
                    Waiting For 
                </Row>
                <Row>
                    Go Justitech  
                </Row>
                <Row>
                    Message  
                </Row>
            </div>)}
            
                </ScrollableFeed>
    </Container>
    {todoList
            ? (
            <AddMessage data={ret}/>
            )
            : ''}
    </div>
    );
}







// // function Message (){
// //     const [data,setData]= useState([]);
// //         const db=firebase.database().ref().child("data");
// //         const newDatas=db.on('value',snap => snap.map((doc)=>({
// //             id:doc.id,
// //             ...doc.data()
// //         }))
// //         );
// //         setData(newDatas)
// //         if(data.length !=0){
// //         return (
// //             console.log(data)
// //         );
// // }}  
// // export default Message;

// class MessageBox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {data:'Asif'};
//     }
//     componentDidMount(){
//         var data =[]
//         const roofRef=firebase.database().ref().child("uni-talks");
//         const speedRef = roofRef.child("data")
//             speedRef.on('value',snap =>{
//                 this.setState({
//                 data:snap.val()
//             })});
//             console.log(data);
    
        
//     }
//     render() {
//         return (
//         <h1>{this.state.data}</h1>
//         );
//     }
// }

// export default MessageBox;


// // const MessageBox =()=>{
// //     const data= Message();
// //     console.log(data)
// //     return(
// //         <h1>{data}</h1>
// //     ) 
// // }
// // export default MessageBox;