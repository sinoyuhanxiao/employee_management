import React from 'react';
import styled, { css } from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Renders a navigation bar with links to home, employee list, and add employee pages, as well as a user name.
 *
 * Uses the `react-bootstrap/Navbar` and `react-bootstrap/Nav` components to create a dark-themed navigation
 * bar. The bar includes a title, links to the home page and the add employee page, and a user name
 * displayed in the top right corner.
 *
 * The component takes two props, `title` and `user`, which are used to customize the text displayed in the
 * navigation bar. `title` is used as the title of the logo or brand in the navigation bar, while `user` is
 * displayed next to the "User:" label in the top right corner.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title text for the navigation bar.
 * @param {string} props.user - The name of the user to display in the navigation bar.
 * @returns {JSX.Element} The navigation bar component.
 */

const navBarStyles = css`
  font-size: 2em;
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  ${navBarStyles}
`;

const StyledNavbarText = styled(Navbar.Text)`
  font-size: 1.3em;
  padding-right: 20px;
`;

const NavBar = ({ title, user }) => (
  <Navbar bg="dark" variant="dark">
    <StyledNavbarBrand href="/">{title}</StyledNavbarBrand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Add">Add Employee</Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <StyledNavbarText>
        User: <a href="#login">{user}</a>
      </StyledNavbarText>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
