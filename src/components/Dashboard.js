import React from "react";
import TargetVisualization from "./TargetVisualization";
import SignupsOverview from "./SignupsOverview";
import UpcomingInvoices from "./UpcomingInvoices";
let Dashboard=()=>{
    const collections = 120;
    const signups = {
      total: 45,
      analytics: 20,
      finance: 15,
      timetable: 10
    };
    const revenue = {
      total: 50000,
      analytics: 20000,
      finance: 15000,
      timetable: 15000
    };
    const bouncedCheques = 5;

    return (
    <div className="container mt-4 text-center">
        <h1 className="text-success mb-3 text-center">Dashboard</h1>
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3 pb-4">
            <div className="card-header text-center">Collections</div>
            <div className="card-body">
              <h5 className="card-title ">{collections}</h5>
              <p className="card-text">Total number of collections made.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card text-white bg-success mb-3">
            <div className="card-header text-center">Sign-ups</div>
            <div className="card-body">
              <h5 className="card-title">{signups.total}</h5>
              <p className="card-text">
                Zeraki Analytics: {signups.analytics}<br />
                Zeraki Finance: {signups.finance}<br />
                Zeraki Timetable: {signups.timetable}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header text-center">Total Revenue</div>
            <div className="card-body">
              <h5 className="card-title">${revenue.total}</h5>
              <p className="card-text">
                Zeraki Analytics: ${revenue.analytics}<br />
                Zeraki Finance: ${revenue.finance}<br />
                Zeraki Timetable: ${revenue.timetable}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card text-white bg-danger pb-5">
            <div className="card-header text-center">Bounced Cheques</div>
            <div className="card-body">
              <h5 className="card-title">{bouncedCheques}</h5>
              <p className="card-text">Number of bounced cheques.</p>
            </div>
          </div>
        </div>
      </div>
      <TargetVisualization/>
      <SignupsOverview/>
      <UpcomingInvoices/>
    </div>
  );
};


export default Dashboard;

