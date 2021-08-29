import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";

const TeaDetails = (props) => {
  const [tea, setTea] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [image, setImgage] = useState(null);

  let id = props.match.params.id;

  const uploadImage = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + `/product/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: tea.name,
            description: tea.description,
            brand: tea.brand,
            ingredients: tea.ingredients,
            price: tea.price,
            categoryId: tea.categoryId,
            image_url: image,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Image uploaded !");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePosterOnChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImgage(reader.result);
  };

  if (image) {
    console.log(image);
    uploadImage();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/products/${id}`
        );
        const data = await response.json();
        setTea(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="tea-det-cont">
      <Container>
        {tea && (
          <>
            <h1>{tea.name}</h1>
            <p>{tea.description}</p>
            <p>{tea.ingredients}</p>
            <img src={tea.image_url} />
            <Form.Control
              type="file"
              onChange={handlePosterOnChange}
            ></Form.Control>
          </>
        )}
      </Container>
    </div>
  );
};

export default TeaDetails;
