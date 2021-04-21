import React, { useState, useEffect } from "react";

import { auth, db } from "../firebase";
import Nav from "../layout-components/Nav";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import "./ProfileScreen.css";
import YourSubscription from "./YourSubscription";

function ProfileScreen() {
  
  const [plan, setPlan] = useState([]);
  const [subscribe, setSubscribe] = useState(false);



  let history = useHistory();

  // const user = useSelector(selectUser);
  const user = firebase.auth().currentUser;
  function signOut() {
    auth.signOut();
  }
  useEffect(() => {
    db.collection("users").doc(user?.uid).collection('subscription').onSnapshot((snapshot) => {
      setPlan(
        snapshot.docs.map((doc) => ({ id: doc.id, subscription: doc.data() }))
      );
    });

    setSubscribe(true);
  }, []);
  function premPlan() {
    db.collection("users").doc(user?.uid).collection('subscription')
      .add({
        subscription: "Premium Plan",
        username: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => {
        alert("Hey You Have Subscribed To Premium Plan");
        history.push("/");
      })
      .catch((error) => alert(error.message));
  }
  function normalPlan() {
    db.collection("users").doc(user?.uid).collection('subscription')
      .add({
        subscription: "Normal Plan",
        username: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => {
        alert("Hey You Have Subscribed To Normal Plan");
        history.push("/");
      });
  }
  function checkout(e) {
    e.preventDefault();
    setSubscribe(false);
  }

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          
         
          <img className="avatar_img" src={user?.photoURL} />
          <div className="profileScreen_details">
            <h2>Your Email: {user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <hr />
              {!subscribe ? (
                <div className="plans_info">
                  <h5>Premium Plan</h5>
                  <h6>Rs.500 per month</h6>
                  <button onClick={premPlan}>Subscribe</button>
                  <h5>Normal Plan</h5>
                  <h6>Rs.300 per month</h6>
                  <button onClick={normalPlan}>Subscribe</button>
                  
                </div>
              ) : (
                <div>
                  {plan.map(({ id, subscription }) => (
                    <YourSubscription subId={id} subscription={subscription} />
                  ))}
                  <button className="checkout_subscription" onClick={checkout}>
                    Checkout Subscriptions
                  </button>
                </div>
              )}

              <button onClick={signOut} className="profileScreen_signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
