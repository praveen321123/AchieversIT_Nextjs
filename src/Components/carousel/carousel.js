import Image from "next/image";
import classes from "./carousel.module.css"
import angular_banner from "@/assests/angular_training2.jpg"
import React_banner from "@/assests/react_training1.jpg"
import Python_banner from "@/assests/python_training1.jpg"
import AWS_banner from "@/assests/aws_training1.jpg"
import Web_dev_banner from "@/assests/web_development1.jpg"
import Link from "next/link";

export default function Carousel() {

  return (
    <div>
      <div id="carouselExampleCaptions" className={`${classes.carousel} col-md-12 carousel slide`}  data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-indicators mb-5 pb-3">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className={`${classes.banner} carousel-inner`}>
          <div className="carousel-item active">
            <Image src={angular_banner} className="d-block w-100" alt="Angular-Trainings" />
            <div className="carousel-caption d-none d-md-block">
              <h1>ANGULAR DEVELOPMENT COURSE</h1>
              <Link href="#"><button className={`${classes['btn-orangered']} px-3 `}>EXPLORE COURSE</button></Link>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={React_banner} className="d-block w-100" alt="React-Trainings" />
            <div className="carousel-caption d-none d-md-block">
              <h1>REACTJS DEVELOPMENT COURSE</h1>
              <Link href="#"><button className={`${classes['btn-orangered']} px-3`}>EXPLORE COURSE</button></Link>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Python_banner} className="d-block w-100" alt="Python-Trainings" />
            <div className="carousel-caption d-none d-md-block">
              <h1>PYTHON DEVELOPMENT COURSE</h1>
              <Link href="#"><button className={`${classes['btn-orangered']} px-3`}>EXPLORE COURSE</button></Link>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={AWS_banner} className="d-block w-100" alt="AWS-development" />
            <div className="carousel-caption d-none d-md-block">
              <h1>AMAZON WEB SERVICE COURSE</h1>
              <Link href="#"><button className={`${classes['btn-orangered']} px-3`}>EXPLORE COURSE</button></Link>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Web_dev_banner} className="d-block w-100" alt="Web_development" />
            <div className="carousel-caption d-none d-md-block">
              <h1>WEB DEVELOPMENT COURSE</h1>
              <Link href="#"><button className={`${classes['btn-orangered']} px-3`}>EXPLORE COURSE</button></Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
