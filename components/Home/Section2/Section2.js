import Styles from "./Section2.module.css"

const Section2 = ()=>{
return(
	<div className={Styles.section2}>
	<div className={Styles.heading}>
		<h2>Our Clients</h2>
	</div>
    <div className={Styles.slider}>
	<div className={Styles["slide-track"]}>

		<div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c1.jpg"}  alt="" />
		</div>
		<div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c2.jpg"}  alt="" />
		</div>
		<div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c3.jpg"}  alt="" />
		</div>
		<div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c4.jpg"}  alt="" />
		</div>
		<div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c5.jpg"}  alt="" />
		</div>
		<div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c6.jpg"}  alt="" />
		</div>
        <div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c7.jpg"}  alt="" />
		</div>
        <div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/c8.jpg"}  alt="" />
		</div>
        <div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/IBM-e1544110464953-2.png"}  alt="" />
		</div>
	    <div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/LnT.jpg"}  alt="" />
		</div>
        <div className={Styles.slide}>
			<img src={"https://tekmentors.s3.ap-south-1.amazonaws.com/clients/RR.jpeg"}  alt="" />
		</div>
	
	
	</div>
</div>
</div>
)
}
export default Section2;