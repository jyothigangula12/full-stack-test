import React, { useRef, useState } from "react";
import "./NewReportForm.css";
import { post } from "../api/action";
import "./NewReportForm.css";
function NewReportForm({ onAddedReport, id }) {
  const [formIsValid, setFormIsValid] = useState(false);

  const [reportName, setReportName] = useState("");

  const [event, setEvent] = useState("");

  const [content, setContent] = useState("");

  const validateInput = (data) => {
    if (
      data.trim() !== "" &&
      typeof data === "string" &&
      typeof data !== "number"
    ) {
      return true;
    }
  };
  // added Form to add new report for the patient
  const FormSubmit = (e) => {
    e.preventDefault();

    if (
      !(
        validateInput(reportName) &&
        validateInput(event) &&
        validateInput(content)
      )
    ) {
      setFormIsValid(true);
      return;
    } else {
      const data = {
        _id: Math.random().toString(16).slice(2),
        reportName: reportName,
        created: new Date().getTime(),
        content: content,
        event: event,
      };
      post("/report", data, id)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });

      setReportName("");
      setEvent("");
      setContent("");
      setFormIsValid(false);
    }
    onAddedReport();
  };

  return (
    <form className="app" onSubmit={FormSubmit}>
      <div className="form-control control-group">
        <div>
          <label htmlFor="reportName">Report Name</label>
          <textarea
            type="text"
            rows="2"
            id="reportName"
            value={reportName}
            onChange={(event) => setReportName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="event">Event</label>
          <input
            type="text"
            id="event"
            value={event}
            onChange={(event) => setEvent(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            rows="3"
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
      </div>
      {formIsValid && <p className="error-text">Please enter Valid data</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewReportForm;
