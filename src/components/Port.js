import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@mui/icons-material/Close";

function Port() {
  const [openPort, setOpenPort] = useState(null); // tracks which port is opened
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    pixels: "",
    brightness: "",
    position: "",
  });

  const [modelsByPort, setModelsByPort] = useState(
    Array(10).fill([]) 
  );

  const handleTogglePort = (index) => {
    setOpenPort(openPort === index ? null : index);
  };

  const handleSave = () => {
    const updatedModels = [...modelsByPort];
    updatedModels[openPort] = [...updatedModels[openPort], form];
    setModelsByPort(updatedModels);
    setForm({ name: "", pixels: "", brightness: "", position: "Start" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    const modelToEdit = modelsByPort[openPort][index];
    setForm(modelToEdit);
    setShowForm(true);
  };
  

  return (
    <div className="d-flex justify-content-center my-4" id="ports">
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
          Port Config
        </div>

        <div className="p-3 pt-4">
        <div className="row align-items-center mb-3">
        <div className="col-auto pe-0">
            <label className="form-label mb-0">DDP Start Channel</label>
        </div>
        <div className="col-md-9">
            <input type="number" className="form-control" placeholder="0" />
        </div>
        </div>

          {modelsByPort.map((models, i) => (
            <div key={i} className="mb-3">
              <div
                className={`d-flex align-items-center justify-content-between px-3 py-2 border rounded ${
                  openPort === i
                    ? "bg-primary bg-opacity-10 border-primary"
                    : "bg-light"
                }`}
                onClick={() => handleTogglePort(i)}
                style={{ cursor: "pointer" }}
              >
                <span className="text-muted fw-semibold">
                  Port {i + 1} – {models.reduce((a, m) => a + Number(m.pixels), 0)} Pixel, {models.length} Model
                </span>
                <span className="text-muted">{openPort === i ? "▲" : "▼"}</span>
              </div>

              {openPort === i && (
                <div className="mt-3">
                  <h6 className="text-muted mb-2">Model Configuration</h6>
                  <table className="table table-striped table-sm table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Start</th>
                        <th>Num of Pixels</th>
                        <th>Brightness</th>
                        <th>Actions</th> 
                      </tr>
                    </thead>
                    <tbody>
                      {models.map((model, index) => (
                        <tr key={index}>
                          <td>{model.name}</td>
                          <td>{model.position}</td>
                          <td>{model.pixels}</td>
                          <td>{model.brightness}%</td>
                          <td>
                                <IconButton size="small" onClick={() => handleEdit(index)}>
                                <EditIcon fontSize="small" />
                                </IconButton>
                            </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    className="btn btn-primary btn-md"
                    onClick={() => setShowForm(true)}
                  >
                    Add a Model
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={showForm} onClose={() => setShowForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Add New Model
          <IconButton
            aria-label="close"
            onClick={() => setShowForm(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <div className="container-fluid">
          {[
            ["Model Name", "name", "text"],
            ["Num Pixels", "pixels", "number"],
            ["Brightness", "brightness", "number"],
            ].map(([label, key, type]) => (
              <div key={key} className="row mb-3 align-items-center">
                <div className="col-3 text-end">
                  <label className="form-label mb-0">{label}</label>
                </div>
                <div className="col-7">
                  <TextField
                    type={type}
                    size="small"
                    fullWidth
                    value={form[key]}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
                    InputProps={
                      key === "brightness"
                        ? {
                            endAdornment: (
                              <InputAdornment position="end">%</InputAdornment>
                            ),
                            inputProps: { min: 0 },
                          }
                        : undefined
                    }
                  />
                </div>
              </div>
            ))}

            <div className="row mb-2 align-items-center">
              <div className="col-3 text-end">
                <label className="form-label mb-0">Position</label>
              </div>
              <div className="col-7">
                <TextField
                  select
                  size="small"
                  fullWidth
                  value={form.position}
                  onChange={(e) =>
                    setForm({ ...form, position: e.target.value })
                  }
                >
                  <MenuItem value="Start">Start of Chain</MenuItem>
                  <MenuItem value="End">End of Chain</MenuItem>
                  <MenuItem value="After">After of Chain</MenuItem>
                </TextField>
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setShowForm(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Port;
