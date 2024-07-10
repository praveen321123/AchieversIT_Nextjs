import CardComponent from './CardComponent';
import styles from "./cards.module.css"

const CardSection = () => {
  return (
    <div className={`${styles.cardContainer} container`}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <CardComponent title="BECOME A" role="UI DEVELOPER" />
        </div>
        <div className="col-md-4">
          <CardComponent title="BECOME A" role="ANGULAR DEVELOPER" />
        </div>
        <div className="col-md-4">
          <CardComponent title="BECOME A" role="REACTJS DEVELOPER" />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
