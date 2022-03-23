import Styles from "./BlogDescription.module.css"
const BlogDescription = (props)=>{
return(
    <div className={Styles["description"]}>
    {props.children}
  </div>
)
}
export default BlogDescription;