import Logo from "components/flickrLogo"
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Navbar() {

    return (
        <div>
            <Container className="mt-2">
                <Row>
                    <Col sm={6}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 rounded-pill"
                            aria-label="Search"
                        />
                        <Button className="rounded-pill" variant="outline-primary">Search</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar