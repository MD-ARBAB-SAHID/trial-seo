import Styles from "./BlogImage.module.css"
// import Image from "next/image"
const BlogImage = (props)=>{
    return (
        <div className={Styles["img-section"]}>
        <img src={props.src} alt="Blog Image"/>
      </div>
    )
}
export default BlogImage