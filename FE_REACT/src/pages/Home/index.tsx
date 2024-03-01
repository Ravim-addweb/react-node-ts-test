import React from "react";
import ImageGrid from "components/ImageGrid";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container >
            <Row>
                <Col>
                    <ImageGrid/>
                </Col>
            </Row>
        </Container>
    );
};
  
export default Home;