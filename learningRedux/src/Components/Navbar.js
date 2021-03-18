import React, { useState } from "react";
// import Headroom from "react-headroom";
import Sticky from 'react-stickynode';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
 
} from "reactstrap"
import style from "./style.scss"
import ProgressBar from "react-scroll-progress-bar";
// import Headroom from "react-headroom";

function Example(){ 
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <>
        
        <Sticky style={{zIndex:"initial"}}>
        <ProgressBar bgcolor={style.mycolor} />
        </Sticky>
        
        

          <Navbar color='dark' dark expand='md'>
            <NavbarBrand href='/' style={{"color": style.mycolor }}>reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className='me-auto' navbar>
                <NavItem>
                  <NavLink href='/components/'>Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='https://github.com/josephaw1022' target="_blank">
                    GitHub
                  </NavLink>
                </NavItem>
                
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
          

    </>
  );
};

export default Example;
