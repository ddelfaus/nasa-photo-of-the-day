import React from 'react';
import {Collapse, Navbar,NavbarToggler, NavbarBrand, Nav,
  NavItem,NavLink, UncontrolledDropdown, DropdownToggle,  DropdownMenu,
  DropdownItem } from 'reactstrap';
 

  
  
  
  export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
             
            <NavbarBrand href="/"><img className="logo" src ='https://seeklogo.com/images/N/NASA-logo-9411797223-seeklogo.com.png' alt ="NASA"/></NavbarBrand>
          
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">About NASA</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Store</NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>

                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }