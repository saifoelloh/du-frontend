import React from 'react';
import {Col, Container, Row} from 'reactstrap';

export default class Place extends React.Component {
  render() {
    return (
      <Row className="mx-0 w-100" style={{height: '90vh'}}>
        <Col md="8" className="bg-primary p-md-3">
          <div className="bg-secondary p-md-5 w-50">
            <h3>Tempat Kegiatan</h3>
            <p>
              We are having trouble restoring your last browsing session. Select
              Restore Session to try again.
            </p>
          </div>
        </Col>
        <Col
          md="4"
          className="bg-info d-flex flex-column justify-content-center align-items-center text-center">
          <h1>
            <strong>Pendaftaran</strong>
          </h1>
          <div className="bg-secondary px-md-3 py-md-2 rounded">
            <h3 className="m-0 text-white">
              <strong>Rp. 30.000,-</strong>
            </h3>
          </div>
          <div className="my-md-3 w-75">
            <p>
              note:
              <br />
              We are having trouble restoring your last browsing session. Select
              Restore Session to try again.
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
