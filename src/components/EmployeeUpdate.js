import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

/**
 * Component for updating a new employee.
 *
 * @returns {JSX.Element} The employee add form component.
 */

function EmployeePage() {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: '',
    code: '',
    profession: '',
    color: '',
    city: '',
    branch: '',
    assigned: false,
  });

  useEffect(() => {
    fetch(`http://localhost:8080/${id}`)
      .then(response => response.json())
      .then(data => {
        setEmployee(data);
      });
  }, [id]);

  /**
   * Handles changes to form input fields.
   *
   * @param {Event} e The input change event.
   */

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value,
    }));
    // clear error message when user starts typing again
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  /**
   * Handles form submission.
   *
   * @param {Event} e The form submit event.
   */

  const handleSubmit = e => {
    e.preventDefault();
    const formErrors = {};
    Object.keys(employee).forEach(key => {
      if (key !== 'assigned' && !employee[key]) {
        formErrors[key] = 'This field is required.';
      }
    });

    // check if there are any errors
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    fetch(`http://localhost:8080/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    }).then(() => {
        navigate('/');
    });
  };

/**
 * Renders a form for updating a new employee.
 *
 * Displays form input fields for the employee's name, code, profession, color, city, and branch.
 * Also includes a checkbox for indicating whether the employee is assigned, as well as a submit
 * button and a cancel button for returning to the employee list page.
 *
 * @returns {JSX.Element} The employee update form component.
 */

  return (
    <div className="container">
      <h2 className="my-4">Update Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formCode">
          <Form.Label className="mt-3">Code</Form.Label>
          <Form.Control
            type="text"
            name="code"
            value={employee.code}
            onChange={handleChange}
          />
          {errors.code && (
            <Form.Text className="text-danger">{errors.code}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formProfession">
          <Form.Label className="mt-3">Profession</Form.Label>
          <Form.Control
            type="text"
            name="profession"
            value={employee.profession}
            onChange={handleChange}
          />
          {errors.profession && (
            <Form.Text className="text-danger">{errors.profession}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formColor">
          <Form.Label className="mt-3">Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={employee.color}
            onChange={handleChange}
          />
          {errors.color && (
            <Form.Text className="text-danger">{errors.color}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label className="mt-3">City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={employee.city}
            onChange={handleChange}
          />
          {errors.city && (
            <Form.Text className="text-danger">{errors.city}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formBranch">
          <Form.Label className="mt-3">Branch</Form.Label>
          <Form.Control
            type="text"
            name="branch"
            value={employee.branch}
            onChange={handleChange}
          />
          {errors.branch && (
            <Form.Text className="text-danger">{errors.branch}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formAssigned">
          <Form.Check
            type="checkbox"
            label="Assigned"
            name="assigned"
            className="mt-3"
            checked={employee.assigned}
            onChange={e =>
              setEmployee(prevEmployee => ({
                ...prevEmployee,
                assigned: e.target.checked,
              }))
            }
          />
        </Form.Group>
        
        {/* Submit and cancel buttons */}
        <div className="d-flex justify-content-between">
            <Button className="mt-3" variant="primary" type="submit">
            Submit
            </Button>
            <Button
            variant="secondary"
            onClick={() => {
                navigate('/');
            }}
            className="ml-2 mt-3"
            >
            Cancel
            </Button>
        </div>
      </Form>
    </div>
  );
}

export default EmployeePage;
