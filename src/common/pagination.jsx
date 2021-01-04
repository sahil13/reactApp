import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { totalRecords, noOfRecordsOnPage:pageSize,currPage } = this.props;

    const noOfPages = Math.ceil(totalRecords / pageSize);
    const noOfLi = _.range(1, noOfPages + 1);
    if (noOfPages <= 1) return null;
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {noOfLi.map(pageNo => (
              <li className={currPage===pageNo ? "page-item active" : 'page-item' } key={pageNo}>
                <a
                 className="page-link"
                  onClick={() => this.props.onpagination(pageNo)}
                >
                  {pageNo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
