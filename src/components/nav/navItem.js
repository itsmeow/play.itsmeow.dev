import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
import PropTypes from "prop-types"
import { FaExternalLinkAlt } from "react-icons/fa"

const NavItem = ({ to, eventKey, external, children }) => {
  return (
    <Nav.Item>
      {external ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="link-no-style"
        >
          <Nav.Link as="span" eventKey={eventKey}>
            {children}
            <span style={{ marginLeft: "5px" }}>
              <FaExternalLinkAlt />
            </span>
          </Nav.Link>
        </a>
      ) : (
        <Link to={to} className="link-no-style">
          <Nav.Link as="span" eventKey={eventKey}>
            {children}
          </Nav.Link>
        </Link>
      )}
    </Nav.Item>
  )
}

NavItem.propTypes = {
  to: PropTypes.string,
  eventKey: PropTypes.string,
  external: PropTypes.bool,
}

NavItem.defaultProps = {
  external: false,
}

export default NavItem
