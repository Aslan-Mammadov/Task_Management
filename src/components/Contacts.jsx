import React, { useState } from "react";

function Contacts() {
  const handleSubmit=() => {
    console.log(contactInfo)
    alert('Thank You. New Contact is added.')
  }
  const [contactInfo, setContactInfo]=useState({firstName:'', lastName:'', email:'', cell: '', comments:''})
  return (
    <>
      <form className="contacts-form" onSubmit={handleSubmit}>
        <h1>Add New Contact</h1>
        <label htmlFor="name">First Name</label> 
        <input type="text" name="name" autoFocus onChange={(e)=>{
          setContactInfo({...contactInfo, firstName : e.target.value})
        }}/>

        <label htmlFor="last-name">Last Name</label> 
        <input type="text" name="last-name" onChange={(e)=>{
          setContactInfo({...contactInfo, lastName : e.target.value})
        }} />

        <label htmlFor="email">Email</label>  
          <input type="email" name="email" onChange={(e)=>{
            setContactInfo({...contactInfo, email:e.target.value})
          }}/>

        <label htmlFor="phone">Phone Number</label>  
          <input type="cell" name="phone" onChange={(e)=>{
            setContactInfo({...contactInfo, cell : e.target.value})
          }} />

        <label htmlFor="comments">Comments:</label>  
          <textarea cols="50" rows="5" placeholder="optional" name="comments" onChange={(e)=>{
            setContactInfo({...contactInfo, comments: e.target.value})
          }}/>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contacts;
