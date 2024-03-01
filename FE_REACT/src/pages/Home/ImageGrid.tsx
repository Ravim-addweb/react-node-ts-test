import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface ImageGridProps {
  images: { media: { m: string }; title: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  console.log(images);
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        {images.map((image, idx: number) => (
          <Col key={idx}>
            <img src={image.media.m} alt={image.title} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default React.memo(ImageGrid);
