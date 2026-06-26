


import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg,#141E30,#243B55)",
        color: "#fff",
        marginTop: "50px",
        padding: "25px 0",
      }}
    >
      <div className="container text-center">

        <h5 className="text-warning mb-3">
           Movie Library
        </h5>

        <p className="mb-2">
          
        </p>

        <hr
          style={{
            borderColor: "rgba(255,255,255,0.2)",
          }}
        />

        <p className="mb-0">
          © 2026 Movie Library | Made with  using React
        </p>

      </div>
    </footer>
  );
}