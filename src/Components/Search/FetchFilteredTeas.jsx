import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import SingleTea from "../Home/SingleTea";
import SideNav from "../Home/SideNav";

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
    <Row>
      <Col md={2} className="p-0">
        <SideNav />
      </Col>
      <Col xs={12} md={10} className="p-0 teas-container px-2">
        <Row>
          {teas &&
            teas.map((tea) => (
              <Col xs={12} md={4} lg={3} key={tea._id}>
                <SingleTea
                  name={tea.name}
                  price={tea.price}
                  id={tea._id}
                  image_url={tea.image_url}
                />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default withRouter(FetchFilteredTeas);
