import Axios from 'axios';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import * as swal from 'sweetalert';

export default class Register extends React.Component {
  state = {
    nama: null,
    email: null,
    instansi: null,
    kelas: 0,
    telp: null,
    id_tele: null,
    icon: [
      ['fab', 'html5'],
      ['fab', 'hotjar'],
      ['fab', 'android'],
      ['fas', 'server'],
      ['fas', 'gamepad'],
    ],
    nama_kelas: ['Web Dasar', 'Web Lanjut', 'Android', 'Jaringan', 'Game'],
    open: false,
    id_daftar: '',
    bukti: null,
  };

  handleChange = (e) => {
    if (e.target.name === 'bukti') {
      this.setState({
        [e.target.name]: e.target.files[0],
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = () => {
    let data = {
      nama: this.state.nama,
      email: this.state.email,
      instansi: this.state.instansi,
      kelas: this.state.kelas,
      telp: this.state.telp,
      id_tele: this.state.id_tele,
      bukti: '',
      status: 0,
    };

    Axios.post('https://doscomdu.herokuapp.com/api/daftar', data)
      .then((res) => {
        console.log(res.data);
        swal({
          icon: 'success',
          title: 'Registrasi Berhasil',
          text: 'Silahkan cek email anda untuk konfirmasi pembayaran.',
        });
      })
      .then(() => {
        window.open('https://main.google.com/', '_blank');
      })
      .catch((err) => {
        console.error(err.response);
        swal({
          icon: 'error',
          title: err.response.statusText,
          text: err.response.data.message,
        });
      });
  };

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleConfirm = () => {
    Axios.post(
      `https://doscomdu.herokuapp.com/daftar/${this.state.id_daftar}`,
      {bukti: this.state.bukti},
    )
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        swal({
          icon: 'success',
          title: 'Konfirmasi Berhasil!',
          text:
            'Selamat anda sudah resmi terdaftar pada doscom university 2019',
        });
      })
      .catch((err) => {
        console.error(err.response);
        swal({
          icon: 'error',
          title: err.response.statusText + '-' + err.response.status,
          text: err.response.data.message,
        });
      });
  };

  render() {
    return (
      <Container style={{height: '100vh'}}>
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col md="5">
            <Card>
              <CardHeader className="text-center">Registrasi</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'user']} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="nama"
                        placeholder="Nama"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'graduation-cap']} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="instansi"
                        placeholder="Instansi"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon
                            icon={this.state.icon[this.state.kelas]}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="select"
                        name="kelas"
                        onChange={this.handleChange}>
                        {this.state.nama_kelas.map((datum, key) => {
                          return (
                            <option key={key} value={key}>
                              {datum}
                            </option>
                          );
                        })}
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'phone-volume']} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="telp"
                        placeholder="Nomor Telepon"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fab', 'telegram']} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="id_tele"
                        placeholder="Id Telegram"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <Button
                    onClick={this.handleSubmit}
                    color="primary"
                    size="lg"
                    block>
                    Daftar
                  </Button>
                  <Button onClick={this.toggle} color="success" block>
                    Tekan
                  </Button>
                </Form>
              </CardBody>
              <CardFooter className="text-right">
                <Button href="/" color="link">
                  Kembali
                </Button>
                |
                <Button onClick={this.toggle} color="link">
                  Sudah Daftar ?
                </Button>
              </CardFooter>
              <Modal isOpen={this.state.open} centered={true}>
                <ModalHeader>Konfirmasi Pembayaran</ModalHeader>
                <ModalBody>
                  <Container>
                    <Form encType="multipart/form-data">
                      <FormGroup row>
                        <Label md="3">ID Daftar</Label>
                        <Col md="9">
                          <Input
                            type="text"
                            name="id_daftar"
                            onChange={this.handleChange}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label md="3">Bukti</Label>
                        <Col md="9">
                          <Input
                            type="file"
                            name="bukti"
                            onChange={this.handleChange}
                          />
                        </Col>
                      </FormGroup>
                    </Form>
                  </Container>
                </ModalBody>
                <ModalFooter>
                  <Button color="warning" onClick={this.toggle}>
                    Cancel
                  </Button>
                  <Button color="success" onClick={this.handleConfirm}>
                    Kumpul
                  </Button>
                </ModalFooter>
              </Modal>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
