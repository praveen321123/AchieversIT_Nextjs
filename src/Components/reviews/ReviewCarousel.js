import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReviewCard from './ReviewCard';
import styles from './ReviewCarousel.module.css';

const ReviewCarousel = ({ reviews }) => {
    console.log(reviews);
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        {reviews && reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <ReviewCard {...review} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
