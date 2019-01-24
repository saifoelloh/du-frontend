import React from 'react';
import {Col, Container, Row} from 'reactstrap';

import udin from '../../asset/image/sports.jpg';

export default class Contact extends React.Component {
  state = {
    data: [
      {
        name: 'Mas Adin',
        image: udin,
        telegram: '@siadin',
        whatsapp: '01751075',
      },
      {
        name: 'Mbak Car',
        image: udin,
        telegram: '@meime',
        whatsapp: '01751075',
      },
    ],
  };
  render() {
    return (
      <Row className="mx-0 bg-secondary p-md-5 text-center">
        <Col md="8">
          <h1 className="text-white">Kontak</h1>
          <Row>
            {this.state.data.map((item, key) => {
              return (
                <Col key={key}>
                  <Container>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle border border-white-5"
                      height="130"
                    />
                    <div className="pt-md-5">
                      <h3>{item.name}</h3>
                      <p>
                        <strong>ID Telegram : </strong>
                        {item.telegram}
                        <br />
                        <strong>Whatsapp : </strong>
                        {item.whatsapp}
                      </p>
                    </div>
                  </Container>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col
          md="4"
          className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 text-white">
            Terima
            <br />
            Kasih
          </h1>
        </Col>
      </Row>
    );
  }
}
