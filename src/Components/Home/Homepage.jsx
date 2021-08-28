/* import { useState } from "react"; */
import { Container } from "react-bootstrap";
import FetchAllTeas from "./FetchAllTeas";
import SideNav from "./SideNav";

const Homepage = () => {
  /*   const [fileInput, setFileInput] = useState(""); */

  /*   const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  }; */
  return (
    <div className="homepage-all">
      <SideNav />
      <Container className="home-cont">
        <div className="tea-cont pl-5">Hello</div>
        <FetchAllTeas />
        {/*  <Form.Control
        type="file"
        value={fileInput}
        onChange={handleFileInputChange}
      /> */}
      </Container>
    </div>
  );
};

export default Homepage;
