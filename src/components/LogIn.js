import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login succesful");
      nav("/dashboard");
    } else {
      alert("Please check username and password");
    }
    console.log(data);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center  bd-highlight">
        <h2>Login</h2>
      </div>
      <div className="d-flex justify-content-center  bd-highlight">
        <form onSubmit={loginUser}>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input className="btn btn-dark" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
