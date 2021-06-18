import React from 'react'
import './Products.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2
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
  const carouselItems = ["", "", "","", "", ""];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    
        <button
            className={  active ? "sliderActive" : "sliderInactive"}
            onClick={() => onClick()}
        >
            {React.Children.toArray(carouselItems)[index]}
        </button>
  );
};





function Products({prodLists}) {
    return (
        <Carousel responsive={responsive}
            className="products"
            draggable={true}
            showDots
            customDot={<CustomDot />}
      >
        {
          prodLists.map((prod) => (
            <Product
                key={prod.key}
                image={prod.image}
                name={ prod.name}
                title ={prod.title}
            />
          ))
        }
        </Carousel>
    )
}

export default Products
