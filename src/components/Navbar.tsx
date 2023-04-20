import {  Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext";


export function Navbar() {
  const {openCart , cartQuantity} = useShoppingCart();
  return (
    <NavbarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
        <button className="btn btn-primary" onClick={openCart}>
          Cart
          <small style={{ position: "absolute",bottom:"0",backgroundColor:"red",color:"white",fontWeight:"bold",borderRadius:"50%",padding:"0px 6px" }}>{cartQuantity}</small>
        </button>
        )}
      </Container>

    </NavbarBS>
  )
}