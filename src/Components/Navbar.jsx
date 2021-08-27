import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { CaretDownFill } from "react-bootstrap-icons";

const Navbar = (props) => {
  console.log(props);
  return (
    <div className="nav-container">
      <Container className="nav-items-cont">
        <Row className="w-100">
          <Col xs={8} md={4}>
            <Link to="/" className="home-logo">
              LOGO
            </Link>
          </Col>

          <Col md={4} className="d-none d-md-flex align-items-center">
            <Form.Control type="text" placeholder="Search..."></Form.Control>
          </Col>

          <Col xs={4} md={4} className="d-flex align-items-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div class="dropdown-menu dropdown-menu">
                <button class="dropdown-item" type="button">
                  Strong
                </button>
                <button class="dropdown-item" type="button">
                  Medium
                </button>
                <button class="dropdown-item" type="button">
                  Light
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Navbar);
