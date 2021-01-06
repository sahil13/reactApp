import React, { Component } from "react";
import ListEmployees from "./listEmployee";
import { getEmployees } from "./employeeService";
import { toast } from "react-toastify";
import _ from "lodash";
import EmployeePagination from "./employeePagination";

class Employee extends Component {
  state = {
    employees: [],
    noOfPages: [],
    pageNo: 1,
    noOfRecordsOnAPage: 2
  };

  componentDidMount() {
    const employees = getEmployees();
    this.setState({ employees });
    const totalRecords = employees.length;
    const noOfRecordsOnAPage = this.state.noOfRecordsOnAPage;
    const noOfPages = _.floor(totalRecords / noOfRecordsOnAPage);
    const arr = _.range(1, noOfPages + 1);
    this.setState({ noOfPages: arr });
  }

  getRecords = (data, pageNo, noOfRecordsOnAPage) => {
    const startIndex = (pageNo - 1) * 2;

    return  _(data)
      .slice(startIndex)
      .take(noOfRecordsOnAPage)
      .value();

    // this.setState({ employees: employees1 });
  };

  updatePageNo = pageno => {
    this.setState({ pageNo: pageno });
  };

  handleDelete = emp => {
    const employees = this.state.employees;
    const filteredEmployees = employees.filter(
      employee => employee.empCode !== emp.empCode
    );
    toast.info("Deleted Successfully");
    this.setState({ employees: filteredEmployees });
  };

  render() {
    const {
      employees,
      noOfPages: pages,
      pageNo,
      noOfRecordsOnAPage
    } = this.state;

    let pagEmployees = this.getRecords(employees, pageNo, noOfRecordsOnAPage);

    return (
      <React.Fragment>
        {pageNo}--
        <div className="col-md-12">
          <ListEmployees onDelete={this.handleDelete} data={pagEmployees} />
        </div>
        <div className="col-md-12 text-center">
          <EmployeePagination pages={pages} getLi={this.updatePageNo} />
        </div>
      </React.Fragment>
    );
  }
}

export default Employee;
