import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Test() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="d-flex justify-content-center my-4" id="test">
      <div className="border rounded bg-white" style={{ width: "700px" }}>
         <div
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid #dee2e6",
            backgroundColor: "#f8f9fa",
            fontSize: "18px",
            fontWeight: "500",
            color: "#333",
          }}
        >
          Test
        </div>

        <div className="p-3 pt-4">
          <table className="table table-sm table-borderless mb-0">
            <tbody style={{ fontWeight: "300", fontSize: "14px", color: "#444" }}>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={() => setEnabled(!enabled)}
                    className="form-check-input me-2"
                  />
                  Enable Test Mode
                </td>
              </tr>

              {enabled && (
                <>
                  <tr>
                    <td>
                      <label className="form-label mb-1">Pick a preset</label>
                      <select className="form-select">
                        <option>Paint it Black</option>
                        <option>White Wash</option>
                        <option>Blue Glow</option>
                        <option>Rainbow</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label mb-1">Apply to</label>
                      <select className="form-select">
                        <option>All configured models</option>
                        <option>Model 1</option>
                        <option>Model 2</option>
                      </select>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Test;
