// import "styles/home.scss";
import toastify from "helpers/toastify";
import ImageGrid from "components/ImageGrid";
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <ImageGrid/>
                    {/* <h1 onClick={() => toastify("Hello coders!")} className="heading">React snippet</h1> */}
                </Col>
            </Row>
        </Container>
    );
};
  
export default Home;