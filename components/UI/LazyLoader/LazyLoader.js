import Styles from "./LazyLoader.module.css"
import Image from "next/image";
const LazyLoader = ()=>{
   

    return(
        <div className={Styles["loader_parent"]} >
        <div className={Styles["loader"]} ><img src="https://tekmentors.com/wp-content/themes/tech-new/images/logo-n.png" alt="Loading "/></div>
        </div>
    )
}
export default LazyLoader;