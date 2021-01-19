import React from 'react'
import { Nav, Navbar, NavDropdown, Col  } from 'react-bootstrap'
import '../CSS/StyleSheet.css'

const userSettings = <i className='icon-settings'> Account</i>;
const userProfile = <i className='icon-user'> Profile</i>;


const Heading = () => {

    return(
      <React.Fragment>
        <Navbar bg="white" expand="lg" className="shadow" fixed="top">
          <div style={{ fontSize: '1.8em', color: 'blue', fontFamily: 'Lucida Sans' }}><span className="icon-cloud"> KEALUCK ERM</span> </div>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title={userSettings} id="basic-nav-dropdown">
                <Col className="shadow border">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </Col>
              </NavDropdown>
              <NavDropdown title={userProfile} id="basic-nav-dropdown">
                <Col className="shadow border">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </Col>
              </NavDropdown>
              <Nav.Link href="#"><i className='icon-help'></i> Help</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </React.Fragment>
    )
}
export default Heading;