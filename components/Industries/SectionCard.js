import Styles from "./SectionCard.module.css"
import Image from "next/image";
const SectionCard = (props)=>{
    const {imgUrl,title,description}  =props;
  


    return (
        <div className={`col-lg-4 col-md-6 col-sm-12 `} style={{marginBottom:"20px"}}> 
        <div className={`card ${Styles["card-height"]}`} >
        <img className={Styles["card-img-top"]} src={imgUrl} alt="img" />
        <div className="card-body">
          <h5 className={`card-title ${Styles["card-heading"]}`}>{title}</h5>
          <h5 className={Styles["sub-heading"]}>We Support : </h5>
          {description.map((desc,index)=>{
            return(<p key={index} className={`card-text ${Styles["m-t"]}` } ><li>{desc}</li></p>)
          })}
         
         
        </div>
      </div>
      </div>
    )
}
export default SectionCard;
