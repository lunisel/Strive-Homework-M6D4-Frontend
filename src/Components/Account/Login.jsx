import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState({
    mail: null,
    password: null,
  });

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your e-mail here..."
            value={user.mail}
            onChange={(e) =>
              setUser({
                ...user,
                mail: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password here..."
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};
