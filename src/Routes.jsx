import React from "react";
import {
  BrowserRouter as Router,
  Routes as RrdRoutes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import { 
    AboutMe as AboutMePage,
    Sports as SportsPage,
    Academics as AcademicsPage,
    TableofContents as TableofContentsPage
} from "./pages";

const Layout = ({ children }) => (
  <div>
    <nav style={{ padding: "12px 16px", borderBottom: "1px solid #e5e5e5" }}>

      <NavLink
        to="/table-of-contents"
        style={({ isActive }) => ({
          marginRight: 12,
          fontWeight: isActive ? 700 : 400,
          textDecoration: isActive ? "underline" : "none",
          color:"white"
        })}
        >
        Table of Contents
      </NavLink>

        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            marginRight: 12,
            fontWeight: isActive ? 700 : 400,
            textDecoration: isActive ? "underline" : "none",
            color:"white"
          })}
          >
          Home
        </NavLink>

      <NavLink
        to="/sports"
        style={({ isActive }) => ({
          marginRight: 12,
          fontWeight: isActive ? 700 : 400,
          textDecoration: isActive ? "underline" : "none",
          color:"white"
        })}
        >
        Sports
      </NavLink>

      <NavLink
        to="/academics"
        style={({ isActive }) => ({
          fontWeight: isActive ? 700 : 400,
          textDecoration: isActive ? "underline" : "none",
          color:"#ffffff"
        })}
      >
        Academics
      </NavLink>
    </nav>

    <main style={{ padding: 16 }}>{children}</main>
  </div>
);

export default function Routes(){
  return (
    <Router>
      <Layout>
        <RrdRoutes>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/table-of-contents" element={<TableofContentsPage />} />
          {/* <Route path="/about-me" element={<AboutMePage />} /> */}
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </RrdRoutes>
      </Layout>
    </Router>
  );
}