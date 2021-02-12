import React from "react";
import { Form, Button } from "react-bootstrap";
const CreateInput = ({ city, setCity, fetchCityWeather }) => {
  const [error, setError] = React.useState("");
  const changeText = (event) => {
    setCity(event.target.value);
    console.log(city);
  };
  const handleOnClick = () => {
    if (!city) {
      setError("Enter city name");
    }
    else
    {
        setError("");
        fetchCityWeather();

    }
  };

  return (
    <Form className="p-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city"
          onInput={changeText}
        />
        <p className="text-danger">{error}</p>
      </Form.Group>

      <Button variant="primary" onClick={handleOnClick}>
        Submit
      </Button>
    </Form>
  );
};

export default CreateInput;
