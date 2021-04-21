import React,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import SearchPage from './screens/SearchPage';

import WatchList from './watchlist/WatchList';

import WatchListNav from './watchlist/WatchListNav'
import AddMovie from './watchlist/AddMovie';
import Watched from './watchlist/Watched';

import { GlobalProvider } from "./watchlist/watchlist_context/GlobalState";
import Nav from './layout-components/Nav';
import Footer from './layout-components/Footer';
function App() {
 // const[user,setUser]=useState('')
 const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
     // setUser(userAuth)
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email

    })
      )
    }else{
      dispatch(logout())
    }
  })
  return unsubscribe;
  },[dispatch])
  return (
    <div className="App">
  <GlobalProvider>
     <Router>
       {!user?(
         
       <LoginScreen/>
      
       ):(
       <Switch>
          <Route path="/watched">
            <WatchListNav/>
           <Watched/>
         </Route>
         <Route path="/add_movie">
           <WatchListNav/>
           <AddMovie/>
         </Route>
         <Route path="/watchlist">
         <WatchListNav/>
         <WatchList/>
         </Route>
         <Route path="/search">
         <Nav hiddenSearch/>
          <SearchPage/>
         </Route>
         <Route path="/profile">
           <ProfileScreen/>
           <Footer/>
         </Route>
         <Route exact path="/">
           <HomeScreen/>
         <Footer/>
         </Route>
       </Switch>
       )}
     </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
