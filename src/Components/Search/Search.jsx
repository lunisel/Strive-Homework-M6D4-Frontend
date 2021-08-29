/* import { useState } from "react"; */
import { Container } from "react-bootstrap";
import SideNav from "../Home/SideNav";
import FetchFilteredTeas from "./FetchFilteredTeas";

const Search = () => {
  /*   const [fileInput, setFileInput] = useState(""); */

  /*   const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  }; */
  return (
    <div className="homepage-all">
      <SideNav />
      <Container className="home-cont">
        <div className="tea-cont">
          <FetchFilteredTeas />
        </div>

        {/*  <Form.Control
        type="file"
        value={fileInput}
        onChange={handleFileInputChange}
      /> */}
      </Container>
    </div>
  );
};

export default Search;
