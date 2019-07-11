import React from 'react';
import {
  Col, Card, CardBody, Container, Row,
} from 'reactstrap';
import ExampleCard from './components/ExampleCard';
import Calc from './components/Calc';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={6}>
        <Card>
          <CardBody>
            <Calc />
          </CardBody>
        </Card>
      </Col>
      <Col md={6}>
        <ExampleCard />
      </Col>
    </Row>
  </Container>
);

export default ExamplePage;
