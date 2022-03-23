import Image from "next/image";
import  Styles from "./Cards.module.css"
import Link from "next/link";

const Cards = (props)=>{
   const {imgUrl,title,description,route,index}  =props;


    return (
   
      <div className={`col-lg-4 col-md-6 col-sm-12 ${index && Styles["middle"]}`} style={{marginBottom:"20px"}}> 
      <div className={`card ${Styles["card-height"]}`} >
      <img className={Styles["card-img-top"]} src={imgUrl} alt={props.title} />
      <div className="card-body">
        <h5 className={`card-title ${Styles["card-heading"]}`}>{title}</h5>
        <p className={`card-text ${Styles.desc}`}>{description}</p>
        <Link  href={`/${route}`} target="_blank"><a className={`btn btn-primary ${Styles.button}`}>View Details</a></Link>
      </div>
    </div>
    </div>

    )
}

export default Cards;