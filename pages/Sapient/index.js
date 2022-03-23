import Head from "next/head"
import PdfViewer from "../../components/Case Studies/PdfViewer";
import OuterCard from "../../components/UI/OuterCard"
const CaseDetails = ()=>{
    return (         <> 
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
        <OuterCard>
           
        
          <PdfViewer pdf={"./pdf/Sapient.pdf"} pages={2} />
        
      </OuterCard>

    </>)
}

export default CaseDetails;