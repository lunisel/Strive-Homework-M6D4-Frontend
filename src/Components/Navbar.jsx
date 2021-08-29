import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Cup, Cart4 } from "react-bootstrap-icons";
import UserPhoto from "./../assets/user.png";

const Navbar = ({ history, location }) => {
  return (
    <div className="nav-container">
      <Container className="nav-items-cont">
        <Row className="w-100 justify-content-between">
          <Col xs={5} md={2}>
            <Link to="/" className="home-logo">
              LOGO
            </Link>
          </Col>

          <Col md={7} className="d-none d-md-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                history.push("/search?" + e.target.value.toLowerCase());
                if (e.target.value === "") {
                  history.push("/");
                }
              }}
            ></Form.Control>
          </Col>

          <Col
            xs={7}
            md={3}
            className="d-flex align-items-center justify-content-end"
          >
            <div class="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle p-0"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Cup
                  viewBox="0 0 16 16"
                  width={30}
                  height={30}
                  fill={"#f2c879"}
                  className="cup"
                />
              </button>
              <div className="dropdown-menu dropdown-menu">
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => history.push("/categories/strong")}
                >
                  Strong
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => history.push("/categories/medium")}
                >
                  Medium
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => history.push("/categories/light")}
                >
                  Light
                </button>
              </div>
            </div>

            <img
              src={UserPhoto}
              alt="user"
              className="user-img mx-3"
              onClick={() => history.push("/account")}
            />
            <Cart4
              viewBox="0 0 16 16"
              width={30}
              height={30}
              fill={"#f2c879"}
              onClick={() => history.push("/cart")}
              className="cart"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Navbar);
