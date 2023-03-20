import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeUpdatePage from './components/EmployeeUpdate';
import EmployeeAddPage from './components/EmployeeAdd'
import NavBar from './components/Navbar';

/**
 * Main component of the employee management tool.
 * Renders a navigation bar and sets up routes for different pages.
 *
 * @returns {JSX.Element} The main app component.
 */

function App() {
  return (
    <Router>
      <div>
        <NavBar title="Employee Management" user="Manager" />
        <Routes>
          <Route path="/employees/:id" element={<EmployeeUpdatePage />} />
          <Route path="/Add" element={<EmployeeAddPage />} />
          <Route path="/" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

