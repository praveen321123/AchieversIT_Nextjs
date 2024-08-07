import React from 'react';
import styles from "./FeedbackCarousel.module.css"
const testimonials = [
  {
    image: '/images/Student-1.jpg', 
    feedback: '"AchieversIT Training Services has proven to best at their knowledge to get me good Job. My experience to date with the professionals at AchieversIT has been excellent! The topics covered were relevant and the role-playing was particularly valuable allowing them to focus and anticipate objections as though i was on the job. Trainers\'s style allowed for a dynamic and interactive learning experience for all who participated."',
    name: 'Krishna',
  },
  {
    image: '/images/Student-2.jpg',
    feedback: '"AchieversIT Training Services has proven to best at their knowledge to get me good Job. My experience to date with the professionals at AchieversIT has been excellent! The topics covered were relevant and the role-playing was particularly valuable allowing them to focus and anticipate objections as though i was on the job. Trainers\'s style allowed for a dynamic and interactive learning experience for all who participated."',
    name: 'Lohith',
  },
  {
    image: '/images/Student-3.png',
    feedback: '"AchieversIT is a place where an individual will be able to learn in detail and will get a top notch learning experience. Mr.MURALI is extremely knowledgeable, skillful & friendly and his well & industry-relevant researched content that gave me utmost learning satisfaction. His prompt answers to questions & doubts really helped. His teaching pattern is very interactive & is always very supportive.Thanks to Mr Murali for helping and guiding me during the placement & providing a reference, & I am pleased to say that I\'ve got placed in Infosys.Overall it has been a very positive experience and I would definitely recommend for anyone to take up courses with AchieversIT."',
    name: 'TL',
  },
];

const FeedbackCarousel = () => {
  return (
    <div className={`${styles.mainContainer} container my-5`}>
      <h2 className="text-center fw-bold my-5">STUDENTS FEEDBACK</h2>
      <div className="carousel slide" id="testimonialCarousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                />
                <p className="mt-3 px-5 text-center">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <ul className="carousel-indicators mt-5" type="none">
          {testimonials.map((_, index) => (
            <li
              key={index}
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={`${index === 0 ? 'active' : ''} ${styles.lists}`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
