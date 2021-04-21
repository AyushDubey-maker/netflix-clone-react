import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";
import GoogleButton from "react-google-button";
import firebase from "firebase";
function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function signIn(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //SignIn with Google
  function signInGoogle(e) {
    const google = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google)
      .then((result) => {
     console.log(result.user.photoURL)
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="signIn_screen">
      <form>
        <h1>Sign-In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign-In
        </button>
        <GoogleButton className="googleButton" onClick={signInGoogle} />
        <h4>
          <span className="signInScreen_gray">New to Netflix? </span>
          <span className="signInScreen_link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
