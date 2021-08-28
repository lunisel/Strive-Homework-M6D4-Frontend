import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Loading from "../Loading";
import SingleTea from "../Home/SingleTea";

class FetchFilteredTeas extends Component {
  state = {
    teas: null,
    isLoading: false,
    query: null,
  };

  Query = () => {
    this.setState({
      ...this.state,
      query: this.props.location.search,
    });
  };

  componentDidUpdate = async () => {
    if (this.state.query !== this.props.location.search) {
      this.Query();
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/products?description=${this.state.query}`
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
                <SingleTea name={tea.name} price={tea.price} />
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}

export default withRouter(FetchFilteredTeas);
