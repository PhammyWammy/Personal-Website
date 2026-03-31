import React from "react";

const Sports = () => {
  const sports = [
    { name: "Volleyball", seasons: ["Spring", "Summer"] },
    { name: "Swimming", seasons: ["Summer"] },
    { name: "Squash", seasons: ["Mostly All Year Round", "Mainly Fall and Winter"] },
  ];

  const photos = [
    { src: "assets/Yuki.png", alt: "Volleyball" },
    { src: "assets/BigMike.png", alt: "Swimming" },
    { src: "assets/squash.png", alt: "Squash" },
  ];

  return (
    <div className="sp-container">
      <style>{`
        .sp-container{
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

        .sp-inner{
          max-width: 1100px;
          margin: 0 auto;
        }

        .sp-title{
          margin:0 0 24px;
          font-size:clamp(34px, 5vw, 64px);
          font-weight:800;
          letter-spacing: .2px;
        }

        /* 3 photos per row */
        .sp-photoRow,
        .sp-photoRowBottom{
          display:grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap:16px;
          margin-bottom:22px;
        }

        /* Frame makes every image the SAME displayed size */
        .sp-photoCard{
          width:100%;
          aspect-ratio: 4 / 3; /* change this to match BigMike.png's shape if needed */
          border-radius:14px;
          border:2px solid rgba(255,255,255,0.25);
          overflow:hidden;
          display:flex;
          align-items:center;
          justify-content:center;
          background: rgba(255,255,255,0.04);
        }

        .sp-photo{
          width:100%;
          height:100%;
          display:block;
          object-fit:contain; /* full image visible */
          object-position:center;
        }

        .sp-tableWrap{
          border-radius:16px;
          overflow:hidden;
          border:2px solid rgba(255,255,255,0.18);
        }

        .sp-table{
          width:100%;
          border-collapse:collapse;
          table-layout:fixed;
        }

        .sp-th{
          text-align:left;
          padding:22px 26px;
          color:#ffffff;
          background:rgba(255,255,255,0.06);
          border-bottom:3px solid rgba(255,255,255,0.35);
          font-weight:800;
          font-size:clamp(18px, 2.6vw, 38px);
        }

        .sp-td{
          text-align:left;
          padding:22px 26px;
          color:#ffffff;
          background:transparent;
          border-bottom:2px solid rgba(255,255,255,0.18);
          vertical-align:top;
          word-break:break-word;
          font-size:clamp(16px, 2.4vw, 36px);
        }

        @media (max-width: 900px){
          .sp-container{ padding:24px; }

          .sp-photoRow,
          .sp-photoRowBottom{
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap:12px;
          }

          .sp-th, .sp-td{ padding:16px 16px; }
        }

        @media (max-width: 640px){
          .sp-container{ padding:16px; }

          .sp-title{
            margin: 2px 0 14px;
            font-size: clamp(30px, 8vw, 40px);
            line-height: 1.05;
          }

          .sp-photoRow,
          .sp-photoRowBottom{
            grid-template-columns: 1fr;
            gap:12px;
            margin-bottom: 14px;
            margin-top: 14px;
          }

          .sp-photoCard{
            border-radius:18px;
            border:1px solid rgba(255,255,255,0.18);
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          }

          .sp-tableWrap{
            border:none;
            border-radius:0;
            overflow: visible;
          }

          .sp-table thead{ display:none; }

          .sp-table, .sp-table tbody, .sp-table tr, .sp-table td{
            display:block;
            width:100%;
          }

          .sp-table tr{
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

          .sp-td{
            width:auto !important;
            border-bottom: 0;
            padding: 14px 14px;
            font-size: clamp(16px, 4.2vw, 19px);
            line-height: 1.25;
          }

          .sp-td::before{ content: none; display:none; }

          .sp-td[data-label="Sport"]{
            font-weight: 900;
            color: #93C5FD;
          }

          .sp-td[data-label="Seasons"]{
            border-left: 1px solid rgba(255,255,255,0.12);
            color: rgba(229,231,235,0.92);
          }

          @media (max-width: 420px){
            .sp-table tr{ grid-template-columns: 1fr; }
            .sp-td[data-label="Seasons"]{
              border-left: 0;
              border-top: 1px solid rgba(255,255,255,0.12);
            }
          }
        }
      `}</style>

      <div className="sp-inner">
        <h1 className="sp-title">Sports Page</h1>

        <div className="sp-photoRow">
          {photos.map((p) => (
            <div key={p.alt} className="sp-photoCard">
              <img src={p.src} alt={p.alt} className="sp-photo" />
            </div>
          ))}
        </div>

        <div className="sp-tableWrap">
          <table className="sp-table">
            <thead>
              <tr>
                <th className="sp-th" style={{ width: "40%" }}>Sport</th>
                <th className="sp-th" style={{ width: "60%" }}>Seasons</th>
              </tr>
            </thead>

            <tbody>
              {sports.map((s) => (
                <tr key={s.name}>
                  <td className="sp-td" data-label="Sport" style={{ width: "40%" }}>
                    {s.name}
                  </td>
                  <td className="sp-td" data-label="Seasons" style={{ width: "60%" }}>
                    {s.seasons.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sp-photoRowBottom">
          {photos
            .slice()
            .reverse()
            .map((p) => (
              <div key={p.alt + "-bottom"} className="sp-photoCard">
                <img src={p.src} alt={p.alt} className="sp-photo" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
