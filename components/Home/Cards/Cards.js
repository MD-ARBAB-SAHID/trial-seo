import Styles from "./cards.module.css"
import Image from "next/image";
const Cards = (props)=>{
    const {title,imgUrl,description,exClass} = props;
    
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 " style={{marginBottom:"20px"}}> 
  <div className={`card ${Styles["card-height"]}`} >
  <img className={`${Styles["card-img-top"]} ${exClass && Styles["img-border-bottom"]}`} src={imgUrl} alt="img" />
  <div className="card-body">
    <h5 className={`card-title ${Styles["card-heading"]}`}>{title}</h5>
    <p className={`card-text ${Styles.desc}`}>{description}</p>
   
  </div>
</div>
</div>
    )
}

export default Cards;