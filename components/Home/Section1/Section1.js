
import Cards from "../Cards/Cards"
import Styles from "./Section1.module.css"
const services = [
    {
        title:"Data Acceleration Framework",
        imageUrl:"https://tekmentors.s3.ap-south-1.amazonaws.com/services/data.jpg",
        description:"The Digital Acceleration framework supports the digital path that an organization undertakes.This framework consists of User Experience, Automation, Cloud Computing,Security etc. as the key pillars using which an organization builds its Digital journey.  ",
        col:"col-lg-4 col-md-6 col-sm-12 ",
       
    },
    {
        title:" Architecture and Design",
        imageUrl:"https://tekmentors.s3.ap-south-1.amazonaws.com/services/pexels-miguel-%C3%83%C2%A1-padri%C3%83%C2%B1%C3%83%C2%A1n-3785935.jpg",
        description:"We work with organizations to define their Technology Architecture blueprints and system roadmaps that that defines the digital path for the future resulting in improvement of their business operations, increase in efficiencies and delivery of higher customer values.",
        col:"col-lg-4 col-md-6 col-sm-12 "
    },
    {
        title:"Technology and Data Engineering",
        imageUrl:"https://tekmentors.s3.ap-south-1.amazonaws.com/services/pexels-pixabay-373543.jpg",
        description:"Using our Technology and Data Engineering capabilities, we support our clients in their technology stack modernization, delivery pipeline automation, Cloud migration for faster time to market and cost optimization.",
        col:"col-lg-4 col-md-6 col-sm-12 "
    }, {
        title:"Analytics and Data Science",
        imageUrl:"https://tekmentors.s3.ap-south-1.amazonaws.com/services/Analytics.jpg",
        description:"We help our customers delivered personalized customer experiences using Analytics, Machine learning and Artificial Intelligence. We support in building an understanding of customer behavior by integrate the customer data spread across silos.",
        col:"col-lg-4 col-md-6 col-sm-12 "
    },
    
   {
    title:"Upskilling",
    imageUrl:"https://tekmentors.s3.ap-south-1.amazonaws.com/services/upskilling.jpg",
    description:"We enable teams and organizations succeed in the digitally disruptive world. As mentors, we guide them throughout the journey.",
    col:"col-lg-4 col-md-6 col-sm-12 card-height"
   },
    {
        title:"Product, Lean, Agile",
        imageUrl:"https://tekmentors.s3.ap-south-1.amazonaws.com/services/Product+Lean+Agile.png",
        description:"We help our clients define and implement a Product, Lean and Agile approach to improve their Ways of Working and thus reducing operational cost and increasing the speed of delivery",
        col:"col-lg-4 col-md-6 col-sm-12 ",
        exClass:true
    }
   
]

const Section1  = ()=>{

    return (<div className={Styles["section1"]}>
   <h3 >Services We Provide ?</h3>
    <div className="row">
  {  services.map((service,index)=>{
        return(
            <Cards key={index} imgUrl={service.imageUrl} title={service.title} description={service.description} classCss={service.col} exClass={service.exClass}/>
        )
    })}
    </div>
  

    </div>)
}

export default Section1;