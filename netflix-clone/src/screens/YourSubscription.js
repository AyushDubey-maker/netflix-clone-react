import React from 'react'
import { db } from '../firebase';
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function YourSubscription({subId,subscription}) {
  const user = useSelector(selectUser);
  const history=useHistory()
    function deleteSubscription(e){
        e.preventDefault();
   
             db.collection("users").doc(user?.uid).collection('subscription').doc(subId).delete()
   
       }
    return (
        <div className="your_plan" >
        <h3>You have a {subscription.subscription}</h3>
        <h4>Subscribed On  {moment.unix(subscription.timestamp).format('DD/MM/2021')} </h4>
        <button className="cancelSubscription" onClick={deleteSubscription}>
          Want to Cancel Your Subscription?
        </button>
        <button className="cancelSubscription" onClick={()=>{history.push('/')}}>
          Netflix HomePage
        </button>
      </div>
    )
}

export default YourSubscription
