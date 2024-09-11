import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import microderm from '../assets/website-images/microderm.jpg';
import bluelight from '../assets/website-images/blue-light.jpg';
import redlight from '../assets/website-images/red-light.jpg';
import microneedle from '../assets/website-images/microneedle.jpg';
import './FacialsComponent.scss';

const FacialsComponent = () => {

  const products = [
    {
      id: 1,
      link: '',
      imageUrl: microderm,
      title: 'Deep Cleaning with Diamond Microdermabrasion',
      description: 'Our Diamond Microdermabrasion Facial is a gentle, non-invasive exfoliating treatment that encourages new cell growth and clears clogged pores. It helps reduce acne scars and balances skin tone.',
      price: '$159',
    },
    {
      id: 2,
      link: '',
      imageUrl: microneedle,
      title: 'Microneedling',
      description: 'Our Microneedling Rejuvenation Facial reduces the appearance of scars, smooths fine lines and wrinkles. Enjoy improved skin elasticity and a smoother texture with this advanced treatment.',
      price: '$359',
    },
    {
      id: 3,
      link: '',
      imageUrl: bluelight,
      title: 'Deep Cleaning with Blue Light Therapy',
      description: 'Unwind with our Deep Cleansing Facial, which includes a calming massage and precise extractions. This treatment deeply purifies your skin, while our exclusive Zahav mask enhances your facial experience.',
      price: '$259',
    },
    {
      id: 4,
      link: '',
      imageUrl: redlight,
      title: 'Anti-Aging with Red Light',
      description: 'Our nonsurgical facelift is crafted to lift sagging skin and stimulate collagen production. This cutting-edge treatment reduces acne scars and improves blood circulation.',
      price: '$259',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides for screens under 768px
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="best-facials">
      <h2>Our Facials</h2>
      <div className="best-facials-container">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="best-facials-card">
              <Link to={product.link}>
                <div className="image-wrapper">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <hr />
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
              </Link>
            </div>
          ))}
        </Slider>
        <Link to="/collections" className="btn">
          Book Your Facial
        </Link>
      </div>
    </div>
  );
};

export default FacialsComponent;
