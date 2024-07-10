import MainHeader from "@/Components/header/main-header";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "AchieversIT-Best Tech Training Institutions in India",
  description: "AchieversIT is Best Training Institution in Bangalore with 100% success rate. Our Courses: UI Development, Angular, ReactJS, Python, AWS, DevOps, MEAN/MERN Stack Development, Digital Marketing, Apps Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
      </head>
      <body>
        <div className="header-background">
          <MainHeader/> 
        </div>
        
        {children}
      </body>
    </html>
  );
}
