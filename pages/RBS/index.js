import Head from "next/head"
import PdfViewer from "../../components/Case Studies/PdfViewer";
import OuterCard from "../../components/UI/OuterCard"
const CaseDetails = ()=>{
    return (         <> 
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
        <OuterCard>
           
        
          <PdfViewer pdf={"./pdf/RBS.pdf"} pages={2} />
        
      </OuterCard>

    </>)
}

export default CaseDetails;