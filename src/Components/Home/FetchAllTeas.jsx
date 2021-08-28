import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Loading from "../Loading";
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
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + "products"
      );
      const data = await response.json();
      this.setState({
        teas: data,
        isLoading: false,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="teas-container">
        <Row>
          {this.state.isLoading && <Loading />}
          {this.state.teas &&
            this.state.teas.map((tea) => (
              <Col xs={12} md={4} lg={3}>
                <SingleTea name={tea.name} />
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}

export default FetchAllTeas;
