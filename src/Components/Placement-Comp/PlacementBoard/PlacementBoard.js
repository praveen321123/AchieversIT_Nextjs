import React from "react";

const images = [
  '/Placement-images/placement-img-1.jpg',
  '/Placement-images/placement-img-2.jpg',
  '/Placement-images/placement-img-3.jpg',
  '/Placement-images/placement-img-4.jpg',
  '/Placement-images/placement-img-5.jpg',
  '/Placement-images/placement-img-6.jpg',
  '/Placement-images/placement-img-7.jpg',
  '/Placement-images/placement-img-8.jpg',
  '/Placement-images/placement-img-9.jpg',
  '/Placement-images/placement-img-10.jpg',
  '/Placement-images/placement-img-11.jpg',
  '/Placement-images/placement-img-12.jpg',
  '/Placement-images/placement-img-13.jpg',
  '/Placement-images/placement-img-14_.jpg',
  '/Placement-images/placement-img-14.jpg',
  '/Placement-images/placement-img-15.jpg',
  '/Placement-images/placement-img-16.jpg',
  '/Placement-images/placement-img-17.jpg',
  '/Placement-images/placement-img-18.jpg',
  '/Placement-images/placement-img-19.jpg',
  '/Placement-images/placement-img-20.jpg',
  '/Placement-images/placement-img-21.jpg',
  '/Placement-images/placement-img-22.jpg',
  '/Placement-images/placement-img-23.jpg',
  '/Placement-images/placement-img-24.jpg',
];

const PlacementBoard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold">New Placement Board</h2>
      <div className="row">
        {images.map((src, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center'>
            <img src={src} alt={`image-${index}`} className="img-fluid shadow mb-2" style={{width: "20rem"}}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementBoard;
