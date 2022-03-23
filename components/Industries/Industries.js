import Styles from "./Industries.module.css"

import SectionCard from "./SectionCard"
import IndustryContent from "./IndustryContent"
const Industries  = ()=>{
    return (
        <div className={Styles.caseStudy}>
   <h1>Industries</h1>
   <div className="row">
      {
        IndustryContent.map((cs,index)=>{
          return <SectionCard key={index} title={cs.title} description={cs.description} imgUrl={cs.imageUrl} route={cs.route} index={index===IndustryContent.length-1 || index===IndustryContent.length-2 ? true :false}/>
        })
      }
    </div>
    </div>
    )
}
export default Industries;