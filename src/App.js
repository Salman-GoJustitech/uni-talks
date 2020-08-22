  import React, { Component } from "react"
  import "./App.css"
  import firebase from "./firebase"
  import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import MessageBox from "./Component/MessageBox"
import { Container} from "react-bootstrap"
  
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = { isSignedIn: false,value:"" }
    this.handleChange = this.handleChange.bind(this);
    }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
      console.log(firebase.auth().currentUser);
      return (
        <div>
          {this.state.isSignedIn ? (
            <Container fluid>

              {this.state.value==="asif" ? (
                <MessageBox/>
              ):(
                <form style={{color:'white', margin:"15% 45%"}} onSubmit={this.handleSubmit}>
                  <h3 style={{fontSize:"16px",paddingLeft:'22px'}}>GoJustitech Pin</h3>
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                  <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              </form>
              )}
              
              </Container>
          ) : (
            <StyledFirebaseAuth 
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      )
    }
  }
  


export default App;
