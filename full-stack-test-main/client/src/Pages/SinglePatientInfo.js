import React from "react";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SinglePatientInfo.css";

function SinglePatientInfo({ patientReports }) {
  const params = useParams();

  const filterdpatient = patientReports.filter(
    (patient) => patient.registered === params.registered
  );
  const singlePatientHistory = filterdpatient[0];
  //filtered single patient data, filtered using params(registerd number)
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
      </div>

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
