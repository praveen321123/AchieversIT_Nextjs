import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css"
import ait_img from "@/assests/logo-white.png"
import NavLink from "./nav-link";

export default function MainHeader({slug}){
    return(
      <header>
        <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
          <div className="container-fluid">
            <Link href='/'> 
              <Image src={ait_img} className={styles.logo} alt="AchieversIT Software Training Institute in Bangalore" priority/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink href={`/${slug}`}>All Courses</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href={"/corporate-training"}>Corporate Training</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href={"/placements"}>Placements</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href={"/internship"}>Internship</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href={"/reviews"}>Reviews</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href={"/blogs"}>Blog</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}