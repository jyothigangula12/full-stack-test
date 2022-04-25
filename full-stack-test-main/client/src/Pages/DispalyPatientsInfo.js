import React from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const DispalyPatientsInfo = ({ patientReports }) => {
  const navigate = useNavigate();
  const getPatientInfo = (registered, name) => {
    console.log(registered, name);
    navigate(`/patient/${registered}/${name}`);
  };
  // getPatientInfo function navigates to different to detail page
  return (
    <>
      <Container>
        <h1>Patient Reports App</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Registered</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th>Reports</th>
            </tr>
          </thead>
          <tbody>
            {patientReports.map(
              (pReport) =>
                pReport && (
                  <tr
                    key={pReport.registered}
                    onClick={() => {
                      getPatientInfo(pReport.registered, pReport.name);
                    }}
                  >
                    <td>{pReport.name}</td>
                    <td>{pReport.registered}</td>
                    <td>{pReport.email}</td>
                    <td>{pReport.gender}</td>
                    <td>{pReport.reports.length}</td>
                  </tr>
                )
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DispalyPatientsInfo;
