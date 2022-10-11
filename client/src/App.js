import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/index.scss";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import logo from "./assets/images/LogoTT.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharList from "./components/CharList";
import CharForm from "./components/CharForm";
import EditChar from "./components/EditChar";
import CharDetail from "./components/CharDetail";

function App() {
  return (
    <div className="App">
      <Navbar color="dark" expand="md" fixed="top" dark container>
        <NavbarBrand>
          <img src={logo} alt="logo" className="navbar__img_size App-logo" />
        </NavbarBrand>
        <div className="navbar__nav__flex-sb">
          <div>
            <Nav navbar className="col-5">
              <NavItem>
                <Button href="/" className="m-5 btn-lg btn-warning">
                  Home
                </Button>
              </NavItem>
              <NavItem>
                <Button href="/new" className="m-5 btn-lg btn-warning">
                  Add
                </Button>
              </NavItem>
            </Nav>
          </div>
        </div>
      </Navbar>
      <br />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CharList />} />
            <Route path="/new" element={<CharForm />} />
            <Route path="/chars/:id/edit" element={<EditChar />} />
            <Route path="/:id" element={<CharDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
