import "./index.css"

import { db } from "../firebase.js"
import {getFirestore, collection, addDoc,getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react";
 

// Initialize Firebase






function  Dashboard() {


   const [name, setName] = useState("");
  //  const  [fatherName, setfatherName] = useState([]);
  //  const  [rollNumber, setrollNumber] = useState([]);
  //  const [contactNum, setcontactNum]= useState("")






  const addStudents = async (e) => {
    e.preventDefault();
    

    console.log("Students: ", name);
 
    try {

      const docRef = await addDoc(collection(db, "students"), {
        Name: name,
        // fName:fatherName,
        // rollNum: rollNumber,
        // contact: contactNum,
        // createdOn: new Date().getTime(),
      
      });
      console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


    return (
    <>
    <form onSubmit={addStudents}>
    <textarea
      type="text"
      placeholder="What's in your mind..."
      onChange={(e) => {
        setName(e.target.value)
      }}
    />
    <br />
    <button type="submit">Post</button>
  </form> 

    </>
    );
    
}
export default Dashboard;