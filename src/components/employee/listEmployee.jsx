import React from "react";

const ListEmployees = props => {
  const { data } = props;
  return (
    <div>
      <div>
        {data.map(emp => {
          return (
            <div key={emp.empCode} className="m-2">
              {emp.name}
              <span>
                <button
                  onClick={() => props.onDelete(emp)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListEmployees;
