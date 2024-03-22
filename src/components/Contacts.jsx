import React from "react";

function Contacts() {
  return (
    <>
      <form className="contacts-form">
        <h1>Add New Contact</h1>
        <label htmlFor="name">First Name</label>
        <input type="text" name="name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" />

        <label for="email">
          Email
          <input type="email" name="email" />
        </label>

        <label htmlFor="phone">
          Phone Number
          <input type="cell" name="phone" />
        </label>

        <label for="comments">
          Comments
          <textarea cols="70" rows="7" placeholder="optional" name="comments" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contacts;
