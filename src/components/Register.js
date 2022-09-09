import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "ok") {
      alert("Registered Succesfully");
      nav("/login");
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center  bd-highlight">
        <h2 className="p-4">Register</h2>
      </div>
      <div className="d-flex justify-content-center  bd-highlight">
        <form onSubmit={registerUser}>
          <input
            className="form-control "
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />

          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            className="form-control "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input type="submit" className="btn btn-dark" value="Register" />
        </form>
      </div>
    </div>
  );
}
