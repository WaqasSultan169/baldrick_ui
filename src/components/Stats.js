import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Stats() {
  return (
    <div className="d-flex justify-content-center my-4" id="stats">
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
          Stats
        </div>

        <div className="p-3 pt-4">
          <table className="table table-lg table-striped mb-0">
            <tbody className="text-secondary">
              <tr className="bg-light">
                <td className="w-50">Uptime</td>
                <td>1 minute</td>
              </tr>
              <tr>
                <td>Frame rate</td>
                <td>0 fps</td>
              </tr>
              <tr className="bg-light">
                <td>Network throughput</td>
                <td>0 Kbps</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>16.4°C</td>
              </tr>
              <tr className="bg-light">
                <td>Firmware Version</td>
                <td>
                  v1.11 <span className="badge bg-success">Up To Date</span>
                </td>
              </tr>
              <tr>
                <td>IP Address</td>
                <td>192.168.4.26</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stats;
