import CardComponent from './CardComponent';
import styles from "./cards.module.css"

const CardSection = () => {
  const icons = ["/SVG/angle-right-solid.svg"]
  return (
    <div className={`${styles.cardContainer} container`}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <CardComponent 
            title="BECOME A" 
            role="UI DEVELOPER" 
            icon={icons[0]} 
            backgroundClass={styles['blue-background']}
            />
        </div>
        <div className="col-md-4">
          <CardComponent 
            title="BECOME A" 
            role="ANGULAR DEVELOPER" 
            icon={icons[0]}
            backgroundClass={styles['orange-background']}
            />
        </div>
        <div className="col-md-4">
          <CardComponent 
            title="BECOME A" 
            role="REACTJS DEVELOPER" 
            icon={icons[0]}
            backgroundClass={styles['blue-background']}
            />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
