import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import NavItem from "./navItem.js"
import NavDropdownItem from "./navDropdownItem.js"
import NavDropdown from "./navDropdown.js"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <Navbar sticky="top" variant="dark" expand="md" id="site-navbar">
      <h1 className="title">play.itsmeow.dev</h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          fill
          className="mr-auto w-100"
          activeKey={pageInfo && pageInfo.pageName}
        >
          <NavItem to="/" eventKey="index">
            Home
          </NavItem>
          <NavItem to="https://store.itsmeow.dev/" external={true}>
            Donate
          </NavItem>
          <NavItem to="https://itsmeow.dev/" external={true}>
            Owner
          </NavItem>
          <NavDropdown text="Servers">
            <NavDropdownItem to="/survival" eventKey="survival">
              Survival
            </NavDropdownItem>
            <NavDropdownItem to="/creative" eventKey="creative">
              Creative
            </NavDropdownItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
