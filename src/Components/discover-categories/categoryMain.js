import CategoryCard from './categoryCard';
import Styles from './categoryCard.module.css'

export default function CategoryMain() {
  const categories = [
    { icon: '/icons/devops.svg', title: 'DevOps' },
    { icon: '/icons/frontend.svg', title: 'Front-End' },
    { icon: '/icons/mobile.svg', title: 'Mobile App Dev' },
    { icon: '/icons/marketing.svg', title: 'Digital Marketing' },
    { icon: '/icons/programming.svg', title: 'Program & Frame Works' },
    { icon: '/icons/database.svg', title: 'Data Types' },
    { icon: '/icons/testing.svg', title: 'Software Testing' },
    { icon: '/icons/cloud.svg', title: 'Cloud Computing' },
    { icon: '/icons/cybersecurity.svg', title: 'Cyber Security' },
    { icon: '/icons/mobile.svg', title: 'Artificial Intelligence' },
    { icon: '/icons/python.svg', title: 'Python' },
    { icon: '/icons/bigdata.svg', title: 'Big Data' },
  ];

  return (
    <div className={`${Styles.mainContainer} container mt-4`}>
      <h2 className="fw-bold mb-4">Discover Top Categories</h2>
      <div className={`${Styles.innerContainer}`}>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className={`${Styles.cardItems} col-md-2 col-4`}>
            <CategoryCard icon={category.icon} title={category.title} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
