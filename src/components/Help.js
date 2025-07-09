import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Help() {
  return (
    <div className="d-flex justify-content-center my-4" id="help">
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
          Help
        </div>

        <div className="p-4 text-secondary" style={{ fontSize: "15px", lineHeight: "1.6" }}>
          <p><strong>Stats:</strong> Displays real-time system information like uptime, temperature, IP address, and firmware version.</p>
          <p><strong>Test:</strong> Allows you to enable a test mode and apply different preset configurations to connected models.</p>
          <p><strong>Port Config:</strong> Set DDP start channel and configure up to 10 ports. Each port can hold multiple models with settings like name, pixel count, brightness, and position.</p>
          <p><strong>Model Dialog:</strong> When you click "Add a Model", a dialog appears where you can enter model details and save them to the selected port.</p>
          <p>Use the arrow beside a port to expand or collapse its configuration.</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
