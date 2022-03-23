import Styles from "./BlogCard.module.css"
import Button from "../UI/Button";
const BlogCard = (props)=>{
return (
    <div className={Styles["blog-card"]} id="blog-section">
    <div className={Styles["blog-card-heading"]}>
    <h3>
    {props.heading}
    </h3>
    </div>
    <div className={Styles["blog-card-writter"]}>
    <p>Posted by  <span>{props.author}</span> on {props.date}</p>
    </div>
<div className={Styles.button}>
 <Button route={`${props.id}`}/>
 </div>
</div>
)
}

export default BlogCard;