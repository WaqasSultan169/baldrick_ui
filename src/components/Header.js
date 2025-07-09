import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header style={{ backgroundColor: "#3D74B6", color: "#fff" }} className="py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="fs-4 fw-bold">ADMIN</div>

        <nav className="d-flex align-items-center gap-4">
          <a href="#stats" className="text-white text-decoration-none fw-semibold">Stats</a>
          <a href="#test" className="text-white text-decoration-none fw-semibold">Test</a>
          <a href="#ports" className="text-white text-decoration-none fw-semibold">Ports</a>
          <a href="#help" className="text-white text-decoration-none fw-semibold">Help</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
