# Employee Management System

This is a simple CRUD web application for managing employees. It allows users to add new employees, view a list of all employees, update employee information, and delete employees. <br />

![em_01](https://user-images.githubusercontent.com/25097680/226251040-08d259d7-c589-40c8-9992-b0ca621d936b.PNG)

## Functionalities
**1. Add new employee** <br />
This allows the user to add a new employee to the system by filling out a form with various fields such as name, code, profession, color, city, branch, and assigned.<br /><br />
**2. Get employee list** <br />
This displays a table of all employees that have been added to the system, with each employee's information displayed in its own row.<br /><br />
**3. Update employee** <br />
This allows the user to update the information of an existing employee by clicking on the update button next to their information in the employee list. The user can then make changes to any of the employee's fields and save the changes by submitting the updated form.<br /><br />
**4. Delete employee through buttons and forms** <br />
This functionality allows the user to delete an existing employee from the system by clicking on the delete button next to Update button in the employee list. The user is prompted to confirm the deletion before the employee is permanently removed from the system.<br /><br />

## Technologies Used:
&nbsp; &nbsp; * React <br />
&nbsp; &nbsp; * REST API <br />
&nbsp; &nbsp; * Node.js <br />
&nbsp; &nbsp; * NestJS <br />
&nbsp; &nbsp; * TypeScript <br />
&nbsp; &nbsp; * SQLite <br />
&nbsp; &nbsp; * React-Table <br />
&nbsp; &nbsp; * React-Bootstrap <br />
&nbsp; &nbsp; * Cors <br />
&nbsp; &nbsp; * Styled-components <br />

## Running the Application:

To run this application, follow these steps:

1. Navigate to the employee_management root folder in your terminal or command prompt. <br />
2. Run npm install to install the necessary dependencies for the React app. <br />
3. Run npm start to start the React app on localhost:3000. <br />
4. In another terminal or command prompt, navigate to the employee_management/server folder. <br />
5. Run npm install to install the necessary dependencies for the server. <br />
6. Run ./node_modules/.bin/tsc --project to compile the TypeScript files according to the specified tsconfig.json. <br />
7. Run node index.js to start the server on localhost:8080. <br />

Once you've completed these steps, you should be able to access the employee management tool by visiting localhost:3000 in your web browser. From there, you can add, update, and delete employees as needed.
