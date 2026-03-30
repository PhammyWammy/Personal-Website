import React from "react";
import { NavLink } from "react-router-dom";

const TableofContents = () => {
  const pages = [
    { name: "About Me", facts: ["Basics Facts of my Life"], path: "/" },
    { name: "Sports", facts: ["Sports I'm currently doing"], path: "/sports" },
    { name: "Academics", facts: ["My Favorite Subjects"], path: "/academics" },
  ];

  return (
    <div className="tocWrap">
      <style>{`
        .tocWrap {
          border-radius: 26px;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.16);
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          box-shadow: 0 26px 80px rgba(0,0,0,0.55);
        }

        .tocTable {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          table-layout: fixed;
        }

        .tocTh {
          text-align: left;
          padding: 28px 32px;
          color: #E5E7EB;
          background: rgba(17,24,39,0.88);
          border-bottom: 2px solid rgba(255,255,255,0.16);
          font-weight: 900;
          font-size: 34px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .tocTd {
          text-align: left;
          padding: 28px 32px;
          color: #F9FAFB;
          background: rgba(255,255,255,0.03);
          border-bottom: 2px solid rgba(255,255,255,0.12);
          vertical-align: top;
          word-break: break-word;
          font-size: 30px;
        }

        .tocRowAlt td {
          background: rgba(255,255,255,0.06);
        }

        .tocTopicLink {
          font-weight: 900;
          color: #93C5FD;
          font-size: 32px;
          text-decoration: none;
        }
        .tocTopicLink:hover { text-decoration: underline; }
        .tocTopicLink:focus-visible {
          outline: 3px solid rgba(147,197,253,0.7);
          outline-offset: 4px;
          border-radius: 10px;
        }

        .tocContains {
          color: #D1D5DB;
          font-size: 30px;
        }

        /* Mobile/iPad improvements */
        @media (max-width: 900px) {
          .tocTh { font-size: clamp(16px, 3.4vw, 22px); padding: 16px 16px; }
          .tocTd { font-size: clamp(14px, 3.2vw, 20px); padding: 14px 16px; }
          .tocTopicLink { font-size: clamp(15px, 3.3vw, 20px); }
          .tocContains { font-size: clamp(13px, 3.1vw, 18px); }
        }

        /* Phone-friendly: keep "table format", but stack cells per row (card style) */
        @media (max-width: 640px) {
          .tocTable, thead, tbody, tr, th, td { display: block; width: 100%; }
          thead { display: none; }

          tbody tr {
            border-bottom: 2px solid rgba(255,255,255,0.12);
          }

          .tocTd {
            border-bottom: 0;
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 12px;
            align-items: start;
            padding: 14px 16px;
          }

          .tocTd::before {
            content: attr(data-label);
            color: rgba(229,231,235,0.85);
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 12px;
            padding-top: 6px;
          }
        }
      `}</style>

      <table className="tocTable">
        <thead>
          <tr>
            <th className="tocTh" style={{ width: "34%" }}>
              Topics
            </th>
            <th className="tocTh" style={{ width: "66%" }}>
              Contains
            </th>
          </tr>
        </thead>

        <tbody>
          {pages.map((page, i) => (
            <tr key={page.name} className={i % 2 === 1 ? "tocRowAlt" : undefined}>
              <td className="tocTd" data-label="Topics">
                <NavLink to={page.path} className="tocTopicLink">
                  {page.name}
                </NavLink>
              </td>

              <td className="tocTd" data-label="Contains">
                <span className="tocContains">{page.facts.join(", ")}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableofContents;
