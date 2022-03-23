import Styles from "./BlogSec1.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const BlogSec1 = (props)=>{
    return (
        <div className={Styles.sec1}>
        <div className={Styles.header}>
          <h1>{props.heading}</h1>
          <h3>Posted by {props.author} on {props.date}</h3>
          <div className={Styles["arr"]}>
          <Link href="#blog-details">
          <a >
          &dArr;
          </a>
          </Link>
          </div>
        </div>
      </div>
    )
}

export default BlogSec1;