import Styles from "./BlogSec2.module.css"
const BlogSec2 = (props)=>{
    return (
        <div className={Styles.sec2}>
            {props.children}
        </div>
    )
}
export default BlogSec2