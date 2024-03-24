import React from "react";

function Contacts() {
  const handleSubmit=() => {
    alert('Thank You. New Contact is added.')
  }
  return (
    <>
      <form className="contacts-form" onSubmit={handleSubmit}>
        <h1>Add New Contact</h1>
        <label htmlFor="name">First Name</label> 
        <input type="text" name="name" autoFocus/>

        <label htmlFor="last-name">Last Name</label> 
        <input type="text" name="last-name" />

        <label htmlFor="email">Email</label>  
          <input type="email" name="email" />

        <label htmlFor="phone">Phone Number</label>  
          <input type="cell" name="phone" />

        <label htmlFor="comments">Comments:</label>  
          <textarea cols="50" rows="5" placeholder="optional" name="comments" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contacts;
