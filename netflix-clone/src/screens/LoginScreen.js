import React,{useState} from 'react'
import './LoginScreen.css'
import Ayush from '../netflix_logo.png'
import SignInScreen from './SignInScreen'
function LoginScreen() {
    const[signIn,setSignIn]=useState(false)
    const [email,setEmail]=useState('')
    function getSignInPage(e){
        e.preventDefault();
        if (email){
            setSignIn(true)
        }else{
            alert("Please enter your email-id")
        }
    }
    return (
        <div className="loginScreen">
            <div className="loginScreen_background" >
                <img
                className="loginScreen_logo" 
                src={Ayush}/>
                <button className="loginScreen_button" onClick={()=>setSignIn(true)}>Sign-In</button>
            <div className="login_gradient"/>
            </div>
            <div className="loginScreen_body">
                {signIn ?(
                    <SignInScreen/>
                ):(
                <>
           <h1>Unlimited films,TV Programmes and more..</h1>
           <h2>Watch anywhere.Cancel at anytime</h2>
           <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
           <div className="login_input">
               <form>
                   <input required value={email} type="email" placeholder="Email Address" onChange={(text)=>setEmail(text.target.value)}/>
                   <button className="loginScreen_inputButton"onClick={getSignInPage}>GET STARTED</button>
               </form>
           </div>
            </>
                )}
            </div>
            
        </div>
    )
}

export default LoginScreen
