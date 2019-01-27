import * as axios from 'axios';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Button, Container} from 'reactstrap';
import * as swal from 'sweetalert';

import ListUser from './ListUser.jsx';
import ModalDetail from './ModalDetail.jsx';
import Navigation from './Navigation.jsx';
import Profile from './Profile.jsx';

// const columnShape = [
//   {
//     Header: 'No',
//     accessor: 'id',
//   },
//   {
//     Header: 'Nama',
//     accessor: 'nama',
//   },
//   {
//     Header: 'Instansi',
//     accessor: 'instansi',
//   },
//   {
//     Header: 'Action',
//     accessor: (d) => (
//       <ButtonGroup>
//         <Button
//           onClick={() => {
//             this.handleShow(d._id);
//           }}
//           color="primary">
//           Show
//         </Button>
//         <Button
//           onClick={() => {
//             this.handleDelete(d._id);
//           }}
//           color="danger">
//           Delete
//         </Button>
//       </ButtonGroup>
//     ),
//   },
// ];

export default class Admin extends React.Component {
  state = {
    isOpen: false,
    data: [
      {
        _id: 1,
        nama: 'ini gue',
        email: 'ini@gue.com',
        instansi: 'Sekolah Gue',
        kelas: 0,
        telp: '01841',
        id_tele: '@ini_gue',
        bukti: 0,
        status: 0,
      },
    ],
    detail: [],
    daftar_kelas: ['Web Dasar', 'Web Lanjut', 'Android', 'Jaringan', 'Game'],
    key: 0,
  };

  getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        this.setState({
          data: res,
        });
      })
      .catch((err) => console.error(err.response));
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleShow = (id) => {
    axios
      .get(`https://doscomdu.herokuapp.com/api/daftar/${id}`)
      .then((res) => {
        this.setState({
          detail: res.data,
        });
        this.toggle();
      })
      .catch((err) => console.error(err.response));
  };

  handleChange = (id) => {
    axios
      .get(`https://doscomdu.herokuapp.com/api/daftar/${id}`)
      .then((res) => {
        console.log(res.data);
        swal({
          icon: 'success',
          title: 'Berhasil',
          text: `User ke-${id} berhasil di-ubah`,
        });
      })
      .catch((err) => console.error(err.response));
  };

  handleDelete = (id) => {
    axios
      .delete(`https://doscomdu.herokuapp.com/api/daftar/${id}`)
      .then((res) => {
        swal({
          icon: 'success',
          title: 'Success',
          text: `Data ke-${id} berhasil dihapus`,
        });
      })
      .catch((err) => console.error(err.response));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path={`/admin/${this.state.admin._id}`} component={Profile} />
          <Route path={`/admin/${this.state.admin._id}`} component={ListUser} />
        </Switch>
        <Container className="d-flex justify-content-center align-items-center">
          <Button onClick={this.toggle}>Coba</Button>
          <ModalDetail
            key={this.state.key}
            isOpen={this.state.isOpen}
            toggle={this.toggle}
            data={this.state.data[0]}
            daftar_kelas={this.state.daftar_kelas}
          />
        </Container>
      </div>
    );
  }
}
