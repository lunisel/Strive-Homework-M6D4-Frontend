import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Loading from "../Loading";
import SideNav from "./SideNav";
import SingleTea from "./SingleTea";

class FetchAllTeas extends Component {
  state = {
    teas: null,
    isLoading: false,
  };
  componentDidMount = async () => {
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      const response = await fetch(`http://localhost:3001/products`);
      const data = await response.json();
      this.setState({
        teas: data,
        isLoading: false,
      });
      console.log(this.state.teas);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Row>
        <Col md={2} className="p-0">
          <SideNav />
        </Col>
        <Col xs={12} md={10} className="p-0 teas-container px-2">
          <Row>
            {this.state.isLoading && <Loading />}
            {this.state.teas &&
              this.state.teas.map((tea) => (
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
  }
}

export default FetchAllTeas;
