import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from 'reactstrap';

import Daftar from '../../asset/json/Materi.json';

export default class Lesson extends React.Component {
  state = {
    active: 0,
    tombol: [0, 1, 2],
    items: [...Daftar.materi[0]],
  };

  handleLesson = (id) => {
    this.setState({
      active: id,
      items: [...Daftar.materi[id]],
    });
  };

  render() {
    return (
      <div className="text-center py-md-5 pt-sm-5 pb-sm-3">
        <Container className="pt-5">
          <h2>Materi</h2>

          <ButtonGroup className="my-md-3">
            {this.state.tombol.map((item, key) => {
              return (
                <Button
                  key={key}
                  color={this.state.active === key ? 'primary' : 'link'}
                  onClick={() => {
                    this.handleLesson(key);
                  }}>
                  Pertemuan {item + 1}
                </Button>
              );
            })}
          </ButtonGroup>

          <Card>
            <CardBody>
              <Row>
                {this.state.items.map((item, key) => {
                  console.log(item);
                  return (
                    <Col key={key} md="4" className="my-md-3">
                      <Card>
                        <CardBody className="kotak">
                          <FontAwesomeIcon
                            className="kotak-item-1 tengah"
                            icon={[`${item.icon[0]}`, `${item.icon[1]}`]}
                            size="6x"
                          />
                          <div className="kotak-item-2 d-flex flex-column justify-content-center align-items-center">
                            <h3>{item.name}</h3>
                            <p className="text-muted">{item.materi}</p>
                          </div>
                          <Container className="kotak-item-3 text-justify mt-md-3">
                            <p>{item.desc}</p>
                          </Container>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}
