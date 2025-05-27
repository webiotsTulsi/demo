import { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

const NavigationMenu = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = ()=>{
        setNavOpen(!navOpen);
    }
  return (
    <div className="bg-gray-600 h-screen text-white">
        <Navbar>
            {/* <NavbarBrand href="https://www.webiots.com/index.html">Webiots</NavbarBrand> */}
            {/* <NavbarToggler onClick={toggleNav}></NavbarToggler> */}
            {/* <Collapse isOpen={navOpen} navbar expand> */}
                <Nav>
                    <NavItem>
                        <NavLink href="https://www.webiots.com/about.html" className="text-white">Webiots</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.webiots.com/about.html" className="text-white">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.webiots.com/contact-us.html" className="text-white">Contact Us</NavLink>
                    </NavItem>
                </Nav>
            {/* </Collapse> */}
        </Navbar>
    </div>
    )  
};

export default NavigationMenu;