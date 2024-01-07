import React from "react";

function Forms() {
  return (
    <div>
      <form action="">
        <label htmlFor="fname">First name</label>
        <input type="text" id="name" name="fname" autoComplete="off" />
        <label htmlFor="lname">Last name</label>
        <input type="text" id="name" name="lname" autoComplete="off" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" autoComplete="off" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" autoComplete="off" />
        <label htmlFor="password">Role</label>
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;
