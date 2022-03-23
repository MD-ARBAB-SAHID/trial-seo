import services from "./Content";
import Cards from "./Cards/Cards"
import Styles from "./CaseStudies.module.css"
const CaseStudies = ()=>{
   return( <div className={Styles.caseStudy}>
   <h1>Case Studies</h1>
   <div className="row">
      {
        services.map((cs,index)=>{
          return <Cards key={index} title={cs.title} description={cs.description} imgUrl={cs.imageUrl} route={cs.route} index={index===services.length-1 ? true :false}/>
        })
      }
    </div>
    </div>)
}
export default CaseStudies;