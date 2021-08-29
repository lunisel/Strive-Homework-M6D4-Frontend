import { Container } from "react-bootstrap";
import FetchAllTeas from "./FetchAllTeas";

const Homepage = () => {
  return (
    <div className="homepage-all">
      <Container className="home-cont">
        <FetchAllTeas />
      </Container>
    </div>
  );
};

export default Homepage;
