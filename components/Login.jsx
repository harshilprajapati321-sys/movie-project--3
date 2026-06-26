
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "harshil" && password === "1818") {
      localStorage.setItem("login", "true");
      localStorage.setItem("user", JSON.stringify({ username }));
      alert("Login Successful ");
      navigate("/");
    } 
    else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#ffffff",  }} >
     <div style={{width: "380px",padding: "30px",borderRadius: "2px",background: "rgba(179, 128, 128, 0.75)",color: "white",}} >
        <h2 style={{textAlign: "center",marginBottom: "25px",color: "#ae220d",fontWeight: "bold", }}>
          Movie Login
        </h2>

        <form onSubmit={handleLogin}>
          <input type="username"placeholder=" Enter username"value={username} onChange={(e) => setusername(e.target.value)}
            style={{width: "100%",padding: "10px",marginBottom: "15px",borderRadius: "8px",border: "none",outline: "none",}}/>

          <input type="password" placeholder="Enter Password"value={password} onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "8px", border: "none", outline: "none",}} />

          <button type="submit"
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "none", background: "#ae220d", color: "#000", fontWeight: "bold", cursor: "pointer", }} >
            Login
          </button>
        </form>

          <p style={{marginTop: "20px", fontSize: "13px", textAlign: "center", color: "#0e0d0d",}} >
          <br />
          <b>Username:</b> harshil <br />
          <b>Password:</b> 1818
           </p>
      </div>
    </div>
  );
}












