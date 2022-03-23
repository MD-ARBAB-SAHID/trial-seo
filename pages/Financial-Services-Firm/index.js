import Head from "next/head"
import PdfViewer from "../../components/Case Studies/PdfViewer";
import OuterCard from "../../components/UI/OuterCard"
const CaseDetails = ()=>{
    return (         <> 
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
        <OuterCard>
           
        
          <PdfViewer pdf={"./pdf/Financial.pdf"} pages={2} />
        
      </OuterCard>

    </>)
}

export default CaseDetails;