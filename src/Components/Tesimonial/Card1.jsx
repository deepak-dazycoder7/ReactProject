import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';

const Card1 = ({ item }) => {
  return (
    <Card style={{ borderRadius: '20px', paddingTop: '10px', minHeight: '218px',  }}>
      <CardBody>
      <Row>
          <Col xs="12" md="12" className="d-flex align-items-center">
            <CardImg
              top
              width="80px"
              src={item.src}
              alt={item.altText}
              style={{
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                margin: '10px 30px ',
              }}
            />
            <div className="d-flex flex-column">
            <CardTitle tag='h6'>{item.name}</CardTitle>
            <CardSubtitle tag="h3" className="mb-2">
              <span style={{ color: 'gold' }}>★★★★★</span>
            </CardSubtitle>
            </div>
          </Col>
          <Col xs="12" md="12">
            <CardText>{item.text}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Card1;
