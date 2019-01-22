import React from 'react';

export default class Message extends React.Component {
  state = {
    nama: 'hello',
  };
  render() {
    return (
      <Modal>
        <ModalHeader>{this.props.data.title}</ModalHeader>
        <ModalBody>{this.props.data.desc}</ModalBody>
        <ModalFooter />
      </Modal>
    );
  }
}
