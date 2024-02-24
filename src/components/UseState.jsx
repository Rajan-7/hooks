import React, { useState } from "react";

const UseState = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleUser = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]:value
    })
  }
  return (
    <>
      <section>
        <div className="container">
          <h3>Register</h3>
          <form>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              autoComplete="off"
              value={user.username}
              onChange={handleUser}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              value={user.email}
              onChange={handleUser}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              value={user.password}
              onChange={handleUser}
            />
            <div>
              <p>{`Your name is ${user.username} and email is ${user.email}`}</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UseState;
