import React from "react";
import type { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const TableofContents = () => {
  const pages = [
    { name: "About Me", facts: ["Basics Facts of my Life"], path: "/"},
    { name: "Sports", facts: ["Sports I'm currently doing"], path: "/sports" },
    { name: "Academics", facts: ["My Favorite Subjects"], path:"/academics" },
  ];

  const styles = {
    tableWrap: {
      borderRadius: 26,
      overflow: "hidden",
      border: "2px solid rgba(255,255,255,0.16)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
      boxShadow: "0 26px 80px rgba(0,0,0,0.55)",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      tableLayout: "fixed",
    },
    th: {
      textAlign: "left",
      padding: "28px 32px",
      color: "#E5E7EB",
      background: "rgba(17,24,39,0.88)",
      borderBottom: "2px solid rgba(255,255,255,0.16)",
      fontWeight: 900,
      fontSize: 34,
      letterSpacing: 0.6,
      textTransform: "uppercase",
    },
    td: {
      textAlign: "left",
      padding: "28px 32px",
      color: "#F9FAFB",
      background: "rgba(255,255,255,0.03)",
      borderBottom: "2px solid rgba(255,255,255,0.12)",
      verticalAlign: "top",
      wordBreak: "break-word",
      fontSize: 30,
    },
    rowAlt: {
      background: "rgba(255,255,255,0.06)",
    },
    colTopic: { width: "34%" },
    colContains: { width: "66%" },
    topicText: { fontWeight: 900, color: "#93C5FD", fontSize: 32 },
    containsText: { color: "#D1D5DB", fontSize: 30 },
  } satisfies Record<string, CSSProperties>;

  return (
    <div style={styles.tableWrap}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, ...styles.colTopic }}>Topics</th>
            <th style={{ ...styles.th, ...styles.colContains }}>Contains</th>
          </tr>
        </thead>

        <tbody>
          {pages.map((sport, i) => (
            <tr key={sport.name} style={i % 2 === 1 ? styles.rowAlt : undefined}>
              <td style={styles.td}>
                <span style={styles.topicText}><NavLink
                        to={sport.path}
                        style={styles.topicText}
                      >
                        {sport.name}
                      </NavLink></span>
              </td>
              <td style={styles.td}>
                <span style={styles.containsText}>{sport.facts.join(", ")}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableofContents;
