import Styles from "./AboutUs.module.css"

import WhoAreWe from "./WhoAreWe";
import How from "./How";

import { useState } from "react";
const AboutUs  =()=>{
    const [content,setContent] = useState(null);
    const [isActive,setIsActive] = useState([true,false]);

    return (
    
    <div className={Styles.section}>
        <div className={`row ${Styles["m-bottom"]}`}>
            <button className={`col-lg-6 col-md-6 col-sm-6 ${isActive[0]===true ? Styles["bg-clr"]:{}}`} onClick={()=>{setContent(null);setIsActive([true,false])}}>Who Are We ?</button>
            <button className={`col-lg-6 col-md-6 col-sm-6 ${isActive[1]===true ? Styles["bg-clr"]:{}}`} onClick={()=>{setContent("How");setIsActive([false,true])}}>How ?</button>
          
        </div>
        <div className="content">
            {content ===null && <WhoAreWe />}
            {content ==="How" && <How />}
        </div>

    </div>)
}
export default AboutUs ; 