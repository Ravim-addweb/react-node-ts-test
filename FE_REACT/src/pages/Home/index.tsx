import React from "react";
import ImageGrid from "components/ImageGrid";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mb-5">
            <Row>
                <Col>
                    <ImageGrid/>
                </Col>
            </Row>
        </Container>
    );
};
  
export default Home;