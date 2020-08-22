
import React, { useState } from 'react';
import firebase from '../firebase';


export default function AddMessage() {
const [text, setText] = useState('');

const handleOnChange = (e) => {
setText(e.target.value);
};
const createMessage = () => {
    console.log(firebase.auth().currentUser.uid)
if(text !==''){
    const messageRef = firebase.database().ref('Message');
const message = {
    text,
    name:firebase.auth().currentUser.providerData[0],
}; 

messageRef.push(message);
}
else{
    alert("Please test some message");
}
};
return (

<div  className="enter-message">

    <input id='messagesend' type="text" onChange={handleOnChange} value={text} />
    <button style={{border:'none',color:"#C4C4C4",borderRadius:'50%',padding:'10px',background:"#646566",fontSize:"25px" ,marginLeft:"1%"}} className="far fa-paper-plane" onClick={createMessage}/>
</div>
);
}

