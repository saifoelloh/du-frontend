import React from 'react';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';

import carBackground from '../../asset/image/carousel-background.png';
import udin from '../../asset/image/udin.jpg';

export default class Tentor extends React.Component {
  state = {
    activeIndex: 0,
    items: [
      {
        name: 'Moh. Saifoelloh Noor',
        kelas: 'Web Dasar',
        warna: 'primary',
        image: udin,
        desc:
          'The tradeoff is that these tools are preconfigured to work in a specific way. If your project needs more customization, you can "eject" and customize it, but then you will need to maintain this configuration.',
      },
      {
        name: 'Muh. Izza Lutfi',
        kelas: 'Web Lanjut',
        warna: 'warning',
        image: udin,
        desc:
          'The tradeoff is that these tools are preconfigured to work in a specific way. If your project needs more customization, you can "eject" and customize it, but then you will need to maintain this configuration.',
      },
      {
        name: 'Moh. Farchan Ardiatama',
        kelas: 'Android',
        warna: 'success',
        image: udin,
        desc:
          'The tradeoff is that these tools are preconfigured to work in a specific way. If your project needs more customization, you can "eject" and customize it, but then you will need to maintain this configuration.',
      },
      {
        name: 'Restu Indera D',
        kelas: 'Jaringan',
        warna: 'info',
        image: udin,
        desc:
          'The tradeoff is that these tools are preconfigured to work in a specific way. If your project needs more customization, you can "eject" and customize it, but then you will need to maintain this configuration.',
      },
      {
        name: 'Alfin Maghfiroh',
        kelas: 'Game',
        warna: 'light',
        image: udin,
        desc:
          'The tradeoff is that these tools are preconfigured to work in a specific way. If your project needs more customization, you can "eject" and customize it, but then you will need to maintain this configuration.',
      },
    ],
  };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex,
    });
  };

  prev = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex,
    });
  };

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Dengan Siapa Kita Belajar ?</h1>
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}>
          <CarouselIndicators
            items={this.state.items}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.goToIndex}
          />
          {this.state.items.map((item, key) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={key}>
                <img src={carBackground} className="d-block w-100" alt="" />
                <CarouselCaption
                  captionText={item.desc}
                  captionHeader={item.name}
                />
              </CarouselItem>
            );
          })}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.prev}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}
