import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const SingleTea = (prop) => {
  console.log(prop.image_url);
  return (
    <div
      className="tea-card"
      onClick={() => prop.history.push(`/product/${prop.id}`)}
    >
      <img
        src={
          prop.image_url !== null
            ? `${prop.image_url}`
            : "https://via.placeholder.com/200"
        }
        alt="product"
        className="tea-img img-fluid w-100"
      />
      <Row className="tea-info">
        <Col xs={8}>
          <h4 className="tea-name">{prop.name}</h4>
        </Col>
        <Col xs={4}>
          <h5>{prop.price} $</h5>
        </Col>
      </Row>

      <button className="tea-card-btn">Add to cart!</button>
    </div>
  );
};

export default withRouter(SingleTea);
