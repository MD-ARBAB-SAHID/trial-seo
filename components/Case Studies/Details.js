import OuterCard from "../UI/OuterCard";
import RBS from "./pdf/RBS.pdf";
import Sapient from "./pdf/Sapient.pdf";
import Bank from "./pdf/Bank.pdf";
import Financial from "./pdf/Financial.pdf";
import PdfViewer from "./PdfViewer";
import { useRouter } from "next/router";
import Head from "next/head";
const Details = (props) => {
  const router = useRouter();
  const caseStudyName = router.query.CaseStudyDetails;
  if(caseStudyName === "RBS")
  {
    return(
      <OuterCard>
           <>
          <Head>
            <title>TEKMentors | UK BASED BANK CASE STUDY</title>
            <meta
              name="description"
              content="Large UK based bank that offers Wealth, Private, Investment and Asset Management services ."
            />
            <meta
              name="keywords"
              content="Technology, Consulting , Investment , Agile Transformation , UK ,RBS,Business,Leadership,Investment,Wealth,Asset"
            />
          </Head>
          <PdfViewer pdf={RBS} pages={2} />
        </>
      </OuterCard>
    )
  }
  else if(caseStudyName === "Sapient")
  {
 return(
      <OuterCard>
           <>
          <Head>
            <title>
              TEKMentors | TECHNOLOGY CONSULTING ORGANISATION CASE STUDY
            </title>
            <meta
              name="description"
              content="Global Technology Consulting firm having a presence in various locations in India ."
            />
            <meta
              name="keywords"
              content="Technology, Consulting , Training , Engineering , upskilling product engineers,Digital,Sapient,India,frontend,React,Angular,framework"
            />
          </Head>
          <PdfViewer pdf={Sapient} pages={2} />
        </>
      </OuterCard>
    )
  }
  else if(caseStudyName === "retail-bank")
  {
    return(
      <OuterCard>
           <>
          <Head>
            <title>
              TEKMentors | RETAIL BANK CASE STUDY
            </title>
            <meta
              name="description"
              content="Large bank within Middle East formed after merger of a Retail and a Digital bank ."
            />
            <meta
              name="keywords"
              content="Middle East, Consulting , Retail Bank , Technology , Banking Architecture , DevOps ,Cloud "
            />
          </Head>
          <PdfViewer pdf={Bank} pages={3} />
        </>
      </OuterCard>
    )
  }
  else if(caseStudyName === "financial-services-firm")
  {
    return(
      <OuterCard>
              <>
          <Head>
            <title>
              TEKMentors | FINANCIAL SERVICES FIRM CASE STUDY
            </title>
            <meta
              name="description"
              content="Large UK based bank that offers Wealth, Private, Investment and Asset Management services ."
            />
            <meta
              name="keywords"
              content="Technology, Consulting , Training , Engineering , Testing , Automation , Manual Testing ,Software,Time to market,Digital,UK,Finance,Investment,Wealth,Asset"
            />
          </Head>
          <PdfViewer pdf={Financial} pages={2} />
        </>
      </OuterCard>
    )
  }
  else{
    return <h3>Hello</h3>
  }
  
 
     
     
      
     
  
};
export default Details;
