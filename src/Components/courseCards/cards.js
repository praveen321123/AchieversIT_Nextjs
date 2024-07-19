import CourseCard from './courseCard';
import styles from './courseCard.module.css'

export default function Cards() {
  const courses = [
    {
      title: 'Angular Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 257,
      rating: 5.0,
      isBestSeller: true,
      svgImage: '/SVG/angular.svg',
      bestSellerSVG: '/SVG/best-seller-min.svg',
      cardTitle: 'Angular'
    },
    {
      title: 'React Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 292,
      rating: 5.0,
      isBestSeller: true,
      svgImage: '/SVG/react.svg', 
      bestSellerSVG: '/SVG/best-seller-min.svg',
      cardTitle: 'ReactJS'
    },
    {
      title: 'Mean Stack Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 196,
      rating: 4.5,
      isBestSeller: false,
      svgImage: '/SVG/mean-stack.svg',
      bestSellerSVG: '/SVG/best-seller-min.svg', 
      cardTitle: 'Mean'
    },
    {
      title: 'Mern Stack Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 192,
      rating: 4.5,
      isBestSeller: false,
      svgImage: '/SVG/mern-stack.svg',
      bestSellerSVG: '/SVG/best-seller-min.svg',
      cardTitle: 'Mern' 
    },
    {
      title: 'Web Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 312,
      rating: 5.0,
      isBestSeller: true,
      svgImage: '/SVG/web-development.svg',
      bestSellerSVG: '/SVG/best-seller-min.svg',
      cardTitle: 'Web'
    },
    {
      title: 'Digital Marketing Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 178,
      rating: 4.8,
      isBestSeller: true,
      svgImage: '/SVG/digital-marketing.svg',
      bestSellerSVG: '/SVG/best-seller-min.svg', 
      cardTitle: 'Digital'
    },
    {
      title: 'React Native Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 175,
      rating: 4.6,
      isBestSeller: true,
      svgImage: '/SVG/react.svg',
      bestSellerSVG: '/SVG/best-seller-min.svg', 
      cardTitle: 'React-native'
    },
    {
      title: 'Ionic Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 179,
      rating: 4.6,
      isBestSeller: false,
      svgImage: '/SVG/ionic-developer.svg',
      bestSellerSVG: '/SVG/best-seller-min.svg',
      cardTitle: 'Ionic' 
    },
  ];
  const additions =[
    {
      title: 'UI Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 192,
      rating: 4.6,
      svgImage: '/SVG/ui-development.svg',
      cardTitle: 'UI' 
    },
    {
      title: 'Vuejs Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 146,
      rating: 4.3,
      svgImage: '/SVG/vuejs.svg',
      cardTitle: 'Vuejs'
    },
    {
      title: 'Wordpress Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 184,
      rating: 4.6,
      svgImage: '/SVG/wordpress.svg',
      cardTitle: 'Wordpress'
    },
    {
      title: 'Python Development Course',
      description: 'Achievers IT React JS Certification Course in Bangalore...',
      reviews: 237,
      rating: 4.8,
      svgImage: '/SVG/python.svg',
      cardTitle: 'Python'
    },  
  ]

  return (
    <div className={`${styles['course-container']} container mt-4`}>
      <div className='row'>
        <h2 className="text-uppercase fw-bold">Trending Courses</h2>
      </div>
      <div className="row p-0">
        {courses.map((course, index) => (
          <div key={index} className={`${styles.courseCard} col-md-3`}>
            <CourseCard {...course} />
          </div>
        ))}
      </div>
      <div className='row mt-5'>
        <h2 className="text-uppercase fw-bold">Recent additions</h2>
      </div>
      <div className="row">
        {additions.map((course, index) => (
          <div key={index} className={`${styles.courseCard} col-md-3`}>
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  );
}
