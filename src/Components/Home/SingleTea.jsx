import { Col, Row } from "react-bootstrap";

const SingleTea = (prop) => {
  return (
    <div className="tea-card">
      <img
        src="https://via.placeholder.com/200"
        alt="tea"
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

export default SingleTea;
