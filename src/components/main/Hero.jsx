import React from 'react';
import {Button, Col, Row} from 'reactstrap';

export default class Hero extends React.Component {
  render() {
    return (
      <Row
        style={{height: '100vh'}}
        className="mx-0 hero justify-content-center align-items-center">
        <Col
          md="6"
          className="text-center d-flex flex-column justify-content-center align-items-center">
          <h1>
            <strong>DOSCOM</strong> UNIVERSITY
          </h1>
          <p>
            Adipisicing cumque saepe autem nobis necessitatibus corporis?
            Repellat nihil blanditiis deleniti molestiae assumenda velit
            Excepturi explicabo blanditiis eligendi dignissimos deleniti
            corporis autem. Alias dolore perferendis optio ab porro Minus
            perferendis!
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Button href="/register" color="primary">
                <strong>Daftar</strong> Sekarang
              </Button>
            </li>
            <li className="list-inline-item">
              <Button href="#kelas" color="success">
                <strong>Lihat</strong> Kelas
              </Button>
            </li>
          </ul>
          <p className="my-md-4" />
        </Col>
      </Row>
    );
  }
}
