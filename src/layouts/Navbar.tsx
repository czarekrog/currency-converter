import { NavLink } from "react-router-dom";
import { StyledNavbar } from "../styles/NavbarStyles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink end to="/">
        Home
      </NavLink>
      <NavLink to="/results">Results</NavLink>
    </StyledNavbar>
  );
};
