import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

interface FormProps {
  onSearch: (tags: string) => void;
}

const FormComponent: React.FC<FormProps> = ({ onSearch }) => {
  const [tags, setTags] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(tags);
  };

  return (
    <div className="sticky-top bg-white">
      <Container>
        <Form onSubmit={handleSearch}>
          <Row xs={2} className="g-2 mb-4 mt-4">
            <Col>
              <Form.Group controlId="formBasicSearch">
                <Form.Control
                  type="search"
                  placeholder="Search for images"
                  onChange={(e) => setTags(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default FormComponent;
