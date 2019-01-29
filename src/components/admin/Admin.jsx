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
    admin: [],
    data: [],
    daftar_kelas: ['Web Dasar', 'Web Lanjut', 'Android', 'Jaringan', 'Game'],
    key: 0,
  };

  getData = () => {
    axios
      .all([
        axios.get('https://doscomdu.herokuapp.com/api/user'),
        axios.get('https://doscomdu.herokuapp.com/api/daftar'),
        axios.get('https://doscomdu.herokuapp.com/api/kelas'),
      ])
      .then(
        axios.spread((admin, users, classes) => {
          console.log(admin.data, users.data, classes.data);
        }),
      )
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
        <h1>Hello</h1>
      </div>
    );
  }
}
