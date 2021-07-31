import Card from "../UI/Card";
import classes from './TourItem.module.css';

const TourItem = (props) => {

  const userList = props.data.map((items) => {
    
    return (
      <Card className={classes.tour}>
        <div >
          <img src={items.image} alt="paris" />
        </div>
        <div className={classes.description} >
          <span className={classes.name}>{items.name}</span>
          <span className={classes.price}>${items.price}</span>
          <div className={classes.info}>{items.info}</div>
        </div>
        <button >Not Intrested</button>
      </Card>
    );
  });
  return <ul>{userList}</ul>;
};

export default TourItem;
