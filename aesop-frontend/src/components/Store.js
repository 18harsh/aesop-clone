import React from 'react'
import { Button } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Store.css'

const responsiveimg = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  const carouselItems = ["Aesop K11 Musea",  "Aesop New Town Plaza", "Aesop Hollywood Road"];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
      <div className="slide">
          <div>
            <button
            className={  active ? "store__sliderActive" : "store__sliderInactive"}
            onClick={() => onClick()}
            >
            {/* {React.Children.toArray(carouselItems)[index]} */}
              </button>
          </div>
                {
                active &&
              <p>
              {React.Children.toArray(carouselItems)[index]}
              </p>
              }
    </div>
  );
};

function Store({name,images,body,button,title}) {
    return (
        <div className="store">
            <div className="store__content">
                {name &&
                <div>
                    <p className="store__contentDay">{name}</p>
                </div>
                }
                <div>
                    <p className="store__contentHeader">{title}</p>
                </div>
                
                <div>
                    <p className="store__contentBody">
                        {body}
                    </p>
                </div>
                <div   className="store__contentbutton">
                    <Button>
                        {button}
                        <ArrowForwardIcon style={{marginLeft: "10px"}}/>
                    </Button>
                </div>
            </div>
                <Carousel responsive={responsiveimg}
                    className="store__img"
                    showDots
                    customDot={<CustomDot />}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                >
                    <div className="store__imgDiv">
                        <img src={images[0]} alt="" />
                    </div>
                    <div className="store__imgDiv">
                        <img src={images[1]} alt="" />
                    </div>
                    <div className="store__imgDiv">
                        <img src={images[2]} alt="" />
                    </div>
                </Carousel>
        </div>
    )
}

export default Store
