import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { get } from "./api/action";
import "./App.css";
import DispalyPatientsInfo from "./Pages/DispalyPatientsInfo";
import SinglePatientInfo from "./Pages/SinglePatientInfo";

function App() {
  const [patientReports, setPatientReports] = useState([]);

  useEffect(() => {
    get("/report")
      .then((response) => {
        setPatientReports(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<DispalyPatientsInfo patientReports={patientReports} />}
          />
          <Route
            path="/patient/:registered/:name"
            element={<SinglePatientInfo patientReports={patientReports} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
    //created react-router links to navigate to get single patient info
  );
}

export default App;
