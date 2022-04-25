import React from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const DispalyPatientsInfo = ({ patientReports }) => {
  const navigate = useNavigate();
  const getPetientInfo = (id, name) => {
    console.log(id, name);
    navigate(`/patient/${id}/${name}`);
  };
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
                      getPetientInfo(pReport._id, pReport.name);
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
