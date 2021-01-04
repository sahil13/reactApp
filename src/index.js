import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./dashBoard";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <div className="container-fluid">
      <div className="row">
        <BrowserRouter>
          <DashBoard />
        </BrowserRouter>
      </div>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
