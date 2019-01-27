import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

function ModalDetail(props) {
  console.log(props);
  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader>Data User ke-{props.data._id}</ModalHeader>
      <ModalBody>
        <Container>
          <Form>
            <FormGroup row disabled>
              <Label md="3">Nama</Label>
              <Col md="9">
                <Input
                  type="text"
                  name="nama"
                  value={props.data.nama}
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row disabled>
              <Label md="3">Email</Label>
              <Col md="9">
                <Input
                  type="email"
                  name="email"
                  value={props.data.email}
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row disabled>
              <Label md="3">Instansi</Label>
              <Col md="9">
                <Input
                  type="text"
                  name="instansi"
                  value={props.data.instansi}
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row disabled>
              <Label md="3">Kelas</Label>
              <Col md="9">
                <Input
                  type="select"
                  name="kelas"
                  value={props.data.instansi}
                  disabled>
                  {props.daftar_kelas.map((datum, key) => {
                    return (
                      <option key={key} value={key}>
                        {datum}
                      </option>
                    );
                  })}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row disabled>
              <Label md="3">No Telp</Label>
              <Col md="9">
                <Input
                  type="text"
                  name="telp"
                  value={props.data.telp}
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row disabled>
              <Label md="3">Telegram</Label>
              <Col md="9">
                <Input
                  type="text"
                  name="id_tele"
                  value={props.data.id_tele}
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row disabled>
              <Label md="3">Bukti</Label>
              <Col md="9">
                <img
                  src={`https://doscomdu.herokuapp.com/public/${
                    props.data.bukti
                  }`}
                  alt={props.data.nama}
                  className="img-thumbnail"
                />
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.toggle} color="warning">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalDetail;
