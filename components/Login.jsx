
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "alpesh@gmail.com" && password === "1234") {
      localStorage.setItem("login", "true");
      localStorage.setItem("user", JSON.stringify({ email }));

      alert("Login Successful ");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffffff", 
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "30px",
          borderRadius: "15px",
          background: "rgba(0,0,0,0.75)",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          color: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#f5c518",
            fontWeight: "bold",
          }}
        >
          Movie Login
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#f5c518",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            textAlign: "center",
            color: "#ccc",
          }}
        >
          <br />
          <b>Email:</b> alpesh@gmail.com <br />
          <b>Password:</b> 1234
        </p>
      </div>
    </div>
  );




}












