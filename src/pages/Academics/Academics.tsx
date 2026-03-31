import React from "react";

const Academics = () => {
  const subjects = [
    { name: "Math", topics: ["Integrated Math 2"] },
    {
      name: "World Literature",
      topics: ["Argumentative Writing", "Novels", "Short Stories", "Crime"],
    },
    { name: "Chemistry", topics: ["Lab", "Reactions", "Electrons and Protons"] },
  ];

  const photos = [
    { src: "assets/Quadratic.png", alt: "Math" },
    { src: "assets/12.png", alt: "World Literature" },
    { src: "assets/flask.png", alt: "Chemistry" },
  ];

  return (
    <div className="ac-container">
      <style>{`
        .ac-container{
          width:100%;
          min-height:100vh;
          margin:0;
          padding:40px;
          background:#111827;
          box-sizing:border-box;
          color:#fff;
          font-size:clamp(16px, 2.2vw, 34px);
          line-height:1.35;
        }

        .ac-inner{
          max-width: 1100px;
          margin: 0 auto;
        }

        .ac-title{
          margin:0 0 24px;
          font-size:clamp(34px, 5vw, 64px);
          font-weight:800;
          letter-spacing: .2px;
        }

        .ac-photoRow{
          display:flex;
          gap:20px;
          margin-bottom:22px;
          flex-wrap:wrap;
        }

        /* FIX: show full image (no cropping) */
        .ac-photo{
          flex:1 1 260px;
          width:100%;
          height:220px;
          object-fit:contain;
          object-position:center;
          background: rgba(255,255,255,0.06);
          border-radius:16px;
          border:2px solid rgba(255,255,255,0.25);
        }

        .ac-tableWrap{
          border-radius:16px;
          overflow:hidden;
          border:2px solid rgba(255,255,255,0.18);
        }

        .ac-table{
          width:100%;
          border-collapse:collapse;
          table-layout:fixed;
        }

        .ac-th{
          text-align:left;
          padding:22px 26px;
          color:#ffffff;
          background:rgba(255,255,255,0.06);
          border-bottom:3px solid rgba(255,255,255,0.35);
          font-weight:800;
          font-size:clamp(18px, 2.6vw, 38px);
        }

        .ac-td{
          text-align:left;
          padding:22px 26px;
          color:#ffffff;
          background:transparent;
          border-bottom:2px solid rgba(255,255,255,0.18);
          vertical-align:top;
          word-break:break-word;
          font-size:clamp(16px, 2.4vw, 36px);
        }

        .ac-photoRowBottom{
          display:flex;
          gap:20px;
          margin-top:22px;
          flex-wrap:wrap;
        }

        @media (max-width: 900px){
          .ac-container{ padding:24px; }
          .ac-photo{ height:180px; border-radius:14px; }
          .ac-th, .ac-td{ padding:16px 16px; }
        }

        /* phone: align Subject + Topics side-by-side inside each row card */
        @media (max-width: 640px){
          .ac-container{ padding:16px; }

          .ac-title{
            margin: 2px 0 14px;
            font-size: clamp(30px, 8vw, 40px);
            line-height: 1.05;
          }

          .ac-photoRow, .ac-photoRowBottom{
            gap:12px;
            margin-bottom: 14px;
            margin-top: 14px;
          }

          /* FIX: keep full image on mobile too */
          .ac-photo{
            flex:1 1 100%;
            height:auto;
            aspect-ratio: 16 / 9;
            object-fit:contain;
            object-position:center;
            background: rgba(255,255,255,0.06);
            border-radius:18px;
            border:1px solid rgba(255,255,255,0.18);
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          }

          .ac-tableWrap{
            border:none;
            border-radius:0;
            overflow: visible;
          }

          .ac-table thead{ display:none; }

          /* keep it "card-like" but with 2 aligned columns per row */
          .ac-table, .ac-table tbody, .ac-table tr, .ac-table td{
            display:block;
            width:100%;
          }

          .ac-table tr{
            margin: 12px 0;
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
            box-shadow: 0 14px 36px rgba(0,0,0,0.35);

            display:grid;
            grid-template-columns: minmax(120px, 34%) 1fr;
            align-items: start;
          }

          .ac-td{
            width:auto !important;
            border-bottom: 0;
            padding: 14px 14px;
            font-size: clamp(16px, 4.2vw, 19px);
            line-height: 1.25;
          }

          /* remove the stacked labels */
          .ac-td::before{ content: none; display:none; }

          /* Subject column styling */
          .ac-td[data-label="Subject"]{
            font-weight: 900;
            color: #93C5FD;
          }

          /* Topics column styling + vertical divider */
          .ac-td[data-label="Topics"]{
            border-left: 1px solid rgba(255,255,255,0.12);
            color: rgba(229,231,235,0.92);
          }

          /* very small phones: fall back to stacked */
          @media (max-width: 420px){
            .ac-table tr{ grid-template-columns: 1fr; }
            .ac-td[data-label="Topics"]{
              border-left: 0;
              border-top: 1px solid rgba(255,255,255,0.12);
            }
          }
        }
      `}</style>

      <div className="ac-inner">
        <h1 className="ac-title">Academics Page</h1>

        <div className="ac-photoRow">
          {photos.map((p) => (
            <img key={p.alt} src={p.src} alt={p.alt} className="ac-photo" />
          ))}
        </div>

        <div className="ac-tableWrap">
          <table className="ac-table">
            <thead>
              <tr>
                <th className="ac-th" style={{ width: "40%" }}>
                  Subject
                </th>
                <th className="ac-th" style={{ width: "60%" }}>
                  Topics
                </th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((s) => (
                <tr key={s.name}>
                  <td className="ac-td" data-label="Subject" style={{ width: "40%" }}>
                    {s.name}
                  </td>
                  <td className="ac-td" data-label="Topics" style={{ width: "60%" }}>
                    {s.topics.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ac-photoRowBottom">
          {photos
            .slice()
            .reverse()
            .map((p) => (
              <img
                key={p.alt + "-bottom"}
                src={p.src}
                alt={p.alt}
                className="ac-photo"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
