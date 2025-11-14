import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { useAuth } from "../useAuth";

const TopBar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleSidebar = () => setSidebarOpen((open) => !open);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header className="topbar" style={{ width: "100vw", left: 0, right: 0 }}>
        <nav
          className="topbar-nav"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <button
            className="hamburger"
            aria-label="Open sidebar"
            onClick={handleSidebar}
          >
            &#9776;
          </button>
          <div className="topbar-actions" style={{ marginLeft: "auto" }}>
            {isAuthenticated ? (
              <button
                className="topbar-link"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#2563eb",
                  fontWeight: 600,
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/register" className="topbar-link">
                  Register
                </Link>
                <Link to="/login" className="topbar-link">
                  Login
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <aside
        className={`sidebar${sidebarOpen ? " open" : ""}`}
        onClick={closeSidebar}
      >
        <Link
          to="/"
          className={`sidebar-link${
            location.pathname === "/" ? " active" : ""
          }`}
          onClick={closeSidebar}
        >
          Home
        </Link>
        <div className="sidebar-spacer" />
      </aside>
      {sidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.2)",
            zIndex: 99,
          }}
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default TopBar;
