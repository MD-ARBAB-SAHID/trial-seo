
import Styles from "./WhyUs.module.css"
import Image from "next/image"
const WhyUs = ()=>{

    return (
        <div className={`row ${Styles["why-us"]}`}>
           { <><div className={`col-lg-4 col-md-5 col-sm-12 ${Styles["img-section"]}`}>
                <img src="https://tekmentors.s3.ap-south-1.amazonaws.com/About+Us/why.jpg" alt="Why Us"/>
            </div>
            <div className={`col-lg-8 col-md-7 col-sm-12 ${Styles["content"]}`}>
                <h3>Why Us ?</h3>
                <p>We are Technocrats like you, who have been part of the IT industry for the last few decades...</p>
                <p>Have seen the industry revolving.. have sailed through the Business Transformation...  </p>
                <p>We precisely know what industry is looking for Today and Tomorrow...</p>
                <p>We understand where the skill gap is and WHAT it takes to reach there...</p>
                <p>We wish to hand hold you to take the charge of your FUTURE..</p>
            </div></>}
        </div>

    )
}

export default WhyUs;