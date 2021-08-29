import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import SingleTea from "../Home/SingleTea";

const FetchFilteredTeas = (props) => {
  const [teas, setTeas] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${
            process.env.REACT_APP_SERVER_URL
          }/products?q=${props.location.search.substring(1)}`
        );
        const data = await response.json();
        setTeas(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [props.location.search]);

  return (
    <div className="teas-container">
      <Row>
        {teas &&
          teas.map((tea) => (
            <Col xs={12} md={4} lg={3}>
              <SingleTea name={tea.name} price={tea.price} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default withRouter(FetchFilteredTeas);
