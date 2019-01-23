import React from 'react';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';

class Review extends React.Component {
  state = {
    activeIndex: 0,
    items: [
      {
        name: 'Amrin kun',
        image: '../../asset/image/lightTrail.jpg',
        desc: 'hello world lorem ipsum dor amet',
      },
      {
        name: 'Amrin kun',
        image: '../../asset/image/lightTrail.jpg',
        desc: 'hello world lorem ipsum dor amet',
      },
      {
        name: 'Amrin kun',
        image: '../../asset/image/lightTrail.jpg',
        desc: 'hello world lorem ipsum dor amet',
      },
      {
        name: 'Amrin kun',
        image: '../../asset/image/lightTrail.jpg',
        desc: 'hello world lorem ipsum dor amet',
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
    let nextIndex =
      this.state.activeIndex === this.state.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  };

  previous = () => {
    if (this.animating) return;
    let nextIndex =
      this.state.activeIndex === 0
        ? this.state.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  };

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({activeIndex: newIndex});
  };

  render() {
    const slides = this.state.items.map((item, key) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={key}>
          <img
            src="../../asset/image/lightTrail.jpg"
            alt={item.title}
            className="w-100"
          />
          <CarouselCaption captionText={item.desc} captionHeader={item.title} />
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators
          items={this.state.items}
          activeIndex={this.state.activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Review;
