import styles from './TrainingCourses.module.css';

const courses = [
  { title: 'UI Development Training', color: 'red', rating: 5.0, enrolled: 3436 },
  { title: 'Angular Training', color: 'blue', rating: 5.0, enrolled: 3800 },
  { title: 'ReactJS Training', color: 'green', rating: 5.0, enrolled: 5870 },
  { title: 'Mean Stack Training', color: 'cyan', rating: 5.0, enrolled: 3200 },
  { title: 'Mern Stack Training', color: 'purple', rating: 5.0, enrolled: 3200 },
  { title: 'Full Stack Training', color: 'yellow', rating: 5.0, enrolled: 5300 },
  { title: 'Digital Marketing Training', color: 'blue', rating: 5.0, enrolled: 2800 },
  { title: 'Python Training', color: 'red', rating: 5.0, enrolled: 3100 },
];

const TrainingCourses = () => {
  return (
    <div className={`${styles.mainContainer} container text-center my-5`}>
      <h2 className="mb-5  fw-bold">TRAINING COURSES THAT UNLOCK YOUR TEAM'S POTENTIAL</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className={`card ${styles.courseCard}`}>
              <div className={`border-left ${styles.borderLeft}`} style={{ backgroundColor: course.color }}></div>
              <div className="card-body p-0">
                <h6 className="card-title text-primary">{course.title}</h6>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <span className="text-warning mr-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </span>
                  <span className="text-muted">({course.rating})</span>
                </div>
                <p className="card-text">
                  <i className="fas fa-smile mr-2"></i>{course.enrolled} + Enrolled
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCourses;
