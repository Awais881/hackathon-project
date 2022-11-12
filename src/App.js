import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Login from "./components/Login"
import Home from "./components/Dashboard"
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Dashboard from './components/Dashboard';
function App() {


  const [isLogin, setIsLogin] = useState(false);
  // const [fullName, setFullName] = useState("");


  useEffect(() => {

    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        console.log("auth change: login", user);
        setIsLogin(true)

        console.log("auth.currentUser: ", auth.currentUser.displayName);
        // setFullName(auth.currentUser.displayName)


      } else {
        console.log("auth change: logout");
        // User is signed out
        setIsLogin(false)

      }
    });

    return () => {
      console.log("Cleanup function called")
      unSubscribe();
    }

  }, [])
  const logoutHandler = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("signout successful");
    }).catch((error) => {
      // An error happened.
      console.log("signout failed");
    });

  }



  return (
    <div className="App">
    {
        (isLogin) ?
        <div className='header'>
          <ul className='navBar'>
            <li> <Link to={`/`}>Dashboard</Link> </li>
            <button onClick={logoutHandler} className='logout'><span className='text'>Logout</span></button> 
           
            </ul></div>
          :
          <ul className='navBar3'>
            <li> <Link to={`/`}>Login</Link> </li>
          
          </ul>
      }

{(isLogin) ?

<Routes>
  <Route path="/" element={<Dashboard />} />

         </Routes>
     :
        <Routes>
    <Route path="/" element={<Login />} />
  
   </Routes>
}

    </div>
  );
}

export default App;
