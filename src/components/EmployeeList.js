import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTable } from 'react-table';
import styled from 'styled-components';
import EmployeePage from './EmployeeUpdate';

const StyledTable = styled(BootstrapTable)`

  thead {
    background-color: #434a52;
    color: white;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .btn-update {
    background-color: #247596;
    color: white;
  }

  .btn-delete {
    background-color: #dc3545;
    color: white;
    margin-left: 5px;
  }
`;

/**
 * Renders a table of employees and allows users to update or delete employee records.
 *
 * Uses the `useEffect` hook to fetch a list of employees from a REST API, and displays the list in a
 * table using the `react-bootstrap/Table` component. The table includes columns for the employee's
 * name, code, profession, color, city, branch, and whether they are assigned. For each employee row,
 * the table also includes buttons for updating or deleting the employee record.
 *
 * The update button takes the user to the `EmployeeUpdate` page for the selected employee, while the
 * delete button prompts the user to confirm the deletion and then sends a DELETE request to the API.
 * If the request is successful, the deleted employee is removed from the state and the table is updated.
 *
 * The component also includes a button for adding a new employee, which navigates to the `EmployeeAdd`
 * page when clicked.
 *
 * @returns {JSX.Element} The employee list component.
 */

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedEmployee, setSelectedEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Code',
        accessor: 'code',
      },
      {
        Header: 'Profession',
        accessor: 'profession',
      },
      {
        Header: 'Color',
        accessor: 'color',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'Branch',
        accessor: 'branch',
      },
      {
        Header: 'Assigned',
        accessor: 'assigned',
        Cell: ({ value }) => (value ? 'Yes' : 'No'),
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ row }) => (
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                // setSelectedEmployee(row.original);
                // setModalIsOpen(true);
                const id = row.original.id;
                window.location.href = `http://localhost:3000/employees/${id}`;
              }}
            >
              Update
            </button>
            <button
              className="btn btn-delete"
              onClick={() => {
                const id = row.original.id;
                const confirmed = window.confirm("Are you sure you want to delete this employee?");
                if (confirmed) {
                  fetch(`http://localhost:8080/${id}`, { method: "DELETE" })
                    .then(response => {
                      if (response.ok) {
                        // Remove the deleted employee from the state
                        setEmployees(prevEmployees =>
                          prevEmployees.filter(employee => employee.id !== id)
                        );
                      } else {
                        throw new Error("Failed to delete employee");
                      }
                    })
                    .catch(error => {
                      console.error(error);
                      alert("Failed to delete employee");
                    });
                }
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({
    columns,
    data: Array.isArray(employees) ? employees : []
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="container">        
      <div className="d-flex justify-content-end mt-3 mb-3">
        <button
          className="btn btn-success"
          onClick={() => {
            navigate('/Add');
          }}
        >
          Add Employee
        </button>
      </div>
      <StyledTable {...getTableProps()} striped bordered hover>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
      {modalIsOpen && (
        <EmployeePage
          // employee={selectedEmployee}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </div>
  );
}

export default EmployeeList;
