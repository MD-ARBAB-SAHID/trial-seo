import Styles from "./BlogContent.module.css"
const BlogContent = (props)=>{
    return (
        <div className={Styles.content}>
       {props.children}
      </div>
    )
}
export default BlogContent