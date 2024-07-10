import React from 'react';
import ReviewCarousel from './ReviewCarousel';

const reviews = [
  {
    name: 'MALLIKA M',
    course: 'Angular Certification Training',
    review: 'I had recently attended the Angular js Training in AchieversIT, I must say they...',
    stars: 5,
  },
  {
    name: 'LAKSHMI BHASKAR REDDY',
    course: 'Digital Marketing Certification Training',
    review: 'AchieversIT provides an excellent way to learn from professional trainers. I...',
    stars: 5,
  },
  {
    name: 'KIRAN CSN',
    course: 'Angular, React and Ionic Training',
    review: 'It’s really good institutions where they have good trainers and materials are...',
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <div>
      <h2>Reviews</h2>
      <ReviewCarousel reviews={reviews} />
    </div>
  );
};

export default Reviews;
