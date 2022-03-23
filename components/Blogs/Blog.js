
import Styles from "./Blog.module.css"
import BlogHeader from "./BlogHeader";
import BlogFooter from "./BlogFooter";
const Blog = ()=>{
return (
    <div className={Styles["blog"]}>
  <BlogHeader />
 <BlogFooter />
   
    </div>
)
}
export default Blog;