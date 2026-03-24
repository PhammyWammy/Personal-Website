import React from "react";
import type { CSSProperties } from "react";

const Academics = () => {
  const subjects = [
    { name: "Math", topics: ["Integrated Math 2"] },
    { name: "World Literature", topics: ["Argumentative Writing", "Novels", "Short Stories", "Crime"] },
    { name: "Chemistry", topics: ["Lab", "Reactions", "Electrons and Protons"] },
  ];

  const photos = [
    {
      src: "assets/Quadratic.png",
      alt: "Math",
    },
    {
      src: "assets/12.png",
      alt: "World Literature",
    },
    {
      src: "assets/flask.png",
      alt: "Chemistry",
    },
  ];

  const styles = {
    container: {
      width: "100vw",
      minHeight: "100vh",
      margin: 0,
      padding: "40px",
      background: "#111827",
      borderRadius: 0,
      boxSizing: "border-box",
      fontSize: 34,
      lineHeight: 1.35,
    },
    title: {
      color: "#ffffff",
      margin: "0 0 24px",
      fontSize: 64,
      fontWeight: 800,
    },

    photoRow: {
      display: "flex",
      gap: 20,
      marginBottom: 22,
      flexWrap: "wrap",
    },
    photo: {
      flex: "1 1 320px",
      height: 220,
      width: "100%",
      objectFit: "cover",
      borderRadius: 16,
      border: "2px solid rgba(255,255,255,0.25)",
    },

    tableWrap: {
      borderRadius: 16,
      overflow: "hidden",
      border: "2px solid rgba(255,255,255,0.18)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      tableLayout: "fixed",
    },
    th: {
      textAlign: "left",
      padding: "22px 26px",
      color: "#ffffff",
      background: "rgba(255,255,255,0.06)",
      borderBottom: "3px solid rgba(255,255,255,0.35)",
      fontWeight: 800,
      fontSize: 38,
    },
    td: {
      textAlign: "left",
      padding: "22px 26px",
      color: "#ffffff",
      background: "transparent",
      borderBottom: "2px solid rgba(255,255,255,0.18)",
      verticalAlign: "top",
      wordBreak: "break-word",
      fontSize: 36,
    },
    colSubject: { width: "40%" },
    colTopics: { width: "60%" },

    photoRowBottom: {
      display: "flex",
      gap: 20,
      marginTop: 22,
      flexWrap: "wrap",
    },
  } satisfies Record<string, CSSProperties>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Academics Page</h1>

      {/* Photos above the table */}
      <div style={styles.photoRow}>
        {photos.map((p) => (
          <img key={p.alt} src={p.src} alt={p.alt} style={styles.photo} />
        ))}
      </div>

      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, ...styles.colSubject }}>Subject</th>
              <th style={{ ...styles.th, ...styles.colTopics }}>Topics</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((s) => (
              <tr key={s.name}>
                <td style={{ ...styles.td, ...styles.colSubject }}>{s.name}</td>
                <td style={{ ...styles.td, ...styles.colTopics }}>
                  {s.topics.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Photos below the table */}
      <div style={styles.photoRowBottom}>
        {photos
          .slice()
          .reverse()
          .map((p) => (
            <img
              key={p.alt + "-bottom"}
              src={p.src}
              alt={p.alt}
              style={styles.photo}
            />
          ))}
      </div>
    </div>
  );
};

export default Academics;