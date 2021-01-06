import React from "react";

const EmployeePagination = props => {
  const { pages: noOfPages,getLi } = props;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {noOfPages.map(item => {
          return (
            <li key={item} className="page-item">
              <a className="page-link" onClick={()=>getLi(item)}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default EmployeePagination;
