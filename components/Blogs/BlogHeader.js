import Styles from "./BlogHeader.module.css"
import Link from "next/link"
import Image from "next/image"
const BlogHeader = ()=>{
return (
    <div className="blog-heading">
    <div className={Styles["img-section"]}>
    <img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/blogs/bg10.jpg"} alt="Stack Of Books Pic"/>
    </div>
    <div className={Styles.content}>
    <h1>TEKMentors Blog</h1>


    <h3>Presented By TEKmentors</h3>
    <Link href="#blog-section">
  
    <a >
    &dArr;
    
    </a>
  
    </Link>
    
    </div>
    </div>
)
}

export default BlogHeader