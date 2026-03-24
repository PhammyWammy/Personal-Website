import React from "react";
import type { CSSProperties } from "react";

const Sports = () => {
  const sports = [
    { name: "Volleyball", seasons: ["Spring", "Summer"] },
    { name: "Swimming", seasons: ["Summer"] },
    { name: "Squash", seasons: ["Mostly All Year Round", "Mainly Fall and Winter"] },
  ];

  // Photos shown around the table (you can swap these URLs for your own)
  const photos = [
    {
      src: "assets/Yuki.png",
      alt: "Volleyball",
    },
    {
      src: "assets/BigMike.png",
      alt: "Swimming",
    },
    {
      src: "assets/squash.png",
      alt: "Squash",
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

    // photos around the table
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
    colSport: { width: "40%" },
    colSeasons: { width: "60%" },

    // photos below the table too
    photoRowBottom: {
      display: "flex",
      gap: 20,
      marginTop: 22,
      flexWrap: "wrap",
    },
  } satisfies Record<string, CSSProperties>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sports Page</h1>

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
              <th style={{ ...styles.th, ...styles.colSport }}>Sport</th>
              <th style={{ ...styles.th, ...styles.colSeasons }}>Seasons</th>
            </tr>
          </thead>

          <tbody>
            {sports.map((sport) => (
              <tr key={sport.name}>
                <td style={{ ...styles.td, ...styles.colSport }}>{sport.name}</td>
                <td style={{ ...styles.td, ...styles.colSeasons }}>
                  {sport.seasons.join(", ")}
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
            <img key={p.alt + "-bottom"} src={p.src} alt={p.alt} style={styles.photo} />
          ))}
      </div>
    </div>
  );
};

export default Sports;
