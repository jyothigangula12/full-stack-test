import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SinglePatientInfo.css";
import NewReportForm from "./NewReportForm";
function SinglePatientInfo({ patientReports }) {
  const params = useParams();
  const [isAddingReport, setIsAddingReport] = useState(false);
  console.log("FROM NEWREPORT", patientReports);
  const filterdpatient = patientReports.filter(
    (patient) => patient._id === params.id
  );
  const singlePatientHistory = filterdpatient[0];
  const startAddReportHandler = () => {
    setIsAddingReport(true);
  };
  const addedReportHandler = () => {
    setIsAddingReport(false);
  };
  //added a button "Add NewReport"
  return (
    <>
      <h1>Patient History</h1>
      <div id="container">
        <div id="first">
          <h5>Name:{singlePatientHistory.name}</h5>
          <h5>Registered:{singlePatientHistory.registered}</h5>
          <h5>E-mail:{singlePatientHistory.email}</h5>
          <h5>Gender:{singlePatientHistory.gender}</h5>
        </div>
        <div id="second">
          {!isAddingReport && (
            <Button variant="secondary" onClick={startAddReportHandler}>
              Add NewReport
            </Button>
          )}
        </div>
      </div>
      {isAddingReport && (
        <NewReportForm
          onAddedReport={addedReportHandler}
          id={singlePatientHistory._id}
        />
      )}
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ReportName</th>
              <th>Created</th>
              <th>Event</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {singlePatientHistory.reports.map(
              (pReport) =>
                pReport && (
                  <tr key={pReport._id}>
                    <td>{pReport.reportName}</td>
                    <td>{pReport.created}</td>
                    <td>{pReport.event}</td>

                    <td>{pReport.content}</td>
                  </tr>
                )
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default SinglePatientInfo;
